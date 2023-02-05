let celsius=document.getElementById("celsius");
let fahrenheight=document.getElementById("fahrenheight");
let kelvin=document.getElementById("kelvin");
let rankine=document.getElementById("rankine");

const debounce = (func, wait)=>{
  let timer=null;
  return function(){
    clearTimeout(timer);
    timer = setTimeout(func, wait);
  };
};

celsius.addEventListener(
  "input",
  debounce(() => {
    if (celsius.value.length != 0) {
      fahrenheight.value = convertToFahrenheight(celsius.value);
    } else {
      fahrenheight.value = "";
    }
  }, 500)
);

celsius.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        kelvin.value = convertToKelvin(celsius.value);
      } else {
        celsius.value = "";
      }
    }, 500)
);

celsius.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        rankine.value = convertToRankine(celsius.value);
      } else {
        celsius.value = "";
      }
    }, 500)
);

fahrenheight.addEventListener(
  "input",
  debounce(() => {
    if (fahrenheight.value.length != 0) {
      celsius.value = convertToCelsius(fahrenheight.value);
    } else {
      fahrenheight.value = "";
    }
  }, 500)
);

fahrenheight.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        kelvin.value = convertToKelvin(fahrenheight.value);
      } else {
        fahrenheight.value = "";
      }
    }, 500)
);

fahrenheight.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        rankine.value = convertToRankine(fahrenheight.value);
      } else {
        fahrenheight.value = "";
      }
    }, 500)
);

kelvin.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        celsius.value = convertToCelsius(kelvin.value);
      } else {
        kelvin.value = "";
      }
    }, 500)
);

kelvin.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        fahrenheight.value = convertToFahrenheight(kelvin.value);
      } else {
        kelvin.value = "";
      }
    }, 500)
);

kelvin.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        rankine.value = convertToRankine(kelvin.value);
      } else {
        kelvin.value = "";
      }
    }, 500)
);
  
rankine.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        celsius.value = convertToCelsius(rankine.value);
      } else {
        rankine.value = "";
      }
    }, 500)
);

rankine.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        fahrenheight.value = convertToFahrenheight(rankine.value);
      } else {
        rankine.value = "";
      }
    }, 500)
);

rankine.addEventListener(
    "input",
    debounce(() => {
      if (celsius.value.length != 0) {
        kelvin.value = convertToKelvin(rankine.value);
      } else {
        rankine.value = "";
      }
    }, 500)
);

const convertToCelsius = (celsius) => ((Number(celsius) - 32) * 5) / 9;
const convertToFahrenheight = (celsius) => (Number(celsius) * 9) / 5 + 32;
const convertToKelvin = (celsius) => (Number(celsius) + 273);
const convertToRankine = (celsius) => (Number(celsius) * 5/9 + 491.67);