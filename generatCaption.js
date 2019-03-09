function kategori(){
  /* Skapar en ny variabel s1, kollar ID:t slct1 och sparar ned det valda valuet från det ID:t. */
  let s1 = document.getElementById('slct1').value;
  
  /* Arrayer skapade för de olika kategorierna*/
  let summer= [
  'Tangles hair don’t care',
  'If you’re not barefoot, then you’re overdressed',
  'I’ve got sunshine on a cloudy day',
  'Life’s a beach!',
  'Feelin’ hot, hot, hot',
  'Sea, Sun and Smiles ',
  'Blue skies, high tides and good vibes',
  'Life’s a beach',
  'This is my resting beach face',
  'We cannot direct the wind, but we can adjust the sails.'
  ]

  let mindset= [
  '“There are two types of pain in the world.  The temporary pain of self discipline and the permanent pain or regret”  - Anonymous',
  '“Character isnt inherited. One builds it daily by the way one thinks and acts, thought by thought, action by action.” - Helen Gahagan Douglas' ,
  '“If we did the things we are capable of, we would astound ourselves.” - Thomas Edison',
  '“The Only Easy Day was Yesterday”  - US Navy SEA',
  '“If there is no struggle, there is no progress.” -Frederick Douglass',
  '“Have fun screwing up…it means you are removing your ego from the problem.” - Greg Glassman'
  ]
  
  let success = [
    'Work hard then work harder',
    'When daydreams become reality',
    'Say yes, take risks, and live life on your own terms',
    'The impossible is now possible',
    'Pursue your passion and you’ll never work a day in your life',
    'Entrepreneur life',
    'I’m not lucky, I’m talented',
    'You can beat me down but I’ll just jump back up',
    'Don’t be average, be savage',
    'Be the kind of person that makes others step up their game',
    'Go BIG or go home',
    'Motivation Monday? I’m motivated seven days a week',
    "I'm not bossy, I have leadership skills."
  ]

  let travel = [
    'If you could travel anywhere in the world, where would you go first?',
    'Hope you’re enjoying work, I’ll just be chillin’ here in [destination]',
    'Leavin’ on a jet plane',
    'Time for an adventure!',
    'Be right back, exploring the world',
    'Just gonna cross this off the bucket list…',
    'Just two friends having a good time',
    'Don’t live a life regretting the things you didn’t do. Go do things!',
    'I need a six month holiday, twice a year.'
  
  ]

  let couple = [

    'Just the two of us',
    'He’s my King, I’m his Queen',
    'Sometimes relationships end so love stories can begin',
    'Your smile is my favorite',
    'She brings out the best in me',
    'Seven billions smiles, and yours is my favorite.'
  ]

  let food = [
    'Taco Tuesday is my favorite day of the week',
    'My favorite exercise is a cross between a lunge and a crunch ... I call it lunch.',
    "I'm just a girl, standing in front of a salad, asking it to be a cupcake.",
    "What if I told you, you can eat without posting it on Instagram?",
    'You have stolen a pizza my heart.'
    

  ]

  let songLyrics = [
    '"I’m gonna live like tomorrow doesn´t exist."-- Sia, Chandelier',
    '"I live for the nights that I can’t remember, with the people that I won’t forget." – Drake, "Show Me a Good Time"',
    '"You may say I’m a dreamer, but I’m not the only one." - John Lennon, "Imagine"',
    '"If I fail, if I succeed, at least I’ll live as I believe" -- Whitney Houston, "The Greatest Love of All"',
    '"The rest of the world was in black and white, but we were in screaming color." -- Taylor Swift, "Out of the Woods"',
    '"Sing with me, sing for the years, sing for the laughter, sing for the tears" -- Aerosmith, "Dream On"'

  ]

  let selfie =[
    'Me, myself and I',
    'But first, let me take a selfie',
    'Selfie Sunday',
    'I was born to shine',
    'Me doing me',
    'I don’t always take a selfie, but when I do…',
    'May your day feel as good as taking a perfect selfie on the first try ',
    'The only person I dress to impress is me',
    'Looks aren’t everything but I have them just in case',
    'This is me in all my glory'
  ]
       /* En Switch sats som kollar vilket värde s1 har*/
      switch(s1){
          case 'summer':
           newCap(summer)
           break;

           case 'mindset':
           newCap(mindset) 
           break;

           case 'success':
           newCap(success) 
           break;

           case 'travel':
           newCap(travel) 
           break;

           case 'couple':
           newCap(couple) 
           break;

           case 'food':
           newCap(food) 
           break;

           case 'songLyrics':
           newCap(songLyrics) 
           break;

           case 'selfie':
           newCap(selfie) 
           break;
  }
}

/* funktionen newCap tar emot värdet och hämtar ett random Caption från den arrayen */
function newCap(arr){
  document.getElementById('captionDisplay').innerHTML = arr[Math.floor(Math.random()*arr.length)];
}

/* Button =  Kopiera text */
function copy(that){
  let randomCap =document.createElement('input');
  document.body.appendChild(randomCap)
  randomCap.value =that.textContent
  randomCap.select();
  document.execCommand('copy',false);
  randomCap.remove();
  }