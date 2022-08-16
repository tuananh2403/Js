'use strict'
let button = document.getElementById('login-modal');
let dataLogin =[];
if(localStorage.getItem('InforLogin')){
    dataLogin = JSON.parse(localStorage.getItem('InforLogin'))
    Home();
}
function Home(){
    button.style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('welcome-message').innerHTML = `Welcome ${dataLogin[0].firstname}`
}
let btnLogout = document.getElementById('btn-logout');
btnLogout.addEventListener('click', e =>{
    e.preventDefault();
    localStorage.removeItem('InforLogin');
    document.getElementById('main-content').style.display = 'none';
    button.style.display = 'block';
    
})