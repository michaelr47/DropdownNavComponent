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

const displayNavMobile = () => {
    const hamburgerMenu = document.getElementById('hamburgerIcon');
    hamburgerMenu.style.cursor = 'pointer';
    const nav = document.getElementById('mobileNav');
    const closeMenu = document.querySelector('.closeNavX');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.style.display = 'none';
        nav.style.display = 'block';
    })
    closeMenu.addEventListener('click', () => {
            nav.style.display = 'none';
            hamburgerMenu.style.display = 'block';
    })
    
    window.onclick = event => {
        if (event.target == nav) {
            nav.style.display = 'none';
            hamburgerMenu.style.display = 'block';
        }
    }
    let media = window.matchMedia('(max-width: 830px)');
    if (media.matches) {
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
    }
}

// let el = window.matchMedia('(max-width: 830px)');
// const hamburgerMedia = (el) => {
//     if (el.matches) {
//         document.getElementById('hamburgerIcon').style.display = 'none'; 
//     } else {
//         document.getElementById('hamburgerIcon').style.display = 'block';
//     }
// }

// hamburgerMedia(el);
// el.addEventListener('change', hamburgerMedia)
// setInterval(displayNavMobile, 1000)
setInterval(displayNavMobile, 1000);
