'use strict';

(function Practice(){
}());

const myFunction = () => {
    if (screen.width > 650){
        document.getElementById('down-section-int__div__text__first').style.display = 'none';
        document.querySelector('.down-section-int__div1').style.opacity = 1;
        document.getElementById('down-section-int__div__text__second').style.display = 'none';
        document.querySelector('.down-section-int__div2').style.opacity = 1;
        document.getElementById('down-section-int__div__text__third').style.display = 'none';
        document.querySelector('.down-section-int__div3').style.opacity = 1;
        }
};
//myFunction();
setInterval('myFunction()', 1000);

const showTextFirst = () => {
    if (screen.width < 650){
    document.getElementById('down-section-int__div__text__first').style.display='block';
    document.querySelector('.down-section-int__div1').style.opacity = 1;
    document.getElementById('down-section-int__div__text__second').style.display='none';
    document.querySelector('.down-section-int__div2').style.opacity = 0.5;
    document.getElementById('down-section-int__div__text__third').style.display='none';
    document.querySelector('.down-section-int__div3').style.opacity = 0.5;
    }
};

const showTextSecond = () => {
    if (screen.width < 650){
    document.getElementById('down-section-int__div__text__first').style.display='none';
    document.querySelector('.down-section-int__div1').style.opacity = 0.5;
    document.getElementById('down-section-int__div__text__second').style.display='block';
    document.querySelector('.down-section-int__div2').style.opacity = 1;
    document.getElementById('down-section-int__div__text__third').style.display='none';
    document.querySelector('.down-section-int__div3').style.opacity = 0.5;
    }
};

const showTextThird = () => {
    if (screen.width < 650){
    document.getElementById('down-section-int__div__text__first').style.display='none';
    document.querySelector('.down-section-int__div1').style.opacity = 0.5;
    document.getElementById('down-section-int__div__text__second').style.display='none';
    document.querySelector('.down-section-int__div2').style.opacity = 0.5;
    document.getElementById('down-section-int__div__text__third').style.display='block';
    document.querySelector('.down-section-int__div3').style.opacity = 1;
    }
};

const showModal = () => {
    document.getElementById('modal').style.display = 'block';
};

const hideModal =  () => {
    document.getElementById('modal').style.display='none';
};