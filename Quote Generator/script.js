const quote = document.getElementById('blockquote');
const author = document.getElementById('author');

const api = 'https://api.quotable.io/random';

async function getQuote(url){
    const raw = await fetch(url);
    const data = await raw.json();

    quote.innerText = data.content;
    author.innerText = data.author;
    console.log(author);
}

function shareNow(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + " by " + author.innerText,"Tweet","width=600, height=300");
}

getQuote(api);
