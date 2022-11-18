document.getElementById("verse-btn").addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 20);
  let bibleGenerator = "";
  switch (randomNumber) {
    case 0:
      document.getElementById("output").innerHTML =
        "'Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs.' -1 Corinthians 13:4-5";
      break;
    case 1:
      document.getElementById("output").innerHTML =
        "'Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus.' -1 Thessalonians 5:16-18";
      break;
    case 2:
      document.getElementById("output").innerHTML =
        "'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.' -Philippians 4:6-7";
      break;
    case 3:
      document.getElementById("output").innerHTML =
        "'The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.' -Numbers 6:24-26";
      break;
    case 4:
      document.getElementById("output").innerHTML =
        "'Therefore I tell you, whatever you ask for in prayer, believe that you have received it, and it will be yours.' -Mark 11:24";
      break;
    case 5:
      document.getElementById("output").innerHTML =
        "'For we live by faith, not by sight.' -2 Corinthians 5:7";
      break;
    case 6:
      document.getElementById("output").innerHTML =
        "'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.' -Romans 15:13";
      break;
    case 7:
      document.getElementById("output").innerHTML =
        "'Now faith is confidence in what we hope for and assurance about what we do not see.' -Hebrews 11:1";
      break;
    case 8:
      document.getElementById("output").innerHTML =
        "'And now these three remain: faith, hope and love. But the greatest of these is love.' -1 Corinthians 13:13";
      break;
    case 9:
      document.getElementById("output").innerHTML =
        "'This is the confidence we have in approaching God: that if we ask anything according to his will, he hears us.' -1 John 5:14";
      break;
    case 10:
      document.getElementById("output").innerHTML =
        "'The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.' -Deuteronomy 31:8";
      break;
    case 11:
      document.getElementById("output").innerHTML =
        "'Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.' -2 Corinthians 9:7";
      break;
    case 12:
      document.getElementById("output").innerHTML =
        "'When I am afraid, I put my trust in you.' -Psalm 56:3";
      break;
    case 13:
      document.getElementById("output").innerHTML =
        "'Be joyful in hope, patient in affliction, faithful in prayer.' -Romans 12:12";
      break;
    case 14:
      document.getElementById("output").innerHTML =
        "'So in Christ Jesus you are all children of God through faith, for all of you who were baptized into Christ have clothed yourselves with Christ.' -Galatians 3:26-27";
      break;
    case 15:
      document.getElementById("output").innerHTML =
        "'I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.' -John 16:33";
      break;
    case 16:
      document.getElementById("output").innerHTML =
        "'Devote yourselves to prayer, being watchful and thankful.' -Colossians 4:2";
      break;
    case 17:
      document.getElementById("output").innerHTML =
        "'But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.' -James 1:6";
      break;
    case 18:
      document.getElementById("output").innerHTML =
        "'Therefore encourage one another and build each other up, just as in fact you are doing.' -1 Thessalonians 5:11";
      break;
    case 19:
      document.getElementById("output").innerHTML =
        "'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control. Against such things there is no law.' -Galatians 5:22-23";
      break;
    default:
      document.getElementById("output").innerHTML =
        "'We love because He first loved us.' -1 John 4:19";
  }
});
