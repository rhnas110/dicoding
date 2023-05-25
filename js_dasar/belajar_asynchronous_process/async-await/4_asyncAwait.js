const { buyCinemaTicket, goInsideCinema, withDrawMoney } = require("./utils");

async function watchMovie(amount) {
  try {
    const money = await withDrawMoney(amount);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    return result;
  } catch (error) {
    throw error;
  }
}

watchMovie(10)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

watchMovie(1)
  .then((res) => console.log(res))
  .catch((err) => console.log(err.message));
