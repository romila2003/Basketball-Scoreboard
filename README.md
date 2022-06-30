# Scrimba Basketball-Scoreboard

## Table of contents

- [Figma Design](#figma-design)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Figma Design

[Scrimba Basketball Scoreboard design](https://www.figma.com/file/YC48MCx4frBFtYoz6rNJE6/Basketball-Scoreboard?node-id=107%3A158)

## Overview

### The challenge

- To build a Basketball Scoreboard using HTML, CSS and Javascript (whilst following the figma design).

### Screenshot

![screenshot](https://github.com/romila2003/Basketball-Scoreboard/blob/main/basketball%20scoreboard.PNG)

### Links

 - [Basketball Scoreboard Source Code](https://github.com/romila2003/Basketball-Scoreboard)
 - [Basketball Scoreboard Live Website](https://scrimba-basketball-scoreboard.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Javascript
- Mobile-first workflow

### What I learned

I learned many fundamental concepts about Javascript and practiced those concepts on this project. Some examples include variables, functions, incrementing and DOM. I enjoyed challenging practicing the concepts I have learned and addedd an additional feature of New Game to reset the game settings. 

Javascript Snippet Code: 

```js
let homeScore = document.getElementById("home-score")

let homeWholeScore = 0

function add1() {
    homeWholeScore += 1
    homeScore.textContent = homeWholeScore
}

```

## Author

- Twitter - [@romila003](https://www.twitter.com/romila003)

## Acknowledgments

This challenge was completed through the short [Scrimba](https://scrimba.com/learn/learnjavascript) course (Learn Javascript for free) and was the first solo challenge to be completed.
