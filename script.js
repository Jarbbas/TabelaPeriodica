var elementoinfo = document.getElementById('elementoInfo');
var elementoinfo2 = document.getElementById('elementoInfo2');

/** semiMetais */
var semiMetais = document.getElementsByClassName('semiMetais');

for (var i = 0; i < semiMetais.length; i++) {
    semiMetais[i].addEventListener('mouseover', function () {
        elementoinfo.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
        elementoinfo2.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    semiMetais[i].addEventListener('mouseleave', function () {
        elementoinfo.style.backgroundColor =  '#e6e6e6';
        elementoinfo2.style.backgroundColor =  '#e6e6e6';
    });
}

/** naoMetais */
var naoMetais = document.getElementsByClassName('naoMetais');

for (var i = 0; i < naoMetais.length; i++) {
    naoMetais[i].addEventListener('mouseover', function () {
        elementoinfo.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
        elementoinfo2.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    naoMetais[i].addEventListener('mouseleave', function () {
        elementoinfo.style.backgroundColor =  '#e6e6e6';
        elementoinfo2.style.backgroundColor =  '#e6e6e6';

    });

}