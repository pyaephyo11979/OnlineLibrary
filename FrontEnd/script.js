let container=document.querySelector('body');
let themeChanger=document.getElementById('themeBtn');
let loginPage=document.querySelector('#page1');
let signUpPage=document.querySelector('#page2');
let createAccBtn=document.getElementById('createAccBtn');
let loginAccBtn=document.getElementById('loginAccBtn');
let BooksOfTheDay=document.getElementById('booksOfTheDay');
let loginEmail=document.getElementById('email');
let loginPassword=document.getElementById('psw');
let singUpName=document.getElementById('name');
let signUpEmail=document.getElementById('Email');
let signUpPassword=document.getElementById('pSw1');
let loginBtn=document.getElementById('loginbtn');
let signUpBtn=document.getElementById('signUp');
let signUpPasswordIdentity=document.getElementById('pSw2');
let noBels=document.getElementById('Nobels');
let userPanel=document.getElementById('userPanel');
books.forEach((val)=>{
    console.log(val)
    BooksOfTheDay.innerHTML+= `
    <div class="col-3 col-sm-12 ms-2 me-2 w3-hover-border-amber w3-hover-black card " id="" style="width:10%; height:550px;">
    <div class="card-header " style="height:180px;"><h3 class="info ">${val.volumeInfo.title}</h3></div>
    <div class="card-body book">
        <div class="card-img-top "><img src="${val.volumeInfo.imageLinks.thumbnail}" class="img-fluid" style="width:100%;" alt=""></div>
    </div>
</div>
    `
    noBels.innerHTML+= `
    <div class="col-3  col-sm-12 ms-2 me-2 w3-hover-border-amber w3-hover-black card " id="" style="width:20%; height:550px;">
    <div class="card-header" style="height:180px;"><h3 class="info ">${val.volumeInfo.title}</h3></div>
    <div class="card-body book">
        <div class="card-img-top"><img src="${val.volumeInfo.imageLinks.thumbnail}" class="img-fluid" style="width:100%;" alt=""></div>
    </div>
</div>
    `
})
// let Users=[];
// function User(name,email,password){
//     let u=new Object();
//     u.name=name;
//     u.email=email;
//     u.password=password;
// }
// signUpBtn.addEventListener('click',()=>{
//     var name=singUpName.value;
//     var em=signUpEmail.value;
//     var psw=signUpPassword.value;
//     var pswi=signUpPasswordIdentity;
//     Users.push(User(name,em,psw));
//     console.log(`${Users.forEach((user)=>{user.email;user.password;user.name})}`);
    
// })
// loginBtn.addEventListener('click',()=>{
//     var email=loginEmail.value;
//     var password=loginPassword.value;
//     Users.forEach((user)=>{
//         if(email===user.email && password==user.password){
            
//         }else{

//         }
//     })
// })
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
