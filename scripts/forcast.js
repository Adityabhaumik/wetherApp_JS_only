//console.log("forcast.js is working")

const api_key = "bJOsId9Sov1G558V8dSkqNro1mhLU5KA";




//getting wether information

// http://dataservice.accuweather.com/currentconditions/v1/


const getWether=async (key) =>{

    const base="http://dataservice.accuweather.com/currentconditions/v1/";
    const queary=`${key}?apikey=${api_key}`;
    const response = await fetch(base+queary);
    const data = await response.json();
    return data[0];




};


//geting city information
const getCity= async (city) =>{
    const base = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const queary = `?apikey=${api_key}&q=${city}`;
    const response = await fetch(base+queary);
    const data = await response.json();
    
    return data[0];

};


// getCity('delhi').then(data =>{
//     console.log(data.Key);
//     return getWether(data.Key);
// }).then(data =>{
//     console.log(data);
// })
// .catch(err=>{
//     console.log(err);
// });

//getWether('202396')
//202396