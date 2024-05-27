let hesapposta = [
 'posta1',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',
 '',

];

let hesapsifre = [
  'şifre1',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  ''
];

let hesapkodu = [
  'kod1',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',



];

$(document).ready(function() {
  for (let i = 0; i < 38; i++) {
    $('#supportPanel').append(`<button id="auto-login-button-${i}" class="auto-login-button">${hesapkodu[i]}</button>`);
  }

  $('.auto-login-button').css({
    'position': 'relative',
    'z-index': '0',
    'background-color': 'rgba(255, 255, 255, 0)',
    'border': '2px solid white',
    'color': 'yellow',
    'text-align': 'center',
    'text-decoration': 'none',
    'display': 'inline-block',
    'font-size': '12px',
    'margin': '3px 2px',
    'cursor': 'pointer',
    'border-radius': '7px',
    'padding': '5px 10px',
    'width': '70px', 
    'height': '25px' 
  });

  $('.auto-login-button').click(function() {
    user_login(hesapposta[$(this).index()], hesapsifre[$(this).index()]);
  });
});
function user_login(email, password) {
  $('#email').val(email);
  $('#password').val(password);

  $('table button').click();
}
