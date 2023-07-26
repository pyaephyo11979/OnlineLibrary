let container=document.querySelector('body');
let themeChanger=document.getElementById('themeBtn');
let loginPage=document.querySelector('#page1');
let signUpPage=document.querySelector('#page2');
let createAccBtn=document.getElementById('createAccBtn');
let loginAccBtn=document.getElementById('loginAccBtn');
signUpPage.style.display="none"
createAccBtn.addEventListener('click',()=>{
    loginPage.style.display="none";
    signUpPage.style.display="block";
})
loginAccBtn.addEventListener('click',()=>{
    signUpPage.style.display="none";
    loginPage.style.display="block";
})
function dark(){
    container.setAttribute('data-bs-theme','dark');
}
function light(){
    container.setAttribute('data-bs-theme','light');
}
themeChanger.addEventListener('click',()=>{
    if(!container.hasAttribute('data-bs-theme')){
        dark();
    }else{
        light();
        container.removeAttribute('data-bs-theme');
    }
})
