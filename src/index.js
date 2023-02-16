import './less/index.less'

// Your code goes here!

// NAV mouse over... 

const navAnchor = document.querySelectorAll('.nav-link');
// console.log('nav:', navAnchor);

navAnchor.forEach(ele => {
  ele.addEventListener('pointerover', function() {
    ele.classList.add('nav-link-mouse-over')
  })
  ele.addEventListener('pointerout', function(){
    ele.classList.remove('nav-link-mouse-over')
  } )
})


//Image popup.

const images = document.querySelectorAll('img')
images.forEach(val => val.addEventListener('mouseover', function(){
  val.style.transform = "scale(1.2)"
  val.style.trasition = "all 0.3s";
}))
images.forEach(val => val.addEventListener('mouseout', function(){
  val.style.transform = "scale(1)"
}))


// footer wheel event

const copyright = document.querySelector('footer p');
console.log('fire copyright:', copyright)
copyright.addEventListener('wheel', function() {
  copyright.style.fontSize = '2rem';
})


// bttn click
const formSample = document.querySelector('div .new-form');
const bttn = document.querySelectorAll('.btn');
console.log('fire button:', bttn)
bttn.forEach(ele => {
  ele.addEventListener('click', function(){
    formSample.classList.remove('off');
  })
})
// bttn.addEventListener('click', event => {
//   event.forEach(ele => ele.target.classList.remove('off'))
// })

//password focus & blur
const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', function() {
  console.log('fire pass');
  password.style.background = 'green';
});

password.addEventListener('blur', function() {
  password.style.background = '';
});

// form esc
const form = document.querySelector('form')
console.log('form:', form);
form.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    form.classList.add('off')
  }
})