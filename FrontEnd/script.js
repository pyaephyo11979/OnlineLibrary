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
    <div class="col-3 col-sm-12 book ms-2 me-2 w3-hover-border-amber w3-hover-black card " id="" style="width:10%; height:550px;">
    <div class="card-header " style="height:180px;"><h3 class="info ">${val.volumeInfo.title}</h3></div>
    <div class="card-body">
        <div class="card-img-top "><img src="${val.volumeInfo.imageLinks.thumbnail}" class="img-fluid" style="width:100%;" alt=""></div>
    </div>
</div>
    `
    noBels.innerHTML+= `
    <div class="col-3  col-sm-12 book ms-2 me-2 w3-hover-border-amber w3-hover-black card " id="" style="width:20%; height:550px;">
    <div class="card-header" style="height:180px;"><h3 class="info ">${val.volumeInfo.title}</h3></div>
    <div class="card-body ">
        <div class="card-img-top"><img src="${val.volumeInfo.imageLinks.thumbnail}" class="img-fluid" style="width:100%;" alt=""></div>
    </div>
</div>
    `
})
let Users=[];
function User(name,email,password){
    let u=new Object();
    u.name=name;
    u.email=email;
    u.password=password;
}
function createAccount(){
    var name=singUpName.value;
    var em=signUpEmail.value;
    var psw=signUpPassword.value;
    var pswi=signUpPasswordIdentity;
    userPanel.style.display='block';
    signUpPage.style.displsy="none";
    loginPage.style.display='none';
    Users.push(User(name,em,psw));
    Users.forEach((user)=>{
        if(user.email === em){
            userPanel.innerHTML=`
            <div class="row">
            <div class="navbar navbar-expand bg-body">
                <div class="navbar-brand fs-3">User</div>
                <div class="container">
                    <div class="flex-fill"></div>
                <div class="navbar-nav">
                    <div class="nav-link"><a id="userSettingBtn" style="cursor:pointer;" class="nav-link"><i class="fas fa-gear"></i></a></div>
                </div>
                </div>
            </div>
        </div>
        <div class="row container mt-2">
            <div class="col-7 overflow-auto">
                <p class="">Name:<span class="ms-3">${user.name}</span></p>
                <p class="">Email:<span class="ms-3">${user.email}</span></p>
            </div>
            <div class="ms-5 col">
                <div class="display-3 w3-text-amber"><i class="fas fa-user-circle"></i></div>
            </div>
        </div>
            `
        }
    })
}
function login(){
    var email=loginEmail.value;
    var password=loginPassword.value;
    Users.forEach((user)=>{
        if(email===user.email && password==user.password){
            userPanel.style.display='block';
            signUpPage.style.displsy="none";
            loginPage.style.display='none';
            userPanel.innerHTML=`
            <div class="row">
            <div class="navbar navbar-expand bg-body">
                <div class="navbar-brand fs-3">User</div>
                <div class="container">
                    <div class="flex-fill"></div>
                <div class="navbar-nav">
                    <div class="nav-link"><a id="userSettingBtn" style="cursor:pointer;" class="nav-link"><i class="fas fa-gear"></i></a></div>
                </div>
                </div>
            </div>
        </div>
        <div class="row container mt-2">
            <div class="col-7 overflow-auto">
                <p class="">Name:<span class="ms-3">${user.name}</span></p>
                <p class="">Email:<span class="ms-3">${user.email}</span></p>
            </div>
            <div class="ms-5 col">
                <div class="display-3 w3-text-amber"><i class="fas fa-user-circle"></i></div>
            </div>
        </div>
            `
        }else{

        }
    })
}
userPanel.style.display='none'
signUpBtn.addEventListener('click',()=>{createAccount()});
loginBtn.addEventListener('click',()=>login())
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
    $('.slick-carousel').slick({
      dots: true,
      arrows:true,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      });