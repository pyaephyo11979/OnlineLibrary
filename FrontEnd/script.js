let container=document.querySelector('body');
let themeChanger=document.getElementById('themeBtn');
let loginPage=document.querySelector('#page1');
let signUpPage=document.querySelector('#page2');
let createAccBtn=document.getElementById('createAccBtn');
let loginAccBtn=document.getElementById('loginAccBtn');
let BooksOfTheDay=document.getElementById('booksOfTheDay')
let noBels=document.getElementById('Nobels')
books.forEach((val)=>{
    console.log(val)
    BooksOfTheDay.innerHTML+= `
    <div class="col-3 m-1 col-sm-12 card " id="" style="width:20%;">
    <div class="card-body book">
    <div class="card-text"><h3 class="info ">${val.volumeInfo.title}</h3></div>
        <div class="card-img-top"><img src="${val.volumeInfo.imageLinks.thumbnail}" class="img-fluid" style="width:100%;" alt=""></div>
    </div>
</div>
    `
    noBels.innerHTML+= `
    <div class="col-3 m-1 col-sm-12 card " id="" style="width:20%;">
    <div class="card-body book">
    <div class="card-text"><h3 class="info ">${val.volumeInfo.title}</h3></div>
        <div class="card-img-top"><img src="${val.volumeInfo.imageLinks.thumbnail}" class="img-fluid" style="width:100%;" alt=""></div>
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
