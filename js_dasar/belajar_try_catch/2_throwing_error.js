const json1 = '{ "name": "Yoda", "age": 20 }';

try {
  const user = JSON.parse(json1);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

//

const json2 = "{ bad json }";

try {
  const user = JSON.parse(json2);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

//

const json3 = '{ "age": 20 }';
try {
  const user = JSON.parse(json3);
  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

//

const json4 = '{ "name": "Yoda", "age": 20 }';

try {
  const user = JSON.parse(json4);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  errorCode;

  console.log(user.name); // Yoda
  console.log(user.age); // 20
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
