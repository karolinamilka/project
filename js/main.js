window.onload = function () {

    OnButtonClick('all');

    var header1 = document.getElementById("tabHeader_1");
    header1.setAttribute("class", "tabActiveHeader");
    var header2 = document.getElementById("tabHeader_2");
    header1.onclick = onHeader1Click;
    header2.onclick = onHeader2Click;
    function onHeader1Click() {
        document.getElementById("tabpage_2").style.display = "none";
        document.getElementById("tabpage_1").style.display = "flex";
        header1.setAttribute("class", "tabActiveHeader");
        document.getElementById("tabHeader_2").removeAttribute("class");

    }
    function onHeader2Click() {
        document.getElementById("tabpage_2").style.display = "flex";
        document.getElementById("tabpage_1").style.display = "none";
        header2.setAttribute("class", "tabActiveHeader");
        document.getElementById("tabHeader_1").removeAttribute("class");
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

    var sliderPhoto = document.getElementById("slider-photo");



}

var readMoreData = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident, sint tempore. Facilis aliquid animi debitis accusantium, voluptas ut culpa quis.',
    'Lorem lorem lorem',
    'ipsum ipsum ipsum',
    'dolor dolor dolor'
]

function openModal(i) {
    document.getElementById("modal").style.display = "block";
    console.log(i);
    document.getElementById("modal-content").innerText = readMoreData[i]
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function OnButtonClick(type) {
    var sliderData = [
        {
            src: ['./img/person.jpg', './img/person.jpg', './img/person.jpg', './img/person.jpg', './img/person.jpg'],
            type: 'web',
            text: 'AWESOME PHOTO',
            // text: 'Eum cu tantas legere complectitur, hinc utamu'
        },
        {
            src: ['./img/slider.jpg', './img/slider.jpg', './img/slider.jpg', './img/slider.jpg', './img/slider.jpg'],
            type: 'photo',
            text: 'AWESOME PHOTO'
        },
        {
            src: ['./img/graphic.jpg', './img/graphic.jpg', './img/graphic.jpg', './img/graphic.jpg', './img/graphic.jpg'],
            type: 'design',
            text: 'AWESOME PHOTO'
        }
    ]
    var sliderPhoto = document.getElementById("slider-photo");
    document.getElementById("slider-photo").innerHTML = ''
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

        }
    }

    function addAttributes() {
        var divPhoto = document.createElement('div')
        divPhoto.setAttribute('class', 'slider-photo-div')
        var text = document.createElement('div')
        text.setAttribute('class', 'slider-text')
        text.appendChild(document.createTextNode(sliderData[i].text))
        var photo = document.createElement('img')
        photo.setAttribute('src', sliderData[i].src[x])
        photo.setAttribute('title', 'slider-photo-div')
        photo.setAttribute('class', 'slider-photo')
        divPhoto.appendChild(photo)
        divPhoto.appendChild(text)
        sliderPhoto.appendChild(divPhoto)
    }

}