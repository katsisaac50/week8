console.log('script loaded');

function fetchJsonData(url, callBackFunction) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        callBackFunction(JSON.parse(request.responseText));
    });

    request.open('get', url);
    request.send();
}

fetchJsonData("https://api.spacexdata.com/v2/launches", function(jsonData) {
    console.log(jsonData);
    document.getElementById("demo").innerHTML = jsonData[0].rocket.rocket_name;
});

const api_key = '2FuF3E9nyFeXWt3aHIfkxtKTUGn73v0w';
const query = 'success';
const giphyUrl = 'http://api.giphy.com/v1/gifs/search?api_key=' + api_key + '&q=' + query;


fetchJsonData(giphyUrl, function(giphyData) {
    console.log(giphyData.data);
    document.getElementById("demo").innerHTML = giphyData;
    let gif_url = [];
    let gifData = giphyData.data;
    for (let i = 0; i < gifData.length; i++) {
        gif_url.push(gifData[i]);
    }
    for (let i = 0; i < gif_url.length; i++) {
        console.log(gif_url[i]);
        let Title = document.createElement("h2");

        let container = document.createElement("div");
        let ul = document.createElement("ul");
        let url = document.createElement("li");
        let giphyImg = document.createElement("img");
        document.querySelector("body").appendChild(container);
        container.appendChild(ul);
        container.appendChild(Title);
        ul.appendChild(url);
        container.appendChild(giphyImg);
        Title.innerHTML = gif_url[i].title;
        giphyImg.src = gif_url[i].images.preview_gif.url;
        url.innerHTML = gif_url[i].url;

    }




});
const astroData = "http://api.open-notify.org/astros.json"


fetchJsonData(astroData, function(astro_Data) {
    let AstronutsData = astro_Data.people;
    for (let i = 0; i < AstronutsData.length; i++) {

        console.log(AstronutsData[i].name);


    }

});

fetchJsonData(astroData, function(astro_Data2) {
    console.log(astro_Data2);
    let AstronutsData2 = astro_Data2.people;
    for (let i = 0; i < AstronutsData2.length; i++) {

        console.log(AstronutsData2[i].name);


    }
    var number = document.getElementById("astronut").value;
    var container = document.getElementById("container");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i = 0; i < 6; i++) {
        container.appendChild(document.createTextNode((i + 1) + ". " + AstronutsData2[i].name));

        container.appendChild(document.createElement("br"));
    }
})