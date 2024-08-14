var category = 'happiness';
const apiKey = 'vX3Vc/DVQyyOOdGX8+1uXg==0vyJ5EwrEisui5BY';
const url = 'https://api.api-ninjas.com/v1/quotes?category=' + category;

const quote = document.getElementById("quote");
const author = document.getElementById("author");

async function getQuote(url) {
    const response = await fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey }
    });
    const data = await response.json();

    if (data.length > 0) {
        quote.innerText = data[0].quote;
        author.innerText = data[0].author;
    } else {
        quote.innerText = "No quotes found.";
        author.innerText = "";
    }
}

getQuote(url);