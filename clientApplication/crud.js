const rl = require('readline-sync');
async function get() {
  const name = rl.question('enter your name: ');
  const lang = rl.question('Enter your language: en, he, es: ');
  try {
    const res = await fetch(
      `http://localhost:3000/greet?name=${name}&lang=${lang}`
    );
    const data = await res.json();
    console.log(data.result);
  } catch (error) {
    console.error(error.message);
  }
}

async function average(obj) {
  try {
    const res = await fetch('http://localhost:3000/math/average', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

async function wordinfo(word) {
  try {
    const res = await fetch(`http://localhost:3000/shout/${word}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ word: `${word}` }),
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

async function deletefromderver(input) {
  try {
    const res = await fetch('http://localhost:3000/secure/resource', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-role': input,
      },
    });
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = { get, average, wordinfo, deletefromderver };
