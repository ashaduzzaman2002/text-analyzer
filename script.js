const text = document.getElementById('text')
const analyzeBtn = document.getElementById('analyzeBtn')
const result = document.getElementById('result')
const clearBtn = document.getElementById('clearBtn')

// Word counter Function
const wordCounter = () => {
    totalWord = 0
    words = text.value.split(' ')
    for (word of words){
        totalWord++
    }

    return totalWord
}

//Leter Counter function

const leterCounter = () => {
    totalLeter = 0
    leters = text.value
    for (leter of leters){
        if(leter !== ' '){
            totalLeter++
        }
    }

    return totalLeter
}

//Text Analyze function

analyzeBtn.onclick = () => {
    result.innerHTML = `<p>Total number of words: ${wordCounter()}</p>
                        <p>Total number of charectors: ${leterCounter()}</p>`
}

// Clear function
clearBtn.onclick = () => {
    text.value = ''
    result.innerHTML = ''
}

