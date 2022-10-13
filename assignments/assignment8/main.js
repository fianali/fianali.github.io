const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// "The sun's out, it's 94 fahrenheit outside, and the birds are chirping. : insertx: went to the :inserty: to acclimate to the heat, but something went wrong and then he : insertz:. As this was happening, Bob was riding his bike and got a glimpse of everything. Although : insertx: weighed 300 pounds, that shouldn't have happened"

var storyText = "The sun's out, it's 94 fahrenheit outside, and the birds are chirping. : insertx: went to the :inserty: to acclimate to the heat, but something went wrong and then he : insertz:. As this was happening, Bob was riding his bike and got a glimpse of everything. Although : insertx: weighed 300 pounds, that shouldn't have happened."
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

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

        newStory = newStory.replace("300 pounds", weight + ' stones');
        newStory = newStory.replace("94 fahrenheit", temperature + ' centigrade');

    }

    story.textContent = newStory;
    story.style.visibility = 'visible';


}