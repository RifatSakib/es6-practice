const ages = [12,14,16,13,17];
const ages2  = [ 15,16,12];
const ages3  = [ 20,33, 15,16,12];

// const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// console.log (allAges)


const allAges2 = [...ages, ...ages2, 5, ...ages3];
console.log (allAges2)

const business = 150;
const minister = 450;
const sochib = 250

const maximum = Math.max(business, minister, sochib);
console.log(maximum);


const takapoisha= [100,328,388];
const maximum2 = Math.max(...takapoisha);
console.log(maximum2);
