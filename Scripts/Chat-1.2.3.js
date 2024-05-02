let mindboostintroduction = ["Welcome to MindBoost, your supportive companion on the journey to mental well-being.","MindBoost is a safe space where you can express yourself freely without judgment.","Our goal at MindBoost is to empower you to overcome obstacles and thrive in your daily life.","Through compassionate conversations, MindBoost aims to alleviate feelings of loneliness and isolation.","At MindBoost, we understand that mental health is just as important as physical health.","You're not alone on this journey. MindBoost is here to walk alongside you every step of the way.","MindBoost provides evidence-based strategies and resources to help you manage stress and anxiety.","Together, we'll explore mindfulness techniques to cultivate a sense of calm and clarity.","MindBoost encourages self-reflection and introspection to promote personal growth and resilience.","Your well-being is our top priority at MindBoost. We're committed to supporting you unconditionally.","No matter what you're going through, MindBoost believes in your strength and resilience.","Through collaboration and empathy, MindBoost fosters a sense of community and belonging.","At MindBoost, we celebrate progress, no matter how small. Every step forward is a victory.","MindBoost respects your privacy and confidentiality. Your information is always safe with us.","Feel free to reach out to MindBoost anytime you need a listening ear or a shoulder to lean on.","Your mental health journey is unique, and MindBoost is here to honor and validate your experiences.","MindBoost values diversity and inclusivity, embracing individuals from all walks of life.","With MindBoost, you have the opportunity to explore new perspectives and insights.","Let MindBoost be your companion in self-discovery and personal transformation.","Together, we'll unlock the full potential of your mind and embrace a brighter, more fulfilling future."];

