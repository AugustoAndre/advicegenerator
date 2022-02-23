buttonAdvice = document.querySelector('#dice')
gettingUrl()

function gettingUrl() {
 
  fetch('https://api.adviceslip.com/advice')
    .then(resp => resp.json())
    .then(data => {
      showAdvice(data)
    })
}

function showAdvice(advice) {
  let title = document.querySelector('#title')
  let adviceMessage = document.querySelector('#advice')

  title.innerHTML = `ADVICE #${advice.slip.id}`
  adviceMessage.innerHTML = advice.slip.advice 
}

function cleanAdvice(){
  let title = document.querySelector('#title')
  let adviceMessage = document.querySelector('#advice')

  title.innerHTML = ''
  adviceMessage.innerHTML = ''
}

function reload () {
  window.location.reload()
}
