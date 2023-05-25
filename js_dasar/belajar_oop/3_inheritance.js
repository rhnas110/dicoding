// #contoh duplikasi

// class WhatsAppService {
//   constructor(sender) {
//     this.sender = sender;
//   }

//   sendMessage(message, receiver) {
//     console.log(`${this.sender} sent ${message} to ${receiver}`);
//   }

//   sendBroadcastMessage(message, receivers) {
//     for (const receiver of receivers) {
//       this.sendMessage(message, receiver);
//     }
//   }
// }

// class EmailService {
//   constructor(sender) {
//     this.sender = sender;
//   }

//   sendMessage(message, receiver) {
//     console.log(`${this.sender} sent ${message} to ${receiver}`);
//   }

//   sendDelayedMessage(message, receiver, delay) {
//     setTimeout(() => {
//       this.sendMessage(message, receiver);
//     }, delay);
//   }
// }
// const whatsapp = new WhatsAppService("Budi");
// console.log(whatsapp);
// whatsapp.sendMessage("Hi!", "Andi");
// whatsapp.sendBroadcastMessage("Hello", ["Andi", "Nana"]);

// const email = new EmailService("Budi");
// email.sendMessage("Hi", "Andi");
// email.sendDelayedMessage("Hello! ~with delay", "Andi", 5000);

// #end of duplikasi

// #inheritance

// Superclass
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

// Subclass
class WhatsAppService extends MailService {
  sendBroadcastMessage(message, receivers) {
    for (const receiver of receivers) {
      this.sendMessage(message, receiver);
    }
  }
}

// Subclass
class EmailService extends MailService {
  sendDelayedMessage(message, receiver, delay) {
    setTimeout(() => {
      this.sendMessage(message, receiver);
    }, delay);
  }
}

const whatsapp = new WhatsAppService("+62888");
const email = new EmailService("mail@gg.com");

whatsapp.sendMessage("Hello", "+66666");
whatsapp.sendBroadcastMessage("Woyyy", ["+11111", 22222]);
// whatsapp.sendDelayedMessage(); // Error

email.sendMessage("Hello", "john@doe.com");
email.sendDelayedMessage("Hello! ~with delay", "john@doe.com", 5000);
// email.sendBroadcastMessage(); // Error

// #Operator instanceof
// operand1 instanceof operand2
// Penjelasannya:
// operand1: merupakan objek yang ingin dites prototype-nya.
// operand2: merupakan constructor function atau class.
console.log(whatsapp instanceof WhatsAppService); // true
console.log(whatsapp instanceof EmailService); // false
console.log(whatsapp instanceof MailService); // true

console.log(email instanceof EmailService); // true
console.log(email instanceof WhatsAppService); // false
console.log(email instanceof MailService); // true

// #Inheritance without class
// function MailService(sender) {
//   this.sender = sender;
// }

// MailService.prototype.sendMessage = function (message, receiver) {
//   console.log(`${this.sender} sent ${message} to ${receiver}`);
// };

// function WhatsAppService(sender) {
//   MailService.call(this, sender);
// }

// Prototype Inheritance
// WhatsAppService.prototype = Object.create(MailService.prototype);
// WhatsAppService.prototype.constructor = WhatsAppService;

// WhatsAppService.prototype.sendBroadcastMessage = function (message, receivers) {
//   for (const receiver of receivers) {
//     this.sendMessage(message, receiver);
//   }
// };

// function EmailService(sender) {
//   MailService.call(this, sender);
// }

// Prototype Inheritance
// EmailService.prototype = Object.create(MailService.prototype);
// EmailService.prototype.constructor = EmailService;

// EmailService.prototype.sendDelayedMessage = function (
//   message,
//   receiver,
//   delay
// ) {
//   setTimeout(() => {
//     this.sendMessage(message, receiver);
//   }, delay);
// };

// const whatsapp = new WhatsAppService("+62999");
// const email = new EmailService("m@gg.com");

// whatsapp.sendMessage("Hello", "+6289876543210");
// whatsapp.sendBroadcastMessage("Hello", ["+6289876543210", "+6282234567890"]);
// email.sendMessage("Hi", "jdoe@gmail.com");
// email.sendDelayedMessage("Hi ~delayyy", "jdoe@gmail.com", 5000);
