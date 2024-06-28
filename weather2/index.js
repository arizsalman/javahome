// fetch(
//     'https://api.openweathermap.org/data/2.5/weather?lat=21.4241&lon=39.8173&appid=c153479685c47f1b34a83591f3b1acbe'
// )
// .then((res)=>res.json())
// .then( (data)=>{
//     console.log(data);
//     const temp= document.getElementById("temp").innerHTML=`temperature of ${res.data.main} `
//     const City= document.getElementById("City")
//     const feelsLike= document.getElementById("feelsLike")
//     const humidity= document.getElementById("humidity")
//     const wind= document.getElementById("wind")
//     const visibility= document.getElementById("visibility")

//     var degree= Math.floor(data.main.temp-273)+"°C";
//     document.getElementById("temperature").innerHTML=degree;
// })



var touristDistination=[
    { name: "Hunza Valley", latitude: 36.3167, longitude: 74.65 },
    { name: "Skardu", latitude: 35.2971, longitude: 75.6333 },
    { name: "Fairy Meadows", latitude: 35.4213, longitude: 74.5969 },
    { name: "Naltar Valley", latitude: 36.1396, longitude: 74.1928 },
    { name: "Murree", latitude: 33.9062, longitude: 73.3903 },
    { name: "Kaghan Valley", latitude: 34.7939, longitude: 73.5793 },
    { name: "Swat Valley", latitude: 35.222, longitude: 72.4258 },
    { name: "Chitral", latitude: 35.851, longitude: 71.7864 },
    { name: "Neelum Valley", latitude: 34.5857, longitude: 73.907 },
    { name: "Ratti Gali Lake", latitude: 34.8861, longitude: 74.0486 },
    { name: "Shangrila Resort", latitude: 35.3525, longitude: 75.5088 },
    { name: "Deosai National Park", latitude: 35.0303, longitude: 75.443 },
    { name: "Khunjerab Pass", latitude: 36.8497, longitude: 75.4306 },
    { name: "Shogran", latitude: 34.6271, longitude: 73.495 },
    { name: "Rama Meadows", latitude: 35.2918, longitude: 74.9643 },
    { name: "Gojal Valley", latitude: 36.6833, longitude: 74.85 },
    { name: "Kalash Valley", latitude: 35.6699, longitude: 71.7309 },
    { name: "Ayubia National Park", latitude: 34.0607, longitude: 73.402 },
    { name: "Saiful Muluk Lake", latitude: 34.8722, longitude: 73.6919 },
    { name: "Khaplu", latitude: 35.1404, longitude: 76.337 },
    { name: "Karachi", latitude: 24.8607, longitude: 67.0011 },
    { name: "Hydrabad", latitude: 17.366, longitude:  78.476},
]
console.log(touristDistination);
let location_drop= document.getElementById("location_drop");
touristDistination.forEach(function(data,index){
    console.log(data.name);
    var dropDown_ele=` <option value=${data.name}>${data.name}</option>`
location_drop.innerHTML=dropDown_ele;
})