'use strict'
import {username,password,checkRequired,showError,btn} from './register.js';
btn.addEventListener('click',e =>{
    e.preventDefault();
    if(!checkRequired([username,password])){
        addLogin();
    }
})
let i = 0;
function addLogin(){
    let data = localStorage.getItem('Infor') ? JSON.parse(localStorage.getItem('Infor')) :[];
    let Infor = {
        username: username.value,
        password: password.value
    }  
    let checkUser = data.some(function(user,index){
        i = index;
        return user.username === Infor.username && user.password === Infor.password
    });
    if(checkUser){
        window.location.href = '../index.html'
        let data1 = [];
        data1.push(data[i]) 
        localStorage.setItem(`InforLogin`,JSON.stringify(data1));
    }else{
        alert('Tên đăng nhập hoặc mật khẩu không đúng')
    }
}

