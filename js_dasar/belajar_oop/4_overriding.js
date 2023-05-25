// #Constructor Overriding
class MailService {
  constructor(sender) {
    this.sender = sender;
  }

  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver}`);
  }
}

class WhatsAppService extends MailService {
  constructor(sender, isBusiness) {
    super(sender);
    this.isBusiness = isBusiness;
  }

  testing() {
    console.log(
      `${this.sender} is a ${this.isBusiness ? "Business" : "Normal"}`
    );
  }

  // Overriding method
  sendMessage(message, receiver) {
    console.log(`${this.sender} sent ${message} to ${receiver} via WhatsApp`);
    // memanggil method sendMessage pada superclass
    super.sendMessage(message, receiver);
    // console.log("here");
  }
}

const whatsapp = new WhatsAppService("+6281234567890", true);
whatsapp.testing();
whatsapp.sendMessage("Hell-ooo", "+62888");

// #Method Overriding
const mailService = new MailService("someSender");
const whatsappService = new WhatsAppService("+6281234567890", true);

mailService.sendMessage("Hai, apa kabar?", "someReceiver");
whatsappService.sendMessage("Hai, apa kabar?", "+6289876543210");
