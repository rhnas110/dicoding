function getMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error("Not enough money to withdraw"));
      }
      resolve({ message: `Success withdraw : ${amount}`, amount });
    }, 1000);
  });
}

function buyTicketCinema(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money.amount < 50) {
        reject(new Error("Not enough money to buy ticket"));
      }

      resolve(`You got a ticket`);
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error("You dont have a ticket"));
      }

      resolve(`Have fun`);
    }, 1000);
  });
}

function watchMovie() {
  getMoney(50)
    .then((money) => {
      // console.log(money);
      return buyTicketCinema(money);
    })
    .then((ticket) => {
      //   console.log(ticket);
      return goInsideCinema(ticket);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

watchMovie();
