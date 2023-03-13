// const router = require('express').Router();
const express = require('express');
const router = express.Router();

const { faker } = require('@faker-js/faker');

const DEFAULT_LIMIT = 20;

router.get('/', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;

  const students = [];

  for (let i = 0; i < limit; i++) {
    const student = {
      id: `0000${i + 1}`,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      // age, grade: use the random inclusive function
      age: getRandomIntInclusive(18,28),
      grade: getRandomIntInclusive(1,9),
      // email: faker
      email: faker.internet.email(),
      // is_regular: use Math.random() true 60% probabilities
      is_regular: getRandomBoolRegular(),
      
      // is_regular: use Math.random() true 20% probabilities
      is_sHolder: getRandomBoolSchoolar()

    };
    
    students.push(student);
  }

  res.send(students);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    message: `searching the id: ${id}`
  });
});

//Functions
 function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  };

  //true 60% probabilities
  function getRandomBoolRegular(){
    probabilidad = getRandomIntInclusive(1, 100);
    if(probabilidad >= 0 && probabilidad <= 60) {
        return true;
    }
    else if(probabilidad >= 61 && probabilidad <= 100){
        return false;
    }

  }
  //true 20% probabilities
  function getRandomBoolSchoolar(){

    probabilidad = getRandomIntInclusive(1, 100);
    if(probabilidad >= 0 && probabilidad <= 20) {
        return true;
    }
    else if(probabilidad >= 21 && probabilidad <= 100){
        return false;
    }
  }


module.exports = router;
