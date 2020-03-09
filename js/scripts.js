console.log('OK');

// Initialize Plyr player
const player = new Plyr('#player', {

    controls : [ 'play', 'current-time', 'progress' ]

});
    
// Store Messages
let messages = [
    '"You gonna eat your tots?"',
    '"Tina you fat lard, come get some dinner!"', 
    '"I caught you a delicious bass"',
    '"Whatever I feel like I wanna do, GOSH!"',
    '"Girls only want boyfriends who have great skills!"'
  ]
  
  // Get Random Number
  var numRand;
  var max = 5;
  numRand = Math.floor(Math.random() * max );
  
  
  // Get element
  let greeting = document.querySelector('h1')
  // Change element content
  greeting.innerHTML = messages[ numRand ];


  //toggle background
  let trigger = document.querySelector('h6');
 let body = document.querySelector('body');



// on click do this
trigger.addEventListener( 'click' , function(){
  
  // whatever we want to do
  body.classList.toggle('bg2');
  
});