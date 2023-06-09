// Array of predefined questions
const questions = [
  "Why little things in life matter?",
  "Why should one own a garden and/or plants?",
  "Why should one know how to cook?",
  "What is the importance of food?",
  "Can other peoples' mistakes rolemodel for us?",
  "Why should romatic relationships start out as friendships?",
  "'Grief is just love.' - Interact with the quote.",
  "Why do we gift flowers?",
  "Why should one travel?",
  "Why do we value art?",
  "Why do we create art?",
  "What methods of self-care do you engage in?",
  "If you meet the person of your dreams, should you pursue a romantic relationship with them?",
  "Why do we get mad when hungry?",
  "Describe your 'special place'.",
  "Why should one keep a journal?",
  "Why should one read books?",
  "Why do we listen to music?",
  "What is the significance of coffee shops?",
  "Why do we get attached to otthers?",
  "What is your love language?",
  "What is your 16 Personality type",
  "What annoys you the most?",
  "What excites you?",
  "Why does techno music exist?",
  "What is the societal impact of Rom Coms?",
  "Why does the horror genre exist?",
  "Why do we have friends?",
  "Why criticism is neccessary?",
  "Why do we exercise?",
  "Why do appearances matter?",
  "Why you shouldn't judge a book by its cover?",
  "What makes a relationship long-lasting?",
  "3 most important factors for a strong relationship?",
  "The societal impact of grocery stores.",
  "Why DJing is considered a skill?",
  "Ask a question you always wanted to ask but never found the opportunity to do so.",
  "Why do we have toxic masculinity?",
  "Why do gender roles exist?",
  "Why do you believe/don't believe in God?",
  "What makes one a person of Faith?",
  "Why does consumerism exist?",
];

// Function to generate a random question
function generateRandomQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

// Display the generated question
function displayQuestion() {
  const randomQuestion = generateRandomQuestion();
  const questionContainer = document.getElementById("question");
  questionContainer.textContent = randomQuestion;
}

// Add event listener to the button
const generateButton = document.getElementById("generate-btn");
generateButton.addEventListener("click", displayQuestion);
