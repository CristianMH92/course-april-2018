(function(){

'use strict'

let footerMobile = document.querySelector('.footer-mobile');

let btnSearch = document.querySelector('.button_discover');
let btnDownload = document.querySelector('.button_download');
let btnEnjoy = document.querySelector('.button_enjoy');

let textSearch = document.querySelector('.mobile-text-1');
let textDownload = document.querySelector('.mobile-text-2');
let textEnjoy = document.querySelector('.mobile-text-3');

let modal = document.querySelector('.modal');
let btnSubscription = document.querySelector('.main-content__button');

let btnRegister = document.querySelector('.modal__button');

  
btnSubscription.addEventListener('click', () => {
	 modal.style.display = "block";
  })


btnRegister.addEventListener('click', () => {
	 modal.style.display = "none";
  })  
  
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
 
 btnSearch.addEventListener('click', () => {
	addCssClass(textSearch);
    removeCssClass(textDownload);
	removeCssClass(textEnjoy);
	footerMobile.classList.add('footer-mobile__active');
  })
 
 btnDownload.addEventListener('click', () => {
	addCssClass(textDownload);
    removeCssClass(textSearch);
	removeCssClass(textEnjoy);
	footerMobile.classList.add('footer-mobile__active');
  })
  

 btnEnjoy.addEventListener('click', () => {
    addCssClass(textEnjoy);
    removeCssClass(textSearch);
	removeCssClass(textDownload);
	footerMobile.classList.add('footer-mobile__active');
  })

 let removeCssClass = (element) => {
	 element.classList.remove('active');
	 element.classList.add('deactivated');
 }
 
 let addCssClass = (element) => {
	 
	 element.classList.remove('deactivated');
	 element.classList.add('active');
 }
  
})();