document.getElementById("generator-btn").addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 15);
  let bullshitGenerator = "";
  switch (randomNumber) {
    case 0:
      document.getElementById("phraseone").innerHTML = "Me - ";
      break;
    case 1:
      document.getElementById("phraseone").innerHTML = "You - ";
      break;
    case 2:
      document.getElementById("phraseone").innerHTML = "Lady Gaga - ";
      break;
    case 3:
      document.getElementById("phraseone").innerHTML = "The Pope - ";
      break;
    case 4:
      document.getElementById("phraseone").innerHTML = "Janice from Friends - ";
    case 5:
      document.getElementById("phraseone").innerHTML = "Dobby The House Elf - ";
      break;
    case 6:
      document.getElementById("phraseone").innerHTML = "Edward Cullen - ";
      break;
    case 7:
      document.getElementById("phraseone").innerHTML = "Invasive thoughts - ";
      break;
    case 8:
      document.getElementById("phraseone").innerHTML = "Gabbie Hanna - ";
      break;
    case 9:
      document.getElementById("phraseone").innerHTML = "Depression - ";
      break;
    case 10:
      document.getElementById("phraseone").innerHTML = "Your crush - ";
      break;
    case 11:
      document.getElementById("default").innerHTML = "Queen Charlie - ";
      break;
    case 12:
      document.getElementById("phraseone").innerHTML = "Hulk - ";
      break;
    case 13:
      document.getElementById("phraseone").innerHTML = "The Michellin Man - ";
      break;
    case 14:
      document.getElementById("phraseone").innerHTML = "James Charles - ";
      break;
    default:
      document.getElementById("default").innerHTML = " - blep - ";
  }
  switch (randomNumber) {
    case 0:
      document.getElementById("phrasetwo").innerHTML = " - lied to - ";
      break;
    case 1:
      document.getElementById("phrasetwo").innerHTML = " - ran away from - ";
      break;
    case 2:
      document.getElementById("phrasetwo").innerHTML = " - is eating - ";
      break;
    case 3:
      document.getElementById("phrasetwo").innerHTML = " - broke - ";
      break;
    case 4:
      document.getElementById("phrasetwo").innerHTML = " - is dancing to - ";
      break;
    case 5:
      document.getElementById("phrasetwo").innerHTML = " - ran over - ";
      break;
    case 6:
      document.getElementById("phrasetwo").innerHTML = " - stole - ";
      break;
    case 7:
      document.getElementById("phrasetwo").innerHTML = " - screamed to - ";
      break;
    case 8:
      document.getElementById("phrasetwo").innerHTML = " - flew off into - ";
      break;
    case 9:
      document.getElementById("phrasetwo").innerHTML = " - cooked- ";
      break;
    case 10:
      document.getElementById("phrasetwo").innerHTML =
        " - went shopping for - ";
      break;
    case 11:
      document.getElementById("phrasetwo").innerHTML = " - dropped - ";
      break;
    case 12:
      document.getElementById("phrasetwo").innerHTML = " - sang - ";
      break;
    case 13:
      document.getElementById("phrasetwo").innerHTML = " - dug up - ";
      break;
    case 14:
      document.getElementById("phrasetwo").innerHTML = " - flipped off - ";
      break;
    default:
      document.getElementById("default").innerHTML = " - blep - ";
  }
  switch (randomNumber) {
    case 0:
      document.getElementById("phrasethree").innerHTML = " - a cucumber - ";
      break;
    case 1:
      document.getElementById("phrasethree").innerHTML = " - a pizza - ";
      break;
    case 2:
      document.getElementById("phrasethree").innerHTML = " - a poop - ";
      break;
    case 3:
      document.getElementById("phrasethree").innerHTML = " - glitter - ";
      break;
    case 4:
      document.getElementById("phrasethree").innerHTML =
        " - a Christmas tree - ";
      break;
    case 5:
      document.getElementById("phrasethree").innerHTML = " - a toilet seat - ";
      break;
    case 6:
      document.getElementById("phrasethree").innerHTML =
        " - your neighbor's laundry - ";
      break;
    case 7:
      document.getElementById("phrasethree").innerHTML = " - a grudge - ";
      break;
    case 8:
      document.getElementById("phrasethree").innerHTML = " - hormones - ";
      break;
    case 9:
      document.getElementById("phrasethree").innerHTML = " - a diaper - ";
      break;
    case 10:
      document.getElementById("phrasethree").innerHTML = " - a megaphone - ";
      break;
    case 11:
      document.getElementById("phrasethree").innerHTML =
        " - the meaning of life - ";
      break;
    case 12:
      document.getElementById("phrasethree").innerHTML =
        " - Christmas dinner - ";
      break;
    case 13:
      document.getElementById("phrasethree").innerHTML = " - a Karen - ";
      break;
    case 14:
      document.getElementById("phrasethree").innerHTML = " - anime - ";
      break;
    default:
      document.getElementById("default").innerHTML = " - blep - ";
  }
  switch (randomNumber) {
    case 0:
      document.getElementById("phrasefour").innerHTML =
        " - with Santa in it - ";
      break;
    case 1:
      document.getElementById("phrasefour").innerHTML = " - upside down - ";
      break;
    case 2:
      document.getElementById("phrasefour").innerHTML = " - vigorously - ";
      break;
    case 3:
      document.getElementById("phrasefour").innerHTML = " - carefully - ";
      break;
    case 4:
      document.getElementById("phrasefour").innerHTML = " - at McDonalds's - ";
      break;
    case 5:
      document.getElementById("phrasefour").innerHTML = " - to perfection - ";
      break;
    case 6:
      document.getElementById("phrasefour").innerHTML =
        " - at a music festival - ";
      break;
    case 7:
      document.getElementById("phrasefour").innerHTML = " - in church - ";
      break;
    case 8:
      document.getElementById("phrasefour").innerHTML =
        " - at the European Parlament in Brussels - ";
      break;
    case 9:
      document.getElementById("phrasefour").innerHTML = " - mischeviously - ";
      break;
    case 10:
      document.getElementById("phrasefour").innerHTML =
        " - with a generous amount of uncertainity - ";
      break;
    case 11:
      document.getElementById("phrasefour").innerHTML =
        " - with a broom and a bucket - ";
      break;
    case 12:
      document.getElementById("phrasefour").innerHTML =
        " - epically on a horse - ";
      break;
    case 13:
      document.getElementById("phrasefour").innerHTML = " - with honor - ";
      break;
    case 14:
      document.getElementById("phrasefour").innerHTML =
        " - at a Karen rally - ";
      break;
    default:
      document.getElementById("default").innerHTML = " - blep.";
  }
});
