const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.querySelector('#temp_status');
const data_hide = document.querySelector('.middle_layer');
const temp_reaVal = document.querySelector('.temp_realVal');


const getInfo = async (e) =>{
    e.preventDefault();
    let cityVal = cityName.value;
   
    if(cityVal === ''){
        city_name.innerText= 'Please search Properly';
        data_hide.classList.add('data_hide');
       
    }else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=39834d0e636d111ae0b8218621272029`;
            const response = await fetch(url)
            const data = await response.json();
            // console.log(data);
            const arr = [data];
         
            temp_reaVal.innerHTML = arr[0].main.temp;
            city_name.innerText = arr[0].name;
           const tempMode = arr[0].weather[0].main;
           // condition to check  sunny or cloudy 
           if(tempMode == 'clear'){
               temp_status.innerHTML = `<img src='./image/sunny.png' alt='sunny'>`
           } else if(tempMode == 'clouds'){
            temp_status.innerHTML = `<img src='./image/cloudy.png' alt='sunny'>`
        } else if(tempMode == 'Rain'){
            temp_status.innerHTML = `<img src='./image/rain_light.png' alt='sunny'>`
        } else{
            temp_status.innerHTML = `<img src='./image/partly_cloudy.png' alt='sunny'>`
        };
        data_hide.classList.remove('data_hide');
        }catch(e){
            city_name.innerText = ' plz search properly';
            data_hide.classList.add('data_hide');
        }
    }
}
submitBtn.addEventListener('click', getInfo);