const apikey = "c7e6252a2764ab61669d81fedc52eaf7";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const val = document.querySelector(".search input");
    
const searchbtn=document.querySelector(".search button");
async function check(city) {
    
    const response = await fetch(apiurl +city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
document.querySelector(".city").innerHTML=data.name
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"
document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
document.querySelector(".wind").innerHTML=data.wind.speed+" kmph"
}

searchbtn.addEventListener("click",()=>{

    check(val.value);
})


