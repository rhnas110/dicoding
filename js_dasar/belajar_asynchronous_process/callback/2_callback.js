function getUsers(isOffline, callback) {
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];

    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

function usersCallback(error, users) {
  if (error) {
    console.log("process failed", error.message);
    return;
  }

  console.log("process success", users);
}

getUsers(false, usersCallback);
getUsers(true, usersCallback);
