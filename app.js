let btn = document.querySelector(".newQuote");
btn.addEventListener("click",async function(){  //function becomes synchronous
    const url = "https://api.quotable.io/random";
    const response = await fetch(url);      //waits here until api is fetched
    var data = await response.json();       //stores the result fetched by api
    // console.log(data);
    document.querySelector(".quote span").innerHTML = `${data.content}`;
    document.querySelector(".author span").innerHTML = `${data.author}`;
});