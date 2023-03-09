const removeDownArrow = () => {
    const downArrow = document.getElementById('arrowDown');
    const upArrow = document.getElementById('arrowUp');
    const featuresNav = document.getElementById('features');
    console.log(featuresNav);
    // for (const arrow of upArrow) {
        featuresNav.addEventListener('mouseover', () => {
            downArrow.style.display = 'none';
            upArrow.style.display = 'block';
        })
        featuresNav.addEventListener('mouseout', () => {
            downArrow.style.display = 'block';
            upArrow.style.display = 'none';
        })
    // }
}
removeDownArrow()