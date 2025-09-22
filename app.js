let searchbtn = document.getElementById('search');
let result = document.getElementById('result');


searchbtn.addEventListener("click", async () => {
    try {
        let city = document.getElementById('city').value;  // no #
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=RCVDQQK6PKXL2S6J6DUYRHXZ9&contentType=json`);
        let data = await response.json();
        // display the data
        result.innerHTML = `
            <h2>${data.resolvedAddress}</h2>
            <p>Current Temperature: ${data.currentConditions.temp}°C</p>
            <p>Weather: ${data.currentConditions.conditions}</p>
            <p>Humidity: ${data.currentConditions.humidity}%</p>
            <p>Wind Speed: ${data.currentConditions.windspeed} km/h</p>
            <p>Timezone: ${data.timezone}</p>
        `;
    } 
    
    catch (error) {
        console.error("Error:", error);
    }
});


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