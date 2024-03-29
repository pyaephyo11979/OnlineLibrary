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
let searchedItem=document.getElementById('searchedItem');
let searchedBtn=document.getElementById('searchBtn');
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
fetch('https://booklibraryapi.onrender.com/Book').then(res=>res.json()).then((data)=>{
    console.log(data)
    let book=data.results;
    book.forEach((res)=>{
            BooksOfTheDay.innerHTML+= `
            <div  class="  ${res.category.name} book m-1 w3-hover-border-amber w3-hover-black card " id="${res.name}" style="width:15%; ">
            <div class="card-header "><h3 class="info ">${res.name}</h3></div>
            <div class="card-body">
                <div class="card-img-top "><img type="button" data-bs-toggle="modal" data-bs-target="#modal_${res._id}"  src="${res.image}" class="img-fluid" style="width:100%;" alt=""></div>
            </div>
        </div>
        <div class="modal" id="modal_${res._id}">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h3 class="modal-title">${res.name}</h3>
                    <button class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                <span class="fs-5 d-block">WrittenBy: ${res.author.name}</span>
                <span class="fs-5 d-block">Category: ${res.category.name}</span>
                <img   src="${res.image}" class="img-fluid" style="width:100%;" alt="">
                </div>
                <div class="modal-footer">
                    <a class="btn btn-success" target="_blank" href="${res.pdf_url}">Download <i class="fas fa-download"></i> </a>
            </div>
        </div>
        </div>
            `
        })
})

// Books.forEach((res)=>{
//     console.log(res.tag.name)
//     BooksOfTheDay.innerHTML+= `
//     <div  class="  ${res.category.name} book m-1 w3-hover-border-amber w3-hover-black card " id="${res.name}" style="width:15%; ">
//     <div class="card-header "><h3 class="info ">${res.name}</h3></div>
//     <div class="card-body">
//         <div class="card-img-top "><img type="button" data-bs-toggle="modal" data-bs-target="#modal_${res._id}"  src="${res.image}" class="img-fluid" style="width:100%;" alt=""></div>
//     </div>
// </div>
// <div class="modal" id="modal_${res._id}">
// <div class="modal-dialog">
//     <div class="modal-content">
//         <div class="modal-header">
//             <h3 class="modal-title">${res.name}</h3>
//             <button class="btn-close" data-bs-dismiss="modal"></button>
//         </div>
//         <div class="modal-body">
//         <span class="fs-5 d-block">WrittenBy: ${res.author.name}</span>
//         <span class="fs-5 d-block">Category: ${res.category.name}</span>
//         <img   src="${res.image}" class="img-fluid" style="width:100%;" alt="">
//         </div>
//         <div class="modal-footer">
//             <a class="btn btn-success" target="_blank" href="${res.pdf_url}">Download <i class="fas fa-download"></i> </a>
//     </div>
// </div>
// </div>
//     `
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
function search(){
    var search=searchedItem.value;
    let found=false;
    Books.forEach((book)=>{
        let boks=document.getElementById(`${book.name}`);
        boks.style.display='none';
        if(search==book.name ||  search==book.author.name || search==book.category.name){
            boks.style.display='block';
            found=true;
        }
    })
}
searchedItem.addEventListener('keydown',(e)=>{
    if(e.key==='Enter'){
        search();
    }
});
let nobelCagBtn=document.getElementById('nobelCagBtn');
let bioCagBtn=document.getElementById('bioCagBtn');
let nFcCagBtn=document.getElementById('nFcCagBtn');
let FcCagBtn=document.getElementById('FcCagBtn');
let rmCagBtn=document.getElementById('rmCagBtn');
let genCagBtn=document.getElementById('genCagBtn');
nobelCagBtn.addEventListener('click',()=>{
    Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.category.name==='Novel'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
nFcCagBtn.addEventListener('click',()=>{
    Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.category.name==='Non-Fiction'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
FcCagBtn.addEventListener('click',()=>{
    Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.category.name==='Fiction'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
rmCagBtn.addEventListener('click',()=>{
    Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.category.name==='Romance'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
bioCagBtn.addEventListener('click',()=>{
        Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.category.name==='Biography'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
genCagBtn.addEventListener('click',()=>{
        Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='block';
        })
    })
})
let trTagBtn=document.getElementById('trTagBtn');
let ltTagBtn=document.getElementById('ltTagBtn');
let pTagBtn=document.getElementById('pTagBtn');
let bSTagBtn=document.getElementById('bSTagBtn');
trTagBtn.addEventListener('click',()=>{
    Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.tag.name==='Trend'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
ltTagBtn.addEventListener('click',()=>{
    Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.tag.name==='Latest'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
pTagBtn.addEventListener('click',()=>{
    Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.tag.name==='Popular'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
bSTagBtn.addEventListener('click',()=>{
    Books.forEach((book)=>{
        let boks=document.querySelectorAll(`.${book.category.name}`);
        boks.forEach((bok)=>{
            bok.style.display='none';
        })
        if(book.tag.name==='Top Selling'){
            boks.forEach((bok)=>{
                bok.style.display='block';
            })
        }
    })
})
searchedBtn.addEventListener('click',()=>search());
userPanel.style.display='none'
signUpBtn.addEventListener('click',()=>{createAccount()});
linBtn.addEventListener('click',()=>login());
