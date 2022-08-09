const textInput = document.getElementById('textInput')
const analyzeBtn = document.getElementById('analyzeBtn')
const result = document.getElementById('result')
const clearBtn = document.getElementById('clearBtn')
const uppercase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const formatBtn = document.getElementById('formatBtn')
const copyBtn = document.getElementById('copyBtn')
const findLenghth = (item) => item==null? 0: item.length;


//character Counter function
const characterCounter = () => {
  text = textInput.value
  characters = findLenghth(text)
  return characters
}

// Word counter Function
const wordCounter = () => {
    text = textInput.value
    word = findLenghth(text.match(/[a-zA-Z\d]+/g))
    return word
}

// Sentence list
const sentenceList = () => {
  text = textInput.value
  sentences = text.split('\.')
  const i = sentences[sentences.length-1]
  if(i == '' || i == ' '.repeat(i.length)){
    sentences.pop()
  }
  return sentences
}

// Sentence counter
const sentenceCounter = () => {
  sentence = findLenghth(sentenceList())
  return sentence
}

//Digit counter function
const digitCounter = () => {
  text = textInput.value
  digit = findLenghth(text.match(/[\d]/g))
  return digit
}

// Vowel counter function 
const vowelConter = () => {
  text = textInput.value
  vowel = findLenghth(text.match(/[aeiou]/gi))
  return vowel
}

// Consonant counter function 
const consonantConter = () => {
  text = textInput.value
  consonant = findLenghth(text.match(/[b-df-hj-np-tv-z]/gi))
  return consonant
}

// Text Analyze function

analyzeBtn.onclick = () => {
  let data1 = {
    character: characterCounter(),
    word: wordCounter(),
    sentence: sentenceCounter(),
    digit: digitCounter(),
    vowel: vowelConter(),
    consonant: consonantConter(),
  }

  if(textInput.value !== ''){
  result.innerHTML = `<div id="lds-ring"><div></div><div></div><div></div><div></div></div>`
  setTimeout(()=> {
    result.innerHTML = ''
    for(item in data1){
      result.innerHTML += `
      <div class="resultCard">
      <h2>${data1[item]}</h2>
      <h4>${item}</h4>
      </div>`
    }
    
}, 500)
  }
  else{
    result.innerHTML = ''
  }
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

// Lowercase function
lowercase.onclick = () => {
    let lowercase = textInput.value.toLowerCase()
    textInput.value = lowercase
}

// Copy text function
copyBtn.onclick = () => {
  textInput.select();
  textInput.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(textInput.value)
  navigator.clipboard.writeText(textInput.value);
  
  // change button text 
  if(textInput.value !== ''){
    copyBtn.innerText = 'copied'
    setTimeout(() => copyBtn.innerText = 'copy text', 1000)
  }
}

// format text button function
formatBtn.onclick = () => {
  text = textInput.value
  newText = text.replace(/\s+/g,' ')
  textInput.value = newText
}