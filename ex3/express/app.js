const express = require('express');
const app = express();

const PORT = 3000;

// Función para calcular la serie de Fibonacci
const fibonacci = n => {
  if (n === 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  }
};

app.get('/', (_, res) => {
  res.send({
    message: 'Hello world'
  });
});

app.get('/random', (_, res) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  res.send({ number: randomNumber });
});

app.post('/fibonacci', (req, res) => {
  const { n } = req.body;
  const fib = fibonacci(n);
  res.send({ fib });
});



app.post('/', (_, res) => {
  res.send({
    message: 'Foo bar'
  });
});

app.put('/foo', (req, res) => {
  res.send({
    method: req.method,
    url: req.url
  })
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT :${PORT}`);
});
