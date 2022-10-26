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



function createPost(post,callback)
{
 setTimeout(()=>
 {
  posts.push({...post,createdAt:new Date()})
  callback();
 },1000)

}

createPost({title:'Post three',body:'this is post three'},getPosts,lasteditedinsecondsago);
// creating new function and using old function as callback
function create4thPost(post,createPost)
{
  setTimeout(()=>{
    posts.push({...post,createdAt:new Date()}) 
    createPost();
  },2000)  
}

create4thPost({title:'Post four',body:'this is post four'},getPosts);


function lasteditedinsecondsago()
{
    setInterval(()=>
    {
        let output='';
        output=`<li>last edited ${}</li>`
    },1000)
    


}