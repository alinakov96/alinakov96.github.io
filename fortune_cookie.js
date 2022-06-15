function append_name_to_div(div_name, data) {
  document.getElementById(div_name).innerText += data;
}

function append_question_to_div(div_question, data) {
  document.getElementById(div_question).innerText += data;
}

document.getElementById("submit-btn").addEventListener("click", function () {
  let user_name = document.getElementById("name");
  let value = user_name.value.trim();
  let user_question = document.getElementById("question");
  let valueQuestion = user_question.value.trim();

  if (!value) alert("Name Cannot be empty!");
  else append_name_to_div("ans-name", value + "\n");

  user_name.value = "";

  if (!value) alert("Question Cannot be empty!");
  else append_question_to_div("ans-question", valueQuestion + "\n");

  user_question.value = "";

  let randomNumber = Math.floor(Math.random() * 8);
  let fortuneCookie = "";
  switch (randomNumber) {
    case 0:
      document.getElementById("fortune").innerHTML = "It is certain";
      break;
    case 1:
      document.getElementById("fortune").innerHTML = "It is decidedly so";
      break;
    case 2:
      document.getElementById("fortune").innerHTML = "Reply hazy try again";
      break;
    case 3:
      document.getElementById("fortune").innerHTML = "Cannot predict now";
      break;
    case 4:
      document.getElementById("fortune").innerHTML = "Do not count on it";
      break;
    case 5:
      document.getElementById("fortune").innerHTML = "My sources say no";
      break;
    case 6:
      document.getElementById("fortune").innerHTML = "Outlook not so good";
      break;
    case 7:
      document.getElementById("fortune").innerHTML = "Signs point to yes";
      break;
    default:
      document.getElementById("fortune").innerHTML =
        "What the heck is this shaite?";
  }
});
