const person = {name: 'Jack William', age: 17, job: "facebook", gfName:'Ema Watson', address:'kochukhet', phone: ' 0181773635', friends: ['tom', 'jerry,', 'duck']} ;

// const gfName= person.gfName;
// // const phone= person.phone;

const {phone, gfName, friends} = person;

console.log(gfName, phone,friends);


const friend = ["sakib khan", "salman Khan", "Amir Khan", "shahrukh Khan","hero alam"];

const[chotofriend,nextFriend,...restFriend]= friend;

console.log(chotofriend,nextFriend,restFriend);

const complexObject= {

    name: "Rifat",
    info: {
        address: "cheradiip",
        school: "bashkhali school"
    }
}

const {school}= complexObject.info;

console.log(school)