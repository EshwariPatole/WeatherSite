const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const submitBtn = document.getElementById
    ('submitBtn');

const temp_status= document.getElementById('temp_status');
const temp= document.getElementById('temp');
const temp_real_val= document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Input empty! Please enter city name`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=f9d9d2d83d87e2448bed2b7fd4028bba`;
            const response = await fetch(url);
            const data= await response.json();
            console.log(data);
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            // temp.innerText = arrData[0].main.temp;
            temp_real_val.innerText = arrData[0].main.temp;
            // console.log(arrData[0].main.temp);
            // temp_status.innerText = arrData[0].weather[0].main;

            const tempStatus = arrData[0].weather[0].main;

            //condition for temp status
            if(tempStatus == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>"
            } else if (tempStatus =="Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: rgb(0, 255, 242);'></i>"
            } else if (tempStatus== "Rainy"){
                temp_status.innerHTML ="<i class='fas fa-cloud-showers' style='color: rgb(0, 255, 242);' ></i>"
            }else{
                temp_status.innerHTML ="<i class='fas fa-sun' style='color: #eccc68'></i>"
            }
            datahide.classList.remove('data_hide');
        } catch {
            
            city_name.innerText = `Please Enter correct city name`;
            datahide.classList.add('data_hide');
        }
    }

}

submitBtn.addEventListener('click', getInfo)