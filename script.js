const removeDownArrow = () => {
    const featuresNav = document.getElementById('features');
    const downArrow = document.querySelector('#features .arrowDown');
    const upArrow = document.querySelector('#features .arrowUp');
    
    const companyNav = document.getElementById('company');
    const arrowDown = document.querySelector('#company .arrowDown');
    const arrowUp = document.querySelector('#company .arrowUp');

        featuresNav.addEventListener('mouseover', () => {
            downArrow.style.display = 'none';
            upArrow.style.display = 'block';
        })
        featuresNav.addEventListener('mouseout', () => {
            downArrow.style.display = 'block';
            upArrow.style.display = 'none';
        })

        companyNav.addEventListener('mouseover', () => {
            arrowDown.style.display = 'none';
            arrowUp.style.display = 'block';
        })
        companyNav.addEventListener('mouseout', () => {
            arrowDown.style.display = 'block';
            arrowUp.style.display = 'none';
        })
}
removeDownArrow()