const dropdownFeatures = document.getElementById('dropdownFeatures');
const dropdownCompany = document.getElementById('dropdownCompany');

const arrowDownFeat = document.querySelector('#features .arrowDown');
const arrowDownComp = document.querySelector('#company .arrowDown');


const getArrowUpImg1 = () => {
    arrowDownFeat.src = './images/icon-arrow-up.svg';
    dropdownFeatures.style.display = 'block'
}

const getArrowUpImg2 = () => {
    arrowDownComp.src = './images/icon-arrow-up.svg';
    dropdownCompany.style.display = 'block';
}

const getArrowDownImg1 = () => {
    arrowDownFeat.src = './images/icon-arrow-down.svg';
    dropdownFeatures.style.display = 'none'
}

const getArrowDownImg2 = () => {
    arrowDownComp.src = './images/icon-arrow-down.svg';
    dropdownCompany.style.display = 'none';
}

const displayNavMobile = () => {
    
    const hamburgerMenu = document.getElementById('hamburgerIcon');
    hamburgerMenu.style.cursor = 'pointer';
    const nav = document.getElementById('mobileNav');
    const closeMenu = document.querySelector('.closeNavX');
    
    let media = window.matchMedia('(max-width: 830px)');
    if (media.matches) {
        hamburgerMenu.style.display = 'block';
    } else {
        hamburgerMenu.style.display = 'none';
    }

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
    
}








setInterval(displayNavMobile, 100);
