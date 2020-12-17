var dataURL = "http://newsapi.org/v2/everything?q=gaming&from=2020-11-17&sortBy=publishedAt&apiKey=cc35c5b295a84425aacc00a8e8bb0b89";


function convertToJSON(response){
    return response.json(); //zet het om van rauwe data naar json
}

function processData(data){
console.log(data); //testen of je data hebt ontvangen
   //laat zien wat je hebt ontvangen
    
   var content = "";
   for (i = 0; i < data.articles.length; i++) {
        content += data.articles[i].content;
        content += "<img id='img' src='" + data.articles[i].urlToImage + "'/>";
    
        document.querySelector("#customername").innerHTML += content + "<br>";
  }
}

fetch(dataURL) //haal de data op
.then(convertToJSON) 
.then(processData) 
.catch(function(err) {console.log('Fetch Error :-S', err)});

