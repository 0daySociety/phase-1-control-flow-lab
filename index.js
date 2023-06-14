function scuberGreetingForFeet(feet) {
  if (feet <= 400) {
    return "This one is on me!";

   }


   switch (feet) {
    case 2001:
      return 'I will gladly take your thirty bucks.'
       
    case 2501:
      
       return 'No can do.';
       default:
      break; 

  // Write your code here!
}
}

function ternaryCheckCity(city) {
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else if (city != "NYC") {
    return "No go.";
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip) {
  // Write your code

  if (tip === "generous") {
    return "Thank you so much.";
  } else if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}
