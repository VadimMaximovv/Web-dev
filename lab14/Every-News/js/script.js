/* JavaScript код */
let html = document.querySelector('html');
let themeButtonLight = document.querySelector('.theme-button-light');
let themeButtonDark = document.querySelector('.theme-button-dark');
let fontButtonSansSerif = document.querySelector('.font-button-sans-serif');
let fontButtonSerif = document.querySelector('.font-button-serif');
let sizeButton1 = document.querySelector('.font-size-button-s');
let sizeButton2 = document.querySelector('.font-size-button-m');
let sizeButton3 = document.querySelector('.font-size-button-l');

themeButtonLight.onclick = function() {
  html.setAttribute('data-theme-name', '')
};

themeButtonDark.onclick = function() {
  html.setAttribute('data-theme-name', 'dark')
};

fontButtonSerif.onclick = function() {
  html.setAttribute('data-theme-font', 'serif')
};

fontButtonSansSerif.onclick = function() {
  html.setAttribute('data-theme-font', '')
};

sizeButton1.onclick = function() {
  html.setAttribute('data-theme-font-size', '')
};

sizeButton2.onclick = function() {
  html.setAttribute('data-theme-font-size', 'medium')
};

sizeButton3.onclick = function() {
  html.setAttribute('data-theme-font-size', 'large')
};