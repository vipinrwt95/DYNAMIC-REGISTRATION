const posts=[

    { title:'post one',body:'this is post one',createdAt:new Date()},
    {title:'post two',body: 'this is post two',createdAt:new Date()}
];
let intevalid;
function getPosts()
{  clearInterval(intevalid);
 intevalid=setInterval(()=>{
    
    let output='';
    posts.forEach((post, index)=>
    {
     output+=`<li>${post.title} - last updated ${(new Date()-post.createdAt)/1000} seconds ago</li>`; 
    });
    document.body.innerHTML=output;
    },1000)
}



function createPost(post)
{
    return new Promise((resolve,reject)=>{

        setTimeout(()=>
        { console.log("post creating")
         
         posts.push({...post,createdAt:new Date()})//created AT for measuring timelines
         const error=false;

        if(!error)
        {
            resolve(posts)
            
        }
        else{
            reject('Error:Something went wrong');
        }



        },1000);

        

    })
}; 
 
createPost({title :'Post three',body:'this is post three'})
.then(getPosts)
.catch(err=>console.log(err));

function deletepost()
{ 
  
    return new Promise((resolve,reject)=>{
     
        setTimeout(()=>
        {   
            let error=false;
            if(posts.length==0)
            {
               error=true; 
            }
            posts.pop();
            
            

          if(!error)
          {
            resolve();
          }
          else{
            reject('Error:Array is empty now');
            clearInterval(id);
          }
            
        },1000)

    })
 

}
   
// deletepost()
// .then(getPosts)
// .catch(err=>console.log(err));
// deletepost()
// .then(getPosts)
// .catch(err=>console.log(err));
// deletepost()
// .then(getPosts)
// .catch(err=>console.log(err));
// deletepost()
// .then(getPosts)
// .catch(err=>console.log(err));
let id;




// promise.all


// const promise1=Promise.resolve('Hello world');
// const promise2=10;
// const promise3= new Promise((resolve ,reject)=>
// {
//    setTimeout(resolve,2000,'goodbye') 
// });
// const promise4=fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json());

// Promise.all([promise1,promise2,promise3,promise4]).then(values=>console.log(values));



const user=[{lastActitvitytime:new Date().getTime()}]

function updateLastUserActivityTime()
{ 
  return new Promise((resolve,reject)=>{
     
          user.lastActitvitytime=new Date().getTime();
           resolve(user.lastActitvitytime)
     })
}
createPost({title :'Post four',body:'this is post four'})
.then(()=>{
    getPosts();
   setTimeout(()=>
{
  updateLastUserActivityTime();
      
},5000)
})

Promise.all([createPost(),updateLastUserActivityTime()]).then((values)=>{

   console.log(values);
   if(posts.length==0)
   {
    clearInterval(id)
   }
   id=setInterval(()=>
     {
      deletepost()
      .then(()=>{console.log(posts),getPosts})
      .catch(err=>console.log(err));
        
     },1000)

});



