fetch(
    'https://api.openweathermap.org/data/2.5/weather?lat=21.4241&lon=39.8173&appid=c153479685c47f1b34a83591f3b1acbe'
)
.then((res)=>res.json())
.then( (data)=>{
    console.log(data);
    const temp= document.getElementById("temp")
    const City= document.getElementById("City")
    const feelsLike= document.getElementById("feelsLike")
    const humidity= document.getElementById("humidity")
    const wind= document.getElementById("wind")
    const visibility= document.getElementById("visibility")

    var degree= Math.floor(data.main.temp-273)+"°C";
    document.getElementById("temperature").innerHTML=degree;
})
