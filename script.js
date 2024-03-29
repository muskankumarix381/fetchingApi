const card_div = document.querySelector('#card-div')


 const fetchAPI = async()=>{
    const api_URL='https://jsonplaceholder.typicode.com/users'
    try{
    const firstAwait =  await fetch(api_URL)   
    const response = await firstAwait.json()
    console.log(response)
    createCards(response);
    }catch(error){
    }
 }

 fetchAPI();
function createCards(data){
   data.forEach((user)=>{
    console.log(user,"user")

   let div = document.createElement("div");
   let h2 = document.createElement("h1")
   h2.textContent=user.name;
   let h3 = document.createElement("h3")
   h3.textContent = user.uessrname;
   let h4 = document.createElement("h4")
   h4.textContent = user.email;
   let p = document.createElement("p")
   p.textContent = user.address.street + ", "+ user.address.city;

div.append(h2,h3,h4,p)
   card_div.append(div)



//     <div>
//     <h1>name</h1>
//     <h3>username</h3>
//     <p>email</p>
//     <h1>address</h1>
// </div>
   })
}