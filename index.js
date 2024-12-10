const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

function getWelcomeMessage() {
  return 'Welcome to our service!'; // semicolon  is not mandatory in js
}
app.get('/Welcome', (req, res) => {
  res.send(getWelcomeMessage()); //   () <- This for call
});

function greetWelcomeMessage(username) {
  return 'Hello, ' + username + '!';
}
app.get('/greet', (req, res) => {
  let username = req.query.username;
  res.send(greetWelcomeMessage(username));

  //   /greet?username=John
});

function passwordStrength(password) {
  console.log(password.length); //print value of used method inside,in terminal
  if (password.length > 15) {
    // .length method to counts character
    return 'Password is strong.'; // like .toString - value to string
  } else {
    return 'Password is waek.';
  }
}

app.get('/check-password', (req, res) => {
  let password = req.query.password;
  res.send(passwordStrength(password));

  //   /check-password?password=verylongpassword123
});

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get('/sum', (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
  // /sum?num1=10&num2=20
});

function subscriptionStatus(username, isSubscribed) {
  if (isSubscribed === 'true') {
    return username + ' is subscribed ';
  } else {
    return username + ' is not subscribed';
  }
}

app.get('/check-subscription', (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(subscriptionStatus(username, isSubscribed));

  //   /check-subscription?username=John&isSubscribed=true
});

function calculateDiscountPrice(price, discount) {
  let discountedPrice = price - (price * discount) / 100;
  return discountedPrice.toString();
}

app.get('/discount-price', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculateDiscountPrice(price, discount));

  //   /discount-price?price=100&discount=10
});

function personalizedGreating(name, gender, age) {
  return 'Hello, ' + name + '! you are a ' + age + ' years old ' + gender + '.';
}

app.get('/personalized-greeting', (req, res) => {
  let name = req.query.name;
  let gender = req.query.gender;
  let age = req.query.age;
  res.send(personalizedGreating(name, gender, age));

  //  /personalized-greeting?name=John&gender=male&age=25
});

function calculatePrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  let finalPrice = discountedPrice + (discountedPrice * tax) / 100;

  return finalPrice.toString();
}

app.get('/price-calculation', (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(calculatePrice(price, discount, tax));

  //   /price-calculation?price=100&discount=10&tax=5
});

function calculateExerciseTime(running, cycling, swimming) {
  let totalExerciseTime = running + cycling + swimming;

  return totalExerciseTime; //.toString();  // instead of here
}

app.get('/total-exercise-time', (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(calculateExerciseTime(running, cycling, swimming).toString()); // can be put .toString() here also

  // /total-exercise-time?running=30&cycling=45&swimming=60
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
