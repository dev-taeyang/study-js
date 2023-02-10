/* banner.html */
HTMLCollection.prototype.forEach = Array.prototype.forEach;
const banner = document.querySelector('div.banner');
const imageDiv = document.querySelectorAll('div.banner div');
const container = document.querySelector('section.container');
const lastImageDiv = document.createElement('div');
const firstImageDiv = document.createElement('div');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const arrows = document.querySelectorAll('.container button');
const buttons = document.querySelectorAll('.buttons button');
let checkArrow = false;
let count = 1;
let auto = setInterval(autoSlide, 2000);
let temp = buttons[0];
let size = 24480;

HTMLCollection.prototype.forEach = Array.prototype.forEach;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        clearInterval(auto);
        count = parseInt(button.innerHTML);
        changeButtonStyle();
        banner.style.transition = 'transform 0.3s';
        banner.style.transform = `translate(${-(size / 17) * count}px)`;
        auto = setInterval(autoSlide, 2000);
    });
});

imageDiv.forEach((div, i) => (div.style.backgroundImage = `url(image/00${i + 1}.jpg)`));

banner.appendChild(lastImageDiv);
lastImageDiv.style.backgroundImage = `url(image/001.jpg)`;

banner.insertBefore(firstImageDiv, document.querySelector('div.banner div'));
firstImageDiv.style.backgroundImage = `url(image/00${imageDiv.length}.jpg)`;

banner.style.transform = `translate(-1440px)`;
/* 마우스 오버 */
container.addEventListener('mouseover', function () {
    arrows.forEach((e) => (e.style.opacity = 1));

    console.log(next);
});
container.addEventListener('mouseout', function () {
    console.log('이거');
    arrows.forEach((v) => (v.style.opacity = 0));
});

// next.addEventListener('mouseover' function(next)
// {next.style.opacity = 1;});
// prev.addEventListener('mouseover' function(prev)
// { prev.style.opacity = 1;});

function changeButtonStyle() {
    if (temp) {
        temp.style.background = 'white';
        temp.style.color = 'black';
    }
    //   buttons[count - 1].style.background = 'black';
    //   buttons[count - 1].style.color = 'white';
    temp = buttons[count - 1];
}

function autoSlide() {
    banner.style.transition = 'transform 0.3s';
    banner.style.transform = `translate(${-(size / 17) * ++count}px)`;
    console.log(count);
    if (count == 16) {
        count = 1;
        setTimeout(function () {
            banner.style.transition = 'transform 0s';
            banner.style.transform = 'translate(-1440px)';
        }, 300);
    }
    changeButtonStyle();
}

prev.addEventListener('click', function () {
    if (checkArrow) {
        return;
    }
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = 'transform 0.3s';
    banner.style.transform = `translate(${-(size / 17) * --count}px)`;
    if (count == 0) {
        count = 15;
        setTimeout(function () {
            banner.style.transition = 'transform 0s';
            banner.style.transform = `translate(${-(size / 17) * imageDiv.length}px)`;
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(() => {
        checkArrow = false;
    }, 300);
});

next.addEventListener('click', function () {
    if (checkArrow) {
        return;
    }
    checkArrow = true;
    clearInterval(auto);
    banner.style.transition = 'transform 0.3s';
    banner.style.transform = `translate(${-(size / 17) * ++count}px)`;
    if (count == 16) {
        count = 1;
        setTimeout(function () {
            banner.style.transition = 'transform 0s';
            banner.style.transform = 'translate(-1440px)';
        }, 300);
    }
    changeButtonStyle();
    auto = setInterval(autoSlide, 2000);
    setTimeout(() => {
        checkArrow = false;
    }, 300);
});
