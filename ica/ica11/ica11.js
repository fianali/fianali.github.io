const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

async function getQuote() {
    console.log("test button click");
    let text = await fetch(endpoint);
    let response = await text.text();

    let json = JSON.parse(response);

    displayQuote(json['message']);
}

function displayQuote(x) {
    // const quoteBox = document.querySelector('#js-quote-text');
    // const textMessage = document.createTextNode(x);
    // quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}

getQuote();