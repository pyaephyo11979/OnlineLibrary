let container=document.querySelector('body');
let themeChanger=document.getElementById('themeBtn');
let loginPage=document.getElementById('page1');
let signUpPage=document.getElementById('page2');
let createAccBtn=document.getElementById('createAccBtn');
let loginAccBtn=document.getElementById('loginAccBtn');
let BooksOfTheDay=document.getElementById('booksPanel');
let loginEmail=document.getElementById('email');
let loginPassword=document.getElementById('psw');
let singUpName=document.getElementById('name');
let signUpEmail=document.getElementById('Email');
let signUpPassword=document.getElementById('pSw1');
let linBtn=document.getElementById('loginbtn');
let signUpBtn=document.getElementById('signUp');
let signUpPasswordIdentity=document.getElementById('pSw2');
let noBels=document.getElementById('Nobels');
let userPanel=document.getElementById('userPanel');
let lOutBtn=document.querySelector('#logOutBtn');

// books.forEach((val)=>{
//     BooksOfTheDay.innerHTML+= `
//     <div class="col-3 col-sm-12 book ms-2 me-2 w3-hover-border-amber w3-hover-black card " id="" style="width:10%; height:550px;">
//     <div class="card-header " style="height:180px;"><h3 class="info ">${val.volumeInfo.title}</h3></div>
//     <div class="card-body">
//         <div class="card-img-top "><img src="${val.volumeInfo.imageLinks.thumbnail}" class="img-fluid" style="width:100%;" alt=""></div>
//     </div>
// </div>
//     `
//     noBels.innerHTML+= `
//     <div class="col-3  col-sm-12 book ms-2 me-2 w3-hover-border-amber w3-hover-black card " id="" style="width:20%; height:550px;">
//     <div class="card-header" style="height:180px;"><h3 class="info ">${val.volumeInfo.title}</h3></div>
//     <div class="card-body ">
//         <div class="card-img-top"><img src="${val.volumeInfo.imageLinks.thumbnail}" class="img-fluid" style="width:100%;" alt=""></div>
//     </div>
// </div>
//     `
// })

Books.forEach((res)=>{
    BooksOfTheDay.innerHTML+= `
    <div class=" col-sm-12 book m-2 w3-hover-border-amber w3-hover-black card " id="" style="width:20%; ">
    <div class="card-header " style="height:100px;"><h3 class="info ">${res.name}</h3></div>
    <div class="card-body">
        <div class="card-img-top "><img src="${res.image}" class="img-fluid" style="width:100%;" alt=""></div>
    </div>
</div>
    `
})
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
    // $('.slick-carousel').slick({
    //   dots: true,
    //   arrows:true,
    //   infinite: true,
    //   speed: 300,
    //   slidesToShow: 5,
    //   slidesToScroll: 2,
    //   responsive: [
    //     {
    //       breakpoint: 1024,
    //       settings: {
    //         slidesToShow: 3,
    //         slidesToScroll: 3,
    //         infinite: true,
    //         dots: true
    //       }
    //     },
    //     {
    //       breakpoint: 600,
    //       settings: {
    //         slidesToShow: 2,
    //         slidesToScroll: 2
    //       }
    //     },
    //     {
    //       breakpoint: 480,
    //       settings: {
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //       }
    //     }
    //   ]
    //   });
      let Users=[];
      function createUser(name,email,password){
        let user={name,email,password};
          Users.push(user);
          localStorage.setItem("Users", JSON.stringify(Users));
      }
      let usrs = JSON.parse(localStorage.getItem("Users") || "{}");
      console.log(usrs)
      function createAccount(){
          var na=singUpName.value;
          var em=signUpEmail.value;
          var psw=signUpPassword.value;
          var pswi=signUpPasswordIdentity.value;
          createUser(na,em,psw);
          usrs.forEach((user)=>{
              if(user.email === em){
                signUpPage.style.display="none";
                loginPage.style.display='none';
                userPanel.style.display='block';
                  userPanel.innerHTML=`
                  <div>
                  <div class="row">
                  <div class="navbar navbar-expand bg-body">
                      <div class="navbar-brand fs-3">User</div>
                      <div class="container">
                          <div class="flex-fill"></div>
                      <div class="navbar-nav">
                          <div class="nav-link"><a id="userSettingBtn" style="cursor:pointer;" class="nav-link"><i class="fas fa-gear"></i></a></div>
                          <div class="nav-link"><a id="logOutBtn" onclick="logOut()" style="cursor:pointer;" class="nav-link"><i class="fas fa-right-from-bracket"></i></a></div>
                      </div>
                      </div>
                  </div>
              </div>
              <div class="d-flex justify-content-around flex-row flex-wrap mt-2">
                  <div class="">
                      <p class="">Name:<span class="ms-3">${user.name}</span></p>
                      <p class="">Email:<span class="ms-3">${user.email}</span></p>
                  </div>
                  <div class="">
                      <div class="display-3 w3-text-amber"><i class="fas fa-user-circle"></i></div>
                  </div>
              </div>
              </div>
                  `
              }
          })
      }
      function login(){
          var email=loginEmail.value;
          var password=loginPassword.value;
          usrs.forEach((user)=>{
              if(email===user.email && password==user.password){
                  userPanel.style.display='block';
                  signUpPage.style.display="none";
                  loginPage.style.display='none';
                  userPanel.innerHTML=`
                  <div class="row">
                  <div class="navbar navbar-expand bg-body">
                      <div class="navbar-brand fs-3">User</div>
                      <div class="container">
                          <div class="flex-fill"></div>
                      <div class="navbar-nav">
                          <div class="nav-link"><a id="userSettingBtn" style="cursor:pointer;" class="nav-link"><i class="fas fa-gear"></i></a></div>
                          <div class="nav-link"><a id="logOutBtn" onclick="logOut()" style="cursor:pointer;" class="nav-link"><i class="fas fa-right-from-bracket"></i></a></div>
                      </div>
                      </div>
                  </div>
              </div>
              <div class="row g-2 container mt-2">
                  <div class="col-7 ">
                      <p class="">Name:<span class="ms-3">${user.name}</span></p>
                      <p class="">Email:<span class="ms-3">${user.email}</span></p>
                  </div>
                  <div class=" d-block col-5">
                      <div class="display-3 w3-text-amber"><i class="fas fa-user-circle"></i></div>
                  </div>
              </div>
                  `
              }
          })
      }
function logOut(){
    userPanel.style.display='none'
    loginPage.style.display='block'
}
userPanel.style.display='none'
signUpBtn.addEventListener('click',()=>{createAccount()});
linBtn.addEventListener('click',()=>login());
// fetch('https://booklibraryapi.onrender.com/Author').then(res=>res.json()).then(json=>console.log(json));