//////////////////////////////////////////////////////////////////////suggestions
let suggestions = ['what are some ways to stay motivated and positive','how can i boost my motivation when i feel demotivated','what can i do to increase my motivation levels','what are some ways to demonstrate respect for my parents','what can i do to strengthen my bond with my parents','what are some ways to be more respectful towards my parents','how can i demonstrate my respect for my parents','what are some ways to manage stress','what can i do to alleviate stress','how can i manage stress during difficult times','what are some effective stress management techniques','how can i reduce stress and anxiety','what can i do to manage stress and maintain my well-being','how can i reduce stress during busy times','what can i do to manage stress in a demanding job','what are some effective strategies for managing stress in school','how can i handle stress in college','how can i reduce stress while studying','how can i cope with stress in a team environment','how can i alleviate stress during the holiday season','i am sad give me some tips to overcome it','i am upset give me some tips to overcome it','i have anxiety give me some tips to overcome it','i am in confusion','i am feeling fearful','i am ashamed','i am in resentment','a betrayal occured to me','i lost hope','i miss my mother','people are not picking up my phone','people are rejecting me','i want to accept the fact that i am lonely and want to make new friends','i want to speak about my salary to my boss','i am lonely and want to go home','i need a job that makes me happy','i need some sleep','i am feeling lonely','i am sad','i dont like to go to college','i am sad','i need to talk to someone','i did not understand what my teacher was teaching me today in the class','i wanted to spend some time alone','i need some rest','i need to take some time off','i need some help with handling stress','i need some help with my stress problems','i dont like my job','i am not good enough','i dont know how to reduce my stress levels','i am not interested in my job','i am not feeling well'];
const dictionary = {
  "teh": "the", "wrold": "world", "helo": "hello", "recieve": "receive", "appriciate": "appreciate", "tommorow": "tomorrow", "definately": "definitely", "accomodate": "accommodate", "existance": "existence", "occured": "occurred", "independant": "independent", "agress": "aggress", "ocassion": "occasion", "truely": "truly", "seperated": "separated", "millenium": "millennium", "inocence": "innocence", "occurance": "occurrence", "neccessary": "necessary", "amoung": "among", "exagerate": "exaggerate", "definate": "definite", "religous": "religious", "enviorment": "environment", "occuring": "occurring", "maintanance": "maintenance", "pronounciation": "pronunciation", "occassional": "occasional", "sence": "sense", "seperately": "separately", "humerous": "humorous", "appologies": "apologies", "recieve": "receive", "millennia": "millennium", "innocense": "innocence", "occurrance": "occurrence", "necessery": "necessary", "amongst": "among", "amongt": "among", "werid": "weird", "misspell": "misspelled", "thier": "their", "wierd": "weird", "definatly": "definitely", "existance": "existence", "realy": "really", "opurtunity": "opportunity", "occured": "occurred", "acheive": "achieve", "occuring": "occurring", "mispell": "misspell", "truely": "truly", "exellent": "excellent", "absense": "absence", "definitly": "definitely", "ocassionaly": "occasionally", "ocurrance": "occurrence", "experiance": "experience", "trueth": "truth", "absolutly": "absolutely", "ocurr": "occur", "definately": "definitely", "experince": "experience", "truely": "truly", "wether": "weather", "throught": "throughout", "definatley": "definitely",
  "experimen": "experience", "experinent": "experiment", "writting": "writing", "adress": "address", "reciept": "receipt", "recieve": "receive", "refridgerator": "refrigerator", "enviroment": "environment", "appologize": "apologize", "ocurr": "occur", "persistant": "persistent", "neccessitate": "necessitate", "ocurrance": "occurrence", "experient": "experiment", "trueth": "truth", "exageration": "exaggeration", "ocasionaly": "occasionally", "experince": "experience", "occassionally": "occasionally", "absolutley": "absolutely", "ocurr": "occur", "definatley": "definitely", "ocassionally": "occasionally", "experiance": "experience", "truely": "truly", "absolutly": "absolutely", "occassion": "occasion", "accomodation": "accommodation", "recieve": "receive", "experiance": "experience", "experienment": "experiment", "adress": "address", "definetly": "definitely", "definitley": "definitely", "recieve": "receive", "occurance": "occurrence", "appologies": "apologies", "adress": "address", "defintely": "definitely", "realy": "really", "definetely": "definitely", "experince": "experience", "occured": "occurred", "ocasional": "occasional", "ocassion": "occasion", "exagerate": "exaggerate", "millenia": "millennium", "necesary": "necessary", "ocurr": "occur", "appologize": "apologize", "definitley": "definitely", "experement": "experiment", "experimant": "experiment", "ocasion": "occasion", "ocasionaly": "occasionally", "definately": "definitely", "independant": "independent", "occured": "occurred", "truely": "truly", "experiance": "experience", "refridgerate": "refrigerate", "reciept": "receipt", "defintely": "definitely", "definitly": "definitely", "ocassionally": "occasionally", "ocurrance": "occurrence", "appologies": "apologies", "adress": "address", "recieve": "receive", "appologize": "apologize", "accomodation": "accommodation", "experienment": "experiment", "ocassion": "occasion", "exagerate": "exaggerate", "independant": "independent", "occured": "occurred", "occuring": "occurring", "humerus": "humorous", "enviorment": "environment", "exellent": "excellent", "ocasion": "occasion", "ocassional": "occasional", "definately": "definitely", "definatley": "definitely", "necesary": "necessary", "ocurr": "occur", "ocassionaly": "occasionally", "defiantely": "definitely", "independant": "independent", "realy": "really", "definetly": "definitely",
  "persistant": "persistent", "neccessitate": "necessitate", "experiance": "experience", "millenia": "millennium", "experament": "experiment", "accomodate": "accommodate", "independant": "independent", "experment": "experiment", "definetely": "definitely", "trueth": "truth", "exageration": "exaggeration", "opurtunity": "opportunity", "acheive": "achieve", "thier": "their", "opurtunity": "opportunity", "definate": "definite", "definatley": "definitely", "wierd": "weird", "truely": "truly", "experinent": "experiment", "experimen": "experience", "writting": "writing", "opurtunity": "opportunity", "recieve": "receive", "opurtunity": "opportunity", "fluffly": "fluffy", "bannana": "banana", "elephent": "elephant", "giraf": "giraffe", "penguine": "penguin", "octopuss": "octopus", "butterflie": "butterfly", "unicron": "unicorn", "dragin": "dragon", "hipopotamus": "hippopotamus", "rinosorus": "rhinoceros", "hampster": "hamster", "kangaroo": "kangaroo", "llama": "llama", "narwhale": "narwhal", "panda": "panda", "quokka": "quokka", "snak": "snake", "turtel": "turtle", "zebra": "zebra", "dolphim": "dolphin", "flamingo": "flamingo", "iguana": "iguana", "jiraff": "giraffe", "kow": "cow", "lemming": "lemming", "moose": "moose", "neanderthol": "Neanderthal", "orangoutang": "orangutan", "parot": "parrot", "rinosorus": "rhinoceros", "skwik": "squirrel", "t-rex": "Tyrannosaurus rex", "wombat": "wombat", "xantus": "xanthus", "yeti": "yeti", "zebruh": "zebra", "dinosor": "dinosaur", "flamngo": "flamingo", "liger": "liger", "ocelotl": "ocelot", "pangwin": "penguin", "rabit": "rabbit", "shepe": "sheep", "tortel": "turtle", "yetti": "yeti", "zbre": "zebra"
};

