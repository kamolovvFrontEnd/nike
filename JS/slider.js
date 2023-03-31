let offcet = 0;
const sliderLine_of_comment = document.querySelector('.slider-line');
const colorOfPages = document.querySelector('#firstPage');
const colorOfPages1 = document.querySelector('#secondPage')
const colorOfPages2 = document.querySelector('#thirdPage')

document.querySelector('#firstPage').addEventListener('click', function () {
    offcet = 0;
    sliderLine_of_comment.style.left = -offcet + 'px';
    colorOfPages.classList.remove('color-grey')
    colorOfPages.classList.add('nike-official-color');
    colorOfPages1.classList.add('color-grey')
    colorOfPages1.classList.remove('nike-official-color');
    colorOfPages2.classList.add('color-grey')
    colorOfPages2.classList.remove('nike-official-color');
})


document.querySelector('#secondPage').addEventListener('click', function () {
    offcet = 500;
    sliderLine_of_comment.style.left = -offcet + 'px';
    colorOfPages1.classList.remove('color-grey')
    colorOfPages1.classList.add('nike-official-color');
    colorOfPages.classList.add('color-grey')
    colorOfPages.classList.remove('nike-official-color');
    colorOfPages2.classList.add('color-grey')
    colorOfPages2.classList.remove('nike-official-color');
})


document.querySelector('#thirdPage').addEventListener('click', function () {
    offcet = 1000;
    sliderLine_of_comment.style.left = -offcet + 'px';
    colorOfPages2.classList.remove('color-grey')
    colorOfPages2.classList.add('nike-official-color');
    colorOfPages1.classList.add('color-grey')
    colorOfPages1.classList.remove('nike-official-color');
    colorOfPages.classList.add('color-grey')
    colorOfPages.classList.remove('nike-official-color');
})

