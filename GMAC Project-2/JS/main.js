// For owlCarousel for Deal of the day Section

// Call the plugin
$(".owl-carousel").owlCarousel({
    
    loop: true,
    margin: 10,
    dots: true,
    responsiveClass: true,
    autoplay: false,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,

    responsive: {
        0: {
        items: 1,
        nav: true,
        },

        600: {
        items: 3,
        nav: false,
        },

        1000: {
        items: 4,
        nav: true,
        loop: true,
        },
    },
});

// Array of Objects

const reviewSlider = [
    {
        id:1,
        image:'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'narendra modi',
        text:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus aspernatur perspiciatis eligendi, natus alias.`
    },

    {
        id:2,
        image:'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'adrian twarog',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatibus excepturi facilis tempore eum repellendus?`
    },

    {
        id:3,
        image:'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'manmohan singh',
        text:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga eius, enim consequuntur vel blanditiis voluptate!`
    },

    {
        id:4,
        image:'https://images.pexels.com/photos/324658/pexels-photo-324658.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'sonia gandhi',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, fugit doloremque iste recusandae ea sit?`
    },

    {
        id:5,
        image:'https://images.pexels.com/photos/372042/pexels-photo-372042.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'rahul gandhi',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, fugit doloremque iste recusandae ea sit?`
    },

    {
        id:6,
        image:'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        name:'robert vadra',
        text:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, fugit doloremque iste recusandae ea sit?`
    },
];

console.log(reviewSlider);
// returns nodeObject

console.log(reviewSlider.length);

// First we should select image , name ,text, prev and next buttons.

// Selecting the elements
const image = document.getElementById('person-image');
console.log(image);

const textPerson = document.getElementById('text');
console.log(textPerson);

const studentName = document.getElementById('name');
console.log(studentName);

const previousButton = document.querySelector('.prev-btn');
console.log(previousButton);

const nextButton = document.querySelector('.next-btn');
console.log(nextButton);

// Global variable
let currentItem = 0;

// When ever the window loads complete HTML Document,
window.addEventListener('DOMContentLoaded',function(){
    // console.log('Hello');

    // Call back function as referance
    showDetails();
});

// Ananymous function
function showDetails(){
    const item = reviewSlider[currentItem];

    image.src = item.image;
    studentName.textContent = item.name;
    textPerson.textContent = item.text;
}

// prevStudent
previousButton.addEventListener('click',function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviewSlider.length -1;
    }
    showDetails();
})

// nextStudent
nextButton.addEventListener('click',function(){
    currentItem++;
    if(currentItem > reviewSlider.length -1){
        currentItem = 0;
    }
    showDetails();
});