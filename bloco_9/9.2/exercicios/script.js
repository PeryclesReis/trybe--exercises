const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  return new Promise ((response, reject) => {
    const myArray = Array.from(
      { length: 10 }, () =>  Math.floor(Math.random() * 50) + 1);
    if (myArray < 8000){

      fetch(API_URL, { headers: { Accept: 'application/json' } })
        .then(response => response.json())
        .then(data =>
          document.getElementById('jokeContainer').innerText = data.joke
      );
    }

  });
}

const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from(
      { length: 10 },
      () =>  Math.floor(Math.random() * 50) + 1
    );
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);

    (sum < 8000) ? resolve() : reject();
  });

  myPromise
    .then(() => console.log('Deu bom'))
    .catch(() => console.log('Deu ruim'));
};

fetchPromise();

window.onload = () => fetchJoke();

