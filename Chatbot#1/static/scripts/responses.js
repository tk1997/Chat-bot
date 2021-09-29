function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello to you!";
    } else if (input == "I'm gonna take a nap") {
        return "Don't get too sleepy!";
    } else {
        return "We're all out of Pepperoni!";
    }
}