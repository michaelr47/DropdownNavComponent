const dropdownFeatures = document.getElementById('dropdownFeatures');
const dropdownCompany = document.getElementById('dropdownCompany');

const arrowDownFeat = document.querySelector('#features .arrowDown');
const arrowDownComp = document.querySelector('#company .arrowDown');


const getArrowUpImg1 = () => {
    arrowDownFeat.src = './images/icon-arrow-up.svg';
    dropdownFeatures.style.display = 'block'

      window.addEventListener('click', (e) => {
        if (e.target == window) {
            console.log('clicked window');
            dropdownFeatures.style.display = 'none';
            // nav.style.display = 'none';
            // hamburgerMenu.style.display = 'block';
        }
    })

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
const hamburgerMenu = document.getElementById('hamburgerIcon');

const displayNavMobile = () => {
    
   
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

const changeArrowDirecttion = () => {
    const arrowUp = document.querySelectorAll(".arrowUpMob");
    const arrowDown = document.querySelectorAll('.arrowDownMob');
    const featMob = document.querySelector('.dropdownFeatMob');
    const compMob = document.querySelector('.dropdownCompMob');
    const featuresEl = document.getElementById('featuresMobileNav');
    const companyEl = document.getElementById('companyMobileNav');

        featuresEl.addEventListener(('click'), () => {
            if (arrowUp[0].style.display === 'none') {
                arrowUp[0].style.display = 'inline-block';
                featMob.style.display = 'block'
                arrowDown[0].style.display = 'none'
            } 
            else {
                arrowUp[0].style.display = 'none';
                arrowDown[0].style.display = 'inline-block'
                featMob.style.display = 'none'

            }

        })

    //company arrows
    
        companyEl.addEventListener('click', () => {
            if (arrowUp[1].style.display === 'none') {
                arrowUp[1].style.display = 'inline-block'; 
                compMob.style.display = 'block';
                arrowDown[1].style.display = 'none'; 
            } else {
                arrowUp[1].style.display = 'none';
                arrowDown[1].style.display = 'inline-block';
                compMob.style.display = 'none';

            }
        })
    
}

changeArrowDirecttion()
setInterval(displayNavMobile, 1000);
