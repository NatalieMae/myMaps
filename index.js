//fetch(`https://cors-anywhere.herokuapp.com/https://api.foursquare.com/v3/places/search?&query=coffee&limit=5&ll=41.8781%2C-87.6298`, options)

const map = L.map('map', {
    center: [43.059770, -87.883400],
    zoom: 15
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: '15',
}).addTo(map)

const marker = L.marker([43.059770, -87.883400])
marker.addTo(map).bindPopup('<p1><b>Milwaukee, WI</b></p1>').openPopup()

function shops () {
   let thisWork = document.getElementById("locations") 
    console.log(thisWork)
}



//const marker = L.marker([43.059770, -87.883400])
//marker.addTo(myMap).bindPopup('<p1><b>The Hoxton, Paris</b></p1>').openPopup()

//const changeText = () 

//user interface 
//list of search items: coffee, restaurants, hotels, markets(grocery stores)
//add a spot on the map of my location
//add 5 locations for each topic above near my location for possible
//options on where to go. 
//create a drop down menu
//create a submit button
//do all of this in JS??? Or an I add some to HTML depending on how I 
//understand it? 
