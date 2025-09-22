// const img = document.querySelector('img');
// const searchbtn = document.querySelector('#search-button');
// let searchinput = document.querySelector('#search').value;

// // searchbtn.addEventListener("click", ()=>{
// //     let searchinput = document.querySelector('#search').value;

// //     fetch(`https://api.giphy.com/v1/gifs/translate?api_key=JV9CoVu8Ho9JY70sChP1oVqTM09Z2AJF&s=${searchinput}`)
// //     .then(function(response) {
// //       return response.json();
// //     })
// //     .then(function(data) {
// //       img.src = data.data.images.original.url;
// //     });
// // });

// searchbtn.addEventListener("click", async ()=>{
//     try{
//         let searchinput = document.querySelector('#search').value;
//         let response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=JV9CoVu8Ho9JY70sChP1oVqTM09Z2AJF&s=${searchinput}`);
//         let data = await response.json();
//         img.src = data.data.images.original.url;
//     } 
//     catch(error){
//         console.log("Error occured", error);
//     }
// });