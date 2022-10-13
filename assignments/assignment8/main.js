const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


var storyText = "As the days get hotter and hotter, reaching a high of 94 fahrenheit, : insertx: tries to cool down by buying a cold drink from the local :inserty:. : insertx: found her favorite drink, so she celebrates by : insertz:! Bob sees her celebrating and runs to join her, but a 300 pound bodybuilder gets in their way :(";
const insertX = ["Rapunzel", "Mulan", "Ariel"];
const insertY = ["convenience store", "street-food stand", "Disneyland merch store"];
const insertZ = ["running into the prince's arms", "dancing with her pet accomplice", "singing her heart out"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(": insertx:", xItem);
    newStory = newStory.replace(": insertx:", xItem);

    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(": insertz:", zItem);

    if (customName.value !== "") {
        const name = customName.value;
        newStory = newStory.replace("Bob", name);
    }

    if (document.getElementById("uk").checked) {
        const temperature = Math.round((94 - 32) * (5 / 9));
        const weight = Math.round(300 / 14);

        newStory = newStory.replace("300 pound", weight + ' stone');
        newStory = newStory.replace("94 fahrenheit", temperature + ' centigrade');

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';


}