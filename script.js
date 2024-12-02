let userName = prompt('Hi, who are you?')
userName ? document.getElementById('greeting').innerText = (`Hello ${userName}!`) :
    document.getElementById('greeting').innerText = "Hello!"
  
function shakeMagicBall() {
    let randomNumber = Math.floor(Math.random()*8)
    let eightBall = ''
    
    
    let userQuestion = prompt('What is your question for the mighty eightball?')
    let responseImg = document.getElementById('response-image')
    if (randomNumber === 0) {
      eightBall = 'It is certain'
      
    } else if (randomNumber === 1) {
        eightBall = 'It is decidely so'
    } else if (randomNumber === 2) {
      eightBall = 'Reply hazy try again'
      responseImg.src = 'imgs/duoBackpack.gif'
    } else if (randomNumber === 3) {
      eightBall = 'Cannot predict now'
      responseImg.src = 'imgs/girlShocked.gif'
    } else if (randomNumber === 4) {
      eightBall = 'Do not count on it'
      responseImg.src = "imgs/DuoAngryIdle.gif"
    } else if (randomNumber === 5) {
      eightBall = 'My sources say no'
      responseImg.src = 'imgs/linIsScared.gif'
    } else if (randomNumber === 6) {
      eightBall = 'Outlook not so good'
      responseImg.src = 'imgs/outlookNoBuenoDuo.jpg'
    } else if (randomNumber === 7) {
      eightBall = 'Signs point to yes'
      responseImg.src = 'imgs/simpson.jpg'
    }
    console.log(eightBall)
    document.getElementById('response-text').innerText = `${userName} has asked the magic 8 ball ${userQuestion}. The wise 8 ball has replied with ${eightBall}`

    }

