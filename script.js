// Task 1
const task1 = function () {
    let spanPlace = document.getElementById('span')
    let inputText = document.getElementById('inputName')
    inputText.value=Number(inputText.value)
    if (isNaN(inputText.value) || inputText.value===undefined){
        alert('Please, input another number')
        return
    }
    spanPlace.textContent ='Hello ' + inputText.value
}

//Task2
const CompPass = function (){
    let pas1 = document.getElementById('pass1')
    let pas2 = document.getElementById('pass2')
    let spanT2 = document.getElementById('resultTask2')
    if (pas1.value === pas2.value){
        spanT2.textContent = 'Equal'
    } else {
        spanT2.textContent = 'Not equal'
    }
}
//Task3
function getRandom() {
    let randPlace = document.getElementById('randomPlace')
    let random = Math.random()
    randPlace.textContent =  (random*10)
}
