// const user = {
//     name: 'Maya',
//     username: 'maya12345',
//     email: 'maya@gmail.com',
//     age: '29',
//     blog: ['this is my first pos', 'hello guys', 'how are you doing?'],
//     greet(){
//         console.log('Hello Maya')
//     }, 
//     logIn(){
//         console.log('You are logged in')
//     }
//     logOut(){
//         console.log('You are logged out')
//     }
// }

// console.log(user)
// console.log(user.greet())
// console.log(user.email)




// const user = {
//     name: 'Maya',
//     username: 'maya12345',
//     email: 'maya@gmail.com',
//     age: '29',
//     blog: ['this is my first pos', 'hello guys', 'how are you doing?'],


//     greet(){
//         console.log(`Hello ${this.name}`) 
//         // template literals/string
//         console.log('hello' + this.name) 
//         // concatination
//     }, 
//     logIn(){
//         console.log(`${this.name} is logged In`)
//     }
//     logOut(){
//         console.log('You are logged out')
//     }
// }

// console.log(user)
// console.log(user.greet())
// console.log(user.email)


// class user{
//     constructor(username, email, age){
//         this.username = username
//         this.email = email
//         this.age = age;
//     }
// }

// const userOne = new user('maya', 'maya@.com', 16)
// const userTwo = new user('peace', 'peacy@.com', 30)


// class Admin extends{
//     constructor(){

//     }
// }

// using fetch to get data from an api
// fetch("https").then ((resp)=> resp.json())
// .then (function(data){
//     console.log(data)
// })
// .catch(function(error) {console.log(error);});

// example 1

// fetch('https://randomuser.me/api/?results=10')
// .then((resp) => {
//     return resp.json()
// }).then(data =>{
//     console.log(data);
    
// })


// example 2
// to get results
// fetch('https://randomuser.me/api/?results=10')
// .then((resp) => {
//     return resp.json()
// }).then(data =>{
//     console.log(data.results);
    
// })

const ul = document.getElementById('users')


fetch('https://randomuser.me/api/?results=10')
.then((resp) => resp.json())
.then(function (data) {
    let users = data.results;
    return users.map((user) =>{
     const li =  document.createElement('li');
     const img =  document.createElement('img');
     const p =  document.createElement('p');

     ul.appendChild(li);
     let paragraph = li.appendChild(p);
     let image = li.appendChild(img);
     let firstName = user.name.first;
     let lastName = user.name.last;
     console.log(user.picture.large);
    //  paragraph.innerHTML = firstname + " " lastname)
     paragraph.innerHTML = `${firstName} ${lastName}`;
     image.src = user.picture.large;

    });
})
    .catch(function (error) {
        console.log(error);
    });

   