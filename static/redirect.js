const w = window.location

if (window.location.href.indexOf("/extemporaneous/") > -1) {type="/extemporaneous/"} else {type="/impromptu/"}
  
const cardRevealAnim = () =>{
  cardBottom.style.animation="moveDownTwo 0.6s forwards";
  cardTop.style.animation="moveDownOne 0.6s forwards";
  // cardMiddle.style.animation="moveDown 0.6s forwards";
}

let cardMiddle = document.getElementsByClassName('card-middle')[0]
let cardBottom = document.getElementsByClassName('card-bottom')[0];
let cardTop = document.getElementsByClassName('card-top')[0];

let redirectTopicM = () =>{
  let x = document.getElementsByClassName('topic')[2]
  window.location.href = type + x.innerHTML
}

let redirectTopicT = () =>{
  let y = document.getElementsByClassName('topic')[1]
  window.location.href = type + y.innerHTML
}

let redirectTopicB = () =>{
  let z = document.getElementsByClassName('topic')[0]
  window.location.href = type + z.innerHTML
}


cardMiddle.addEventListener('click', redirectTopicM);
cardBottom.addEventListener('click', redirectTopicB);
cardTop.addEventListener('click', redirectTopicT);