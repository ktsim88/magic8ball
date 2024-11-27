let userName = prompt('Hi, who are you?')
userName ? document.getElementById('greeting').innerText = (`Hello ${userName}!`) :
    document.getElementById('greeting').innerText = "Hello!"
  
function shakeMagicBall() {
    let randomNumber = Math.floor(Math.random()*8)
    let eightBall = ''
    
    
    let userQuestion = prompt('What is your question for the mighty eightball?')
    
    if (randomNumber === 0) {
      eightBall = 'It is certain'
    } else if (randomNumber === 1) {
        eightBall = 'It is decidely so'
    } else if (randomNumber === 2) {
      console.log('Reply hazy try again')
    } else if (randomNumber === 3) {
        console.log('Cannot predict now')
    } else if (randomNumber === 4) {
      console.log('Do not count on it')
    } else if (randomNumber === 5) {
      console.log('My sources say no')
    } else if (randomNumber === 6) {
      console.log('Outlook not so good')
    } else if (randomNumber === 7) {
      console.log('Signs point to yes')
    }
    console.log(eightBall)
    document.getElementById('response-text').innerText = `${userName} has asked the magic 8 ball ${userQuestion}. The wise 8 ball has replied with ${eightBall}`

    }

