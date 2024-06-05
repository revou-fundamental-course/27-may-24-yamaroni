// Ini Javascript

function formValidation() {
    let nameInput = document.getElementById('name-input').value;
    if (nameInput == null || nameInput == '') {
        alert('Inputan Kosong');
    } else {
        console.log(nameInput);
    }
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
    let listImage = document.getElementsByClassName('banner-img');
    if (indexBanner > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log('Index ' + (indexSlide - 1) + ' Adalah Index Image Yang di tampilkan');
}

setInterval(() => nextSlide(1), 3000);