   
let i = 0;
let images = [];
let time = 3000;
            
// Image list
images[0] = 'images/images12.jpg';
images[1] = 'images/images13.jpg';
images[2] = 'images/images3.jpg';
images[3] = 'images/images13.jpg';
            
// Change images
const changeImg = () => {
    document.slide.src = images[i];
            
    if(i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
            
    setTimeout("changeImg()", time);
};

window.onload = changeImg;


