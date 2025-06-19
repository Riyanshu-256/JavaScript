//const fruits = ['Mango', 'Apple', 'Orange']
// const username1 = 'Riyanshu'
// let username2 = username1
// username2 = username2 +' '+ 'Sharma'

const fruits = ['Mango', 'Apple', 'Orange']

// const myFruits = fruits

// myFruits.push('Banana')
// myFruits.push('Gauva')

// Object.assign(myFruits, fruits)
const myFruits = [...fruits]

// const myFruits = [].concat(fruits)
// const myFruits = fruits.slice()

const user1 = {
  firstName: 'Riyanshu',
  lastName: 'Sharma',
  pata: {
    city: 'Koderma',
    pincode: 825109,
  },
  subject: ['Physics', 'Chemistry', 'Maths']
}

// Shallow Copy

// const user2 = {}
// Object.assign(user2, user1)
const user2 = { ...user1 }
