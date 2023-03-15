const getArrowUpImg1 = () => {
    let img1 = document.querySelector('#features .arrowDown');
    let dropdownFeatures = document.getElementById('dropdownFeatures');

    img1.src = './images/icon-arrow-up.svg';
    dropdownFeatures.style.display = 'block'
}

const getArrowUpImg2 = () => {
    let img2 = document.querySelector('#company .arrowDown');
    let dropdownCompany = document.getElementById('dropdownCompany');

    img2.src = './images/icon-arrow-up.svg';
    dropdownCompany.style.display = 'block';
}

const getArrowDownImg1 = () => {
    let img1 = document.querySelector('#features .arrowDown');
    let dropdownFeatures = document.getElementById('dropdownFeatures');

    img1.src = './images/icon-arrow-down.svg';
    dropdownFeatures.style.display = 'none'
}

const getArrowDownImg2 = () => {
    let img2 = document.querySelector('#company .arrowDown');
    let dropdownCompany = document.getElementById('dropdownCompany');

    img2.src = './images/icon-arrow-down.svg';
    dropdownCompany.style.display = 'none';
}