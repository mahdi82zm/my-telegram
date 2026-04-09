"use client";

// enum UserRole {
//   Employee,
//   admin,
//   Manager,
// }

// type User = {
//   id: number;
//   name: string;
//   role: UserRole;
//   cantact: [string, string];
// };

// const user= createUser({
//   id : 1 ,
//   name : 'mahdi',
//   role: UserRole.admin,
//   cantact: ['deverloper'  , 'Frontend']
// })

// console.log(user)

// export default function createUser (user: User) : User{
//   return  user
// }

// const someValue = "this  is  a string ";
// const strLength: number = (someValue as string).length;

// type bird = {
//   name: string;
// };

// const birdstring = '{"name" :  "Eagel"}';
// const dogstring = '{"breed" :  "Poodle"}';

// const BirdObject = JSON.parse(birdstring);
// const dogObject = JSON.parse(dogstring);

// const bed = BirdObject as bird;
// const dog = dogObject as bird;

// console.log(bed.name);
// console.log(dog.name);

// enum Status {
//   Decline = "decline",
//   Pending = "pending",
// }

// type User ={
//   name : string ,
//   status :Status

// }

// const statusvalue = 'pending'

// const user : User= {name : 'mahdi zabihi' ,  status : statusvalue as  }
``
// let unknownValue: unknown;

// unknownValue = "mahdi ";
// unknownValue = 4545345;
// unknownValue = [1, 2, 4, 5];

// export default function runSomeCode() {
//   const random = Math.random();
//   if (random > 2) {
//     throw "string";
//   } else {
//     throw new Error("somthing  is wrong");
//   }
// }

// try {
//   runSomeCode()
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message)
//   } else {
//     console.log(error)
//   }
// }

export type Student = { 
  id  : number, 
  name:string
}

export  const student : Student  = {id : 1 , name : 'mahdi'}
