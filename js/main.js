window.onresize = function() {
    setDivSize();
}


window.onload = function () {

    

    OnButtonClick('all');

    var header1 = document.getElementById('tabHeader_1');
    header1.setAttribute('class', 'tabActiveHeader'); 
    var header2 = document.getElementById('tabHeader_2');
    header1.onclick = onHeader1Click;
    header2.onclick = onHeader2Click;
    function onHeader1Click() {
        document.getElementById('tabpage_2').style.display = 'none';
        document.getElementById('tabpage_1').style.display = 'flex';
        header1.setAttribute('class', 'tabActiveHeader');
        document.getElementById('tabHeader_2').removeAttribute('class');

    }
    function onHeader2Click() {
        document.getElementById('tabpage_2').style.display = 'flex';
        document.getElementById('tabpage_1').style.display = 'none';
        header2.setAttribute('class', 'tabActiveHeader');
        document.getElementById('tabHeader_1').removeAttribute('class');
    }

    var sliderData = [
        {
            src: '../img/logo.png',
            type: 'web'
        },
        {
            src: '../img/logo.png',
            type: 'photo'
        },
        {
            src: '../img/logo.png',
            type: 'design'
        }
    ]

    var sliderPhoto = document.getElementById('slider-photo');
    setDivSize();
}


function setDivSize() {
    var sliderPhoto = document.getElementById('slider-photo');
    sliderPhoto.scrollLeft = window.innerWidth;
    window.innerWidth = 850;
    console.log(window.innerWidth);
    // sliderPhoto.scrollLeft = window.innerWidth;
    // console.log(window.innerWidth);
}

var readMoreData = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, sint tempore. Facilis aliquid animi debitis accusantium, voluptas ut culpa quis.',
    'Lorem lorem lorem',
    'ipsum ipsum ipsum',
    'dolor dolor dolor'
]

function openModal(i) {
    document.getElementById('modal').style.display = 'block';
    console.log(i);
    document.getElementById('modal-content').innerText = readMoreData[i]
    back.classList.toggle('lock');

}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    back.classList.toggle('lock');

}

function OnButtonClick(type) {
    setDivSize();
    var sliderData = [
        {
            src: ['./img/person.jpg', './img/person.jpg', './img/person.jpg', './img/person.jpg', './img/person.jpg'],
            type: 'web',
            text: 'AWESOME PHOTO',
            text2: 'Eum cu tantas legere complectitur, hinc utamu'
        },
        {
            src: ['./img/slider.jpg', './img/slider.jpg', './img/slider.jpg', './img/slider.jpg', './img/slider.jpg'],
            type: 'photo',
            text: 'AWESOME PHOTO',
            text2: 'Eum cu tantas legere complectitur, hinc utamu'
        },
        {
            src: ['./img/graphic.jpg', './img/graphic.jpg', './img/graphic.jpg', './img/graphic.jpg', './img/graphic.jpg'],
            type: 'design',
            text: 'AWESOME PHOTO',
            text2: 'Eum cu tantas legere complectitur, hinc utamu'
        }
    var allTypes = [
        'all',
        'web',
        'photo',
        'design'
    ]
    var sliderPhoto = document.getElementById('slider-photo');
    document.getElementById('slider-photo').innerHTML = ''
    for (i = 0; i < sliderData.length; i++) {
        if (sliderData[i].type === type) {
            for (x = 0; x < sliderData[i].src.length; x++) {
                addAttributes()
            }
        }
    }
    if (type === 'all') {
        for (i = 0; i < sliderData.length; i++) {

            for (x = 0; x < sliderData[i].src.length; x++) {
                addAttributes()
            }
    document
        .getElementById('slider-photo__button-'.concat(type))
        .setAttribute('class','slider-photo__button-selected')

    for(var t of allTypes) {
        if(t !== type) {
            document
                .getElementById('slider-photo__button-'.concat(t))
                .setAttribute('class','slider-photo__button')
        }
    }

    function addAttributes() {
        var divPhoto = document.createElement('div')
        divPhoto.setAttribute('class', 'slider-photo-div')
        var text = document.createElement('div')
        text.setAttribute('class', 'slider-text')
        text.appendChild(document.createTextNode(sliderData[i].text))
        var text2 = document.createElement('div')
        text2.setAttribute('class', 'slider-text')
        text2.appendChild(document.createTextNode(sliderData[i].text2))
        var photo = document.createElement('img')
        photo.setAttribute('src', sliderData[i].src[x])
        photo.setAttribute('title', 'slider-photo-div')
        photo.setAttribute('class', 'slider-photo')
        divPhoto.appendChild(photo)
        divPhoto.appendChild(text)
        divPhoto.appendChild(text2)
        sliderPhoto.appendChild(divPhoto)
    }

}









let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__nav');
const back = document.querySelector('body');
let header__list = document.querySelector('.header__list');







header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
    // back.style.overflow 
    //     back.toggle('body');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
//     back.toggle('body');
}




















// let SOW_MODAL_BTN_SELECTOR = ".js-show-modal";
// let MODAL_SELECTOR = ".js-modal";
// let HIDE_CLASS = "u-hidden";
// let OPEN_MODAL_CLASS = "modal--show";
// let showModalBtnElement = document.querySelector(SOW_MODAL_BTN_SELECTOR);
// let modalElement = document.querySelector(MODAL_SELECTOR);

// showModalBtnElement.addEventListener("click", (event) => {
//   showModalBtnElement.classList.add(HIDE_CLASS);
//   let scrollX = window.scrollX
// 	let scrollY = window.scrollY;
//    window.onscroll = function () { window.scrollTo(scrollX, scrollY); };
// 		modalElement.classList.add(OPEN_MODAL_CLASS);
// });








// var prevent = function(event) {
//     window.scrollTo(0, 0);
//     event ? event.preventDefault() : window.event.returnValue = false;
//   };
  
//   if(window.addEventListener) {
//     var array = ['DOMMouseScroll', 'mousewheel', 'scroll'],
//       i = array.length;
  
//     while(i--) {
//       window.addEventListener(array[i], prevent, false);
//     }
//   }
//   else window.onmousewheel = document.onmousewheel = window.onscroll = prevent;