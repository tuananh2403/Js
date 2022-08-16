'use strict'
let inputNumber = document.getElementById('input-page-size')
function saveSettings() {
    let numberPage = [inputNumber.value];
    localStorage.setItem('numberPage',JSON.stringify(numberPage))
}
