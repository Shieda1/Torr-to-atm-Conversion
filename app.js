// https://www.omnicalculator.com/conversion/torr-to-atm

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const torrRadio = document.getElementById('torrRadio');
const atmRadio = document.getElementById('atmRadio');

let torr;
let atm = v; 

// labels of the inpust
const variable = document.getElementById('variable');

torrRadio.addEventListener('click', function() {
  variable.textContent = 'atm';
  atm = v;
  result.textContent = '';
});

atmRadio.addEventListener('click', function() {
  variable.textContent = 'Torr';
  torr = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(torrRadio.checked)
    result.textContent = `Torr = ${computetorr().toFixed(5)}`;

  else if(atmRadio.checked)
    result.textContent = `atm = ${computeatm().toFixed(5)}`;
})

// calculation

function computetorr() {
  return Number(atm.value) * 760;
}

function computeatm() {
  return Number(torr.value) / 760;
}