//console.log("app.js is working")
const cityForm=document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.card-content');
const img = document.querySelector('.time');

const updateUI = (data) =>{

    const city_details = data.city_details;
    const weather = data.weather;
    details.innerHTML =`
    <h4 class="indigo-text">${city_details.EnglishName}</h4>
    <h5 class="grey-text">${weather.WeatherText}</h5>
    <h3>${weather.Temperature.Metric.Value} C</h3>`;
    let img_src=null;
    console.log(weather.IsDayTime);
    if(weather.IsDayTime){
        console.log('hey ');
        img_src = 'img/day.svg';
        
    }
    else{
        img_src = 'img/night.svg';
    }
   img.setAttribute('src',img_src);



 console.log(data);


}



const update_city = async (city)=>{

    const city_details = await getCity(city);
    const weather = await getWether(city_details.Key);

    return {
        city_details :city_details,
        weather : weather
    }


    
}

cityForm.addEventListener('submit',e =>{
    //prevent default action
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new info 
    update_city(city).then(data =>{
        updateUI(data);
    }).catch(err =>{
        console.log(err);
    });
});



