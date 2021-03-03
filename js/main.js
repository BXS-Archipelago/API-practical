let showMenu = document.querySelector(".nav-links2")
  
const barsFunction = () => {
   if (showMenu.style.opacity === "0")
   {
      showMenu.style.opacity = "1"
} else {
     showMenu.style.opacity = "0"
}
}

// create a connection for the YELP API
const baseURL = "https://ci-swapi.herokuapp.com/api/"

function getData(type, cb) {
var xhr = new XMLHttpRequest();



//check if status will allow my data_in retrieval from xhr object 
xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      cb(JSON.parse(this.responseText));
      }
   };

   xhr.open("GET", baseURL + type + "/");
   xhr.send();
}

function writeToDocument(type) {
   getData(type, function(data){
      console.dir(data);
      document.getElementById("data").innerHTML = data.results;
   })
}

