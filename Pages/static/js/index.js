const videoElement = document.getElementById('cam_input');
const canvasElement = document.getElementById('canvas_output');
const canvasRoi = document.getElementById('canvas_roi');
const canvasCtx = canvasElement.getContext('2d');
const roiCtx = canvasRoi.getContext('2d');

const emotions = ["Angry", "Happy", "Sad", "Surprise"];
let prevEmotionIndex = -1; // Variable to store the previous detected emotion index
let prevEmotionMessages = {
    "Angry": null,
    "Happy": null,
    "Sad": null,
    "Surprise": null
};
var tfliteModel;

async function start() {
    await tf.loadLayersModel(
        "./static/model/uint8/model.json"
    ).then((loadedModel) => {
        tfliteModel = loadedModel;
    });
}

start();

function openCvReady() {
    cv['onRuntimeInitialized'] = () => {
        function onResults(results) {
            try {
                // Draw the video feed onto the canvas.
                canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

                if (results.detections.length > 0) {
                    let width = results.detections[0].boundingBox.width * canvasElement.width;
                    let height = results.detections[0].boundingBox.height * canvasElement.height;
                    let sx = results.detections[0].boundingBox.xCenter * canvasElement.width - (width / 2);
                    let sy = results.detections[0].boundingBox.yCenter * canvasElement.height - (height / 2);

                    let imgData = canvasCtx.getImageData(0, 0, canvasElement.width, canvasElement.height);
                    let gray_roi = cv.matFromImageData(imgData);
                    let rect = new cv.Rect(sx, sy, width, height);
                    gray_roi = gray_roi.roi(rect);

                    cv.cvtColor(gray_roi, gray_roi, cv.COLOR_RGBA2GRAY, 0);
                    cv.imshow('canvas_roi', gray_roi);
                    //issue are image is not grayscale, predict input is wrong
                    const outputTensor = tf.tidy(() => {
                        // Transform the image data into Array pixels.
                        let img = tf.browser.fromPixels(canvasRoi);

                        // Resize, normalize, expand dimensions of image pixels by 0 axis.:
                        img = tf.image.resizeBilinear(img, [48, 48]);
                        img = tf.div(tf.expandDims(img, 0), 255);

                        // Predict the emotions.
                        let outputTensor = tfliteModel.predict(img).arraySync();
                        return outputTensor;
                    });
                    // Convert to array and take prediction index with highest value
                    let index = outputTensor[0].indexOf(Math.max(...outputTensor[0]));

                    // Only update the message if the detected emotion has changed
                    if (index !== prevEmotionIndex) {
                        prevEmotionIndex = index;

                        const emotionMessages = {
                            "Angry": [ "Stay calm and take deep breaths.", "Let's try to find a solution together.", "Count to ten before reacting.", "Express your feelings assertively, not aggressively.", "Take a break and walk away from the situation if needed.","Channel your anger into something productive.", "Practice forgiveness for your own peace of mind.", "Focus on what you can control, not what you can't.", "Seek to understand the root cause of your anger.", "Remind yourself that anger is a temporary emotion.", "Engage in physical activity to release pent-up energy.", "Listen to calming music or sounds.", "Write a letter expressing your anger, then tear it up or delete it.", "Visualize a peaceful outcome to the situation.","Avoid blaming others; take responsibility for your own emotions.","Practice empathy towards those you're angry with.","Distract yourself with a hobby or activity you enjoy.","Seek support from a trusted friend or therapist.","Challenge negative thoughts that fuel your anger.","Remember that mistakes and conflicts are opportunities for growth.", "Set boundaries to protect yourself from future triggers.", "Practice mindfulness to stay grounded in the present moment.","Take a warm bath or shower to relax your muscles.", "Use humor to diffuse tense situations.", "Reflect on past experiences where you successfully managed anger."],
                            "Happy": [ "Keep smiling and spread positivity!", "Enjoy the moment to the fullest.", "Celebrate even the smallest victories.", "Surround yourself with people who uplift you.", "Practice gratitude for the good things in your life.", "Engage in activities that bring you joy.", "Savor the simple pleasures of life.", "Visualize your happiest memories when you're feeling down.", "Create a gratitude journal to record moments of happiness.", "Share your happiness with others; it's contagious!", "Express appreciation for the people you love.", "Set meaningful goals and celebrate your progress.", "Focus on the present rather than worrying about the future.", "Volunteer or help someone in need to boost your own happiness.", "Laugh often; it's good for your mental and physical health.", "Surround yourself with nature; it has a calming effect.","Practice self-care rituals that make you feel pampered.", "Choose to see the silver lining in challenging situations.", "Take time to reflect on what brings you true fulfillment.", "Invest in experiences rather than material possessions.", "Create a vision board to visualize your dreams and aspirations.", "Connect with loved ones regularly, even if it's just a quick call.", "Set aside time for activities that make you lose track of time.", "Challenge yourself to learn something new and exciting.", "Celebrate your uniqueness; there's only one you in the world!"],
                            "Sad": ["It's okay to feel sad. Reach out for support if you need it.","Remember, tomorrow is a new day.", "Allow yourself to grieve; it's a natural part of healing.","Engage in activities that bring you comfort and joy.", "Write down your feelings to help process them.", "Practice self-compassion; treat yourself with kindness.","Surround yourself with supportive and understanding people.","Find solace in art, music, or literature that resonates with you.","Seek professional help if your sadness feels overwhelming.", "Practice relaxation techniques like deep breathing or meditation.","Express your emotions through creative outlets like painting or writing.","Remind yourself of times when you've overcome sadness before.", "Connect with others who have experienced similar emotions.", "Create a self-care routine that nurtures your mind, body, and soul.","Allow yourself to cry; it's a healthy release of pent-up emotions.","Focus on the aspects of your life that bring you comfort and stability.","Set small, achievable goals to regain a sense of purpose.", "Challenge negative thoughts by replacing them with positive affirmations.", "Take a break from social media if it exacerbates your sadness.", "Find meaning in your experiences; they shape who you are.", "Reflect on the lessons you've learned during difficult times.", "Seek out opportunities for laughter and joy, even in small moments.", "Reach out to a trusted friend or family member for a listening ear.", "Surround yourself with reminders of hope and resilience.", "Practice patience with yourself as you navigate through sadness."],
                            "Surprise": ["Expect the unexpected!","Life is full of surprises.","Embrace the uncertainty; it can lead to new opportunities.","Stay open-minded and adaptable.","Learn to find joy in the spontaneity of life.","Welcome surprises as moments of growth and discovery.","Find beauty in the unexpected twists and turns of life's journey.","Appreciate the element of surprise as it keeps life interesting.","Stay curious and explore new experiences with enthusiasm.","Keep a sense of wonder and awe towards the world around you.","Embrace change as a natural part of life's surprises.","Be grateful for the pleasant surprises that come your way.","Accept that not all surprises will be positive, and that's okay.","Trust in your ability to adapt and thrive in unexpected situations.","Look for the silver lining in surprising or challenging circumstances.","Practice mindfulness to stay present and grounded amidst surprises.","Share your surprises with others; it creates connection and camaraderie.","Keep an open heart and mind to fully appreciate life's surprises.","Celebrate the uniqueness of each surprise; they make life colorful.","Stay flexible and resilient in the face of unexpected events.","Seek out surprises that ignite your sense of wonder and excitement.","Find humor in the absurdity of some surprises; laughter is therapeutic.","View surprises as opportunities for personal growth and self-discovery.","Challenge yourself to embrace uncertainty with grace and courage.","Celebrate the unexpected moments that make life an adventure.","Remember that even in the midst of surprise, you hold the power to choose your response."]
                        };

                        const emotion = emotions[index];
                        let randomMessage = prevEmotionMessages[emotion];
                        if (!randomMessage) {
                            const messages = emotionMessages[emotion];
                            randomMessage = messages[Math.floor(Math.random() * messages.length)];
                            prevEmotionMessages[emotion] = randomMessage;
                        }

                        // Inside onResults function
                        const emotionMessage = document.getElementById('emotion_message');
                        const emotionName = document.getElementById('emotion_name');

                        // Display the detected emotion message
                        emotionName.innerText = `User is ${emotion}`;
                        emotionMessage.innerText = `${randomMessage}`;
                    }
                }
            } catch (err) {
                console.log(err.message);
            }
        }

        const faceDetection = new FaceDetection({
            locateFile: (file) => {
                return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection/${file}`;
            }
        });

        faceDetection.setOptions({
            selfieMode: true,
            model: 'short',
            minDetectionConfidence: 0.1
        });

        faceDetection.onResults(onResults);

        const camera = new Camera(videoElement, {
            onFrame: async () => {
                await faceDetection.send({ image: videoElement });
            },
            width: 854,
            height: 480
        });

        camera.start()
    }
}
