

console.log('person1: shows ticket');
console.log('person2: shows tickets');
//promise method 
const promiseWifeBringingTix = new Promise((resolve,reject)=>
{
   setTimeout(()=>
   {
     resolve('tickets');
   },3000)

});
const getpopcorn=promiseWifeBringingTix.then((t)=>
{ console.log('husband: we should go in');
  console.log('wife:no i am hungry');
  return new Promise((resolve,reject)=>
  resolve(`${t} & popcorn done`));
}); 
const getbutter=getpopcorn.then((t)=>
{   console.log('husband:i have popcorn');
    console.log('husband: we should go in');
    console.log('wife:no i need butter as well');
    return new Promise((resolve,reject)=>
    resolve(`${t} & butter `));
 
})
const getColddrinks=getbutter.then((t)=>
{
    console.log('husband: here is your popcorn with butter');
    console.log('i need coke as well');
    console.log('got it');
    return new Promise((resolve,reject)=>
    resolve(`${t} with coke`))
})
getColddrinks.then((t)=>console.log(t))




// async and await method:



// const preMovie =async ()=>{

// const promiseWifeBringingTix=new Promise((resolve,reject)=>
// {
//   setTimeout(()=>resolve('tickets'),2000);
// })
// const getpopcorn=new Promise((resolve,reject)=>resolve(`popcorn`));
// let ticket=await promiseWifeBringingTix;
// console.log('husband: we should go in');
//   console.log('wife:no i am hungry');

// const getbutter=new Promise((resolve,reject)=>resolve('butter'))  
// let popcorn=await getpopcorn;

// console.log(`husband:i got ${popcorn}`);
//    console.log('husband: we should go in');
//         console.log('wife:no i need butter as well');

// let butter =await getbutter;

// console.log(`husband: i got ${butter} and popcorn`);
// const getColddrinks=new Promise((resolve,reject)=>resolve('coke'))
// let drink=await getColddrinks;

// console.log(`husband:i got butter,popcorn with${drink}`)
// console.log('lets go in now');

// return ticket;
// }



// preMovie().then((m)=>console.log(`person3: shows ${m}`));

console.log('person4: shows tickets');
console.log('person5: shows tickets');


