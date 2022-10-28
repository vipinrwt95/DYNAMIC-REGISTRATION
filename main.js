//asynchronous javascript
//callbacks()
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



// function createPost(post,callback)
// {
//  setTimeout(()=>
//  {
//   posts.push({...post,createdAt:new Date()})
//   callback();
//  },1000)

// }


// creating new function and using old function as callback


// changing createpost and editpost to async await function...remember this always return a promise

const editpost=async()=>
{ let post={title:'Post three',body:'this is post three'};
 const createPost= new Promise((resolve,reject)=>
 {  
    setTimeout(()=>
    { 
     posts.push({...post,createdAt:new Date()})
     console.log(posts);
     resolve();
    },3000) 
 })

const deletepost=new Promise((resolve,reject)=>
 { 
   setTimeout(() => {
    posts.pop()
    resolve(posts)
   },5000)
     
 })
 
 await Promise.all([createPost,deletepost])
 return posts;
}

editpost().then((m)=>console.log(m));
//editpost().then(getPosts);  