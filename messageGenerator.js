// Message Generator apps
const messageGeneratorComponents = {
    subject: ["L'attaquant",
              "Le défenseur",
              "Le gardien",
              "Le joueur de tennis",
              "Le coureur",
              "Le nageur",
              "Le boxeur",
              "L'arbitre",
              "L'entraîneur",
              "L'équipe",],
    verb: ["marque",
           "défend",
           "bloque",
           "sert",
           "court",
           "nage",
           "frappe",
           "siffle",
           "entraîne",
           "gagne",],
    noun: ["un but",
           "une passe",
           "une frappe",
           "un as",
           "un sprint",
           "une longueur",
           "un coup",
           "une faute",
           "un exercice",
           "le match",],
}

const randomSubject = messageGeneratorComponents.subject[Math.floor(Math.random() * 10)];
const randomVerb = messageGeneratorComponents.verb[Math.floor(Math.random() * 10)];
const randomNoun = messageGeneratorComponents.noun[Math.floor(Math.random() * 10)];

const generateMessage = (subject, verb, noun) => console.log(`${subject} ${verb} ${noun}!`);

generateMessage(randomSubject, randomVerb, randomNoun);