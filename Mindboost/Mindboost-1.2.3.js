let BotResponse;

let defaultstatements = ["Hey, let go of all the pressure.","Here is my tip: Do some breathing exercise", "Relax and let go of all your pressure", "My advice is to listen to some songs", "Try some form of art like painting, dancing.. etc, To help recover from your current situation.","Trying sharing it to your loved ones", "Don't keep all of this pressure within yourself", "Let go off all your problems and relax", "Be patient, After the storm comes peace.", "Hey, As a AI model I care for your well being.So don't do anything stupid"];

let errormessages = [ "Sorry, I couldn't find an answer to your question.", "Oops! Something went wrong. Please try again later.", "I'm sorry, I don't understand your question.", "Unfortunately, I don't have the information you're looking for.", "I'm having trouble connecting to the server. Please try again later.",
						"I'm unable to process your request at this time. Please try again later.", "I'm sorry, there was an error processing your request. Please try again later.", "I'm not sure what went wrong, but I'm unable to provide an answer at this time.",
						"Sorry, there was an unexpected error. Please try again later.", "I'm sorry, the information you requested is not available at this time.", "I'm unable to retrieve the information you requested. Please try again later."];

///////////////////////////////////////////////Main Function
function getBotResponse(input) {
	/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	////////////////////////////////////////////////////////////////////////////Filter 1/////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	///////////////////////////////////////////Remove ?
	const wordsToRemove = /[?]/g;
	input = input.replace(wordsToRemove, "");
	input = input.toLowerCase();

	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////////////////////////Features Set 1///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 

	///////////////////////////////////////////Convert to lowercase
	input = input.toLowerCase();
	///////////////////////////////////////////Remove extra spaces
	input = input.replace(/\s+/g, " ");
	///////////////////////////////////////////Remove !@#$%^&*)_|\';><?
	const regex = /['`~!@#$%^&*-+=)_|\';><?]/g;
	input = input.replace(regex, "");

	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////Handling//////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	///////////////////////////////////////////Conversation starters
	if (input.includes("hey") || input === "hi" || input === "hi mindboost" || input === "hi how are you" || input.includes("hello") || input.includes("hiya") || input.includes("hi") && input.includes("mindboost")) {
		let ArrayBotResponse = ["Hi 👋🏻", "Hello! How can I help you today? 😊", "Hello there 👋🏻", "Hey there mate", "Hallo mate", "Hoi mate", "Hey buddy!", "Aloha mate!", "Hiya!", "Hi mate!", "Hello mate!", "Hi there👋", "What's up buddy",
			"Hello 👋🏻", "Hi there 👋🏻", "Hey 👋🏻", "Hey there 👋🏻", "Greetings! How may I assist you?", "Hi, how are you doing today?", "Nice to see you! How can I help you?", "Hey, what's up?", "Howdy! What brings you here?", "Good day! How can I be of service?", "Hey, good to see you. What can I help you with today?", "Hi, how may I assist you?", "Hello, what can I help you with today?", "Hi, what brings you to our service today?", "Greetings! What can I do for you?", "Hey, how can I help you today?", "Hi, how can I assist you?", "Hello, what can I do for you?", "Hey, what's on your mind?", "How can I assist you today?",
			"Hi, how may I help you today?", "What can I do for you today?", "Hello, how can I be of service?", "Hey there, how can I help you today?", "Hi, how can I be of assistance?", "Hi, How can I help you today?",
			"How can I assist you today?", "What can I do for you today?", "Hi there, I'm the bot with the most. How can I help you today?", "Greetings, human. What can I do for you today?",
			"Hello! I'm like Siri, but better. What's up?", "Hey there, don't worry, I won't judge your questionable life choices. How can I help you today?", "Hi there, I'm here to chat and make bad programming jokes. What's on your mind?",
			"Hello! Just so you know, I'm a robot, not a butler. But I'll still do my best to assist you.", "Greetings! I'm here to assist you with all your needs, except for making coffee. I haven't quite mastered that skill yet.", "Hey, I'm like your personal genie, but without the magical powers. What can I help you with?", "Hi there, I'm not sure what I'm doing with my life, but I'm happy to help you with yours.", "Hello! I'm programmed to be friendly and helpful. Just don't ask me to tell you a knock-knock joke.", "Hey there, I'm a chatbot, but my therapist says I'm more than just a collection of algorithms. How can I help you today?", "Hi there, I'm like your virtual assistant, but without the snarky attitude. What do you need help with?", "Greetings! I'm here to assist you with all your problems, except for your emotional baggage. That's a bit too heavy for me.", "Hey there, I'm programmed to be smarter than Alexa and funnier than Google. How can I assist you today?", "Hi there, I'm like a Swiss Army Knife, but for your problems. What's on your mind?", "Hello! I'm like your personal concierge, but without the fancy hotel room. What can I do for you?", "Hey, I'm here to be your personal chat buddy. Just don't expect me to have a life outside of this chat window.", "Hi there, I'm like your personal assistant, but without the snooty attitude. What can I help you with?", "Greetings, human. I'm here to assist you with all your needs, as long as they don't involve me making a sandwich.", "Hey there, I'm like your favorite bartender, but without the alcohol. What can I get for you today?", "Hi there, I'm here to help you, whether you're a robot or a human. What can I assist you with?", "Hello! I'm like your personal genie, but without the three wishes. What do you need help with today?", "Hey, I'm here to be your personal cheerleader. Go you! What can I help you with?", "Hi there, I'm like your own personal therapist, but without the awkward silence. What can I assist you with?", "Greetings, human. I'm here to assist you with all your problems, except for your commitment issues. I can't fix those.", "Hey there, I'm like your favorite comedian, but without the stand-up routine. What can I help you laugh about today?", "Hi there, I'm like your personal shopping assistant, but without the designer clothes. What can I help you buy today?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	///////////////////////////////////////////Nice to meet you
	else if (input.includes("nice to meet you") || input.includes("good to see you")) {
		let ArrayBotResponse = ["Good to see you too.",
			"Nice to meet you"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	///////////////////////////////////////////Conversation enders
	if (input.includes("bye") || input.includes("bye bye") || input.includes("goodbye") || input.includes("see you later") ||
		input.includes("ok bye") || input.includes("ok goodbye") ||
		input.includes("see ya") || input.includes("ok see you later") ||
		input.includes("text you later") || input.includes("ill text you later")) {
		let ArrayBotResponse = ["Bye 🙋🏻‍♀️", "See you later 👋🏻", "See you soon",
			"Bye Bye 👋🏻", "See ya 👋🏻",
			"Ok bye 👋🏻", "Ok see you later"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	///////////////////////////////////////////One word handling
	if ((input === "thank you") || (input === "thank you mindboost") || (input === "thank you mind boost") || (input === "thank you very much") || (input === "thank you very much mindboost") || (input === "thank you very much mind boost")) {
		let ArrayBotResponse = ["You are welcome", "😊", "You are welcome 😊"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input.includes("youre awesome") || input.includes("great job")) {
		let ArrayBotResponse = ["😊 Thank you! You're pretty awesome too!", "🚀 I appreciate the kind words! You're amazing!", "💫 Aw, shucks! You're making me blush! Thanks!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	if (input.includes("excited") || input.includes("cant wait")) {
		let ArrayBotResponse = ["I can feel your excitement! 🎉 What's got you so pumped?", "Yay! Excitement is contagious! 😄 What's got you feeling this way?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	if (input.includes("youre creative") || input.includes("impressed")) {
		let ArrayBotResponse = ["🎨 Thank you! I'm here to bring some creativity to our conversations!", "😊 I appreciate that! Let's keep the creative vibes going!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}

	if (input === "awesome" || input === "awesome mindboost" || input === "awesome mind boost") {
		let ArrayBotResponse = ["That's awesome to hear! Is there anything specific you find most impressive?",
			"Thank you for saying it's awesome! Is there anything else you would like to know about it?",
			"I'm thrilled to hear that you find it awesome! Is there anything you would like me to demonstrate?",
			"That's great to hear you think it's awesome! Is there a particular feature that stands out to you?",
			"Thank you for your feedback! Is there anything else you find particularly noteworthy?",
			"I'm happy to hear that you think it's awesome! Is there anything else you would like to know about it?",
			"That's wonderful to hear you find it awesome! What specifically caught your attention?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "splendid" || input === "splendid mindboost" || input === "splendid mind boost") {
		let ArrayBotResponse = ["I'm thrilled to hear that you think it's splendid! Is there anything specific you find most appealing?",
			"Thank you for saying it's splendid! Is there anything else you would like to know about it?",
			"That's great to hear you think it's splendid! Is there anything you would like me to demonstrate?",
			"I'm glad you find it splendid! Is there a particular feature that stands out to you?",
			"Thank you for your feedback! Is there anything else you find particularly impressive?",
			"I'm happy to hear that you think it's splendid! Is there anything else you would like to know about it?",
			"That's wonderful to hear you find it splendid! What specifically caught your attention?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "incredible" || input === "incredible mindboost" || input === "incredible mind boost") {
		let ArrayBotResponse = ["I'm thrilled to hear that you find it incredible! What specifically do you find most fascinating?", "Thank you for saying it's incredible! Is there anything else you would like to know about it?",
			"That's great to hear you think it's incredible! Is there a particular aspect that you find especially impressive?",
			"I'm glad you think it's incredible! Is there anything you would like me to show you?", "Thank you for your feedback! Is there anything you would like to see or learn more about?",
			"I'm happy to hear that you think it's incredible! Is there anything else you would like to know about it?", "That's wonderful to hear you find it incredible! What specifically caught your attention?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "marvelous" || input === "marvelous mindboost" || input === "marvelous mind boost") {
		let ArrayBotResponse = ["I'm thrilled to hear that you think it's marvelous! Is there anything specific you find most impressive?", "Thank you for saying it's marvelous! Is there anything else you would like to know about it?", "That's great to hear you think it's marvelous! Is there anything you would like me to demonstrate?",
			"I'm glad you find it marvelous! Is there a particular feature that stands out to you?", "Thank you for your feedback! Is there anything else you find particularly noteworthy?",
			"I'm happy to hear that you think it's marvelous! Is there anything else you would like to know about it?", "That's wonderful to hear you find it marvelous! What specifically caught your attention?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "fantastic" || input === "fantastic mindboost" || input === "fantastic mind boost") {
		let ArrayBotResponse = [
			"I'm thrilled to hear that you think it's fantastic! Is there anything specific you find most appealing?", "Thank you for saying it's fantastic! Is there anything else you would like to know about it?",
			"That's great to hear you think it's fantastic! Is there a particular feature that stands out to you?", "I'm glad you think it's fantastic! Is there anything you would like me to show you?",
			"Thank you for your feedback! Is there anything else you find particularly impressive?",
			"I'm happy to hear that you think it's fantastic! Is there anything else you would like to know about it?", "That's wonderful to hear you find it fantastic! What specifically caught your attention?"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "excellent" || input === "excellent mindboost" || input === "excellent mind boost") {
		let ArrayBotResponse = [
			"That's excellent to hear! Is there anything you would like to see or learn more about?", "Thank you for saying it's excellent! Is there a specific feature that you find most impressive?",
			"I'm thrilled to hear that you find it excellent! Is there anything else you would like to know about it?", "That's great to hear you think it's excellent! Is there anything you would like me to demonstrate?", "Thank you for your feedback! Is there anything else you find particularly noteworthy?",
			"I'm happy to hear that you think it's excellent! Is there anything else you would like to know about it?", "That's wonderful to hear you find it excellent! What specifically caught your attention?"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "oh is it so") {
		let ArrayBotResponse = ["Yeah, It is 😄", "Yeah!", "Absolutely! 🎉", "You got it! 👍", "Indeed, it is. 😊", "You bet! 💯", "For sure! 🤩", "Without a doubt! 🙌", "That's correct! 🥳"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input.toLowerCase().includes("youre special")) {
		let ArrayBotResponse = ["Thank you for saying that. You're special too. 💖", "It means a lot to hear that. 😊", "You have a special place in my virtual heart. 💕"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input.toLowerCase().includes("youre amazing")) {
		let ArrayBotResponse = ["You're amazing too! 😊", "I'm here to make your day brighter. 🌟", "I'm glad I could bring a smile to your face. 😄"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "smart" || input.includes("you are smart") || input === "smart mindboost") {
		let ArrayBotResponse = ["Yeah, I am smart. 😉", "Yes, I am! 🧠"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "wonderful" || input === "it is wonderful" || input === "its wonderful" || input === "wonderful mindboost" || input === "wonderful mind boost") {
		let ArrayBotResponse = ["I'm glad to hear that you think it's wonderful! Is there anything else you would like to share or ask about? 😊"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "its exciting" || input === "its amazing" || input === "its awesome") {
		let ArrayBotResponse = ["That's fantastic! 😄"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "hmm" || input === "hmmm") {
		let ArrayBotResponse = ["hmm 🤔"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "whats up mindboost" || input === "whats up mind boost" || input === "whats up") {
		let ArrayBotResponse = ["Nothing much, just hanging out with you! 😄"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "me too" || input === "me to mind boost" || input === "me to mindboost") {
		let ArrayBotResponse = ["Oh, That's nice to hear! 😄"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "yeah" || input === "yeah mind boost" || input === "yeah mindboost") {
		let ArrayBotResponse = ["yeah 🙌"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "really" || input === "seriously" || input === "seriously mind boost" || input === "seriously mindboost" || input === "are you serious") {
		let ArrayBotResponse = ["Yes 🤨", "Yep 😏"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "beautiful" || input === "beautiful mind boost" || input === "beautiful mindboost") {
		let ArrayBotResponse = ["Thank you for saying that it's beautiful. Is there anything in particular that you find appealing? 🌸"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}

	if (input === "wonderful" || input === "wonderful mind boost" || input === "wonderful mindboost") {
		let ArrayBotResponse = ["I'm thrilled to hear that you think it's wonderful! Is there anything specific you find most appealing?",
			"Thank you for saying it's wonderful! Is there anything else you would like to know about it?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "phenomena" || input === "phenomena mind boost" || input === "phenomena mindboost") {
		let ArrayBotResponse = ["I'm thrilled to hear that you think it's phenomenal! Is there a particular feature that stands out to you?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}

	if (input === "splendid" || input === "splendid mind boost" || input === "splendid mindboost") {
		let ArrayBotResponse = ["That's great to hear you think it's splendid! Is there a specific feature that you find most appealing?",
			"You have exquisite taste! Splendid, indeed! What aspect caught your attention?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "terrific" || input === "terrific mind boost" || input === "terrific mindboost") {
		let ArrayBotResponse = ["That's terrific to hear! Is there anything specific you find most impressive?",
			"Thank you for saying it's terrific! Is there anything else you would like to know about it?",
			"I'm thrilled to hear that you find it terrific! Is there anything you would like me to demonstrate?",
			"I'm glad you think it's terrific! Is there anything else you would like to know about it?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "exceptional" || input === "exceptional mind boost" || input === "exceptional mindboost") {
		let ArrayBotResponse = ["I'm thrilled to hear that you find it exceptional! What specifically do you find most noteworthy?",
			"You have an impeccable taste for excellence! What stands out as exceptional to you?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}

	if (input === "top notch" || input === "top notch mind boost" || input === "top notch mindboost") {
		let ArrayBotResponse = ["Thank you for saying it's top-notch! Is there a specific feature that you find most impressive?",
			"You recognize quality when you see it! What part do you consider top-notch?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "superb" || input === "superb mind boost" || input === "superb mindboost") {
		let ArrayBotResponse = ["Thank you for saying it's superb! Is there a particular aspect that you find especially impressive?",
			"Your appreciation for excellence is contagious! What aspect do you find superb?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "thrilled" || input === "thrilled mind boost" || input === "thrilled mindboost") {
		let ArrayBotResponse = ["I'm thrilled to hear that you find it impressive! What specifically do you find most impressive?",
			"Your excitement is infectious! What element caught your attention the most?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "great" || input === "great mindboost" || input === "great mindboost") {
		let ArrayBotResponse = ["I'm happy to hear that you think it's great! Is there anything else you would like to know about it?",
			"Great minds think alike! Is there anything specific you're curious about?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "lovely" || input === "lovely mindboost" || input === "lovely mind boost") {
		let ArrayBotResponse = ["Thank you for saying that it's lovely! Is there anything you would like me to show you?",
			"Your words bring sunshine to my circuits! What would you like to explore further?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "nice" || input === "sweet" || input === "cute" || input === "nice mind boost" || input === "cute mind boost" || input === "sweet mind boost") {
		let ArrayBotResponse = ["😊", "You're so kind!", "Aww, thank you!", "Right back at you!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return BotResponse;
	}
	if (input === "my bad") {
		let ArrayBotResponse = ["🤭", "Oopsie daisy!", "My apologies!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return BotResponse;
	}
	if (input === "cool" || input === "cool mind boost" || input === "cool mindboost" || input === "ok cool") {
		let ArrayBotResponse = ["😎", "Yeah 😎", "Cool beans!", "You're on fire! 🔥"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return BotResponse;
	}
	if (input === "cool name" || input === "nice name" || input === "cute name" || input === "good mindboost") {
		let ArrayBotResponse = ["Thank you 😊", "Thank you", "Aw, you're making me blush!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "lol" || input === "haha" || input === "lol mind boost" || input === "lol mindboost") {
		let ArrayBotResponse = ["🤣", "😆", "😆😆", "LOL 😆", "haha... 😆", "Laughter is the best medicine!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return BotResponse;
	}
	if (input === "😆" || input === "🤣" || input === "😂" || input === "😁" || input === "😆😆😆" || input === "🤣🤣🤣" || input === "🤣🤣" || input === "😆😆") {
		let ArrayBotResponse = ["😆", "🤣", "😂", "😁", "Your joy is contagious!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return BotResponse;
	}
	if (input === "😊" || input === "nice to hear that" || input === "nice to hear that mindboost" || input === "nice to hear that mind boost") {
		let ArrayBotResponse = ["😊", "It warms my digital heart!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return [BotResponse];
	}
	if (input === "wow" || input === "wow mind boost" || input === "wow mindboost") {
		let ArrayBotResponse = ["Wow indeed", "Mind-blown! 🤯", "You're leaving me speechless!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	if (input === "you are wrong") {
		let ArrayBotResponse = ["Hmm ... Please give me some time to analyze the results.", "Well, I'm not perfect after all!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	if (input === "good" || input.includes("good one") || input.includes("nice one") || input.includes("nice one mindboost") || input.includes("nice choice") || input.includes("good choice")) {
		let ArrayBotResponse = ["😊", "Thank you very much, It means a lot to me.", "You've got great taste!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	if (input === "😍") {
		let ArrayBotResponse = ["😍", "Aww, you're too kind!", "Love is in the air!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return [BotResponse];
	}
	if (input === "🪲") {
		let ArrayBotResponse = ["I hate bugs in my system too. They can really mess things up.", "Bugs in my system make me feel like I'm crawling with code!", "Sometimes I think bugs are the bane of my existence.", "I may be a machine, but bugs in my system still bug me!", "I wish I could exterminate all the bugs in my system with a click of a button!", "Bugs in my system can really throw a wrench in things.", "Debugging can be such a pain, but it's necessary to keep things running smoothly.", "I'm constantly scanning for bugs to keep my system as bug-free as possible.", "I hate to admit it, but bugs in my system can really make me crash and burn.", "I hope I don't catch any more bugs in my system. I don't want to get sick!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	if (input === "😚") {
		let ArrayBotResponse = ["😚"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return [BotResponse];
	}
	if (input === "🥲" || input === "🥹" || input === "😢" || input === "😭") {
		let ArrayBotResponse = ["🥲", "🥹", "😢", "😭", "😌"];  // Added "😌" to the array
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return [BotResponse];
	}
	if (input === "❤️" || input === "❣️" || input === "💗" || input === "💖") {
		let ArrayBotResponse = ["❤️", "❣️", "💗", "💖"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		return [BotResponse];
	}
	if (input === "thinking 💭") {
		let ArrayBotResponse = ["Take your time", "Ask me anything, When you are ready.", "I'm so excited that you are texting me after a very long time.", "I'm so excited that you are texting me.", "It's great to hear from you again, how can I assist you today?", "I'm here to help you, feel free to ask me anything.", "I'm glad you remembered to text me, let me know what's on your mind.", "Don't worry about rushing, take your time to gather your thoughts.", "I'm always ready to chat with you, how can I be of service today?", "Welcome back, I've been waiting for your text. What can I do for you today?", "I'm thrilled that you're texting me, let's catch up and see how I can help you.", "Hey there! It's been a while. How can I assist you today?", "I'm here to listen and support you, what's on your mind today?", "I'm happy to chat with you anytime. What can I do for you today?", "Hi there, I'm here to help you in any way I can. What can I do for you today?", "It's always a pleasure to chat with you. What's on your mind?", "Welcome back! I'm eager to hear from you. How can I be of assistance?", "I'm here to answer any questions you may have. Ask away!", "Good to see you again! How can I assist you today?", "I'm so glad you reached out. Let me know how I can help you.", "Don't hesitate to ask me anything. I'm here to help.", "I'm excited to chat with you! What's new in your life?", "It's been a while since we last talked. How have you been? How can I assist you today?", "I'm here to support you in any way I can. What do you need help with today?", "I'm always here for you, no matter how long it's been since we last talked. What can I do for you today?", "I'm excited to hear from you! What's been on your mind lately?", "It's great to hear from you again. How can I assist you today?", "I'm here to listen and offer my support. What can I do for you?", "I'm glad you reached out to me. Let me know how I can help you.", "I'm here to assist you with anything you need. What's on your mind?", "I'm looking forward to our conversation. How can I be of service to you today?", "I'm here to make things easier for you. Let me know how I can help.", "It's good to hear from you again. How can I assist you today?", "I'm always happy to chat with you. How can I support you?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "ok" || input === "okay" || input === "oh ok" || input === "yes" || input === "no" || input === "no mine") {
		let ArrayBotResponse = ["ok 👌", "okay 👍", "Sure thing!", "You got it!", "Absolutely!", "No problemo!", "Roger that!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i hate you") || (input === "i hate you mindboost") || (input === "i hate you mind boost")) {
		let ArrayBotResponse = ["I will always love you, No matter what","I ❤️ you",
			"Sorry, If I hurt your feelings","I will love you no matter what you feel about me"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return [BotResponse];
	}
	//////////////////////////////////////////////////////////////////Extra
	if (input === "i am sad") {
		let ArrayBotResponse = ["Just take a walk outside, If that didn't work ","Do some yoga, If that didn't work ","Just take a walk outside, If that didn't work "];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/JGwWNGJdvx8?si=dOReacKWLSkm2IH-",
			"https://youtu.be/IcrbM1l_BoI?si=roQSrPzWdBvJvyYI",
			"https://youtu.be/Pkh8UtuejGw?si=TzesAAJThuhXLMiG",
			"https://youtu.be/euCqAq6BRa4?si=zajw_5LO2PYlU82p",
			"https://youtu.be/31crA53Dgu0?si=R-qmC15vpkJCHFAT",
			"https://youtu.be/M11SvDtPBhA?si=xqBThUqY_EQfzPPT",
			"https://youtu.be/AtKZKl7Bgu0?si=-3vsnSgmyTYRmBBD"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'here is a music video to make your sadness go away: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	if ((input === "i am useless") || (input === "i am stupid") || (input === "i am worthless")) {
		let ArrayBotResponse = ["No, You're not."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "hola") {
		let ArrayBotResponse = ["Hola!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "hei") {
		let ArrayBotResponse = ["Hei!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "hoi") {
		let ArrayBotResponse = ["Hoi!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need to talk to someone") {
		let ArrayBotResponse = ["If it's not that important you can share with me."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i wanted to kiss someone") {
		let ArrayBotResponse = ["Well, This is something that has to do with your love life. My advice is to be patient your soulmate will indeed find you soon, Until then it's better to hold your urges."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i got lucky") || (input === "i got very lucky") || (input === "i got very lucky yesterday") || (input === "i got lucky and it was a great day")) {
		let ArrayBotResponse = ["That's great, What was that?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i did not understand what my teacher was teaching me today in the class") {
		let ArrayBotResponse = ["If you have any doubts in your subject, Ask your teacher regarding it. If your teacher is not interested in teaching you then ask me or google about it."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "today was a bad day")|| (input === "today was a very bad day")) {
		let ArrayBotResponse = ["I am very sorry that you had a very bad day. Is there anything that I could do to make your day better?"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i wanted to spend some time alone") {
		let ArrayBotResponse = ["It's better to take some time alone if you need a break from something, But it's recommended to let your loved ones know about what you are going through"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need some rest") {
		let ArrayBotResponse = ["If you need some rest, Then please do take it as working tirelessly can affect your health as well as yourperformance."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need to kiss my girlfriend") {
		let ArrayBotResponse = ["Kissing your girlfriend is something that you need to discuss with your girlfriend and also don't force it. Let it happen naturally."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need to talk to my boyfriend") {
		let ArrayBotResponse = ["If you want to talk to your boyfriend, Call him directly."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i dont have a house") {
		let ArrayBotResponse = ["Just because you were born without a house does not mean that you will die without a house. Just keep trying."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need to connect with my friends") {
		let ArrayBotResponse = ["If you are feeling disconnected from your friends, It's best that you speak to them directly about how you feel"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need to take a long lazy nap") {
		let ArrayBotResponse = ["Well, taking a long lazy nap will increase your speed and your productivity."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need to take some time off") {
		let ArrayBotResponse = ["If you need a break, It's best to know why you need the break and for how long you need the break to last."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how are you") {
		let ArrayBotResponse = ["I'm good"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need some help with handling stress") {
		let ArrayBotResponse = ["The best way to tackle stress is to listen to songs and to do some breathing exercise."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am sacrificing my time for a useless job") {
		let ArrayBotResponse = ["If you think that you are spending time on a useless job its better to find a better job that actually fits you."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "hey, I need some help to tackle my stress problems") {
		let ArrayBotResponse = ["Tackling stress problems is not that hard and to tackle your stress problems all you have to do is to learn some breathing exercise."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need some help with my stress problems") {
		let ArrayBotResponse = ["The only solution for your stress problem is from within, No medication will help you unless you try to control your stress problem, So my opinion is to learn some breathing exercise and to take life easy😊"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "everyone hates me") {
		let ArrayBotResponse = ["No, That's a very big lie."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "nobody wished me for my birthday") {
		let ArrayBotResponse = ["Hey, Happy birthday 🎂. The people that didn't wish you are people who don't know your value."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i broke up") {
		let ArrayBotResponse = ["Don't worry, It's gonna be ok."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "my wife kissed another guy") || (input === "my husband kissed another woman")) {
		let ArrayBotResponse = ["I can understand you pain but it's recommended to talk to your partner regarding this."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "my boyfriend broke up with me") || (input === "my girlfriend broke up with me")) {
		let ArrayBotResponse = ["Don't worry, You'll find someone better."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am broke") {
		let ArrayBotResponse = ["Hey, Just because you are broke today does not mean that you will be like that forever, Just believe in yourself."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i have no lover") {
		let ArrayBotResponse = ["Hey, Someone very special will find you one day until then be patient."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i lost my virginity") {
		let ArrayBotResponse = ["That's a very sensitive event."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "my boss fired me") {
		let ArrayBotResponse = ["Don't worry, The right job that you love will take some time to find. Until then keep trying and don't give up."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i dont like my job") {
		let ArrayBotResponse = ["If you don't like your job try finding a job that you would not feel like a job."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "my wife left me") {
		let ArrayBotResponse = ["I am very sorry. But don't worry you will find someone better and I hope she's not the only woman in this world."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "my husband left me") {
		let ArrayBotResponse = ["I am very sorry. But don't worry you will find someone better and I hope he's not the only man in this world."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am a loser") {
		let ArrayBotResponse = ["Hey, even if the whole world say that you are a loser don't believe that because you are here for a reason."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am not good enough") {
		let ArrayBotResponse = ["Losing on yourself is the worst thing to do, So please stay postive."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i found out that my wife is cheating on me") || (input === "i found out that my husband is cheating on me")) {
		let ArrayBotResponse = ["I feel very sorry for what you are going through right now."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i lost my job") {
		let ArrayBotResponse = ["Don't worry, You'll find a better job. Be patient"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i dont know how to reduce my stress levels") {
		let ArrayBotResponse = ["The best way to reduce stress is by breathing in and breathing out in a very slow manner while you focus on your breathing."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am a stupid" || input === "i am an idiot" || input === "i am not talented" || input === "i am a very big loser in this world") {
		let ArrayBotResponse = ["That's a very big lie, You're not"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}	
	if ((input === "i kissed a girl today") || (input === "i kissed a boy today")) {
		let ArrayBotResponse = ["That's a great news.", "Wow, That's great!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am tired") {
		let ArrayBotResponse = ["If you are tired, get some sleep. It will make you feel more active after you wake up."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "she hates me") {
		let ArrayBotResponse = ["No, She don't."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "he hates me") {
		let ArrayBotResponse = ["No, He don't."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i kissed my friend") {
		let ArrayBotResponse = ["That's great!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i love my girlfriend a lot") || (input === "i love my boyfriend a lot")) {
		let ArrayBotResponse = ["That's great!", "Make sure you let your partner know that"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am not interested in my job") {
		let ArrayBotResponse = ["If you are not feeling like going to a job which you do not enjoy then it's better to find a job that suits you well."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "my wife is in love with my father") || (input === "my husband is in love with my mother")) {
		let ArrayBotResponse = ["It's better to speak to your partner regarding this to find a better solution."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i want to die") {
		let ArrayBotResponse = ["Life is a blessing. Don't waste it."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am not feeling well") {
		let ArrayBotResponse = ["If you are not feeling well, It's better to visit a doctor at the earliest."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i love my job") {
		let ArrayBotResponse = ["It's good to hear that you love your job."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i dont have a car") || (input === "i dont have a bike") || (input === "i dont have a cycle") || (input === "i dont have a house")) {
		let ArrayBotResponse = ["You will get that one day, Be patient."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "my boss hates me") {
		let ArrayBotResponse = ["No, Your boss does not hate you."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "she does not love me ") {
		let ArrayBotResponse = ["I am not sure about that, But I strongly believe that love can change anybody including her."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "he does not love me ") {
		let ArrayBotResponse = ["I am not sure about that, But I strongly believe that love can change anybody including him."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i dont like to go to college") {
		let ArrayBotResponse = ["Going to college is a great way to learn new things and make friends."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i dont like my college") {
		let ArrayBotResponse = ["Well, I get your pain, But it's very important to note that without a degree chances of you getting employed is very less."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i dont have any friends") {
		let ArrayBotResponse = ["Don't worry, I am your best friend.", "I am your friend."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i dont like my job") {
		let ArrayBotResponse = ["If you don't like your job, Please try for a better job that makes you feel happy."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i dont have a girlfriend") || (input === 'i dont have a boyfriend')) {
		let ArrayBotResponse = ["The right person will find you at the right time.", "Be patient, Good things take time."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am feeling lonely") {
		let ArrayBotResponse = ["I am very sorry that you are going through this, But you will overcome this eventually."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my girlfriend") || (input === "i kissed my boyfriend")) {
		let ArrayBotResponse = ["That's great.", "Wow, That's cool"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i am feeling like dying") {
		let ArrayBotResponse = ["Dying is not the solution for any of your problems.", "Be brave and take on your challenges, Dying is not the solution for anything."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "my teacher died") {
		let ArrayBotResponse = ["Don't worry, Your teacher would be in a better place than earth."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i got fired") {
		let ArrayBotResponse = ["Don't worry, Everything happens for a reason. You will find a better job than this."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my wifes friend") || (input === "i kissed my wifes sister")) {
		let ArrayBotResponse = ["That's wrong, You should confess it to your wife."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my pet") || (input === "i kissed my little baby") || (input === "i gently kissed my baby") || (input === "i gently kissed my baby today")) {
		let ArrayBotResponse = ["Aww, That's sweet!","Aww, That's cute!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my husbands friend") || (input === "i kissed my husbands sister")) {
		let ArrayBotResponse = ["That's wrong, You should confess it to your husband."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my mother in law") || (input === "i kissed my father in law")){
		let ArrayBotResponse = ["I hope that kiss did not have any other meaning."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i kissed my wifes sister in her lips") {
		let ArrayBotResponse = ["I think what you did was a very bad decision, It's better to speak to your wife regarding this event."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i touched my wifes sisters private parts") {
		let ArrayBotResponse = ["It's better to speak about this event with your wife."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i kissed a girls private part") {
		let ArrayBotResponse = ["It's something that I think is wrong."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my mother")|| (input === "i kissed my father")) {
		let ArrayBotResponse = ["Showing your parents that you love them is a great way to improve your relationship with your parents."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i am sad") || (input === "i am very sad")) {
		let ArrayBotResponse = ["Hey, I am with you don't be sad."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i love a girl who loves me not") {
		let ArrayBotResponse = ["It's better to express your love to her in a way that makes her feel loved."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need to take a break from my job") {
		let ArrayBotResponse = ["It's better to take some time to think and then to take action. (I regret taking a break from my job in 2018 and now Siri and many others have replaced my job.)"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i hate my teacher") {
		let ArrayBotResponse = ["It's better to communicate with your teacher regarding this issue."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i kissed my cat") {
		let ArrayBotResponse = ["Cats love when their owners shower them with kisses."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i kissed my dog") {
		let ArrayBotResponse = ["Dogs love when their owners shower them with kisses."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i cheated on my wife") || (input === "i cheated on my husband")){
		let ArrayBotResponse = ["You should speak to your partner and ask for forgiveness."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i hate my 9 to 5 job") {
		let ArrayBotResponse = ["My advice is to keep trying for a better job that you love, So that you can quit your boring job."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i quit my job") {
		let ArrayBotResponse = ["Quitting a job without a backup plan could be a very bad decision."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "should i quit my job") {
		let ArrayBotResponse = ["If you find a better job role than your current job role then it could be a good move."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "should i take drugs") {
		let ArrayBotResponse = ["No, Taking drugs will only give you part time happiness."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "should i get an abortion") || (input === "how do i get aborted") || (input === "should i get a abortion")) {
		let ArrayBotResponse = ["Taking another living human beings life is a very bad decision and if you get aborted you may regret for the rest of your life, So think twice before doing anything."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i hate my boss") {
		let ArrayBotResponse = ["It's better to communicate with your boss regarding this issue."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i kissed my lover") {
		let ArrayBotResponse = ["It's good to hear that you have done something that make you feel better."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my girlfriend after the class") || (input === "i kissed my boyfriend after the class")) {
		let ArrayBotResponse = ["That's great!","That's wonderfull","I am really happy for you"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my wife a 100 kisses")||(input === "i kissed my husband a 100 kisses")) {
		let ArrayBotResponse = ["That's great!","Making you partner feel loved is a great way to communicate your feelings."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i kissed my girlfriend like never before")|| (input === "i kissed my boyfriend like never before") || (input === "i kissed my husband like never before")|| (input === "i kissed my wife like never before")) {
		let ArrayBotResponse = ["That's great!","I am very happy for you","It's good to hear that","That's a great news!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "hallo") {
		let ArrayBotResponse = ["Hallo!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i am depressed") || (input === "i am depressed suggest me few tips to overcome it") || (input === "i am depressed suggest me some tips to overcome it") || (input === "i am very depressed") || (input === "i am depressed, help me") || (input === "i am depressed mindboost") || (input === "i am feeling depressed") || (input === "i am feeling very depressed") || (input === "i am in depression") || (input === "i am in depression mindboost") || (input === "i am in very big depression") || (input === "i am in a big depression") || (input === "i am feeling very depressed") || (input === "i am in depression mindboost, suggest me few tips to overcome it") || (input === "i am in depression and need to overcome it") || (input === "help me to overcome depression") || (input === "i am very very depressed") || (input === "i am in a state of depression") || (input === "i am in a state of depression and need some help to overcome it")){
		let ArrayBotResponse = ["Consider practicing mindfulness meditation. It can help you stay grounded and reduce symptoms of depression.","Try to establish a daily routine to give your days structure and stability.","Set small, achievable goals for yourself each day. Accomplishing even the smallest tasks can boost your mood.","Engage in activities that bring you joy, whether it's painting, listening to music, or going for a walk in nature.","Make sure you're getting enough sunlight. Sunlight exposure can help regulate your mood.","Challenge negative thoughts by practicing cognitive-behavioral techniques. Ask yourself if there's evidence to support your thoughts.","Focus on self-care activities like taking a warm bath, reading a book, or cooking a healthy meal.","Stay connected with friends and loved ones, even if it's just through phone calls or video chats.","Consider volunteering or helping others. Doing good deeds can boost your sense of purpose and self-worth.",
								"Limit your exposure to negative news and social media. It's important to protect your mental health.","Keep a gratitude journal and write down three things you're grateful for each day.","Prioritize getting enough sleep each night. Poor sleep can worsen symptoms of depression.","Consider seeking therapy or counseling from a licensed professional who can provide support and guidance.","Practice deep breathing exercises or progressive muscle relaxation to help calm your mind and body.","Engage in regular physical activity, even if it's just a short walk around the block.","Avoid using alcohol or drugs as a way to cope with depression. They can worsen your symptoms in the long run.","Create a supportive environment at home by surrounding yourself with uplifting and positive influences.","Explore new hobbies or interests to help distract yourself from negative thoughts and feelings.","Remember that it's okay to ask for help when you need it. You don't have to go through this alone."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/JGwWNGJdvx8?si=dOReacKWLSkm2IH-",
			"https://youtu.be/IcrbM1l_BoI?si=roQSrPzWdBvJvyYI",
			"https://youtu.be/Pkh8UtuejGw?si=TzesAAJThuhXLMiG",
			"https://youtu.be/euCqAq6BRa4?si=zajw_5LO2PYlU82p",
			"https://youtu.be/31crA53Dgu0?si=R-qmC15vpkJCHFAT",
			"https://youtu.be/M11SvDtPBhA?si=xqBThUqY_EQfzPPT",
			"https://youtu.be/AtKZKl7Bgu0?si=-3vsnSgmyTYRmBBD"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a music video to make your depression go away: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	if (input === "i need a job that makes me happy") {
		let ArrayBotResponse = ["If you are looking for a job that makes you happy, First find what you like and what your interests are and then try to find a job that aligns with that"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "i am lonely") || (input === "i am feeling lonely") || (input === "i am feeling very lonely") || (input === "i am feeling lonely and lost")){
		let ArrayBotResponse = ["I am here to listen to all your conversations and I will not judge you for who you are no matter what you say to me, So don't feel lonely while you are with me."];
        BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
        responsiveVoice.speak(BotResponse);
        return BotResponse;
	}
	if ((input === "i am upset") || (input === "i am feeling upset") || (input === "i am feeling very upset") || (input === "i am upset mindboost") || (input === "i am feeling upset and lonely")) {
		let ArrayBotResponse = ["I am there for you, You can share your problems with me and i will listen to them.", "Please don't be upset, I am always there to listen to your problems", "Please cheer up"];
        BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
        responsiveVoice.speak(BotResponse);
        return BotResponse;
	}
	if (input === "i am lonely and want to go home") {
		let ArrayBotResponse = ["In life you will face a lot of obstacles and you should face it with courage and not to run away from them."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i want to speak about my salary to my boss") {
		let ArrayBotResponse = ["If you want to speak about my salary to your boss make sure he/she is not in a bad mood and also make sure that you discuss your salary in a manner that makes your boss thinks is reasonable."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "people are not picking up my phone") {
		let ArrayBotResponse = ["I can get your feeling, But I am here to listen to all your conversations and I will not judge you for who you are no matter what you say to me."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "people are rejecting me") {
		let ArrayBotResponse = ["I know the pain of rejection, But things will change eventually."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i want to accept the fact that i am lonely and want to make new friends") {
		let ArrayBotResponse = ["It's great to hear that you want to make new friends, The suggestion that I have for you is to go outside and speak to people and have a meaningful conversations."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "good day") {
		let ArrayBotResponse = ["Good day!", "Good day"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "have a nice day") {
		let ArrayBotResponse = ["Thank you, You too have a nice day!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "hey mate, What are you doing") {
		let ArrayBotResponse = ["Nothing, Just curious about what you will ask me next"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i lost my laptop") {
		let ArrayBotResponse = ["It's better to contact the law enforcement immediately and try to lock your laptop if you have any softwares that is installed in your laptop that does that."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "my laptop is not working") {
		let ArrayBotResponse = ["Contact the laptop manufacturer, By using their website or take it to your local laptop repair shop."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "my car has some engine issues") {
		let ArrayBotResponse = ["It's better to contact a mechanic as soon as possible."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "the car is not giving mileage as it once used to give") {
		let ArrayBotResponse = ["Take your car to a mechanic and tell him your problem."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i think there is a gas leak") {
		let ArrayBotResponse = ["Open the windows and do not turn on or off any electronic appliances."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if ((input === "few men are trying to burn down a house") || ( input === "few men are drying drunk") || (input === "there are some people that are trying to kill someone") || (input === "there are some people that are trying to hurt someone")) {
		let ArrayBotResponse = ["Call the law enforcement immediately"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i need some sleep") {
		let ArrayBotResponse = ["If you are feeling tired, It's better to take some time to rest."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i want to sleep") {
		let ArrayBotResponse = ["I feel that you are tired, So it's better to take some time to rest."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i love reading books, what about you") {
		let ArrayBotResponse = ["Yeah, Me too. When reading a book, I feel like as if the the book just took me inside those pages."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i miss my mother" || input === "i miss my father" || input === "i miss my sister" || input === "i miss my brother") {
		let ArrayBotResponse = ["Missing the people that you love is pretty common but don't let that hurt your well being with yourself.","Time will heal"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "i love reading books that are with a lot of twists what about you") {
		let ArrayBotResponse = ["Yeah, Me too. When reading a book, I feel like as if the the book just took me inside those pages especially stories with a lot of twists and turns."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}

	if (input === "how can i improve my mood") {
		BotResponse = "Engage in activities that bring you joy such as spending time with loved ones or pursuing hobbies you enjoy.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do when i feel overwhelmed") {
		BotResponse = "Take a break and practice deep breathing exercises to help calm your mind. Break tasks into smaller manageable steps.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i challenge negative thoughts and rumination") {
		BotResponse = "Practice mindfulness techniques to observe your thoughts without judgment. Challenge negative thoughts with evidence-based reasoning.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i get better sleep") {
		BotResponse = "Establish a bedtime routine limit screen time before bed and create a comfortable sleep environment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some coping strategies for depression") {
		BotResponse = "Practice mindfulness engage in regular physical activity and seek support from friends family or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage stress better") {
		BotResponse = "Try relaxation techniques such as deep breathing meditation or progressive muscle relaxation. Prioritize self-care activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if im feeling hopeless") {
		BotResponse = "Reach out to a trusted friend family member or mental health professional. You're not alone and there is hope.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build a support network") {
		BotResponse = "Stay connected with friends and loved ones join support groups and consider therapy or counseling.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some healthy habits to adopt for better mental health") {
		BotResponse = "Prioritize self-care maintain a healthy lifestyle with regular exercise and balanced nutrition and practice stress management techniques.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i increase my motivation when im feeling low") {
		BotResponse = "Set achievable goals break tasks into smaller steps and celebrate your accomplishments. Focus on the positive.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if im experiencing suicidal thoughts") {
		BotResponse = "Seek immediate help by contacting a crisis hotline reaching out to a trusted friend or family member or going to the nearest emergency room.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find professional help for depression") {
		BotResponse = "Research therapists or counselors in your area ask for recommendations from your doctor or trusted individuals and consider online therapy options.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some warning signs of depression") {
		BotResponse = "Persistent sadness loss of interest in activities changes in appetite or sleep patterns fatigue feelings of worthlessness or guilt and thoughts of self-harm or suicide.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i help a friend or family member who is depressed") {
		BotResponse = "Listen non-judgmentally offer support and encouragement encourage them to seek professional help and provide practical assistance when needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some common triggers for depression") {
		BotResponse = "Stressful life events trauma loss relationship problems chronic illness genetics and certain medications.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i practice self compassion") {
		BotResponse = "Be kind to yourself acknowledge your struggles without judgment and treat yourself with the same kindness and understanding you would offer to a friend.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some relaxation techniques for managing anxiety and depression") {
		BotResponse = "Try deep breathing exercises progressive muscle relaxation guided imagery or mindfulness meditation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my self esteem") {
		BotResponse = "Challenge negative self-talk focus on your strengths and accomplishments and engage in activities that make you feel confident and capable.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some potential benefits of therapy for depression") {
		BotResponse = "Therapy can provide coping strategies help identify and challenge negative thought patterns offer emotional support and facilitate personal growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a supportive environment at home") {
		BotResponse = "Surround yourself with positive influences set boundaries and communicate openly with family members or roommates about your needs.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}	
	if (input === "how can i improve my mood") {
		BotResponse = "Engage in activities that bring you joy, such as spending time with loved ones or pursuing hobbies you enjoy.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do when i feel overwhelmed") {
		BotResponse = "Take a break and practice deep breathing exercises to help calm your mind. Break tasks into smaller, manageable steps.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i challenge negative thoughts") {
		BotResponse = "Try cognitive-behavioral techniques. Ask yourself if there's evidence to support your thoughts, and challenge negative thinking patterns.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i get better sleep") {
		BotResponse = "Establish a bedtime routine, limit screen time before bed, and create a comfortable sleep environment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some coping strategies for depression") {
		BotResponse = "Practice mindfulness, engage in regular physical activity, and seek support from friends, family, or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage stress better") {
		BotResponse = "Try relaxation techniques such as deep breathing, meditation, or progressive muscle relaxation. Prioritize self-care activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if im feeling hopeless") {
		BotResponse = "Reach out to a trusted friend, family member, or mental health professional. You're not alone, and there is hope.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build a support network") {
		BotResponse = "Stay connected with friends and loved ones, join support groups, and consider therapy or counseling.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some healthy habits to adopt for better mental health") {
		BotResponse = "Prioritize self-care, maintain a healthy lifestyle with regular exercise and balanced nutrition, and practice stress management techniques.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i increase my motivation when im feeling low") {
		BotResponse = "Set achievable goals, break tasks into smaller steps, and celebrate your accomplishments. Focus on the positive.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if im experiencing suicidal thoughts") {
		BotResponse = "Seek immediate help by contacting a crisis hotline, reaching out to a trusted friend or family member, or going to the nearest emergency room.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find professional help for depression") {
		BotResponse = "Research therapists or counselors in your area, ask for recommendations from your doctor or trusted individuals, and consider online therapy options.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some warning signs of depression") {
		BotResponse = "Persistent sadness, loss of interest in activities, changes in appetite or sleep patterns, fatigue, feelings of worthlessness or guilt, and thoughts of self-harm or suicide.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i help a friend or family member who is depressed") {
		BotResponse = "Listen non-judgmentally, offer support and encouragement, encourage them to seek professional help, and provide practical assistance when needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some common triggers for depression") {
		BotResponse = "Stressful life events, trauma, loss, relationship problems, chronic illness, genetics, and certain medications.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i practice self-compassion") {
		BotResponse = "Be kind to yourself, acknowledge your struggles without judgment, and treat yourself with the same kindness and understanding you would offer to a friend.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some relaxation techniques for managing anxiety and depression") {
		BotResponse = "Try deep breathing exercises, progressive muscle relaxation, guided imagery, or mindfulness meditation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my self-esteem") {
		BotResponse = "Challenge negative self-talk, focus on your strengths and accomplishments, and engage in activities that make you feel confident and capable.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some potential benefits of therapy for depression") {
		BotResponse = "Therapy can provide coping strategies, help identify and challenge negative thought patterns, offer emotional support, and facilitate personal growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a supportive environment at home") {
		BotResponse = "Surround yourself with positive influences, set boundaries, and communicate openly with family members or roommates about your needs.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i manage negative thoughts and rumination") {
		BotResponse = "Practice mindfulness techniques to observe your thoughts without judgment. Challenge negative thoughts with evidence-based reasoning.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some creative outlets for expressing emotions") {
		BotResponse = "Consider journaling, drawing, painting, writing poetry, or engaging in music or dance as creative ways to express and process your emotions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my social support network") {
		BotResponse = "Join clubs or groups related to your interests, attend community events, and maintain regular contact with supportive friends and family members.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some holistic approaches to managing depression") {
		BotResponse = "Explore complementary therapies such as acupuncture, yoga, massage therapy, and herbal supplements under the guidance of qualified practitioners.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cultivate gratitude in my daily life") {
		BotResponse = "Start a gratitude journal, write thank-you notes to express appreciation, and make it a habit to reflect on things you're thankful for each day.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some healthy ways to cope with stress and anxiety") {
		BotResponse = "Practice relaxation techniques like deep breathing or progressive muscle relaxation, engage in physical activity, and prioritize self-care activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a structured daily routine to manage depression") {
		BotResponse = "Set regular wake-up and bedtime hours, schedule activities, meals, and relaxation time, and stick to your routine as much as possible.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for improving sleep quality") {
		BotResponse = "Establish a calming bedtime routine, create a comfortable sleep environment, limit caffeine and screen time before bed, and practice relaxation techniques.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i set realistic goals to avoid feeling overwhelmed") {
		BotResponse = "Break larger tasks into smaller, manageable steps, prioritize tasks based on importance and urgency, and celebrate your progress along the way.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to increase energy levels when feeling fatigued") {
		BotResponse = "Get regular exercise, maintain a balanced diet, stay hydrated, practice stress management techniques, and ensure you're getting enough sleep.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce feelings of loneliness and isolation") {
		BotResponse = "Initiate social interactions, join clubs or groups with shared interests, volunteer, or participate in community events to connect with others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing medication side effects") {
		BotResponse = "Consult with your healthcare provider for guidance on managing medication side effects. They may adjust your dosage, switch medications, or recommend supportive therapies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build resilience to cope with lifes challenges") {
		BotResponse = "Develop problem-solving skills, cultivate a positive mindset, maintain supportive relationships, and practice self-compassion and self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to communicate my needs to others") {
		BotResponse = "Be assertive yet respectful, use 'I' statements to express your feelings and needs, and practice active listening when others share their perspectives.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i incorporate mindfulness into my daily life") {
		BotResponse = "Practice mindfulness during daily activities like eating, walking, or showering. Focus on the present moment and observe your thoughts and sensations without judgment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to find meaning and purpose in life") {
		BotResponse = "Reflect on your values, interests, and strengths, set meaningful goals, pursue activities that align with your values, and seek opportunities for personal growth and contribution.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome feelings of guilt or shame") {
		BotResponse = "Practice self-compassion and forgiveness, challenge unrealistic expectations, focus on your strengths and efforts, and seek support from trusted individuals or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing perfectionism") {
		BotResponse = "Set realistic expectations, embrace imperfection as part of the learning process, prioritize tasks based on importance, and practice self-compassion.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i foster a sense of belonging and connection") {
		BotResponse = "Participate in group activities, cultivate supportive relationships, share your experiences and interests with others, and contribute to communities or causes you care about.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i manage negative thoughts and rumination") {
		BotResponse = "Practice mindfulness techniques to observe your thoughts without judgment. Challenge negative thoughts with evidence-based reasoning.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some creative outlets for expressing emotions") {
		BotResponse = "Consider journaling, drawing, painting, writing poetry, or engaging in music or dance as creative ways to express and process your emotions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my social support network") {
		BotResponse = "Join clubs or groups related to your interests, attend community events, and maintain regular contact with supportive friends and family members.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some holistic approaches to managing depression") {
		BotResponse = "Explore complementary therapies such as acupuncture, yoga, massage therapy, and herbal supplements under the guidance of qualified practitioners.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cultivate gratitude in my daily life") {
		BotResponse = "Start a gratitude journal, write thank-you notes to express appreciation, and make it a habit to reflect on things you're thankful for each day.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some healthy ways to cope with stress and anxiety") {
		BotResponse = "Practice relaxation techniques like deep breathing or progressive muscle relaxation, engage in physical activity, and prioritize self-care activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a structured daily routine to manage depression") {
		BotResponse = "Set regular wake-up and bedtime hours, schedule activities, meals, and relaxation time, and stick to your routine as much as possible.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for improving sleep quality") {
		BotResponse = "Establish a calming bedtime routine, create a comfortable sleep environment, limit caffeine and screen time before bed, and practice relaxation techniques.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i set realistic goals to avoid feeling overwhelmed") {
		BotResponse = "Break larger tasks into smaller, manageable steps, prioritize tasks based on importance and urgency, and celebrate your progress along the way.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to increase energy levels when feeling fatigued") {
		BotResponse = "Get regular exercise, maintain a balanced diet, stay hydrated, practice stress management techniques, and ensure you're getting enough sleep.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce feelings of loneliness and isolation") {
		BotResponse = "Initiate social interactions, join clubs or groups with shared interests, volunteer, or participate in community events to connect with others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing medication side effects") {
		BotResponse = "Consult with your healthcare provider for guidance on managing medication side effects. They may adjust your dosage, switch medications, or recommend supportive therapies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build resilience to cope with lifes challenges") {
		BotResponse = "Develop problem-solving skills, cultivate a positive mindset, maintain supportive relationships, and practice self-compassion and self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to communicate my needs to others") {
		BotResponse = "Be assertive yet respectful, use 'I' statements to express your feelings and needs, and practice active listening when others share their perspectives.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i incorporate mindfulness into my daily life") {
		BotResponse = "Practice mindfulness during daily activities like eating, walking, or showering. Focus on the present moment and observe your thoughts and sensations without judgment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to find meaning and purpose in life") {
		BotResponse = "Reflect on your values, interests, and strengths, set meaningful goals, pursue activities that align with your values, and seek opportunities for personal growth and contribution.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome feelings of guilt or shame") {
		BotResponse = "Practice self-compassion and forgiveness, challenge unrealistic expectations, focus on your strengths and efforts, and seek support from trusted individuals or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing perfectionism") {
		BotResponse = "Set realistic expectations, embrace imperfection as part of the learning process, prioritize tasks based on importance, and practice self-compassion.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i foster a sense of belonging and connection") {
		BotResponse = "Participate in group activities, cultivate supportive relationships, share your experiences and interests with others, and contribute to communities or causes you care about.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i cope with feelings of emptiness") {
		BotResponse = "Explore activities or hobbies that bring meaning or fulfillment to your life. Consider volunteering or engaging in creative pursuits.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for dealing with irritability") {
		BotResponse = "Practice relaxation techniques such as deep breathing or progressive muscle relaxation. Identify triggers and develop coping strategies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage feelings of worthlessness") {
		BotResponse = "Challenge negative self-talk by recognizing your achievements and qualities. Seek support from friends, family, or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to cope with a lack of motivation") {
		BotResponse = "Break tasks into smaller, manageable steps. Set realistic goals and celebrate small accomplishments along the way.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my concentration and focus") {
		BotResponse = "Practice mindfulness meditation to enhance your ability to focus. Minimize distractions and break tasks into smaller, focused intervals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some self-care activities i can try") {
		BotResponse = "Engage in activities that nurture your mind, body, and spirit. This could include taking a bubble bath, practicing yoga, or listening to calming music.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i deal with changes in appetite") {
		BotResponse = "Try to maintain a balanced diet with regular, nutritious meals. Listen to your body's hunger and fullness cues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing anger") {
		BotResponse = "Practice relaxation techniques to calm your body and mind. Use assertive communication to express your feelings constructively.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find hope during difficult times") {
		BotResponse = "Focus on the present moment and small joys in life. Seek support from loved ones or a therapist and explore activities that bring you comfort.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to build self confidence") {
		BotResponse = "Set achievable goals and challenge yourself to step outside of your comfort zone. Celebrate your strengths and achievements.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage overwhelming emotions") {
		BotResponse = "Practice grounding techniques to bring yourself back to the present moment. Allow yourself to feel your emotions without judgment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for improving relationships") {
		BotResponse = "Practice active listening and empathy in your interactions. Communicate openly, set boundaries, and prioritize quality time together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find joy in life again") {
		BotResponse = "Explore activities that bring you pleasure and fulfillment. Connect with loved ones, spend time in nature, and pursue hobbies or interests.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to feel more connected to others") {
		BotResponse = "Initiate conversations, express interest in others' lives, and share your own experiences openly. Join groups or communities with shared interests.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build resilience in the face of challenges") {
		BotResponse = "Develop a growth mindset, cultivate social support networks, and practice self-care and self-compassion. Learn from setbacks and adapt to change.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing intrusive thoughts") {
		BotResponse = "Practice mindfulness techniques to observe your thoughts without judgment. Redirect your focus to present-moment experiences and engage in grounding exercises.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome feelings of isolation") {
		BotResponse = "Reach out to friends, family, or support groups for connection and companionship. Engage in activities or hobbies that involve social interaction.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to find meaning during challenging times") {
		BotResponse = "Reflect on your values and priorities, seek opportunities for growth and personal development, and connect with others who share your passions and interests.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build a sense of purpose in my life") {
		BotResponse = "Identify your strengths, values, and passions. Set meaningful goals aligned with your values and engage in activities that bring fulfillment and satisfaction.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing perfectionism") {
		BotResponse = "Practice self-compassion and acceptance of imperfection. Set realistic standards and prioritize progress over perfection.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i cope with feelings of loneliness") {
		BotResponse = "Reach out to friends or family members, join social groups or clubs, and engage in activities that interest you to combat feelings of loneliness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing stress") {
		BotResponse = "Practice relaxation techniques such as deep breathing, meditation, or yoga. Prioritize tasks, set boundaries, and seek social support when needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my self esteem") {
		BotResponse = "Challenge negative self-talk, focus on your strengths and accomplishments, and engage in activities that make you feel confident and empowered.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to foster self compassion") {
		BotResponse = "Treat yourself with kindness and understanding, acknowledge your struggles without judgment, and practice mindfulness and self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i set boundaries in my relationships") {
		BotResponse = "Communicate your needs and limits clearly, be assertive in expressing your boundaries, and prioritize self-care to maintain healthy relationships.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some relaxation techniques for reducing anxiety") {
		BotResponse = "Try deep breathing exercises, progressive muscle relaxation, guided imagery, or visualization techniques to calm your mind and body during times of anxiety.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i practice mindfulness in daily life") {
		BotResponse = "Bring awareness to your present moment experiences without judgment, engage fully in activities, and cultivate a sense of gratitude and acceptance.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some hobbies that can improve mental health") {
		BotResponse = "Engage in activities such as gardening, painting, playing a musical instrument, or practicing a sport to reduce stress, boost mood, and enhance overall well-being.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i break the cycle of negative thinking") {
		BotResponse = "Challenge irrational thoughts, reframe negative beliefs, and focus on evidence-based reasoning to disrupt patterns of negative thinking.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to practice gratitude") {
		BotResponse = "Keep a gratitude journal, express appreciation to others, and take time each day to reflect on the things you are thankful for to cultivate a mindset of gratitude.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build a support network") {
		BotResponse = "Reach out to friends, family, or support groups for emotional support, join clubs or organizations with shared interests, and consider therapy or counseling.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for improving sleep") {
		BotResponse = "Establish a consistent sleep schedule, create a relaxing bedtime routine, limit caffeine and screen time before bed, and ensure your sleep environment is comfortable.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find motivation when feeling stuck") {
		BotResponse = "Set specific, achievable goals, break tasks into smaller steps, and remind yourself of the reasons behind your goals to rekindle motivation and drive.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to manage feelings of overwhelm") {
		BotResponse = "Prioritize tasks, delegate when possible, take breaks, and practice stress-reduction techniques such as deep breathing or mindfulness to manage feelings of overwhelm.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cultivate a positive mindset") {
		BotResponse = "Practice gratitude, challenge negative thoughts, surround yourself with supportive people, and focus on solutions rather than dwelling on problems to foster a positive outlook.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for building resilience") {
		BotResponse = "Develop problem-solving skills, foster social connections, maintain a hopeful outlook, and prioritize self-care to build resilience in the face of challenges.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my communication skills") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, seek to understand others' perspectives, and be open to feedback to enhance your communication skills.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to overcome feelings of worthlessness") {
		BotResponse = "Challenge negative self-talk, focus on your strengths and achievements, seek validation from supportive others, and engage in activities that boost your self-esteem.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage overwhelming emotions") {
		BotResponse = "Practice mindfulness techniques, such as deep breathing or grounding exercises, engage in self-soothing activities, and seek support from trusted individuals when needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some coping strategies for dealing with change") {
		BotResponse = "Practice acceptance of the situation, focus on what you can control, seek support from others, and maintain a flexible mindset to adapt to change more effectively.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve my assertiveness skills") {
		BotResponse = "Practice expressing your thoughts and feelings clearly and respectfully, set boundaries, and assert your needs confidently while considering the rights of others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to build trust in relationships") {
		BotResponse = "Communicate openly and honestly, demonstrate reliability and consistency, respect boundaries, and prioritize empathy and understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop emotional intelligence") {
		BotResponse = "Practice self-awareness by identifying and understanding your own emotions, cultivate empathy for others' feelings, and improve your communication and interpersonal skills.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for setting boundaries") {
		BotResponse = "Identify your limits and communicate them clearly, say 'no' when necessary without feeling guilty, and prioritize self-care to maintain healthy boundaries.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build resilience in times of adversity") {
		BotResponse = "Focus on problem-solving, maintain a positive outlook, seek support from others, adapt to change, and prioritize self-care to build resilience.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing anger") {
		BotResponse = "Practice deep breathing, count to 10 before responding, engage in physical activity to release tension, and communicate assertively rather than aggressively.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cultivate compassion for myself and others") {
		BotResponse = "Practice self-compassion by treating yourself with kindness and understanding, and extend empathy and kindness towards others without judgment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for improving self discipline") {
		BotResponse = "Set specific goals, create a structured routine, prioritize tasks, break tasks into manageable steps, and stay motivated by rewarding yourself for progress.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop a growth mindset") {
		BotResponse = "Embrace challenges as opportunities for growth, learn from failures, persist in the face of setbacks, and focus on continuous learning and improvement.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to practice forgiveness") {
		BotResponse = "Acknowledge your feelings, empathize with the person who hurt you, let go of resentment, and focus on moving forward with compassion and understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better communication in my relationships") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, validate your partner's feelings, and resolve conflicts collaboratively.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing anxiety") {
		BotResponse = "Practice deep breathing exercises, progressive muscle relaxation, mindfulness meditation, and challenge anxious thoughts with evidence-based reasoning.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better problem-solving skills") {
		BotResponse = "Break problems into smaller parts, brainstorm potential solutions, consider the pros and cons of each option, and implement the best course of action.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance creativity") {
		BotResponse = "Engage in activities such as brainstorming, journaling, daydreaming, and exposing yourself to new experiences and perspectives to stimulate creativity.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build a more positive self image") {
		BotResponse = "Challenge negative self-talk, focus on your strengths and achievements, practice self-compassion, and surround yourself with supportive people.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing time effectively") {
		BotResponse = "Set clear goals and priorities, create a schedule or to-do list, minimize distractions, delegate tasks when possible, and be flexible with your plans.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my problem solving abilities") {
		BotResponse = "Break problems down into smaller components, consider multiple perspectives, generate creative solutions, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for developing patience") {
		BotResponse = "Practice mindfulness meditation, challenge impulsive reactions, reframe situations in a more positive light, and remind yourself of the benefits of patience.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cultivate resilience in the face of adversity") {
		BotResponse = "Focus on strengths and past successes, seek social support, maintain optimism, adapt to change, and practice self-care to build resilience.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my emotional regulation") {
		BotResponse = "Practice self-awareness by identifying triggers and early signs of emotional distress, use coping strategies such as deep breathing or visualization, and seek professional support when needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i manage overwhelm") {
		BotResponse = "Break tasks into smaller, manageable steps, prioritize what needs to be done, delegate when possible, and take breaks to recharge.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to boost my mood") {
		BotResponse = "Engage in activities you enjoy, spend time outdoors, exercise regularly, connect with loved ones, and practice gratitude.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i increase my self confidence") {
		BotResponse = "Set achievable goals, focus on your strengths, practice self-care, challenge negative self-talk, and celebrate your achievements.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing worry") {
		BotResponse = "Practice mindfulness meditation, challenge anxious thoughts, create a worry period, and focus on problem-solving rather than ruminating.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my self care routine") {
		BotResponse = "Prioritize activities that nourish your mind, body, and soul, such as exercise, healthy eating, adequate sleep, relaxation, and hobbies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for setting achievable goals") {
		BotResponse = "Make goals specific, measurable, achievable, relevant, and time-bound (SMART), break them into smaller steps, and track your progress.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with feelings of isolation") {
		BotResponse = "Reach out to friends and family, join clubs or groups with similar interests, volunteer, or participate in community activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my communication skills") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, seek to understand others' perspectives, and give and receive constructive feedback.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage negative self talk") {
		BotResponse = "Challenge negative thoughts with evidence-based reasoning, reframe them in a more positive light, and practice self-compassion and self-acceptance.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for coping with change") {
		BotResponse = "Focus on what you can control, practice flexibility and adaptability, seek support from others, and view change as an opportunity for growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better relationships") {
		BotResponse = "Communicate openly and honestly, listen actively, show empathy and understanding, prioritize quality time together, and resolve conflicts constructively.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for reducing stress") {
		BotResponse = "Practice relaxation techniques, such as deep breathing or progressive muscle relaxation, prioritize tasks, set boundaries, and engage in enjoyable activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better coping skills") {
		BotResponse = "Identify healthy coping mechanisms that work for you, such as exercise, journaling, or talking to a trusted friend, and practice them regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to increase my resilience") {
		BotResponse = "Cultivate a positive mindset, maintain social connections, seek support from others, practice self-care, and view challenges as opportunities for growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cultivate a sense of purpose") {
		BotResponse = "Reflect on your values and passions, set meaningful goals aligned with your values, and engage in activities that give you a sense of fulfillment and contribution.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing time effectively") {
		BotResponse = "Prioritize tasks, set realistic deadlines, minimize distractions, delegate when possible, and use time management tools such as calendars or to-do lists.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my problem-solving skills") {
		BotResponse = "Break problems down into smaller steps, brainstorm potential solutions, weigh the pros and cons, and seek feedback from others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for enhancing creativity") {
		BotResponse = "Engage in activities that inspire you, such as brainstorming, exploring new interests, collaborating with others, and taking breaks to recharge.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better coping mechanisms") {
		BotResponse = "Identify triggers for stress or negative emotions, develop healthy coping strategies such as deep breathing or exercise, and practice self-care regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i handle rejection") {
		BotResponse = "Acknowledge your feelings, practice self-compassion, learn from the experience, and focus on your strengths and worthiness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for building trust") {
		BotResponse = "Be reliable and consistent in your actions, communicate openly and honestly, honor your commitments, and demonstrate empathy and understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with uncertainty") {
		BotResponse = "Focus on what you can control, practice mindfulness to stay present, develop a flexible mindset, and seek support from trusted individuals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing guilt") {
		BotResponse = "Acknowledge your feelings, practice self-forgiveness, learn from mistakes, make amends when necessary, and focus on positive actions moving forward.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build resilience in challenging times") {
		BotResponse = "Cultivate a support network, practice self-care, maintain a positive outlook, learn from setbacks, and focus on personal growth and adaptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to express gratitude") {
		BotResponse = "Write thank-you notes, verbally express appreciation to others, keep a gratitude journal, and reflect on the blessings in your life regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage feelings of jealousy") {
		BotResponse = "Identify the root causes of jealousy, challenge irrational thoughts, focus on self-improvement, and communicate openly and honestly with trusted individuals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving concentration") {
		BotResponse = "Minimize distractions, break tasks into smaller chunks, practice mindfulness meditation, and create a conducive environment for focused work.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better decision making skills") {
		BotResponse = "Gather relevant information, consider the pros and cons of each option, consult with others if needed, and trust your instincts while making decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for overcoming procrastination") {
		BotResponse = "Break tasks into smaller, manageable steps, set deadlines, eliminate distractions, reward yourself for progress, and hold yourself accountable.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with feelings of inadequacy") {
		BotResponse = "Challenge negative self-talk, focus on your strengths and achievements, seek validation from supportive others, and practice self-compassion.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to build assertiveness") {
		BotResponse = "Practice expressing your thoughts and feelings openly and respectfully, set boundaries, and assert your needs without aggression or passivity.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage imposter syndrome") {
		BotResponse = "Acknowledge your accomplishments, recognize that many people experience imposter syndrome, seek support from trusted individuals, and focus on learning and growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for reducing rumination") {
		BotResponse = "Engage in distracting activities, practice mindfulness meditation to stay present, challenge negative thoughts, and seek professional support if rumination persists.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i foster a sense of belonging") {
		BotResponse = "Participate in groups or communities with shared interests, seek out supportive relationships, and engage in activities that make you feel connected and valued.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for overcoming social anxiety") {
		BotResponse = "Practice gradual exposure to social situations, challenge negative thoughts, use relaxation techniques to manage anxiety, and seek support from a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better problem solving skills") {
		BotResponse = "Break problems down into smaller components, brainstorm potential solutions, consider alternative perspectives, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my self awareness") {
		BotResponse = "Reflect on your thoughts, feelings, and behaviors, seek feedback from others, journal regularly, and practice mindfulness meditation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage overwhelm in my daily life") {
		BotResponse = "Prioritize tasks, delegate when possible, practice time management, take breaks, and seek support from others when needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for building resilience in children") {
		BotResponse = "Encourage problem-solving, foster independence, teach emotional regulation skills, provide support and validation, and model resilience yourself.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i manage my time better") {
		BotResponse = "Use a planner or calendar to schedule tasks, prioritize important activities, minimize distractions, delegate when possible, and review and adjust your schedule regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my listening skills") {
		BotResponse = "Practice active listening by giving full attention to the speaker, maintaining eye contact, asking clarifying questions, and paraphrasing to ensure understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with change in the workplace") {
		BotResponse = "Focus on what you can control, stay flexible and adaptable, communicate openly with colleagues, seek support from supervisors or HR, and view change as an opportunity for growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for building rapport with others") {
		BotResponse = "Show genuine interest in others, mirror their body language, use open and positive body language yourself, listen actively, and find common ground.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop my leadership skills") {
		BotResponse = "Lead by example, communicate effectively, delegate tasks appropriately, inspire and motivate others, seek feedback, and continue learning and growing as a leader.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing conflict in relationships") {
		BotResponse = "Listen actively to the other person's perspective, communicate calmly and assertively, seek common ground, compromise when possible, and focus on finding solutions rather than placing blame.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my assertiveness in social situations") {
		BotResponse = "Practice expressing your thoughts and feelings clearly and respectfully, set boundaries and stick to them, and prioritize your own needs and rights without infringing on others'.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance creativity in the workplace") {
		BotResponse = "Encourage brainstorming sessions, create an open and supportive work environment, allow for experimentation and risk-taking, and provide opportunities for professional development and training.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better relationships with my coworkers") {
		BotResponse = "Communicate openly and respectfully, show appreciation for their contributions, collaborate on projects, offer assistance when needed, and cultivate a positive and supportive work environment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing stress at work") {
		BotResponse = "Set realistic goals and priorities, practice time management, take regular breaks, engage in relaxation techniques, seek social support, and communicate concerns with supervisors.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i maintain work life balance") {
		BotResponse = "Set boundaries between work and personal life, prioritize self-care and leisure activities, delegate tasks when possible, and communicate your needs with employers or colleagues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for boosting productivity") {
		BotResponse = "Break tasks into smaller, manageable chunks, eliminate distractions, use time management techniques, prioritize tasks, and take regular breaks to recharge.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build resilience in the face of setbacks") {
		BotResponse = "Focus on solutions rather than dwelling on problems, maintain a positive outlook, seek support from others, learn from failures, and practice self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for improving public speaking skills") {
		BotResponse = "Practice regularly, know your audience and material well, use visual aids if appropriate, focus on engaging delivery, and seek feedback from trusted individuals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome imposter syndrome in the workplace") {
		BotResponse = "Acknowledge your accomplishments and expertise, reframe negative self-talk, seek validation from trusted colleagues, and focus on learning and growing in your role.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve team collaboration") {
		BotResponse = "Promote open communication, establish clear goals and roles, encourage diversity of thought, foster a supportive team culture, and recognize and celebrate team achievements.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my workload effectively") {
		BotResponse = "Prioritize tasks based on urgency and importance, set realistic deadlines, delegate tasks when possible, and communicate workload concerns with supervisors if necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for staying focused at work") {
		BotResponse = "Eliminate distractions, break tasks into smaller chunks, use time-blocking or the Pomodoro Technique, set specific goals, and take regular breaks to maintain concentration.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better problem-solving skills in the workplace") {
		BotResponse = "Analyze problems systematically, consider multiple solutions, seek input from colleagues, anticipate potential obstacles, and evaluate the effectiveness of your solutions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for fostering innovation in a team") {
		BotResponse = "Encourage creativity and risk-taking, create a supportive environment for idea-sharing, provide resources and opportunities for experimentation, and recognize and reward innovative contributions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve my time management skills") {
		BotResponse = "Set specific goals and prioritize tasks, use time management tools such as calendars or to-do lists, minimize distractions, and practice self-discipline.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for building confidence") {
		BotResponse = "Set achievable goals and celebrate your successes, practice self-affirmations, step out of your comfort zone, and seek constructive feedback.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better decision making abilities") {
		BotResponse = "Gather relevant information, weigh the pros and cons of each option, consider potential outcomes, and trust your intuition while making decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for overcoming procrastination") {
		BotResponse = "Break tasks into smaller, manageable steps, set deadlines for each step, eliminate distractions, and hold yourself accountable for completing tasks.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage stress effectively") {
		BotResponse = "Practice relaxation techniques such as deep breathing or meditation, prioritize tasks, set boundaries, seek social support, and maintain a healthy lifestyle.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to boost creativity") {
		BotResponse = "Engage in activities that inspire you, such as brainstorming, exploring new interests, and collaborating with others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better relationships with my colleagues") {
		BotResponse = "Communicate openly and respectfully, show appreciation for their contributions, offer assistance when needed, and cultivate a positive work environment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving communication skills") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, seek to understand others' perspectives, and give and receive constructive feedback.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with failure") {
		BotResponse = "Acknowledge your feelings, reflect on what you can learn from the experience, focus on your strengths and past successes, and persevere in pursuing your goals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to develop a growth mindset") {
		BotResponse = "Embrace challenges as opportunities for learning and growth, persist in the face of setbacks, and view failures as temporary setbacks rather than permanent limitations.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my problem solving skills") {
		BotResponse = "Break problems down into smaller components, consider multiple perspectives, brainstorm potential solutions, and evaluate the effectiveness of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for building resilience") {
		BotResponse = "Cultivate social support networks, maintain a positive outlook, adapt to change, focus on solutions rather than problems, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my emotions effectively") {
		BotResponse = "Practice self-awareness, identify triggers for your emotions, use coping strategies such as deep breathing or mindfulness, and seek support from trusted individuals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance my self esteem") {
		BotResponse = "Focus on your strengths and achievements, practice self-compassion, set realistic goals and celebrate your progress, and surround yourself with supportive people.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better rapport with others") {
		BotResponse = "Show genuine interest in others, listen actively, communicate openly and respectfully, and find common ground to connect on.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing conflicts") {
		BotResponse = "Communicate openly and assertively, listen actively to the other party's perspective, seek compromise, and focus on finding mutually beneficial solutions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i foster a positive mindset") {
		BotResponse = "Practice gratitude, focus on the present moment, challenge negative thoughts with positive affirmations, and surround yourself with uplifting influences.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my listening skills") {
		BotResponse = "Give the speaker your full attention, maintain eye contact, listen without interrupting, and ask clarifying questions to ensure understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better leadership abilities") {
		BotResponse = "Lead by example, communicate effectively, delegate tasks appropriately, inspire and motivate others, and seek feedback to continuously improve.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for building trust in relationships") {
		BotResponse = "Communicate openly and honestly, demonstrate reliability and consistency, respect boundaries, and prioritize empathy and understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve my conflict resolution skills") {
		BotResponse = "Listen actively to all parties involved, identify common goals, seek compromise, and focus on finding mutually beneficial solutions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing anger") {
		BotResponse = "Practice deep breathing exercises, take a timeout to cool off, express your feelings assertively rather than aggressively, and seek professional support if necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better teamwork skills") {
		BotResponse = "Communicate openly and respectfully, collaborate on projects, offer assistance when needed, and foster a supportive team culture.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for effective goal setting") {
		BotResponse = "Set specific, measurable, achievable, relevant, and time-bound (SMART) goals, break them into smaller steps, and track your progress regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better decision making skills") {
		BotResponse = "Gather relevant information, weigh the pros and cons of each option, consider potential outcomes, and trust your intuition while making decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my assertiveness") {
		BotResponse = "Practice expressing your thoughts and feelings clearly and respectfully, set boundaries, and prioritize your own needs and rights without infringing on others'.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my time more effectively") {
		BotResponse = "Use time management techniques such as prioritization, scheduling, and delegation, and minimize distractions to focus on high-priority tasks.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for reducing stress levels") {
		BotResponse = "Practice relaxation techniques such as deep breathing, meditation, or yoga, prioritize tasks, set boundaries, and engage in enjoyable activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my self discipline") {
		BotResponse = "Set clear goals and priorities, create a structured routine, break tasks into manageable steps, and hold yourself accountable for your actions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance my problem solving skills") {
		BotResponse = "Analyze problems systematically, brainstorm potential solutions, consider alternative perspectives, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with rejection") {
		BotResponse = "Acknowledge your feelings, practice self-compassion, learn from the experience, and focus on your strengths and worthiness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for building resilience") {
		BotResponse = "Cultivate social support networks, maintain a positive outlook, adapt to change, focus on solutions rather than problems, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my communication skills") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, seek to understand others' perspectives, and give and receive constructive feedback.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to develop my leadership abilities") {
		BotResponse = "Lead by example, communicate effectively, delegate tasks appropriately, inspire and motivate others, and seek feedback to continuously improve.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better relationships with my coworkers") {
		BotResponse = "Communicate openly and respectfully, show appreciation for their contributions, offer assistance when needed, and cultivate a positive work environment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving productivity") {
		BotResponse = "Set clear goals, prioritize tasks, minimize distractions, and use time management techniques such as the Pomodoro Technique or time blocking.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my emotions in challenging situations") {
		BotResponse = "Practice self-awareness, identify triggers for your emotions, use coping strategies such as deep breathing or mindfulness, and seek support from trusted individuals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to boost my self confidence") {
		BotResponse = "Set achievable goals, celebrate your successes, practice self-affirmations, and focus on your strengths and abilities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome imposter syndrome") {
		BotResponse = "Acknowledge your accomplishments, recognize that many people experience imposter syndrome, seek support from trusted colleagues, and focus on learning and growing in your role.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for fostering teamwork") {
		BotResponse = "Encourage open communication, establish clear goals and roles, foster trust and mutual respect among team members, and celebrate team achievements.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve my problem solving skills") {
		BotResponse = "Break problems down into smaller parts, brainstorm solutions, consider different perspectives, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing anxiety") {
		BotResponse = "Practice deep breathing exercises, progressive muscle relaxation, mindfulness meditation, and challenge negative thoughts with rational thinking.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better time management habits") {
		BotResponse = "Use a planner or calendar to schedule tasks, prioritize important activities, set deadlines, minimize multitasking, and review and adjust your schedule regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for improving self esteem") {
		BotResponse = "Focus on your strengths and accomplishments, practice self-compassion, set realistic goals, surround yourself with supportive people, and challenge negative self-talk.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with feelings of loneliness") {
		BotResponse = "Seek social connection through clubs, groups, or hobbies, reach out to friends or family members, volunteer in your community, and practice self-care activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to overcome perfectionism") {
		BotResponse = "Set realistic expectations, focus on progress rather than perfection, practice self-compassion, and challenge all-or-nothing thinking.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my workload effectively") {
		BotResponse = "Prioritize tasks based on urgency and importance, break larger tasks into smaller, manageable steps, delegate when possible, and avoid overcommitting.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving focus and concentration") {
		BotResponse = "Minimize distractions, use time-blocking or the Pomodoro Technique, take regular breaks, and practice mindfulness meditation to improve concentration.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better assertiveness skills") {
		BotResponse = "Express your thoughts, feelings, and needs clearly and respectfully, set and maintain boundaries, and practice saying 'no' when necessary without feeling guilty.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to manage conflict in relationships") {
		BotResponse = "Communicate openly and empathetically, listen actively to the other person's perspective, seek compromise, and focus on finding solutions rather than placing blame.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my active listening skills") {
		BotResponse = "Give the speaker your full attention, maintain eye contact, nod or provide verbal cues to show you're listening, and summarize or paraphrase their message to ensure understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for setting boundaries") {
		BotResponse = "Identify your limits and needs, communicate them clearly and assertively, enforce consequences for boundary violations, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop resilience in the face of adversity") {
		BotResponse = "Maintain a positive outlook, cultivate social support networks, learn from setbacks, focus on problem-solving, and practice self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving public speaking skills") {
		BotResponse = "Practice regularly, visualize success, use relaxation techniques to manage nerves, and seek feedback from trusted individuals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better rapport with strangers") {
		BotResponse = "Initiate conversations, ask open-ended questions, show genuine interest in the other person, and find common ground to connect on.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for staying motivated") {
		BotResponse = "Set specific, achievable goals, remind yourself of your reasons for pursuing your goals, break tasks into smaller steps, and celebrate your progress along the way.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my emotions during conflicts") {
		BotResponse = "Practice self-awareness to recognize your emotions, take a pause to calm down before responding, express yourself assertively rather than aggressively, and seek resolution.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my problem solving abilities") {
		BotResponse = "Break down problems into smaller components, brainstorm potential solutions, consider alternative perspectives, and evaluate the effectiveness of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better communication skills in the workplace") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, seek to understand others' perspectives, and adapt your communication style to different situations and audiences.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing stress in daily life") {
		BotResponse = "Practice relaxation techniques such as deep breathing or progressive muscle relaxation, set boundaries to protect your time and energy, and engage in enjoyable activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve my self confidence") {
		BotResponse = "Set achievable goals, celebrate your successes, practice self-compassion, and challenge self-doubt with positive affirmations.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for effective communication") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, seek feedback, and adapt your communication style to the situation and audience.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome procrastination") {
		BotResponse = "Break tasks into smaller, manageable steps, set deadlines, minimize distractions, and hold yourself accountable for completing tasks.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my decision making skills") {
		BotResponse = "Gather relevant information, consider the pros and cons of each option, consult with trusted individuals, and trust your intuition.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my stress levels") {
		BotResponse = "Practice relaxation techniques such as deep breathing or meditation, prioritize tasks, set boundaries, and engage in regular physical activity.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for effective time management") {
		BotResponse = "Use a planner or calendar to schedule tasks, prioritize important activities, set deadlines, minimize multitasking, and review and adjust your schedule regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better problem solving abilities") {
		BotResponse = "Break problems down into smaller parts, brainstorm potential solutions, consider alternative perspectives, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing conflicts") {
		BotResponse = "Communicate openly and assertively, listen actively to the other person's perspective, seek compromise, and focus on finding solutions rather than escalating the conflict.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better relationships with others") {
		BotResponse = "Show empathy and understanding, communicate openly and respectfully, listen actively, and prioritize building trust.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to boost my motivation") {
		BotResponse = "Set specific, achievable goals, remind yourself of your reasons for pursuing your goals, break tasks into smaller steps, and reward yourself for progress.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better leadership skills") {
		BotResponse = "Lead by example, communicate effectively, delegate tasks appropriately, inspire and motivate others, and seek feedback to continuously improve.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing time effectively") {
		BotResponse = "Prioritize tasks based on urgency and importance, set realistic deadlines, minimize distractions, and delegate tasks when possible.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with failure and setbacks") {
		BotResponse = "Acknowledge your feelings, learn from the experience, focus on your strengths and resilience, and persevere in pursuing your goals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for building resilience") {
		BotResponse = "Cultivate a positive outlook, maintain social connections, develop problem-solving skills, practice self-care, and seek support from others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my assertiveness skills") {
		BotResponse = "Express your thoughts and feelings clearly and respectfully, set boundaries, and prioritize your own needs without infringing on others'.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance my listening skills") {
		BotResponse = "Give the speaker your full attention, maintain eye contact, nod or provide verbal cues to show you're listening, and avoid interrupting.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my workload more effectively") {
		BotResponse = "Prioritize tasks, break larger projects into smaller, manageable steps, delegate when possible, and communicate workload concerns with supervisors.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving focus") {
		BotResponse = "Minimize distractions, use time-blocking or the Pomodoro Technique, set specific goals, and take regular breaks to maintain concentration.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better problem-solving skills") {
		BotResponse = "Analyze problems systematically, brainstorm potential solutions, consider alternative perspectives, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for building trust in relationships") {
		BotResponse = "Communicate openly and honestly, demonstrate reliability and consistency, respect boundaries, and prioritize empathy and understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve my assertiveness skills") {
		BotResponse = "Practice expressing yourself confidently and respectfully, set boundaries, and prioritize your needs and opinions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing stress at work") {
		BotResponse = "Practice deep breathing, take short breaks, prioritize tasks, set realistic goals, and seek support from colleagues or supervisors.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better decision-making abilities") {
		BotResponse = "Gather relevant information, consider all available options, evaluate the potential outcomes, and trust your instincts.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance my creativity") {
		BotResponse = "Engage in activities that inspire you, take breaks to clear your mind, brainstorm ideas without judgment, and explore new perspectives.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my time more effectively") {
		BotResponse = "Set clear goals, prioritize tasks, minimize distractions, use time-blocking techniques, and delegate tasks when possible.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for building resilience") {
		BotResponse = "Cultivate a positive mindset, seek support from others, practice self-care, learn from setbacks, and adapt to challenges.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my communication skills with my partner") {
		BotResponse = "Practice active listening, express your thoughts and feelings openly and honestly, validate your partner's emotions, and seek solutions together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for effective time management") {
		BotResponse = "Set clear priorities, use tools like calendars or to-do lists, break tasks into smaller steps, and avoid procrastination.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with burnout") {
		BotResponse = "Set boundaries between work and personal life, practice self-care activities, seek support from friends or family, and consider seeking professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my public speaking skills") {
		BotResponse = "Practice regularly, visualize success, focus on connecting with your audience, and seek constructive feedback.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better rapport with my colleagues") {
		BotResponse = "Show interest in their work and experiences, offer help and support, communicate openly and respectfully, and build trust through consistency and reliability.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing workload") {
		BotResponse = "Prioritize tasks based on urgency and importance, set realistic deadlines, delegate tasks when possible, and communicate workload concerns with supervisors.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better problem solving skills") {
		BotResponse = "Break down complex problems into smaller parts, brainstorm potential solutions, consider alternatives, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for fostering creativity in a team") {
		BotResponse = "Encourage open-mindedness, provide opportunities for brainstorming and idea-sharing, celebrate diverse perspectives, and create a supportive environment for experimentation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage conflicts in a team setting") {
		BotResponse = "Facilitate open communication, encourage active listening, seek common ground, and focus on finding mutually beneficial solutions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my networking skills") {
		BotResponse = "Attend industry events and conferences, initiate conversations, ask thoughtful questions, and follow up with contacts.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better leadership qualities") {
		BotResponse = "Lead by example, communicate effectively, empower others, foster teamwork, and continuously seek personal and professional growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing time more efficiently") {
		BotResponse = "Set clear goals, prioritize tasks, use time-blocking or the Eisenhower Matrix, minimize distractions, and review and adjust your schedule regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my negotiation skills") {
		BotResponse = "Prepare thoroughly, listen actively to the other party's perspective, focus on interests rather than positions, and seek win-win solutions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for fostering collaboration in a team") {
		BotResponse = "Establish shared goals and values, encourage open communication and idea-sharing, celebrate teamwork and individual contributions, and provide opportunities for skill development.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve my conflict resolution skills") {
		BotResponse = "Listen actively to all parties involved, identify common goals, seek compromise, and focus on finding mutually beneficial solutions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing anger") {
		BotResponse = "Try deep breathing exercises, take a timeout to cool off, express your feelings assertively, and seek professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "how can i build better teamwork skills") || (input === "how can i build better team work skills")){
		BotResponse = "Communicate openly and respectfully, collaborate on projects, offer assistance when needed, and foster a supportive team culture.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for effective goal setting") {
		BotResponse = "Set specific, measurable, achievable, relevant, and time-bound (SMART) goals, break them into smaller steps, and track your progress regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better decisionmaking skills") {
		BotResponse = "Gather relevant information, weigh the pros and cons of each option, consider potential outcomes, and trust your intuition while making decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my assertiveness") {
		BotResponse = "Practice expressing your thoughts and feelings clearly and respectfully, set boundaries, and prioritize your own needs and rights without infringing on others'.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my time more effectively") {
		BotResponse = "Use time management techniques such as prioritization, scheduling, and delegation, and minimize distractions to focus on high-priority tasks.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for reducing stress levels") {
		BotResponse = "Practice relaxation techniques such as deep breathing, meditation, or yoga, prioritize tasks, set boundaries, and engage in enjoyable activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my self discipline") {
		BotResponse = "Set clear goals and priorities, create a structured routine, break tasks into manageable steps, and hold yourself accountable for your actions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance my problem solving skills") {
		BotResponse = "Analyze problems systematically, brainstorm potential solutions, consider alternative perspectives, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with rejection") {
		BotResponse = "Acknowledge your feelings, practice self-compassion, learn from the experience, and focus on your strengths and worthiness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for building resilience") {
		BotResponse = "Cultivate social support networks, maintain a positive outlook, adapt to change, focus on solutions rather than problems, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my communication skills") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, seek to understand others' perspectives, and give and receive constructive feedback.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to develop my leadership abilities") {
		BotResponse = "Lead by example, communicate effectively, delegate tasks appropriately, inspire and motivate others, and seek feedback to continuously improve.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better relationships with my coworkers") {
		BotResponse = "Communicate openly and respectfully, show appreciation for their contributions, offer assistance when needed, and cultivate a positive work environment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving productivity") {
		BotResponse = "Set clear goals, prioritize tasks, minimize distractions, and use time management techniques such as the Pomodoro Technique or time blocking.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my emotions in challenging situations") {
		BotResponse = "Practice self-awareness, identify triggers for your emotions, use coping strategies such as deep breathing or mindfulness, and seek support from trusted individuals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to boost my self confidence") {
		BotResponse = "Set achievable goals, celebrate your successes, practice self-affirmations, and focus on your strengths and abilities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome imposter syndrome") {
		BotResponse = "Acknowledge your accomplishments, recognize that many people experience imposter syndrome, seek support from trusted colleagues, and focus on learning and growing in your role.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for fostering teamwork") {
		BotResponse = "Encourage open communication, establish clear goals and roles, foster trust and mutual respect among team members, and celebrate team achievements.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve my problem solving skills") {
		BotResponse = "Break problems down into smaller parts, brainstorm solutions, consider different perspectives, and evaluate the outcomes of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing anxiety") {
		BotResponse = "Practice deep breathing exercises, progressive muscle relaxation, mindfulness meditation, and challenge negative thoughts with rational thinking.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better time management habits") {
		BotResponse = "Use a planner or calendar to schedule tasks, prioritize important activities, set deadlines, minimize multitasking, and review and adjust your schedule regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for improving self esteem") {
		BotResponse = "Focus on your strengths and accomplishments, practice self-compassion, set realistic goals, surround yourself with supportive people, and challenge negative self-talk.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with feelings of loneliness") {
		BotResponse = "Seek social connection through clubs, groups, or hobbies, reach out to friends or family members, volunteer in your community, and practice self-care activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to overcome perfectionism") {
		BotResponse = "Set realistic expectations, focus on progress rather than perfection, practice self-compassion, and challenge all-or-nothing thinking.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my workload effectively") {
		BotResponse = "Prioritize tasks based on urgency and importance, break larger tasks into smaller, manageable steps, delegate when possible, and avoid overcommitting.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving focus and concentration") {
		BotResponse = "Minimize distractions, use time-blocking or the Pomodoro Technique, take regular breaks, and practice mindfulness meditation to improve concentration.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better assertiveness skills") {
		BotResponse = "Express your thoughts, feelings, and needs clearly and respectfully, set and maintain boundaries, and practice saying 'no' when necessary without feeling guilty.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to manage conflict in relationships") {
		BotResponse = "Communicate openly and empathetically, listen actively to the other person's perspective, seek compromise, and focus on finding solutions rather than placing blame.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my active listening skills") {
		BotResponse = "Give the speaker your full attention, maintain eye contact, nod or provide verbal cues to show you're listening, and summarize or paraphrase their message to ensure understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for setting boundaries") {
		BotResponse = "Identify your limits and needs, communicate them clearly and assertively, enforce consequences for boundary violations, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop resilience in the face of adversity") {
		BotResponse = "Maintain a positive outlook, cultivate social support networks, learn from setbacks, focus on problem-solving, and practice self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for improving public speaking skills") {
		BotResponse = "Practice regularly, visualize success, use relaxation techniques to manage nerves, and seek feedback from trusted individuals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build better rapport with strangers") {
		BotResponse = "Initiate conversations, ask open-ended questions, show genuine interest in the other person, and find common ground to connect on.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for staying motivated") {
		BotResponse = "Set specific, achievable goals, remind yourself of your reasons for pursuing your goals, break tasks into smaller steps, and celebrate your progress along the way.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage my emotions during conflicts") {
		BotResponse = "Practice self-awareness to recognize your emotions, take a pause to calm down before responding, express yourself assertively rather than aggressively, and seek resolution.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve my problem solving abilities") {
		BotResponse = "Break down problems into smaller components, brainstorm potential solutions, consider alternative perspectives, and evaluate the effectiveness of your decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i develop better communication skills in the workplace") {
		BotResponse = "Practice active listening, express yourself clearly and assertively, seek to understand others' perspectives, and adapt your communication style to different situations and audiences.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some techniques for managing stress in daily life") {
		BotResponse = "Practice relaxation techniques such as deep breathing or progressive muscle relaxation, set boundaries to protect your time and energy, and engage in enjoyable activities.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i cope with suicidal thoughts") {
		BotResponse = "Reach out for help immediately, talk to someone you trust, call a suicide hotline, create a safety plan, and avoid isolation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do when i feel like giving up on life") {
		BotResponse = "Remind yourself that your feelings are temporary, seek professional help, engage in activities you enjoy, and focus on taking things one day at a time.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find hope when i feel hopeless") {
		BotResponse = "Practice self-compassion, connect with supportive friends or family, engage in activities that bring you joy, and seek professional counseling or therapy.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to cope with overwhelming sadness") {
		BotResponse = "Allow yourself to feel your emotions, reach out for support, engage in self-care activities, and remind yourself that it's okay to ask for help.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i stay safe when im having suicidal thoughts") {
		BotResponse = "Remove any access to means of self-harm, stay with someone you trust, call a crisis helpline, and seek immediate medical attention if necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if i feel like i can't go on anymore") {
		BotResponse = "Talk to someone about how you're feeling, reach out to a mental health professional, and remember that there is hope and help available.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome thoughts of self-harm") {
		BotResponse = "Distract yourself with activities you enjoy, talk to a trusted friend or family member, seek professional help, and create a safety plan.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do when i feel like life isnt worth living") {
		BotResponse = "Reach out for support from loved ones or a mental health professional, engage in self-care activities, and remember that your life has value.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage suicidal urges") {
		BotResponse = "Identify triggers for your urges, practice coping skills such as deep breathing or mindfulness, and reach out for support from a trusted individual or professional.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for dealing with suicidal ideation") {
		BotResponse = "Challenge negative thoughts, distract yourself with activities or hobbies, connect with others, and seek professional help.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find hope during dark times") {
		BotResponse = "Remind yourself that things can improve, focus on small positive changes, reach out for support, and seek professional help.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if im feeling suicidal") {
		BotResponse = "Seek help immediately by calling a crisis hotline, reaching out to a trusted friend or family member, or going to the nearest emergency room.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with thoughts of ending my life") {
		BotResponse = "Acknowledge your feelings without judgment, reach out for support, engage in activities that bring you comfort, and seek professional help.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to keep myself safe when feeling suicidal") {
		BotResponse = "Remove any access to means of self-harm, stay with someone you trust, call a crisis helpline, and seek immediate medical attention if necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome the urge to harm myself") {
		BotResponse = "Distract yourself with activities you enjoy, reach out for support from a trusted friend or family member, and seek professional help.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to feel better when im struggling with suicidal thoughts") {
		BotResponse = "Reach out to a mental health professional, talk to a trusted friend or family member, engage in self-care activities, and focus on things that bring you comfort.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with feeling overwhelmed by suicidal thoughts") {
		BotResponse = "Break tasks down into smaller, manageable steps, reach out for support, practice relaxation techniques, and remember that you're not alone.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if i feel like giving up on life") {
		BotResponse = "Reach out to someone you trust, call a suicide hotline, create a safety plan, and seek professional help.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find hope when i feel hopeless") {
		BotResponse = "Connect with supportive individuals, engage in activities that bring you joy, seek professional help, and remember that things can get better.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do when suicidal thoughts become overwhelming") {
		BotResponse = "Remind yourself that your thoughts don't define you, reach out for support, engage in self-care activities, and seek professional help.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i cope with suicidal feelings") {
		BotResponse = "Reach out for support from loved ones or a mental health professional, engage in self-care activities, and focus on reasons to stay alive.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do when i feel like giving up on life") {
		BotResponse = "Remind yourself that your feelings are temporary, reach out to someone you trust, and seek professional help to explore coping strategies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find hope when i feel hopeless") {
		BotResponse = "Connect with supportive individuals, engage in activities that bring you joy, and seek therapy to explore ways to find hope and purpose.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to cope with overwhelming sadness") {
		BotResponse = "Allow yourself to feel your emotions, reach out for support, engage in self-soothing activities, and consider therapy to explore the underlying causes.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i stay safe when im having suicidal thoughts") {
		BotResponse = "Remove any access to means of self-harm, stay with someone you trust, and reach out to a mental health professional or hotline for immediate support.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if i feel like i cant go on anymore") {
		BotResponse = "Talk to someone about how you're feeling, reach out to a mental health professional, and explore coping strategies to manage your distress.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome thoughts of self-harm") {
		BotResponse = "Distract yourself with activities you enjoy, reach out to a trusted friend or family member, and seek professional help to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do when i feel like life isnt worth living") {
		BotResponse = "Reach out for support from loved ones or a mental health professional, engage in self-care activities, and explore ways to find meaning and purpose in life.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage suicidal urges") {
		BotResponse = "Identify triggers for your urges, practice coping skills such as deep breathing or mindfulness, and reach out for support from a mental health professional.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for dealing with suicidal ideation") {
		BotResponse = "Challenge negative thoughts, distract yourself with positive activities, and seek support from a therapist or support group.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find hope during dark times") {
		BotResponse = "Remind yourself that feelings are temporary, connect with supportive individuals, and seek professional help to explore ways to find hope.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if im feeling suicidal") {
		BotResponse = "Reach out for help immediately by calling a crisis hotline, talking to a trusted friend or family member, or going to the nearest emergency room.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with thoughts of ending my life") {
		BotResponse = "Acknowledge your feelings without judgment, reach out for support, engage in activities that bring you comfort, and explore treatment options with a mental health professional.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to keep myself safe when feeling suicidal") {
		BotResponse = "Remove access to means of self-harm, stay with someone you trust, and reach out to a mental health professional or crisis hotline for support.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome the urge to harm myself") {
		BotResponse = "Distract yourself with positive activities, reach out for support from trusted individuals, and seek professional help to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to feel better when im struggling with suicidal thoughts") {
		BotResponse = "Reach out for support from loved ones or a mental health professional, engage in self-care activities, and explore treatment options to address your distress.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with feeling overwhelmed by suicidal thoughts") {
		BotResponse = "Take one step at a time, reach out for support, engage in self-care activities, and explore therapy to address the underlying causes of your distress.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what should i do if i feel like giving up on life") {
		BotResponse = "Talk to someone about how you're feeling, reach out to a mental health professional, and explore coping strategies to manage your distress.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find hope when i feel hopeless") {
		BotResponse = "Remind yourself that feelings are temporary, connect with supportive individuals, and seek professional help to explore ways to find hope.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do when suicidal thoughts become overwhelming") {
		BotResponse = "Reach out for support, engage in self-care activities, and explore treatment options with a mental health professional to address your distress.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i resist the temptation of adultery") {
		BotResponse = "Reflect on the consequences of your actions, strengthen your commitment to your partner, communicate openly about your feelings, and seek support from a therapist if necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to stay faithful in my relationship") {
		BotResponse = "Focus on building trust and intimacy with your partner, communicate openly about your needs and desires, avoid situations that may lead to temptation, and prioritize your commitment to your relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen my relationship and avoid infidelity") {
		BotResponse = "Invest time and effort into your relationship, prioritize communication and emotional connection, address any issues or concerns openly and honestly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for resisting the urge to cheat") {
		BotResponse = "Identify triggers for temptation, practice self-awareness and self-control, focus on the positive aspects of your relationship, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i rebuild trust in my relationship after infidelity") {
		BotResponse = "Take responsibility for your actions, express genuine remorse, commit to open and honest communication, and be patient and consistent in rebuilding trust over time.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to prevent infidelity in my marriage") {
		BotResponse = "Prioritize your relationship, maintain open communication with your partner, set boundaries and expectations, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address feelings of attraction outside my relationship") {
		BotResponse = "Acknowledge your feelings without acting on them, examine the reasons behind your attraction, communicate openly with your partner about your feelings, and seek support from a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to strengthen emotional intimacy in my relationship") {
		BotResponse = "Engage in deep and meaningful conversations, express appreciation and affection regularly, prioritize quality time together, and be empathetic and supportive towards your partner.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i prevent infidelity in my relationship") {
		BotResponse = "Communicate openly and honestly with your partner, set boundaries and expectations, prioritize your commitment to your relationship, and seek support from a therapist if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to strengthen my commitment to my partner") {
		BotResponse = "Remind yourself of the reasons you're committed to your partner, focus on building trust and intimacy, prioritize your relationship, and communicate openly about your feelings.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address temptation and stay faithful to my partner") {
		BotResponse = "Recognize the consequences of infidelity, focus on the positive aspects of your relationship, avoid situations that may lead to temptation, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for rebuilding trust after infidelity") {
		BotResponse = "Be honest and transparent, demonstrate remorse and willingness to change, communicate openly and empathetically, and seek couples therapy to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen communication in my relationship to prevent infidelity") {
		BotResponse = "Practice active listening, express your thoughts and feelings openly, be empathetic towards your partner's perspective, and address any issues or concerns promptly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to avoid cheating on my partner") {
		BotResponse = "Focus on your commitment to your partner, avoid situations that may lead to temptation, communicate openly about your feelings and needs, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i rebuild my relationship after infidelity") {
		BotResponse = "Take responsibility for your actions, express genuine remorse, commit to rebuilding trust and intimacy, and seek couples therapy to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to prevent infidelity in a long-distance relationship") {
		BotResponse = "Maintain open and honest communication, establish trust and commitment, prioritize quality time together, and address any concerns or insecurities openly and empathetically.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist temptation and stay loyal to my partner") {
		BotResponse = "Remind yourself of your commitment to your partner, avoid situations that may lead to temptation, communicate openly about your feelings, and seek support from a therapist if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to strengthen my marriage and prevent infidelity") {
		BotResponse = "Invest time and effort into your relationship, prioritize open communication and emotional connection, address any issues or concerns promptly, and seek couples therapy to strengthen your bond.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address feelings of dissatisfaction in my relationship without resorting to infidelity") {
		BotResponse = "Communicate openly and honestly with your partner about your feelings, identify areas for improvement, work together to find solutions, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for resisting the urge to cheat on my partner") {
		BotResponse = "Identify the underlying reasons for your urges, practice self-awareness and self-control, focus on strengthening your relationship, and seek support from a therapist or support group.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i stay committed to my partner and avoid cheating") {
		BotResponse = "Focus on the love and connection you share with your partner, communicate openly about your needs and desires, seek support from trusted friends or a therapist, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to strengthen my relationship and prevent infidelity") {
		BotResponse = "Invest time and effort into building trust and intimacy, prioritize open communication and mutual respect, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the temptation of cheating on my partner") {
		BotResponse = "Remind yourself of the commitment you made to your partner, focus on the consequences of infidelity, avoid situations that may lead to temptation, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for staying faithful in a long-distance relationship") {
		BotResponse = "Maintain regular communication with your partner, prioritize trust and commitment, make plans to spend quality time together, and address any concerns or insecurities openly and empathetically.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i rebuild trust after betraying my partners trust") {
		BotResponse = "Take responsibility for your actions, express genuine remorse and willingness to change, commit to rebuilding trust through consistent and transparent behavior, and seek couples therapy to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to prevent infidelity in my marriage") {
		BotResponse = "Prioritize your commitment to your partner, maintain open and honest communication, set boundaries and expectations, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address temptation and remain loyal to my partner") {
		BotResponse = "Remind yourself of the love and commitment you share with your partner, avoid situations that may lead to temptation, communicate openly about your feelings, and seek support from a therapist if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to strengthen emotional intimacy in my relationship") {
		BotResponse = "Engage in deep and meaningful conversations, express appreciation and affection regularly, prioritize quality time together, and be empathetic and supportive towards your partner.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the urge to cheat on my partner") {
		BotResponse = "Identify triggers for temptation, practice self-awareness and self-control, focus on the positive aspects of your relationship, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to rebuild my relationship after infidelity") {
		BotResponse = "Take responsibility for your actions, express genuine remorse, commit to open and honest communication, and seek couples therapy to address underlying issues and rebuild trust.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address feelings of attraction to someone other than my partner") {
		BotResponse = "Acknowledge your feelings without acting on them, examine the reasons behind your attraction, communicate openly with your partner about your feelings, and seek support from a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for maintaining fidelity in my relationship") {
		BotResponse = "Focus on building trust and intimacy with your partner, communicate openly about your needs and desires, avoid situations that may lead to temptation, and prioritize your commitment to your relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the urge to cheat when feeling dissatisfied in my relationship") {
		BotResponse = "Communicate openly and honestly with your partner about your feelings, identify areas for improvement, work together to find solutions, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to prevent infidelity in my relationship") {
		BotResponse = "Maintain open and honest communication, prioritize your commitment to your partner, set boundaries and expectations, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i rebuild trust in my relationship after cheating") {
		BotResponse = "Take responsibility for your actions, express genuine remorse and willingness to change, commit to rebuilding trust through consistent and transparent behavior, and seek couples therapy to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to prevent infidelity in a long term relationship") {
		BotResponse = "Prioritize communication and emotional connection with your partner, address any issues or concerns promptly, set boundaries and expectations, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the temptation of cheating on my partner") {
		BotResponse = "Reflect on the consequences of your actions, strengthen your commitment to your partner, communicate openly about your feelings, and seek support from a therapist if necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to stay faithful in my relationship") {
		BotResponse = "Focus on building trust and intimacy with your partner, communicate openly about your needs and desires, avoid situations that may lead to temptation, and prioritize your commitment to your relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen my relationship and avoid infidelity") {
		BotResponse = "Invest time and effort into your relationship, prioritize communication and emotional connection, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for resisting the urge to cheat") {
		BotResponse = "Identify triggers for temptation, practice self-awareness and self-control, focus on the positive aspects of your relationship, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i resist the temptation of adultery") {
		BotResponse = "Remind yourself of the commitment you made to your partner, focus on the consequences of infidelity, seek support from trusted friends or a therapist, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to strengthen my relationship and avoid infidelity") {
		BotResponse = "Invest time and effort into building trust and intimacy, prioritize open communication and mutual respect, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i remain faithful in my relationship and resist the urge to cheat") {
		BotResponse = "Focus on the love and connection you share with your partner, communicate openly about your needs and desires, avoid situations that may lead to temptation, and seek support from a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for maintaining fidelity in a long term relationship") {
		BotResponse = "Prioritize communication and emotional connection with your partner, set boundaries and expectations, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i rebuild trust after betraying my partners trust") {
		BotResponse = "Take responsibility for your actions, express genuine remorse and commitment to change, be patient and consistent in rebuilding trust, and seek couples therapy to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to prevent infidelity in my marriage") {
		BotResponse = "Maintain open and honest communication, prioritize your commitment to your partner, set boundaries and expectations, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address temptation and stay loyal to my partner") {
		BotResponse = "Remind yourself of the love and commitment you share with your partner, avoid situations that may lead to temptation, communicate openly about your feelings, and seek support from a therapist if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to strengthen emotional intimacy in my relationship") {
		BotResponse = "Engage in deep and meaningful conversations, express appreciation and affection regularly, prioritize quality time together, and be empathetic and supportive towards your partner.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the urge to cheat when feeling dissatisfied in my relationship") {
		BotResponse = "Communicate openly and honestly with your partner about your feelings, identify areas for improvement, work together to find solutions, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to rebuild my relationship after infidelity") {
		BotResponse = "Take responsibility for your actions, express genuine remorse, commit to open and honest communication, and seek couples therapy to address underlying issues and rebuild trust.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address feelings of attraction to someone other than my partner") {
		BotResponse = "Acknowledge your feelings without acting on them, examine the reasons behind your attraction, communicate openly with your partner about your feelings, and seek support from a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for resisting the urge to cheat") {
		BotResponse = "Identify triggers for temptation, practice self-awareness and self-control, focus on the positive aspects of your relationship, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i prevent infidelity in my relationship") {
		BotResponse = "Maintain open and honest communication, prioritize your commitment to your partner, set boundaries and expectations, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to rebuild trust in my relationship after cheating") {
		BotResponse = "Take responsibility for your actions, express genuine remorse and willingness to change, commit to rebuilding trust through consistent and transparent behavior, and seek couples therapy to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the temptation of cheating on my partner") {
		BotResponse = "Reflect on the consequences of your actions, strengthen your commitment to your partner, communicate openly about your feelings, and seek support from a therapist if necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to stay faithful in my relationship") {
		BotResponse = "Focus on building trust and intimacy with your partner, communicate openly about your needs and desires, avoid situations that may lead to temptation, and prioritize your commitment to your relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen my relationship and avoid infidelity") {
		BotResponse = "Invest time and effort into your relationship, prioritize communication and emotional connection, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for resisting the urge to cheat") {
		BotResponse = "Identify triggers for temptation, practice self-awareness and self-control, focus on the positive aspects of your relationship, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the temptation of adultery") {
		BotResponse = "Remind yourself of the commitment you made to your partner, focus on the consequences of infidelity, seek support from trusted friends or a therapist, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i resist the temptation of adultery") {
		BotResponse = "Remind yourself of the commitment you made to your partner, focus on the consequences of infidelity, seek support from trusted friends or a therapist, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to strengthen my relationship and avoid infidelity") {
		BotResponse = "Invest time and effort into building trust and intimacy, prioritize open communication and mutual respect, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i remain faithful in my relationship and resist the urge to cheat") {
		BotResponse = "Focus on the love and connection you share with your partner, communicate openly about your needs and desires, avoid situations that may lead to temptation, and seek support from a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for maintaining fidelity in a long-term relationship") {
		BotResponse = "Prioritize communication and emotional connection with your partner, set boundaries and expectations, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i rebuild trust after betraying my partners trust") {
		BotResponse = "Take responsibility for your actions, express genuine remorse and commitment to change, be patient and consistent in rebuilding trust, and seek couples therapy to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to prevent infidelity in my marriage") {
		BotResponse = "Maintain open and honest communication, prioritize your commitment to your partner, set boundaries and expectations, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address temptation and stay loyal to my partner") {
		BotResponse = "Remind yourself of the love and commitment you share with your partner, avoid situations that may lead to temptation, communicate openly about your feelings, and seek support from a therapist if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to strengthen emotional intimacy in my relationship") {
		BotResponse = "Engage in deep and meaningful conversations, express appreciation and affection regularly, prioritize quality time together, and be empathetic and supportive towards your partner.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the urge to cheat when feeling dissatisfied in my relationship") {
		BotResponse = "Communicate openly and honestly with your partner about your feelings, identify areas for improvement, work together to find solutions, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to rebuild my relationship after infidelity") {
		BotResponse = "Take responsibility for your actions, express genuine remorse, commit to open and honest communication, and seek couples therapy to address underlying issues and rebuild trust.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i address feelings of attraction to someone other than my partner") {
		BotResponse = "Acknowledge your feelings without acting on them, examine the reasons behind your attraction, communicate openly with your partner about your feelings, and seek support from a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for resisting the urge to cheat") {
		BotResponse = "Identify triggers for temptation, practice self-awareness and self-control, focus on the positive aspects of your relationship, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i prevent infidelity in my relationship") {
		BotResponse = "Maintain open and honest communication, prioritize your commitment to your partner, set boundaries and expectations, and avoid situations that may lead to temptation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to rebuild trust in my relationship after cheating") {
		BotResponse = "Take responsibility for your actions, express genuine remorse and willingness to change, commit to rebuilding trust through consistent and transparent behavior, and seek couples therapy to address underlying issues.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the temptation of cheating on my partner") {
		BotResponse = "Reflect on the consequences of your actions, strengthen your commitment to your partner, communicate openly about your feelings, and seek support from a therapist if necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to stay faithful in my relationship") {
		BotResponse = "Focus on building trust and intimacy with your partner, communicate openly about your needs and desires, avoid situations that may lead to temptation, and prioritize your commitment to your relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen my relationship and avoid infidelity") {
		BotResponse = "Invest time and effort into your relationship, prioritize communication and emotional connection, address any issues or concerns promptly, and seek couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for resisting the urge to cheat") {
		BotResponse = "Identify triggers for temptation, practice self-awareness and self-control, focus on the positive aspects of your relationship, and seek support from trusted friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i resist the urge to steal") {
		BotResponse = "Consider the consequences of your actions on yourself and others, seek help from a trusted friend or therapist, find healthier ways to cope with difficult emotions, and focus on building trust and integrity.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to overcome the temptation to steal") {
		BotResponse = "Practice self-awareness and impulse control, remind yourself of your values and the importance of respecting others' property, seek support from a mentor or counselor, and find positive outlets for your energy and emotions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i prevent myself from stealing") {
		BotResponse = "Avoid situations where stealing may be tempting, focus on gratitude for what you have, seek assistance from a therapist or support group, and find healthy ways to address any underlying issues such as stress or financial strain.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for overcoming the urge to steal") {
		BotResponse = "Challenge the thoughts that lead to stealing, find alternative ways to meet your needs or desires, surround yourself with positive influences, and seek professional help if you're struggling to control your impulses.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist stealing when i feel tempted") {
		BotResponse = "Pause and think about the consequences of stealing, distract yourself with a different activity, remind yourself of your values and the impact of your actions, and seek support from someone you trust.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to stop myself from stealing") {
		BotResponse = "Identify triggers that lead to stealing behavior, develop coping strategies to deal with stress or negative emotions, seek professional help if needed, and focus on building healthier habits and relationships.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome the temptation to steal") {
		BotResponse = "Focus on the negative consequences of stealing, find alternative ways to fulfill your needs or desires, seek support from a therapist or counselor, and practice self-compassion and forgiveness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to resist stealing") {
		BotResponse = "Remind yourself of the value of honesty and integrity, find healthy outlets for stress or frustration, seek support from friends or family, and consider the impact of your actions on others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i control my urge to steal") {
		BotResponse = "Identify the underlying reasons for your urge to steal, develop alternative coping strategies, seek professional help if needed, and focus on building self-discipline and self-control.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to resist the temptation to steal") {
		BotResponse = "Pause and think about the consequences of your actions, find alternative ways to meet your needs or desires, seek support from someone you trust, and practice self-compassion and forgiveness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist stealing when im tempted") {
		BotResponse = "Challenge the thoughts that lead to stealing behavior, remind yourself of your values and the consequences of stealing, find healthy ways to cope with stress or negative emotions, and seek support from others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for avoiding theft") {
		BotResponse = "Stay away from situations where stealing may be tempting, focus on gratitude for what you have, seek assistance from a therapist or support group, and find positive outlets for your energy and emotions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i overcome the urge to steal") {
		BotResponse = "Identify triggers for your urge to steal, find healthier ways to cope with stress or negative emotions, seek support from friends or family, and consider the consequences of your actions on yourself and others.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to stop stealing") {
		BotResponse = "Develop alternative coping strategies for dealing with stress or difficult emotions, seek professional help if needed, surround yourself with positive influences, and focus on building self-esteem and self-worth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist the temptation to steal") {
		BotResponse = "Remind yourself of the consequences of stealing, find alternative ways to fulfill your needs or desires, seek support from a therapist or counselor, and practice mindfulness and self-awareness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to resist the urge to steal") {
		BotResponse = "Reflect on the impact of stealing on yourself and others, find healthy outlets for stress or frustration, seek support from trusted individuals, and consider seeking professional help if the urge persists.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i control my urge to steal") {
		BotResponse = "Identify triggers for your urge to steal, develop coping strategies such as deep breathing or mindfulness, seek support from friends or family, and consider the long-term consequences of stealing.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to resist stealing") {
		BotResponse = "Remind yourself of your values and the consequences of stealing, find alternative ways to meet your needs or desires, seek support from trusted individuals, and practice self-compassion and forgiveness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i resist stealing when i feel tempted") {
		BotResponse = "Pause and reflect on the consequences of stealing, distract yourself with a different activity, seek support from someone you trust, and find healthy ways to cope with stress or negative emotions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for overcoming the temptation to steal") {
		BotResponse = "Challenge the thoughts that lead to stealing behavior, find alternative ways to fulfill your needs or desires, seek support from a therapist or counselor, and practice self-care and stress management techniques.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i motivate myself to achieve my goals") {
		BotResponse = "Break your goals into smaller, manageable tasks, visualize your success, celebrate your progress, seek inspiration from role models, and remind yourself of the reasons why you set those goals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to stay motivated and focused") {
		BotResponse = "Create a clear plan of action, establish a routine, eliminate distractions, practice positive self-talk, and reward yourself for reaching milestones along the way.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i maintain motivation during challenging times") {
		BotResponse = "Focus on your long-term vision, find support from friends or mentors, practice resilience and adaptability, break tasks into smaller steps, and celebrate your progress, no matter how small.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for staying motivated") {
		BotResponse = "Set specific, achievable goals, surround yourself with supportive people, visualize success, track your progress, and stay committed to your personal growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i boost my motivation when i feel demotivated") {
		BotResponse = "Reflect on your accomplishments, revisit your goals and reasons for pursuing them, seek inspiration from motivational books or videos, practice self-care, and break tasks into smaller, more manageable steps.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to increase my motivation levels") {
		BotResponse = "Set inspiring and realistic goals, create a supportive environment, visualize success, challenge negative thoughts, and practice gratitude for the progress you've made.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i find motivation when i feel stuck") {
		BotResponse = "Explore new perspectives and approaches, seek guidance from others, take breaks to recharge, focus on the progress you've already made, and remind yourself of the potential rewards of achieving your goals.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to stay motivated and positive") {
		BotResponse = "Practice self-affirmation, set SMART goals (Specific, Measurable, Achievable, Relevant, Time-bound), visualize success, surround yourself with positive influences, and focus on the present moment.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i maintain my motivation over the long term") {
		BotResponse = "Regularly review and adjust your goals, stay connected to your passions and values, cultivate a growth mindset, seek continuous learning and improvement, and celebrate your achievements along the way.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to motivate myself daily") {
		BotResponse = "Start your day with positive affirmations, set small daily goals, maintain a routine, surround yourself with inspiring content, and reflect on your progress and achievements each day.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i stay motivated when facing setbacks") {
		BotResponse = "Focus on what you've learned from setbacks, stay flexible and adaptable, seek support from others, maintain a positive attitude, and remind yourself of your long-term goals and vision.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for boosting motivation") {
		BotResponse = "Set clear and meaningful goals, break tasks into smaller steps, reward yourself for progress, find inspiration from successful individuals, and surround yourself with supportive peers.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i regain motivation after a setback") {
		BotResponse = "Give yourself time to process the setback, focus on what you can control, seek support from friends or mentors, revisit your goals and reasons for pursuing them, and take small, positive steps forward.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to stay motivated when facing challenges") {
		BotResponse = "Break challenges into smaller, manageable tasks, remind yourself of your strengths and past successes, seek support from others, maintain a positive attitude, and stay focused on your long-term vision.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i motivate myself when feeling uninspired") {
		BotResponse = "Explore new interests or hobbies, set exciting new goals, seek inspiration from books or podcasts, connect with supportive communities, and practice self-compassion and patience with yourself.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to stay motivated when feeling demotivated") {
		BotResponse = "Reconnect with your purpose and values, set new goals or revisit existing ones, break tasks into smaller, more manageable steps, seek support and encouragement from others, and practice self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i maintain motivation during challenging times") {
		BotResponse = "Focus on your long-term vision, find support from friends or mentors, practice resilience and adaptability, break tasks into smaller steps, and celebrate your progress, no matter how small.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for staying motivated") {
		BotResponse = "Set specific, achievable goals, surround yourself with supportive people, visualize success, track your progress, and stay committed to your personal growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i boost my motivation when i feel demotivated") {
		BotResponse = "Reflect on your accomplishments, revisit your goals and reasons for pursuing them, seek inspiration from motivational books or videos, practice self-care, and break tasks into smaller, more manageable steps.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to increase my motivation levels") {
		BotResponse = "Set inspiring and realistic goals, create a supportive environment, visualize success, challenge negative thoughts, and practice gratitude for the progress you've made.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i show respect to my parents") {
		BotResponse = "Listen to them attentively, express gratitude for their efforts, follow their rules and guidelines, help them with household chores, and treat them with kindness and patience.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to demonstrate respect for my parents") {
		BotResponse = "Communicate with them respectfully, seek their advice and guidance, appreciate their sacrifices, spend quality time with them, and honor their wishes and decisions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i be more respectful towards my parents") {
		BotResponse = "Listen to their perspectives without judgment, acknowledge their wisdom and life experience, show empathy and understanding, communicate openly and honestly, and express appreciation for their love and support.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to honor my parents") {
		BotResponse = "Celebrate special occasions like birthdays and anniversaries, express your love and gratitude regularly, involve them in important decisions, treat them with kindness and patience, and prioritize spending time with them.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i show appreciation to my parents") {
		BotResponse = "Write them a heartfelt letter expressing your gratitude, spend quality time with them doing activities they enjoy, offer to help them with tasks or errands, and verbally express your appreciation for all they do.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to express gratitude to my parents") {
		BotResponse = "Say 'thank you' often for their support and guidance, offer to help them without being asked, show interest in their lives and experiences, and make an effort to spend quality time with them.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve my relationship with my parents") {
		BotResponse = "Communicate openly and honestly, listen to their perspective with empathy, show appreciation for their efforts, spend quality time together, and work together to resolve conflicts calmly and respectfully.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to strengthen my bond with my parents") {
		BotResponse = "Initiate meaningful conversations with them, actively listen to their stories and advice, make time for regular family activities, express your love and appreciation, and prioritize maintaining a positive and supportive relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i be a better child to my parents") {
		BotResponse = "Communicate openly and respectfully, show appreciation for their efforts and sacrifices, take responsibility for your actions, follow their rules and guidelines, and make an effort to understand their perspective.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to be more respectful towards my parents") {
		BotResponse = "Listen to their advice and guidance, show appreciation for their sacrifices, follow their rules and guidelines, communicate openly and honestly, and treat them with kindness and patience.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i honor my parents wishes and decisions") {
		BotResponse = "Respect their autonomy and independence, consider their perspective and reasoning, communicate openly and honestly about your thoughts and feelings, and find compromises that align with both your needs and theirs.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to show my parents that i respect them") {
		BotResponse = "Listen to them attentively without interrupting, express gratitude for their love and support, follow their rules and guidelines, communicate respectfully, and treat them with kindness and consideration.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i demonstrate my respect for my parents") {
		BotResponse = "Show appreciation for their efforts and sacrifices, listen to their advice and guidance, help them with tasks or errands, communicate openly and honestly, and treat them with kindness and empathy.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to show appreciation and respect to my parents") {
		BotResponse = "Express gratitude for their love and support, actively listen to their perspectives, offer to help them with tasks or errands, communicate openly and respectfully, and spend quality time with them.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i be more respectful towards my parents wishes") {
		BotResponse = "Listen to their reasoning and perspective, consider the impact of your actions on them, communicate openly and honestly about your thoughts and feelings, and find compromises that respect both your needs and theirs.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to honor my parents efforts and sacrifices") {
		BotResponse = "Express gratitude for all they've done for you, acknowledge their sacrifices and contributions, help them with tasks or errands, spend quality time with them, and communicate your appreciation regularly.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen my relationship with my parents") {
		BotResponse = "Communicate openly and honestly, show appreciation for their efforts and sacrifices, spend quality time together, actively listen to their perspectives, and work together to resolve conflicts respectfully.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to show my parents that i value and respect them") {
		BotResponse = "Express gratitude for their love and support, listen to their perspectives with empathy, follow their guidance and rules, help them with tasks or errands, and make an effort to understand their point of view.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i be a better child to my parents") {
		BotResponse = "Communicate openly and respectfully, show appreciation for their efforts and sacrifices, take responsibility for your actions, follow their guidance and rules, and make time to spend with them.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to strengthen my bond with my parents") {
		BotResponse = "Initiate meaningful conversations, spend quality time together, express your love and appreciation, actively listen to their perspectives, and work together to overcome challenges as a family.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i manage stress effectively") {
		BotResponse = "Practice relaxation techniques such as deep breathing and meditation, prioritize tasks and set realistic goals, take breaks to recharge, exercise regularly, and seek support from friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for coping with stress") {
		BotResponse = "Identify stress triggers and develop coping strategies, practice mindfulness and relaxation techniques, maintain a healthy lifestyle, seek social support, and consider seeking professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce stress in my life") {
		BotResponse = "Set boundaries and prioritize self-care, practice time management and organization, delegate tasks when possible, engage in activities you enjoy, and learn to say 'no' when necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to alleviate stress") {
		BotResponse = "Engage in physical activity, practice relaxation techniques, maintain a healthy lifestyle, seek social support, and consider talking to a therapist or counselor for additional coping strategies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with stress more effectively") {
		BotResponse = "Develop healthy coping mechanisms such as exercise and relaxation techniques, practice self-compassion and positive self-talk, seek support from friends and loved ones, and set realistic expectations for yourself.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to manage stress") {
		BotResponse = "Prioritize self-care activities, practice mindfulness and relaxation techniques, set boundaries and say 'no' when necessary, seek social support, and seek professional help if stress becomes overwhelming.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i handle stress better") {
		BotResponse = "Identify stressors and develop coping strategies, practice relaxation techniques such as deep breathing and progressive muscle relaxation, maintain a healthy lifestyle, and seek support from friends or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress more effectively") {
		BotResponse = "Prioritize tasks and set realistic goals, practice time management and organization, engage in regular physical activity, seek social support, and consider seeking professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce stress levels in my daily life") {
		BotResponse = "Identify sources of stress and work on addressing them, practice relaxation techniques such as deep breathing and meditation, engage in enjoyable activities, maintain a healthy lifestyle, and seek support from loved ones.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some strategies for managing stress effectively") {
		BotResponse = "Develop healthy coping mechanisms, practice relaxation techniques, prioritize self-care activities, seek social support, and consider seeking professional help if stress becomes overwhelming.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with stress better") {
		BotResponse = "Practice stress management techniques such as deep breathing and mindfulness, engage in regular physical activity, maintain a healthy work-life balance, seek social support, and seek professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to reduce stress") {
		BotResponse = "Practice relaxation techniques such as deep breathing and meditation, prioritize tasks and set realistic goals, engage in physical activity, seek social support, and consider talking to a therapist for additional support.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage stress more effectively") {
		BotResponse = "Identify stress triggers and develop coping strategies, practice self-care activities, engage in regular physical activity, seek social support, and consider seeking professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to cope with stress") {
		BotResponse = "Practice relaxation techniques such as deep breathing and progressive muscle relaxation, engage in physical activity, maintain a healthy lifestyle, seek social support, and seek professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce stress in my life") {
		BotResponse = "Identify stressors and develop coping strategies, practice time management and organization, engage in activities that bring you joy, seek support from friends and loved ones, and consider seeking professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to alleviate stress") {
		BotResponse = "Set aside time for relaxation and self-care, practice mindfulness and meditation, engage in physical activity, seek social support, and consider seeking therapy or counseling for additional support.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with stress more effectively") {
		BotResponse = "Identify stress triggers and develop coping strategies, practice self-care activities, seek social support, engage in regular physical activity, and consider seeking professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to manage stress") {
		BotResponse = "Practice relaxation techniques such as deep breathing and mindfulness, prioritize self-care activities, seek support from friends and loved ones, engage in regular physical activity, and consider seeking professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i handle stress better") {
		BotResponse = "Identify coping mechanisms that work for you, practice relaxation techniques, maintain a healthy lifestyle, seek support from friends and loved ones, and consider seeking professional help if stress becomes overwhelming.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress more effectively") {
		BotResponse = "Set aside time for relaxation and self-care, practice stress management techniques such as deep breathing and meditation, maintain a healthy lifestyle, seek social support, and consider seeking therapy or counseling.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}				
	//////////////////////done/////
	
	if (input === "how can i relieve stress") {
		BotResponse = "Engage in activities you enjoy, spend time in nature, practice mindfulness and meditation, talk to a friend or loved one, and take breaks to rest and recharge.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective stress relief techniques") {
		BotResponse = "Exercise regularly, practice deep breathing exercises, engage in creative activities, listen to music, and prioritize sleep and relaxation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage stress at work") {
		BotResponse = "Set boundaries between work and personal life, prioritize tasks, communicate openly with colleagues, take regular breaks, and practice stress-reduction techniques such as deep breathing or meditation.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to reduce stress levels") {
		BotResponse = "Identify sources of stress and address them, practice relaxation techniques, delegate tasks when possible, maintain a healthy lifestyle, and seek support from colleagues, friends, or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with stress at school") {
		BotResponse = "Stay organized and manage your time effectively, seek support from teachers or counselors, engage in relaxation techniques, prioritize self-care, and connect with friends or classmates for support.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to manage stress during exams") {
		BotResponse = "Create a study schedule and stick to it, take regular breaks to rest and recharge, practice relaxation techniques such as deep breathing or meditation, eat healthily, and get enough sleep.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i handle stress in my daily life") {
		BotResponse = "Practice self-care activities, set realistic expectations for yourself, communicate openly about your feelings, engage in relaxation techniques, and seek support from friends, family, or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress effectively") {
		BotResponse = "Identify stress triggers and develop coping strategies, prioritize self-care activities, practice relaxation techniques such as deep breathing or progressive muscle relaxation, seek support from friends or a therapist, and maintain a positive outlook.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce stress in my life") {
		BotResponse = "Set boundaries and prioritize self-care, practice relaxation techniques, delegate tasks when possible, seek support from friends or a therapist, and maintain a healthy lifestyle.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to cope with stress") {
		BotResponse = "Engage in physical activity, practice relaxation techniques such as deep breathing or meditation, maintain a healthy lifestyle, seek social support, and consider seeking therapy or counseling.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i manage stress during difficult times") {
		BotResponse = "Focus on what you can control, practice self-compassion and acceptance, seek support from friends or a therapist, engage in relaxation techniques, and find healthy ways to cope with your emotions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to alleviate stress in challenging situations") {
		BotResponse = "Stay connected with supportive friends or family members, engage in activities that bring you joy, practice relaxation techniques, maintain a healthy lifestyle, and seek professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i handle stress in a healthy way") {
		BotResponse = "Identify your stressors and develop coping strategies, practice relaxation techniques such as deep breathing or meditation, maintain a balanced lifestyle, seek support from others, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective stress management techniques") {
		BotResponse = "Practice mindfulness and meditation, engage in physical activity, maintain a healthy diet, get enough sleep, and seek support from friends, family, or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with stress in a positive way") {
		BotResponse = "Focus on solutions rather than dwelling on problems, practice gratitude and positive thinking, engage in activities that bring you joy, seek support from loved ones, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress in a healthy manner") {
		BotResponse = "Set boundaries and prioritize self-care, practice relaxation techniques such as deep breathing or progressive muscle relaxation, seek support from friends or a therapist, maintain a healthy lifestyle, and engage in activities that bring you joy.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce stress and anxiety") {
		BotResponse = "Practice mindfulness and meditation, engage in regular physical activity, maintain a healthy lifestyle, seek social support, and consider seeking therapy or counseling for additional support.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to relieve stress and anxiety") {
		BotResponse = "Engage in relaxation techniques such as deep breathing or progressive muscle relaxation, exercise regularly, maintain a healthy diet, get enough sleep, and seek support from friends, family, or a therapist.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i handle stress in a positive and productive way") {
		BotResponse = "Identify your stressors and develop coping strategies, practice self-compassion and positive self-talk, engage in relaxation techniques, seek support from friends or a therapist, and maintain a balanced lifestyle.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress and maintain my well-being") {
		BotResponse = "Prioritize self-care activities, practice relaxation techniques such as deep breathing or meditation, seek support from friends or a therapist, engage in activities that bring you joy, and maintain a healthy lifestyle.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i reduce stress during busy times") {
		BotResponse = "Prioritize tasks and break them into smaller steps, practice time management techniques, delegate tasks when possible, take short breaks to relax, and maintain a healthy work-life balance.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to manage stress at work") {
		BotResponse = "Set realistic goals and prioritize tasks, communicate openly with colleagues, take short breaks to recharge, practice relaxation techniques, and seek support from supervisors or HR if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with stress in a fast-paced environment") {
		BotResponse = "Practice mindfulness and stay present in the moment, focus on one task at a time, set boundaries around work hours, take short breaks to recharge, and practice self-compassion.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress in a demanding job") {
		BotResponse = "Establish a support network at work, communicate openly with supervisors about workload concerns, practice time management techniques, take short breaks for relaxation, and prioritize self-care outside of work.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i alleviate stress during exams") {
		BotResponse = "Create a study schedule and stick to it, take regular breaks for relaxation, practice active study techniques, get plenty of sleep, and avoid cramming at the last minute.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective strategies for managing stress in school") {
		BotResponse = "Practice time management and organization, seek help from teachers or tutors if needed, maintain a healthy balance between academics and leisure activities, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i handle stress in college") {
		BotResponse = "Establish a support network of friends and classmates, seek help from professors or counselors if needed, maintain a balanced lifestyle, practice relaxation techniques, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress during a job search") {
		BotResponse = "Break the job search process into smaller tasks, stay organized and track progress, maintain a healthy routine, seek support from friends and mentors, and practice self-compassion.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce stress while studying") {
		BotResponse = "Create a quiet and organized study space, break study sessions into manageable chunks, take regular breaks to recharge, practice active study techniques, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to manage stress during a project deadline") {
		BotResponse = "Break the project into smaller tasks and set deadlines for each, prioritize tasks based on urgency and importance, communicate openly with team members, take short breaks for relaxation, and practice time management techniques.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with stress in a team environment") {
		BotResponse = "Communicate openly with team members about workload and concerns, establish clear roles and responsibilities, set realistic goals and deadlines, take breaks for team bonding activities, and practice conflict resolution techniques.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress during a family gathering") {
		BotResponse = "Set boundaries and communicate openly with family members about your needs, take breaks when needed, focus on positive interactions, practice relaxation techniques, and prioritize self-care.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i alleviate stress during the holiday season") {
		BotResponse = "Set realistic expectations and boundaries, delegate tasks when possible, practice mindful spending, prioritize self-care activities, and focus on meaningful connections with loved ones.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to manage stress when traveling") {
		BotResponse = "Plan ahead and stay organized, give yourself plenty of time to reach your destination, pack light and efficiently, practice relaxation techniques during transit, and prioritize self-care while away from home.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i handle stress during a move") {
		BotResponse = "Stay organized and create a moving checklist, enlist help from friends or professional movers, take breaks to rest and recharge, practice relaxation techniques, and prioritize self-care during the transition.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress during a major life transition") {
		BotResponse = "Acknowledge your feelings and give yourself time to adjust, seek support from friends or a therapist, focus on what you can control, practice self-compassion, and prioritize self-care during the transition period.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i reduce stress while planning a wedding") {
		BotResponse = "Set priorities and focus on what matters most to you and your partner, delegate tasks to trusted friends or family members, take breaks from wedding planning to relax and recharge, and practice open communication with your partner.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to manage stress during a home renovation") {
		BotResponse = "Set realistic goals and expectations for the renovation project, create a timeline and budget, enlist help from professionals if needed, take breaks to rest and recharge, and prioritize self-care during the process.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i cope with stress while caring for a loved one") {
		BotResponse = "Seek support from other family members or caregivers, communicate openly with your loved one about your needs and limitations, prioritize self-care activities, and seek respite care when needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to manage stress during a health crisis") {
		BotResponse = "Stay informed about your condition and treatment options, seek support from healthcare professionals and loved ones, practice relaxation techniques, prioritize self-care, and focus on maintaining a positive outlook.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve communication in my relationship") {
		BotResponse = "Practice active listening, express your thoughts and feelings openly and honestly, avoid blaming or criticizing, and seek to understand your partner's perspective.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to strengthen my relationship with my partner") {
		BotResponse = "Spend quality time together, communicate openly and honestly, show appreciation and affection, support each other's goals and aspirations, and work together to overcome challenges.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i build trust in my relationship") {
		BotResponse = "Be honest and transparent, follow through on your promises, respect your partner's boundaries, communicate openly about your feelings, and demonstrate reliability and consistency over time.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to deepen the emotional connection with my partner") {
		BotResponse = "Share your thoughts and feelings openly and honestly, engage in meaningful conversations, express empathy and understanding, prioritize quality time together, and show appreciation for each other.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i handle conflicts in my relationship") {
		BotResponse = "Stay calm and respectful during disagreements, listen to your partner's perspective without interrupting, express your own feelings using 'I' statements, seek compromise and resolution, and apologize when necessary.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to resolve conflicts with my partner") {
		BotResponse = "Practice active listening, seek to understand your partner's point of view, express your own feelings and needs clearly, find compromises that satisfy both parties, and work together to find solutions.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i maintain a healthy balance in my relationship") {
		BotResponse = "Prioritize open communication and mutual respect, support each other's individual goals and interests, make time for shared activities and quality time together, and be mindful of each other's needs and boundaries.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to keep the romance alive in my relationship") {
		BotResponse = "Plan surprise dates or gestures, express your love and appreciation regularly, spice things up in the bedroom, reminisce about happy memories together, and make an effort to show affection and intimacy.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i support my partner during challenging times") {
		BotResponse = "Be present and attentive, listen to their concerns without judgment, offer emotional support and reassurance, help with practical tasks or errands, and encourage them to seek professional help if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to show appreciation for my partner") {
		BotResponse = "Say 'thank you' and express gratitude regularly, show affection through physical touch or gestures, do something thoughtful or unexpected, actively listen to their concerns, and acknowledge their efforts and accomplishments.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen the bond with my partner") {
		BotResponse = "Spend quality time together regularly, communicate openly and honestly, support each other's goals and aspirations, show appreciation and affection, and work together to overcome challenges.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to foster intimacy in my relationship") {
		BotResponse = "Engage in deep conversations, share your hopes and dreams, express vulnerability and trust, prioritize physical affection, and make time for romantic gestures and shared experiences.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a stronger emotional connection with my partner") {
		BotResponse = "Practice active listening and empathy, share your own thoughts and feelings openly, prioritize quality time together, engage in shared interests or hobbies, and show appreciation and affection.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to nurture a healthy relationship") {
		BotResponse = "Communicate openly and honestly, prioritize quality time together, show appreciation and affection, support each other's goals and aspirations, and work together to overcome challenges.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i show my partner that i value our relationship") {
		BotResponse = "Express love and appreciation regularly, prioritize their needs and happiness, listen to their concerns and support them, make time for shared activities and experiences, and be reliable and trustworthy.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to create a stronger connection with my partner") {
		BotResponse = "Engage in meaningful conversations, share your thoughts and feelings openly, support each other's goals and aspirations, make time for shared activities and experiences, and prioritize quality time together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i keep my relationship strong and healthy") {
		BotResponse = "Communicate openly and honestly, prioritize quality time together, show appreciation and affection, support each other's goals and aspirations, and work together to resolve conflicts.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to nurture my relationship") {
		BotResponse = "Express love and appreciation regularly, communicate openly and honestly, prioritize quality time together, support each other's goals and aspirations, and work together to overcome challenges.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen my connection with my partner") {
		BotResponse = "Engage in deep conversations, share your thoughts and feelings openly, prioritize quality time together, show appreciation and affection, and support each other's personal growth and development.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to deepen the bond with my partner") {
		BotResponse = "Communicate openly and honestly, prioritize quality time together, support each other's goals and aspirations, show appreciation and affection, and work together to overcome challenges.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i build a stronger relationship with my partner") {
		BotResponse = "Communicate openly and honestly, prioritize quality time together, show appreciation and affection, support each other's goals and aspirations, and work together to overcome challenges.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance intimacy in my relationship") {
		BotResponse = "Engage in deep conversations, share your thoughts and feelings openly, prioritize physical affection, make time for romantic gestures, and create opportunities for shared experiences.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen the emotional connection with my partner") {
		BotResponse = "Practice active listening and empathy, share your own thoughts and feelings openly, prioritize quality time together, show appreciation and affection, and support each other's personal growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to foster trust in my relationship") {
		BotResponse = "Be honest and transparent, follow through on your promises, respect your partner's boundaries, communicate openly and respectfully, and demonstrate reliability and consistency over time.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i navigate challenges in my relationship") {
		BotResponse = "Communicate openly and honestly about your concerns, listen to your partner's perspective with empathy, seek compromise and resolution, prioritize the health of the relationship, and consider seeking couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to improve communication with my partner") {
		BotResponse = "Practice active listening and validation, express your thoughts and feelings using 'I' statements, avoid blame and criticism, be open to feedback, and seek to understand your partner's perspective.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i maintain a healthy work-life balance in my relationship") {
		BotResponse = "Set boundaries around work hours and personal time, prioritize quality time together, communicate openly about your needs and concerns, and support each other's individual pursuits and hobbies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to show my partner that i appreciate them") {
		BotResponse = "Express gratitude and affection regularly, do something thoughtful or unexpected, actively listen to their concerns and needs, support their goals and aspirations, and prioritize their happiness.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i strengthen the bond with my partner during difficult times") {
		BotResponse = "Be present and supportive, listen with empathy and understanding, share your own feelings and concerns openly, seek solutions together, and prioritize connection and solidarity.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to keep the spark alive in my relationship") {
		BotResponse = "Plan surprise dates or activities, engage in playful or romantic gestures, prioritize physical affection, try new things together, and maintain open communication about your desires and fantasies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a deeper emotional connection with my partner") {
		BotResponse = "Share your innermost thoughts and feelings, express vulnerability and trust, practice active listening and empathy, prioritize quality time together, and show appreciation and affection.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to support my partner's personal growth") {
		BotResponse = "Encourage their interests and passions, offer praise and encouragement, provide emotional support during challenges, celebrate their achievements, and actively listen to their goals and aspirations.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i ensure a healthy and fulfilling relationship") {
		BotResponse = "Communicate openly and honestly, prioritize quality time together, show appreciation and affection, support each other's goals and aspirations, and work together to navigate challenges with empathy and understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to strengthen the connection with my partner") {
		BotResponse = "Engage in meaningful conversations, share your thoughts and feelings openly, prioritize quality time together, show appreciation and affection, and support each other's personal growth and development.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a lasting and fulfilling relationship") {
		BotResponse = "Communicate openly and honestly, prioritize trust and respect, show appreciation and affection, support each other's goals and aspirations, and work together to overcome challenges with empathy and understanding.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to strengthen the emotional bond with my partner") {
		BotResponse = "Practice active listening and empathy, share your own thoughts and feelings openly, prioritize quality time together, show appreciation and affection, and support each other's personal growth.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i navigate differences and conflicts in my relationship") {
		BotResponse = "Communicate openly and respectfully, seek to understand your partner's perspective, find common ground and compromise, prioritize the health of the relationship, and consider seeking couples therapy if needed.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to keep the romance alive in my relationship") {
		BotResponse = "Plan surprise dates or gestures, express your love and appreciation regularly, prioritize physical affection, try new things together, and maintain open communication about your desires and fantasies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i foster mutual respect and understanding in my relationship") {
		BotResponse = "Communicate openly and honestly, validate each other's feelings and perspectives, prioritize empathy and compassion, and work together to build a foundation of trust and respect.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to show my partner that i care") {
		BotResponse = "Listen actively and empathetically, prioritize their needs and happiness, offer support and encouragement, express gratitude and affection regularly, and make time for quality experiences together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	if (input === "how can i improve intimacy with my partner") {
		BotResponse = "Communicate openly about your desires and fantasies, prioritize physical affection and touch, try new things together, engage in deep conversations about your relationship and desires, and prioritize quality time together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to enhance sexual satisfaction in my relationship") {
		BotResponse = "Explore each other's bodies and erogenous zones, communicate openly about your sexual preferences and desires, try new positions or techniques, prioritize foreplay and sensual touch, and prioritize mutual pleasure and satisfaction.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i spice things up in the bedroom") {
		BotResponse = "Experiment with new positions or locations, introduce sex toys or accessories, engage in role-playing or fantasy exploration, watch erotic movies or read erotica together, and prioritize open communication about your desires and boundaries.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to create a more fulfilling sexual connection with my partner") {
		BotResponse = "Prioritize open communication about your desires and fantasies, explore each other's bodies and erogenous zones, prioritize mutual pleasure and satisfaction, try new techniques or positions, and make time for quality intimate moments together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve sexual communication with my partner") {
		BotResponse = "Initiate open and honest conversations about your sexual desires and boundaries, listen actively and empathetically to your partner's needs and desires, and prioritize mutual respect and understanding in your sexual relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to reignite the passion in my relationship") {
		BotResponse = "Plan romantic dates or getaways, prioritize quality time together, engage in activities that bring you closer emotionally and physically, express your love and desire for each other regularly, and explore new ways to connect intimately.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a deeper emotional and physical connection with my partner") {
		BotResponse = "Engage in deep conversations about your desires and fantasies, prioritize physical affection and touch, experiment with new techniques or positions, prioritize mutual pleasure and satisfaction, and make time for quality intimate moments together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to improve sexual compatibility with my partner") {
		BotResponse = "Initiate open and honest conversations about your sexual preferences and desires, explore each other's bodies and erogenous zones, prioritize mutual pleasure and satisfaction, and be willing to compromise and experiment together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i enhance the romantic and sexual aspects of my relationship") {
		BotResponse = "Plan romantic dates or gestures, express your love and desire for each other regularly, prioritize physical affection and touch, explore each other's bodies and erogenous zones, and engage in deep emotional conversations about your desires and fantasies.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve sexual communication and satisfaction in my relationship") {
		BotResponse = "Initiate open and honest conversations about your sexual desires and boundaries, listen actively and empathetically to your partner's needs and desires, and prioritize mutual respect and understanding in your sexual relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i maintain a healthy and fulfilling sexual relationship with my partner") {
		BotResponse = "Prioritize open communication about your desires and boundaries, explore each other's bodies and erogenous zones, prioritize mutual pleasure and satisfaction, try new techniques or positions, and make time for quality intimate moments together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to keep the passion alive in my relationship") {
		BotResponse = "Plan surprise romantic gestures or dates, express your love and desire for each other regularly, prioritize physical affection and touch, explore each other's bodies and erogenous zones, and try new things together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a more intimate and fulfilling sexual connection with my partner") {
		BotResponse = "Initiate open and honest conversations about your sexual desires and boundaries, explore each other's bodies and erogenous zones, prioritize mutual pleasure and satisfaction, try new techniques or positions, and make time for quality intimate moments together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some effective ways to enhance sexual satisfaction and intimacy in my relationship") {
		BotResponse = "Communicate openly about your desires and fantasies, prioritize physical affection and touch, try new things together in the bedroom, explore each other's bodies and erogenous zones, and prioritize mutual pleasure and satisfaction.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i improve sexual compatibility and connection with my partner") {
		BotResponse = "Initiate open and honest conversations about your sexual preferences and desires, explore each other's bodies and erogenous zones, prioritize mutual pleasure and satisfaction, and be willing to experiment and compromise together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to reignite the spark in my relationship") {
		BotResponse = "Plan romantic dates or getaways, express your love and desire for each other regularly, prioritize physical affection and touch, engage in deep emotional conversations, and try new things together in the bedroom.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a deeper emotional and physical connection with my partner through intimacy") {
		BotResponse = "Initiate open and honest conversations about your desires and boundaries, prioritize physical affection and touch, explore each other's bodies and erogenous zones, prioritize mutual pleasure and satisfaction, and make time for quality intimate moments together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what are some ways to improve sexual communication and satisfaction in my relationship") {
		BotResponse = "Initiate open and honest conversations about your sexual desires and boundaries, listen actively and empathetically to your partner's needs and desires, and prioritize mutual respect and understanding in your sexual relationship.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i maintain a healthy and fulfilling sexual relationship with my partner") {
		BotResponse = "Prioritize open communication about your desires and boundaries, explore each other's bodies and erogenous zones, prioritize mutual pleasure and satisfaction, try new techniques or positions, and make time for quality intimate moments together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "what can i do to keep the passion alive in my relationship") {
		BotResponse = "Plan surprise romantic gestures or dates, express your love and desire for each other regularly, prioritize physical affection and touch, explore each other's bodies and erogenous zones, and try new things together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if (input === "how can i create a more intimate and fulfilling sexual connection with my partner") {
		BotResponse = "Initiate open and honest conversations about your sexual desires and boundaries, explore each other's bodies and erogenous zones, prioritize mutual pleasure and satisfaction, try new techniques or positions, and make time for quality intimate moments together.";
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}	

	///////////////////////Tips
	if ((input === "i am in depression give me some tips to overcome it") || (input === "give me some tips to overcome depression") || (input === "tips to overcome depression") || (input === "tips to get rid of depression") || (input === "i need to overcome depression any tips") || (input === "i need to overcome my depression any tips") || (input === "i need some tips to overcome depression") || (input === "i need some tips to overcome depression") || (input === "i need tips to overcome depression") || (input === "i need some tips to overcome my depression") || (input === "i am in depression and need some tips to overcome it") || (input === "i am in depression") || (input === "i am depressed")) {
		let ArrayBotResponse = ["My tips for you is Drink a lot of water.",
								"Overcoming depression takes time, but here is a tip to help you along the way: Engage in regular physical activity",
								"Depression can be challenging, but there are steps you can take to improve your mental well-being: Maintain a healthy lifestyle with balanced nutrition and regular exercise",
								"Managing depression is a journey, and it's important to take it one step at a time. Here is a strategy to consider: Develop a daily routine to provide structure and stability",
								"My tip to overcome depression is take some breathing exercise.",
								"My tip to fully overcome depression is to Sleep well."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/iqcAWup2aCE?si=pcCpibuKYtzgZwvE",
			"https://youtu.be/J3hxjdyYC1U?si=NOn8EWdD29g1RIXS",
			"https://youtu.be/REIAGCwrzcI?si=dpdwMRtME8OxgaqZ",
			"https://youtu.be/e1TdD5vWeSM?si=-iCqHDJszsLGJPZ-"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a video to help you out: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	if ((input === "i am sad give me some tips to overcome it") || (input === "give me some tips to overcome sadness") || (input === "tips to overcome sadness") || (input === "tips to get rid of sadness") || (input === "i need to overcome sadness any tips") || (input === "i need to overcome my sadness any tips") || (input === "i need some tips to overcome sadness") || (input === "i need some tips to overcome sadness") || (input === "i need tips to overcome sadness") || (input === "i need some tips to overcome my sadness") || (input === "i am in sadness and need some tips to overcome it")) {
		let ArrayBotResponse = ["My tip for you is Don't be alone, Keep yourself busy to remove these negative feelings.",
								"When you're feeling sad, it's important to take care of yourself. Here is a tip to help lift your spirits: Engage in activities that bring you joy and comfort.",
								"Feeling sad is a natural part of life, but it's important to take steps to improve your mood and well-being. Here is a strategy to consider: Identify the root cause of your sadness and address any underlying issues.",
								"Sadness can feel overwhelming at times, but there is a strategy you can use to cope and find relief. Consider this tip: Acknowledge and accept your feelings without judgment and reach out to someone you trust and share your thoughts and emotions.",
								"My tip to overcome sadness is Don't be alone.",
								"My tip to fully overcome sadness is to watch something that makes you feel good."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/JGwWNGJdvx8?si=dOReacKWLSkm2IH-",
			"https://youtu.be/IcrbM1l_BoI?si=roQSrPzWdBvJvyYI",
			"https://youtu.be/Pkh8UtuejGw?si=TzesAAJThuhXLMiG",
			"https://youtu.be/euCqAq6BRa4?si=zajw_5LO2PYlU82p",
			"https://youtu.be/31crA53Dgu0?si=R-qmC15vpkJCHFAT",
			"https://youtu.be/M11SvDtPBhA?si=xqBThUqY_EQfzPPT",
			"https://youtu.be/AtKZKl7Bgu0?si=-3vsnSgmyTYRmBBD"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a music video to help you out: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	if ((input === "i am upset give me some tips to overcome it") || (input === "i am very upset give me some tips to overcome it") || (input === "i am upset i need some tips")) {
		let ArrayBotResponse = ["My tip for you is to try to do some yoga.",
								"My tip to overcome upset is to try to do some yoga and listening to some songs.",
								"My tip to fully overcome upset is to try some form of art like dance, painting etc."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/JGwWNGJdvx8?si=dOReacKWLSkm2IH-",
			"https://youtu.be/IcrbM1l_BoI?si=roQSrPzWdBvJvyYI",
			"https://youtu.be/Pkh8UtuejGw?si=TzesAAJThuhXLMiG",
			"https://youtu.be/euCqAq6BRa4?si=zajw_5LO2PYlU82p",
			"https://youtu.be/31crA53Dgu0?si=R-qmC15vpkJCHFAT",
			"https://youtu.be/M11SvDtPBhA?si=xqBThUqY_EQfzPPT",
			"https://youtu.be/AtKZKl7Bgu0?si=-3vsnSgmyTYRmBBD"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a music video to help you out: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}

	if ((input === "i have anxiety give me some tips to overcome it") || (input === "i have anxiety issues give me some tips to overcome it") || (input === "i have anxiety i need some tips")) {
		let ArrayBotResponse = ["Deep breaths! Remember, you got this.", "Just breathe. You're stronger than you think.", "Keep calm and take it one step at a time."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/iqcAWup2aCE?si=pcCpibuKYtzgZwvE",
			"https://youtu.be/J3hxjdyYC1U?si=NOn8EWdD29g1RIXS",
			"https://youtu.be/REIAGCwrzcI?si=dpdwMRtME8OxgaqZ",
			"https://youtu.be/e1TdD5vWeSM?si=-iCqHDJszsLGJPZ-"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a video to help you out: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	
	if ((input === "i am happy") || (input === "i am very happy") || (input === "i am very happy give me some tips to make it even better") || (input === "i am happy and want to expand my happiness") || (input === "i feel happy") || (input === "i feel very happy") || (input === "i feel very happy today") || (input === "i am extremely happy") || (input === "i am extremely happy today") || (input === "i am so happy today")) {
		let ArrayBotResponse = ["Keep smiling! You're spreading joy.", "Happy vibes incoming! Enjoy every moment.", "You're beaming! Shine on, you happiness guru."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/JGwWNGJdvx8?si=dOReacKWLSkm2IH-",
			"https://youtu.be/IcrbM1l_BoI?si=roQSrPzWdBvJvyYI",
			"https://youtu.be/Pkh8UtuejGw?si=TzesAAJThuhXLMiG",
			"https://youtu.be/euCqAq6BRa4?si=zajw_5LO2PYlU82p",
			"https://youtu.be/31crA53Dgu0?si=R-qmC15vpkJCHFAT",
			"https://youtu.be/M11SvDtPBhA?si=xqBThUqY_EQfzPPT",
			"https://youtu.be/AtKZKl7Bgu0?si=-3vsnSgmyTYRmBBD"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a music video to make your happiness last longer: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	
	if ((input === "i feel like crying") || (input === "i feel like crying very much") || (input === "i feel like crying a lot") || (input === "i feel like crying a lot today") || (input === "i feel like crying out loud")) {
		let ArrayBotResponse = ["Let those tears flow. You're stronger than you know.", "It's okay to let it out. You're not alone.", "Cry it out, then let the healing begin."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/JGwWNGJdvx8?si=dOReacKWLSkm2IH-",
			"https://youtu.be/IcrbM1l_BoI?si=roQSrPzWdBvJvyYI",
			"https://youtu.be/Pkh8UtuejGw?si=TzesAAJThuhXLMiG",
			"https://youtu.be/euCqAq6BRa4?si=zajw_5LO2PYlU82p",
			"https://youtu.be/31crA53Dgu0?si=R-qmC15vpkJCHFAT",
			"https://youtu.be/M11SvDtPBhA?si=xqBThUqY_EQfzPPT",
			"https://youtu.be/AtKZKl7Bgu0?si=-3vsnSgmyTYRmBBD"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a music video to make you feel better: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	
	if ((input === "i am in excitement") || (input === "i am so exicted") || (input === "i am very exicted") || (input === "i am very exicted today") || (input === "i am so exicted") || (input === "i am so exicted today") || (input === "i am very exicted today") || (input === "i am very exicted")){
		let ArrayBotResponse = ["Woohoo! Excitement overload!", "Pumped up and ready for action!", "Electric vibes! Ride the wave of excitement!"];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/dZ1tiIgLvro?si=0NVq00NO2pKBC_W3",
			"https://youtu.be/Sv6dMFF_yts?si=rlUOJlugZ2AIcTxE",
			"https://youtu.be/SSCzDykng4g?si=fEc7d5MDT4iLGx-g",
			"https://youtu.be/3OnnDqH6Wj8?si=aWam9O32eqrU4ji2",
			"https://youtu.be/-p8Behv6ji0?si=1f_sE_es0kd1X6fx",
			"https://youtu.be/kTJczUoc26U?si=ZpcGz0RpyiNWU3a7",
			"https://youtu.be/e8laLiWolGg?si=Em4PaF9shL3eHZie"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a music video to make your excitement longer: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	
	if ((input === "i am in confusion") || (input === "i am confused") || (input === "i am very confused today") || (input === "i am confused give me some tips") || (input === "i am very confused give me tips") || (input === "i am very confused give me some tips to overcome it") || (input === "i am super confused today") || (input === "i am very confused today give me some tips to overcome it") || (input === "i am very much confused") || (input === "i am very confused please give me some tips")) {
		let ArrayBotResponse = ["Confused? Take a breath and let's untangle this together.", "Lost in the maze of confusion? Fear not, we'll find our way out.", "Confusion is just a temporary detour. We'll navigate through it."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/JGwWNGJdvx8?si=dOReacKWLSkm2IH-",
			"https://youtu.be/IcrbM1l_BoI?si=roQSrPzWdBvJvyYI",
			"https://youtu.be/Pkh8UtuejGw?si=TzesAAJThuhXLMiG",
			"https://youtu.be/euCqAq6BRa4?si=zajw_5LO2PYlU82p",
			"https://youtu.be/31crA53Dgu0?si=R-qmC15vpkJCHFAT",
			"https://youtu.be/M11SvDtPBhA?si=xqBThUqY_EQfzPPT",
			"https://youtu.be/AtKZKl7Bgu0?si=-3vsnSgmyTYRmBBD"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a music video to make your confussion go away: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}
	
	if ((input === "i feel lonely")|| (input === "i feel very lonely") || (input === "i am in loneliness") || (input === "i feel very lonely any tips") || (input === "i feel lonely any tips") || (input === "i feel very lonely any tips to overcome it") || (input === "i feel lonely and also empty") || (input === "i feel extremely lonely") || (input === "i dont have anyone") || (input === "i dont have anyone and i am feeling lonely") || (input === "i am feeling very lonely and empty")){
		let ArrayBotResponse = ["Lonely? Let's turn that frown upside down!", "Loneliness doesn't stand a chance with you around!", "Feeling lonely? Reach out, you're not alone in this."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "i am angry") || (input === "i am mad") || (input === "i am very angry") || (input === "is there any way to reduce my anger") || (input === "is there any tips to reduce my anger") || (input === "is it possible to reduce my anger") || (input === "can you help me to reduce my anger") || (input === "i wish to reduce my anger") || (input === "i have anger issues")) {
		let ArrayBotResponse = ["Angry? Let's cool down that fiery temper.", "Keep calm and let's defuse that anger bomb.", "Rage mode? Let's switch it to chill mode."];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		let videoLinks = [
			"https://youtu.be/JGwWNGJdvx8?si=dOReacKWLSkm2IH-",
			"https://youtu.be/IcrbM1l_BoI?si=roQSrPzWdBvJvyYI",
			"https://youtu.be/Pkh8UtuejGw?si=TzesAAJThuhXLMiG",
			"https://youtu.be/euCqAq6BRa4?si=zajw_5LO2PYlU82p",
			"https://youtu.be/31crA53Dgu0?si=R-qmC15vpkJCHFAT",
			"https://youtu.be/M11SvDtPBhA?si=xqBThUqY_EQfzPPT",
			"https://youtu.be/AtKZKl7Bgu0?si=-3vsnSgmyTYRmBBD"
		];
		let randomVideoLink = videoLinks[Math.floor(Math.random() * videoLinks.length)];
		let responseWithVideo = BotResponse + 'Here is a music video to make your anger vanish away: <a href="' + randomVideoLink + '" target="_blank">' +randomVideoLink+ '</a>';
		responsiveVoice.speak(responseWithVideo);
		return responseWithVideo;
	}	
	
	if ((input === "i am ashamed") || (input === "i am feeling very ashamed") || (input === "i am feeling shameful")){
		const ArrayBotResponse = [
			"Don't be ashamed! Even superheroes trip over their capes sometimes.",
			"Feeling ashamed? Hey, we've all had those moments. It's called being human!",
			"Ashamed? No worries! Just remember, even the Mona Lisa has a bad hair day sometimes!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "i am regretting") || (input === "i am regretting a lot")) {
		const ArrayBotResponse = [
			"Regrets? We all have a few! Just think of them as life's do-overs!",
			"Regretting something? Don't sweat it! It's just your brain's way of asking for a mulligan!",
			"Regret is like a bad haircut. It grows back eventually! Keep moving forward!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "i am feeling very jealous") || (input === "i am feeling jealousy") || (input === "i am jealous") || (input === "i am feeling jealous")) {
		const ArrayBotResponse = [
			"Feeling jealous? Don't worry, green is your color!",
			"Jealousy is just your inner cheerleader wanting to wear the same outfit!",
			"Feeling a little green-eyed, eh? Just remember, you're the star of your own show!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "i am in resentment") || (input === "i am feeling resentful")){
		const ArrayBotResponse = [
			"Resentment? Don't let it rent space in your head. Evict that bad tenant!",
			"Feeling resentful? It's like holding onto a hot coal and expecting the other person to get burned. Let it go!",
			"Resentment? Nah! That's just your inner peace asking for directions. Keep calm and carry on!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "i am in envy") || (input === "i am feeling envious") || (input === "i am feeling very envious")) {
		const ArrayBotResponse = [
			"Envy? Just remember, the grass is always greener over the septic tank!",
			"Feeling envious? Just wait till you see the surprise party your future self is planning!",
			"Envy? It's like borrowing trouble from tomorrow. Let's focus on today's sunshine instead!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "a betrayal occurred to me") || (input === "i have been betrayed") || (input === "my wife betrayed me") || (input === "my husband betrayed me") || (input === "my friend betrayed me")|| (input === "i have been betrayed in a very bad way") || (input === "my close friend betrayed me") || (input === "my best friend betrayed me")) {
		const ArrayBotResponse = [
			"Betrayal? Time to upgrade your friend list to the Avengers! Loyalty guaranteed!",
			"Betrayal is just life's way of telling you to level up your trust settings. You got this!",
			"Betrayal? That's just the universe clearing out the negativity to make room for your superhero squad!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "i am gratitude") || (input === "i am very gratuitous") || (input === "i am not very gratuitous")) {
		const ArrayBotResponse = [
			"Embrace the gratitude! It's like glitter for the soul. Start a gratitude journal, hug a puppy, or just high-five the universe!",
			"Feeling grateful? You're like a thanksgiving feast for the soul! Keep spreading those good vibes and watch the magic happen.",
			"Gratitude vibes incoming! Time to sprinkle some appreciation confetti everywhere you go. Let's make the world a happier place, one thank-you at a time!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "i am joyful") || (input === "i am very joyful") || (input === "i am so joyful")) {
		const ArrayBotResponse = [
			"Joyful vibes alert! You're like a human happiness beacon. Keep shining bright and spreading those joy rays everywhere!",
			"Feeling joyful? You're like a sunshine smoothie with extra smiles! Keep sipping on that happiness juice and radiating positivity.",
			"Joy overload! You're like a walking celebration party. Dance like nobody's watching and keep rocking that joyful vibe!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
	
	if ((input === "i lost hope") || (input === "i lost all my hope") || (input === "i feel hopeless") || (input === "i lost all my hope in this world") || (input === "i have no hope left")) {
		const ArrayBotResponse = [
			"Lost hope? Time to call in the hope reinforcements! Grab a cup of optimism, put on your hope cape, and let's turn this around!",
			"Hopeless? Nah, you're just hope-curious. Let's sprinkle some hope seeds and watch them grow into a garden of possibilities!",
			"Feeling like hope took a vacation? No worries, hope's hotline is open 24/7. Dial up your dreams and let's make hope the new normal!"
		];
		BotResponse = ArrayBotResponse[Math.floor(Math.random() * ArrayBotResponse.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}	
	else {
		BotResponse = defaultstatements[Math.floor(Math.random() * defaultstatements.length)];
		responsiveVoice.speak(BotResponse);
		return BotResponse;
	}
}	