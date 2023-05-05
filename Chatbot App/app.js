// create an array of possible responses
const responses = [
  "Hope is the thing with feathers that perches in the soul and sings the tunes without the words and never stops at all.",
  "I dwell in possibility.",
  "Unable are the loved to die, for love is immortality.",
  "That it will never come again is what makes life sweet.",
  "They might not need me; but they might. I will let my head be just in sight; a smile as small as mine might be precisely their necessity",
  "To love is so startling it leaves little time for anything else.",
  "If I can stop one heart from breaking, I shall not live in vain.",
  "The soul should always stand ajar, ready to welcome the ecstatic experience.",
  "To make a prairie it takes a clover and one bee, One clover, and a bee, And reverie. The reverie alone will do, If bees are few.",
  "Not knowing when the dawn will come I open every door.",
  "A wounded deer leaps the highest.",
  "My friends are my estate.",
  "Forever is composed of nows.",
  "Finite to fail, but infinite to venture.",
  "The brain is wider than the sky.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "The way to get started is to quit talking and begin doing.",
  "Your time is limited, so don't waste it living someone else's life.",
  "If life were predictable it would cease to be life, and be without flavor.",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  "Life is what happens when you're busy making other plans.",
  "I kissed a girl and I liked it The taste of her cherry chapstick",
  "Eat with your hands, fine",
  "We can wine and dine",
  "You stomp my heart it hurts",
  "Why is everything got to be so intense with me?",
  "I am trying to handle all this unpredictability",
  "Cause I think you deserve each other",
  "Say my name like a scripture",
  "Some respect, you better show it",
  "Cause I am a goddess and you know it",
  "Saw a balloon floating away",
  "I am fine with my spite and my tears, and my beers and my candles",
  "No amount of freedom gets you clean.",
  "You play stupid games, you win stupid prizes",
  "Breathe in, breathe through, breathe deep, breathe out",
  "Spring breaks loose, the time is near",
  "Familiarity breeds contempt, so put me in the basement",
  "Did you hear about the girl who lives in delusion?",
  "I had a marvelous time ruining everything",
  "Please don't ever become a stranger whose laugh I could recognize anywhere",
  "How can a person know everything at eighteen, but nothing at twenty-two?",
  "I never grew up, it is getting so old",
  "Should have kept every grocery store receipt",
  "The road not taken looks real good now",
  "You can plan for a change in weather and time",
  "No one wanted to play with me as a little kid",
  "Before I close my eyes I think of all the lies.",
  "When I close my eyes, I cannot see.",
  "I am the greatest god created.",
  "I am a demon in the shadows and you stepped into the dark.",
  "You make my heart sparkle like champagne.",
  "I do not wanna die, I just wanna live.",
  "I am not the only person who fell in love like a stupid person.",
  "Look, I don't dance now. I make money moves.",
  "I could make the party hot.",
  "I do not cook, I do not clean.",
  "I was born to flex.",
  "Beyoncé on my stereo. Resentment on repeat.",
  "I gotta stay outta Gucci.",
  "Just close your lips, shut your tongue.",
  "Do not deny our r²π.",
  "I need therapy, la la la la la therapy.",
  "Love is even more cruel than college entrance exams.",
  "I be walking with the cheese, that is the queso.",
  "Pizza and pasta are so yum yum.",
  "If you are happy and you know it clap your hands, yo.",
  "I am a star, but no Patrick",
  "Hit you with that ddu-du, ddu-du, du",
  "What you gonna do when I come, come through with that uh.",
  "BOOMBAYAH yah yah yah yah.",
  "His clothes are in my hair, his hands are in my room",
  "I feel like sneezing when I see you",
  "BLACKPINK in your area",
  "Now look at you, now look at me, look at you, now look at me",
  "Look up in the sky, it is a bird, it is a plane",
  "Like gimbap, you are like dumplings, so sweet",
  "She broke her leg, call the ambulance. EMERGENCY",
  "Throw all your worries over this flat earth.",
  "Play the cards with spades to start",
  "There are plenty of ways that you can hurt a man",
];

// select a random response from the array
function getRandomResponse() {
  return responses[Math.floor(Math.random() * responses.length)];
}

// get the user's input and output a response
function chat() {
  const userInput = document.getElementById("user-input").value;
  const chatOutput = document.getElementById("chat-output");
  const response = getRandomResponse();

  // output the response
  const chatMessage = document.createElement("div");
  chatMessage.classList.add("message");
  chatMessage.innerHTML = `<div class="user-message">${userInput}</div><div class="bot-message">${response}</div>`;
  chatOutput.appendChild(chatMessage);

  // clear the input field
  document.getElementById("user-input").value = "";
}
