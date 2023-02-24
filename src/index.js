import './less/index.less'

// Your code goes here!

// NAV mouse over... 
window.onload = function () {
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

  navAnchor.forEach(ele => {
    
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
}

// 1. load event
window.onload = function(event) {
  // console.log(`event ${event.type} was fired!`)
  const heading = document.querySelector('h1');
  heading.textContent = 'My Fun Bus!'

// 2. copy event

  window.addEventListener('copy', () => {
    navigator.clipboard.readText()
      .then(text => {
        console.log(text);
        // heading.textContent += text;
      })
      .catch(err => console.log(err))
  })

  document.body.addEventListener('click', (event) => {
    event.target.classList.toggle('clickStyle')
  })

// 3. dblclick event
  document.body.addEventListener('dblclick', (event) => {
    event.target.outerHTML = '';
  })

// 4. Keydown event
  window.addEventListener('keydown', (event) => {
  console.log(event);
  console.log(event.key);
  console.log(event.type);
  if (event.key === 'Backspace') {
    document.body.textContent = ''
  }
})

// 5. mousemove event
  document.body.addEventListener('mousemove', event => {
    // console.log(event)
    const {clientX, clientY} = event;
    // console.log(`Mouse is at clientX: ${clientX} and clientY: ${clientY}`);
  })
// 6. mouseenter event
// 7. mouseleave event
  const destinations = document.querySelectorAll('.destination')
  // console.log(destinations)
  for (let des of destinations) {
    des.addEventListener('mouseenter', (event) => {
      // console.log(des);
      des.style.fontWeight = 'bold';
    })
    des.addEventListener('mouseleave', (event) => {
      setTimeout(() => {
        des.style.fontWeight = 'initial';
      }, 1000)
    })
  }
}