//////////////////////////////////////////////////////////////////////Random sayings
const randomSayings = ["Thinking... 🤔", "Generating a response... ⚙️", "Hold on... ⏳", "I'm on it... 💪", "Processing... 💼", "Analyzing... 🔍"];

//////////////////////////////////////////////////////////////////////Voice Input
// Voice input using annyang.js and Web Speech API
if (annyang) {
  annyang.setLanguage('en-US'); // Set the language for recognition, adjust as needed.

  // Voice recognition events
  annyang.addCallback('result', function (userTextArray) {
    const userVoiceInput = userTextArray[0]; // Get the first recognized text from the array.
    handleUserVoiceInput(userVoiceInput); // Call a function to handle the user's voice input.
  });

  annyang.addCallback('error', function (error) {
    console.error('Speech recognition error: ', error);
  });

  // Start listening for voice input
  function startVoiceRecognition() {
    annyang.start({ continuous: true }); // Set continuous to true for continuous recognition.
    clickaudio.play();
  }

  // Stop listening for voice input
  function stopVoiceRecognition() {
    annyang.abort();
  }
}

function handleUserVoiceInput(userVoiceInput) {
  // Process the user's voice input and display it in the chatbox.
  const chatbox = document.getElementById('chatbox');
  const userHtml = '<p class="userText"><span>' + userVoiceInput + '</span></p>';
  chatbox.innerHTML += userHtml;
  document.getElementById('chat-bar-bottom').scrollIntoView(true);

  // You may want to send the user's voice input for processing and get a response from the bot.
  // You can use AJAX or any other method to communicate with your backend and update the chatbox accordingly.
  getHardResponse(userVoiceInput);
}

