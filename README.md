# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/desktop%20dropdownproject.png)
![](./images/mobile%20dropdownproject.png)

### Links

- Solution URL: [Github code](https://github.com/michaelr47/DropdownNavComponent)
- Live Site URL: [Dropdown Nav Project](https://michaelr47.github.io/DropdownNavComponent/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned
 First time utilizing the <picture> tag in a project to change its 
```html
  <picture>
        <source media="(max-width: 576px)" srcset="./images/image-hero-mobile.png">
        <img class="desktopHero" src="./images/image-hero-desktop.png" alt="hero image for mobile">
  </picture>
```

  Nice little transition when opening nav menu
```css
@keyframes smoothNav {
    0% {
        transform: translateX(435px);
    }
    100% {
        transform: translateX(0px);
    }
}
```

## Author

- Frontend Mentor - [@michaelr47](https://www.frontendmentor.io/profile/michaelr47)
- GitHub - [@michaelr47](https://github.com/michaelr47)
