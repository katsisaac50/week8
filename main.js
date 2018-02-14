console.log("script loaded");
let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers);




let oddNumbers = numbers.filter(x=>x%2!==0);
doubledOddNumbers=oddNumbers.map(x=>x*2);
console.log(doubledOddNumbers);



function fetchJsonData(url, callBackFunction) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', function() {
        callBackFunction(JSON.parse(request.responseText));
    });

    request.open('get', url);
    request.send();
}

fetchJsonData("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json", function(jsonData) {
    console.log(jsonData);
    movies=jsonData;
    //console.log(movies.filter(x=>x.rating>9));
    var newArray = movies.map((x)=>x.rating>=7 ? 'good':'bad')
    console.log(newArray);
    
    
});

fetchJsonData("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json",function moviesRatings(movies){
    console.log(moviesRatings());
    var total = 0,
        i;
    for (i = 0; i < movies.length; i += 1) {
        total += movies[i];
    }
    return total / movies.length;
});
