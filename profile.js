
var home = document.querySelector('#homeicon')
var homepage = document.querySelector('.col-sm-7')
var jump = document.querySelector('.jump')
home.addEventListener('click', function (){
homepage.style.backgroundColor = 'green'
jump.style.display='block'
jump.style.transition = '2s ease'
homepage.style.display='none'


})