var elementoinfo = document.getElementById('elementoInfo');
var elementoinfo2 = document.getElementById('elementoInfo2');


function caracteristicaElemento(numero, simbolo, nome, ma, ca ) {

    var div = document.getElementById('legendTable');
    div.className = div.className.replace('HiddeCell', 'showCell');
 
  var elSimbolo = document.getElementById("element_logo_symbol");
  elSimbolo.innerHTML = simbolo;
    
  var elNome = document.getElementById("element_logo_name");
  elNome.innerHTML = nome;

  var elNumero = document.getElementById("element_logo_atomicnumber");         
  elNumero.innerHTML = numero;

  var elMa = document.getElementById("element_logo_atomicmass");
  elMa.innerHTML = ma;

  var elSimboloTable = document.getElementById("element_table_symbol");
  elSimboloTable.innerHTML = simbolo;
    
  var elNumeroTable = document.getElementById("element_table_atomicnumber");         
  elNumeroTable.innerHTML = numero;

  var elMaTable = document.getElementById("element_table_atomicmass");
  elMaTable.innerHTML = ma;

  var elCaTable = document.getElementById("element_table_electconfig");
  elCaTable.innerHTML = ca;
    
};

function hideDiv(){
    var div = document.getElementById('legendTable');
    div.className = div.className.replace('showCell', 'HiddeCell');
}

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

/** Halogenios */
var Halogenios = document.getElementsByClassName('Halogenios');

for (var i = 0; i < Halogenios.length; i++) {
    Halogenios[i].addEventListener('mouseover', function () {
        elementoinfo.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
        elementoinfo2.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    Halogenios[i].addEventListener('mouseleave', function () {
        elementoinfo.style.backgroundColor =  '#e6e6e6';
        elementoinfo2.style.backgroundColor =  '#e6e6e6';

    });
}

/** gasesNobres */
var gasesNobres = document.getElementsByClassName('gasesNobres');

for (var i = 0; i < gasesNobres.length; i++) {
    gasesNobres[i].addEventListener('mouseover', function () {
        elementoinfo.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
        elementoinfo2.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    gasesNobres[i].addEventListener('mouseleave', function () {
        elementoinfo.style.backgroundColor =  '#e6e6e6';
        elementoinfo2.style.backgroundColor =  '#e6e6e6';

    });
}

/** outrosMetais */
var outrosMetais = document.getElementsByClassName('outrosMetais');

for (var i = 0; i < outrosMetais.length; i++) {
    outrosMetais[i].addEventListener('mouseover', function () {
        elementoinfo.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
        elementoinfo2.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    outrosMetais[i].addEventListener('mouseleave', function () {
        elementoinfo.style.backgroundColor =  '#e6e6e6';
        elementoinfo2.style.backgroundColor =  '#e6e6e6';

    });
}

/** metaisTransicao */
var metaisTransicao = document.getElementsByClassName('metaisTransicao');

for (var i = 0; i < metaisTransicao.length; i++) {
    metaisTransicao[i].addEventListener('mouseover', function () {
        elementoinfo.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
        elementoinfo2.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    metaisTransicao[i].addEventListener('mouseleave', function () {
        elementoinfo.style.backgroundColor =  '#e6e6e6';
        elementoinfo2.style.backgroundColor =  '#e6e6e6';

    });
}

/** metaisAlcalinos */
var metaisAlcalinos = document.getElementsByClassName('metaisAlcalinos');

for (var i = 0; i < metaisAlcalinos.length; i++) {
    metaisAlcalinos[i].addEventListener('mouseover', function () {
        elementoinfo.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
        elementoinfo2.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    metaisAlcalinos[i].addEventListener('mouseleave', function () {
        elementoinfo.style.backgroundColor =  '#e6e6e6';
        elementoinfo2.style.backgroundColor =  '#e6e6e6';

    });
}

/** alcalinoTerrosos */
var alcalinoTerrosos = document.getElementsByClassName('alcalinoTerrosos');

for (var i = 0; i < alcalinoTerrosos.length; i++) {
    alcalinoTerrosos[i].addEventListener('mouseover', function () {
        elementoinfo.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
        elementoinfo2.style.backgroundColor = window.getComputedStyle(this).backgroundColor;
    });
    alcalinoTerrosos[i].addEventListener('mouseleave', function () {
        elementoinfo.style.backgroundColor =  '#e6e6e6';
        elementoinfo2.style.backgroundColor =  '#e6e6e6';

    });
}