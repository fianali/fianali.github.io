const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const arrayOfImages = ["images/penguin1.png", "images/penguin2.png", "images/penguin3.png", "images/penguin4.png", "images/penguin5.png"];

/* Declaring the alternative text for each image file */
const altText = ["pic1", "pic2", "pic3", "pic4", "pic5"];

/* Looping through images */

let i = 0;
while (i < arrayOfImages.length) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', arrayOfImages[i]);
    newImage.setAttribute('alt', altText[i]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', e => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
    });
    i++;
}


/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
});


