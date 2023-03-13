const express = require('express');
const router = express.Router();
const { faker } = require('@faker-js/faker');



const DEFAULT_LIMIT=25;
const teachers=[];
router.post('/account', (req, res) => {
  const limit = req.query.limit || DEFAULT_LIMIT;
  
  for (let i = 0; i < limit; i++) {
      let gender = getRandomGender();
      let name = faker.name.firstName(gender);
      let lastName = faker.name.lastName();
      const teacher = {
          id: `0${i + 1}`,
          name: name,
          lastName: lastName,
          age: getRandomIntInclusive(26, 99),
          gender: gender,
          email: faker.internet.email(name, lastName),
          movil: faker.phone.number('55 ## ## ## ##'),
          address: faker.address.streetAddress()
      };

      teachers.push(teacher);
  }

  res.send(teachers);
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  const teacher = teachers.find((teacher) => teacher.id === id);
  res.send({teacher});
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.send({
    message: `searching the id: ${id}`
  });
});

//Random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
//Random Gender
function getRandomGender() {
  prob = getRandomIntInclusive(1, 10);
  if(prob >= 1 && prob <= 5) {
      return 'male';
  }
  else if(prob >= 6 && prob <= 10){
      return 'female';
  }
}





module.exports = router;