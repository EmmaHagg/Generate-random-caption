if (option==Summer){
    let btnCaption = document.getElementById('newCaption')
    newCaption.addEventListener('click', newCap)
    
    function newCap(){
      document.getElementById('captionDisplay').innerHTML = quotesSummer[Math.floor(Math.random() * quotesSummer.length)];
    }
}

else if (option==Business){
    let btnCaption = document.getElementById('newCaption')
    newCaption.addEventListener('click', newCap)
    
    function newCap(){
      document.getElementById('captionDisplay').innerHTML = quotesBusiness[Math.floor(Math.random() * quotesBusiness.length)];
    }
}




let quotesBusiness= [
    '“There are two types of pain in the world.  The temporary pain of self discipline and the permanent pain or regret”  -- Anonymous',
    
    '“Character isnt inherited. One builds it daily by the way one thinks and acts, thought by thought, action by action.” - Helen Gahagan Douglas' ,
    
    '“If we did the things we are capable of, we would astound ourselves.”         - Thomas Edison',
    
    '“The Only Easy Day was Yesterday”  - - US Navy SEA',
    
    '“If there is no struggle, there is no progress.” -Frederick Douglass',
    
    '“Have fun screwing up…it means you are removing your ego from the problem.” - Greg Glassman'
    ]

let quotesSummer= [
        'Don’t worry, beach happy',
        
        'Pool hair, don’t care' ,
        
        'Good times and tan lines.',
        
        'A pineapple a day keeps the worries away',
        
        'Life’s a beach!',
        
        'Stay salty',

        'Girls just wanna have sun',

        'The tans will fade but the memories will last forever',
    
        'You are the pina to my colada',

        'You had me at aloha'

        ]
        
    
