// Message Generator apps
const messageGeneratorComponents = {
    subject: ["The athlete", "The coach", "The referee", "The team", "The player", "The captain", "The goalkeeper", "The striker", "The defender", "The midfielder"],
    verb: ["kicks", "throws", "catches", "dribbles", "passes", "blocks", "scores", "runs", "jumps", "tackles"],
    noun: ["the ball", "the goal", "the opponent", "the game", "the match", "the practice", "the field", "the net", "the trophy", "the fans"],
}



const randomSubject = messageGeneratorComponents.subject[Math.floor(Math.random() * 10)];
const randomVerb = messageGeneratorComponents.verb[Math.floor(Math.random() * 10)];
const randomNoun = messageGeneratorComponents.noun[Math.floor(Math.random() * 10)];

const generateMessage = (subject, verb, noun) => console.log(`${subject} ${verb} ${noun}!`);

generateMessage(randomSubject, randomVerb, randomNoun);