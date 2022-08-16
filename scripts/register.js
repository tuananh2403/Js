'use strict'
import Infor from '../models/User.js';
import addLocal from './storage.js';
export {firstname,lastname,username,password,btn}
let form = document.querySelector('form')
let firstname = document.getElementById('input-firstname')
let lastname = document.getElementById('input-lastname')
let username = document.getElementById('input-username')
let password = document.getElementById('input-password')
let password2 = document.getElementById('input-password-confirm')
let btn = document.getElementById('btn-submit');
// Show input error message
export function showError( message) {
	alert(message)
}
// Check required fields
export function checkRequired(inputArr) {
	let required = inputArr.some(function (infor){
		return infor.value === '';
	})
	if (required) {
		showError("Vui Lòng Điền Đầy Đủ Thông Tin")
	}
	return required;
}
// Check input length
function checkLength(input, min) {
	if (input.value.length < min) {
		showError(`Mật khẩu lớn hơn ${min} kí tự`)
		return true;
	} 
	return false;
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
	if (input1.value !== input2.value) {
		showError('Mật Khẩu không khớp')
		return true;
	}
	return false;
}
// Event listeners
btn.addEventListener('click', function (e) {
	e.preventDefault()
	if (!checkRequired([firstname,lastname,password,password2,username])) {
		if(!checkLength(password,8)){
		if(!checkPasswordsMatch(password, password2)){
			addLocal();
		}
	}
}
})

