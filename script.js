const textInput = document.getElementById('textInput')
const analyzeBtn = document.getElementById('analyzeBtn')
const result = document.getElementById('result')
const clearBtn = document.getElementById('clearBtn')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')


// Word counter Function
const wordCounter = () => {
    totalWord = 0
    words = textInput.value.split(' ')
    for (word of words){
        totalWord++
    }

    return totalWord
}

//Leter Counter function

const leterCounter = () => {
    totalLeter = 0
    leters = textInput.value
    for (leter of leters){
        if(leter !== ' '){
            totalLeter++
        }
    }

    return totalLeter
}

// Text Analyze function

analyzeBtn.onclick = () => {
    result.innerHTML = `
  <div>
    <h2>${leterCounter()}</h2>
    <h4>Character</h4>
  </div>

  <div>
    <h2>${wordCounter()}</h2>
    <h4>Word</h4>
  </div>

  <div>
    <h2>0</h2>
    <h4>Sentence</h4>
  </div>

  <div>
    <h2>0</h2>
    <h4>Digit</h4>
  </div>

  <div>
    <h2>0</h2>
    <h4>vowel</h4>
  </div>

  <div>
    <h2>0</h2>
    <h4>consonant</h4>
  </div>`
}

// Clear function
clearBtn.onclick = () => {
    textInput.value = ''
    result.innerHTML = ''
}

// Upper case function

uppercase.onclick = () => {
    let uppercase = textInput.value.toUpperCase()
    textInput.value = uppercase
}

lowercase.onclick = () => {
    let lowercase = textInput.value.toLowerCase()
    textInput.value = lowercase
}

