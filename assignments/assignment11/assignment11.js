const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const likeButton = document.querySelector('.like');
likeButton.addEventListener('click', changeNumLikes);
let numLikes = 0;

const endpoint = 'https://geek-jokes.sameerkumar.website/api';

async function getQuote() {
    console.log("test button click");
    let text = await fetch(endpoint);
    let response = await text.text();

    let json = JSON.parse(response);

    displayQuote(json);
    // displayQuote(json['author']);
}

function displayQuote(x) {
    // const quoteBox = document.querySelector('#js-quote-text');
    // const textMessage = document.createTextNode(x);
    // quoteBox.appendChild(textMessage);

    document.getElementById('js-quote-text').textContent = x;
}

function changeNumLikes() {
    let numLikesSection = document.getElementById('numLikes');
    numLikes++;
    numLikesSection.textContent = numLikes;

}

getQuote();