////////////////////////////////////////////////////////////////////////////////////Suggestions
function getRandomSuggestions(count) {
  const shuffled = suggestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function displaySuggestions() {
  const suggestionsTab = document.getElementById("suggestionsTab");
  suggestionsTab.innerHTML = "";

  const randomSuggestions = getRandomSuggestions(3);
  randomSuggestions.forEach((suggestion) => {
    const suggestionDiv = document.createElement("div");
    suggestionDiv.className = "suggestion-tab";
    suggestionDiv.textContent = suggestion;
    suggestionDiv.setAttribute("onclick", `autoAskBot('${suggestion}')`);
    suggestionsTab.appendChild(suggestionDiv);
    // Smooth transition: fade in the new suggestions
    setTimeout(() => {
      suggestionDiv.style.opacity = 1;
    }, 0);
  });

  // Automatic refresh after all suggestions are clicked
  const suggestionsDivs = suggestionsTab.querySelectorAll(".suggestion-tab");
  const allSuggestionsClicked = () => {
    for (const div of suggestionsDivs) {
      if (div.style.opacity !== "1") {
        return false;
      }
    }
    return true;
  };

  const refreshSuggestions = () => {
    if (allSuggestionsClicked()) {
      setTimeout(() => {
        displaySuggestions();
      }, 2000); // Change the value to set the interval between transitions (2 seconds here).
    }
  };

  suggestionsDivs.forEach((div) => {
    div.addEventListener("click", refreshSuggestions);
  });
}

function autoAskBot(message) {
  document.getElementById("textInput").value = message;
  sendButton(); // Assuming you have a function named `sendButton` to handle the click event
}

// Initial display of suggestions
displaySuggestions();

////////////////////////////////////////////////////////////////////////////////////Main Function
// Add a typing indicator
function showTypingIndicator() {
  $("#chatbox").append('<p class="userText typing-indicator"><span>Typing...</span></p>');
  scrollToLatestMessage();
}

const Autocorrect = {
  autocorrectText: function (text) {
    const words = text.split(/\s+/);
    const correctedWords = words.map(word => {
      const correctedWord = dictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    return correctedWords.join(' ');
  }
};

const messageAudio = new Audio('../Assets/Audio/message.mp3');
const clickAudio = new Audio('../Assets/Audio/click.wav');
let prevUserInput = "";

// Function to initiate the conversation with a random bot message
function firstBotMessage() {
  const firstMessage = mindboostintroduction[Math.floor(Math.random() * mindboostintroduction.length)];
  responsiveVoice.speak(firstMessage);
  document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';
}

firstBotMessage();

// Utility function to simulate typing delay
async function delay(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

// Function to display the bot's response
async function displayBotResponse(response) {
  const botHtml = '<p class="botText"><span>' + response + '</span></p>';
  $("#chatbox").append(botHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
  messageAudio.play();
}

// Function to handle hard responses from the bot
const MIN_DELAY_MS = 200;
const MAX_DELAY_MS = 1000;
const RESPONSE_DELAY_FACTOR = 20;

function getRandomSaying() {
  const randomIndex = Math.floor(Math.random() * randomSayings.length);
  return randomSayings[randomIndex];
}

async function displayTypingIndicator() {
  const randomSaying = getRandomSaying();
  const typingIndicatorHtml = `<p class="botText typing-indicator"><span>${randomSaying}</span></p>`;
  $("#chatbox").append(typingIndicatorHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

async function removeTypingIndicator() {
  $(".typing-indicator").remove();
}

async function simulateTypingDelay(responseLength) {
  const delayDuration = Math.min(MAX_DELAY_MS, MIN_DELAY_MS + responseLength * RESPONSE_DELAY_FACTOR);
  await delay(delayDuration);
}

async function getHardResponse(userText) {
  try {
    // Display a typing indicator
    await displayTypingIndicator();

    // Start a timer to remove the typing indicator after 10 seconds
    const typingIndicatorTimeout = setTimeout(() => {
      removeTypingIndicator();
    }, 10000); // 10 seconds in milliseconds

    // Get the bot's response
    const botResponse = await getBotResponse(userText);

    // Calculate the delay based on response length (characters)
    const responseLength = botResponse.length;

    // Simulate the delay
    await simulateTypingDelay(responseLength);

    // Remove the typing indicator timer (if the response arrives before the 10-second mark)
    clearTimeout(typingIndicatorTimeout);

    // Remove the typing indicator and display the bot's response
    removeTypingIndicator();
    await displayBotResponse(botResponse);
  } catch (error) {
    console.error("Error:", error);
    messageAudio.play();
  }
}

// Function to handle user input and initiate the conversation
function getResponse() {
  let userText = $("#textInput").val();
  userText = Autocorrect.autocorrectText(userText); // Apply autocorrect
  userText = userText.toLowerCase();

  if (userText === "") {
    userText = "Thinking 💭";
  }

  prevUserInput = userText;
  suggestions.push(prevUserInput);

  const userHtml = '<p class="userText"><span>' + userText + '</span></p>';

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  // Delay before getting a hard response
  setTimeout(() => {
    getHardResponse(userText);
  }, 2000);
}

// Function to send a user message when a button is clicked
function buttonSendText(sampleText) {
  const userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  getHardResponse(sampleText);
  clickAudio.play();
}

// Function to regenerate and resend the previous user input
function regenerateAndResend() {
  if (prevUserInput !== "") {
    buttonSendText(prevUserInput);
    suggestions.push(prevUserInput);
    clickAudio.play();
  }
}

// Function to handle user input when the send button is clicked
function sendButton() {
  getResponse();
  clickAudio.play();
}

// Handle user input when the Enter key is pressed
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
    clickAudio.play();
  }
});

// Function to regenerate a response when the regenerate button is clicked
function regenerateButton() {
  regenerateAndResend();
  clickAudio.play();
}