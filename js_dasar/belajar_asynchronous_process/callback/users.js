const { getUser, getWeather } = require("./usersCallback");

function getUserWeather(userId, callback) {
  getUser(userId, (error, user) => {
    if (error) {
      callback(error, null);
    }

    getWeather(user.location, (error, weather) => {
      if (error) {
        callback(error, null);
      }

      callback(null, { ...user, ...weather });
    });
  });
}

const id = 10;

getUserWeather(id, (error, userWeather) => {
  if (error) {
    console.log(error);
  }

  console.log(userWeather); // { id: 1, name: 'John Doe', location: 'Jakarta', weather: 'Sunny', temperature: 30 }
});
