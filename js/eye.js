let pass = document.querySelector('#password')
let buttonEye = document.querySelector('.eye-button');
let tear = document.querySelector('.tear');
let redEye = document.querySelector('.eye-red');
let closedEye = document.querySelector('.eye-closed');

let loginButton = document.querySelector('.login-btn');

buttonEye.addEventListener('click', function () {
  firstClick();

  let isRedEye = buttonEye.classList.contains('red');
  let isClosedEye = buttonEye.classList.contains('closed');
  let clicked = buttonEye.classList.contains('clicked');

  if (isClosedEye) {
    openRedEye();
    loginButton.classList.remove('dis');
  } else if (isRedEye || clicked) {
    closeEye();
  }
});

var firstClick = (function () {
  var executed = false;
  return function () {
    if (!executed) {
      executed = true;

      document.querySelectorAll('.eye-grey').forEach(function (el) {
        el.remove();
      });
      buttonEye.classList.add('clicked');
      tear.classList.add('tear-show');
    }
  };
})();

var closeEye = function () {
  let isRedEye = buttonEye.classList.contains('red');
  if (isRedEye) {
    tear.classList.add('tear-fall');
  }
  buttonEye.classList.add('closed');
  buttonEye.classList.remove('red');
  redEye.style.display = 'none';
  closedEye.style.display = 'block';
  setTimeout(function () {
    tear.classList.add('tear-show');
    tear.classList.remove('tear-big');
    tear.classList.remove('tear-fall');
  }, 100);
  pass.type = 'password';

  var showHint = setTimeout(function () {
    let toolTip = document.createElement('span');
    toolTip.classList.add('tool-tip');
    buttonEye.appendChild(toolTip);
  }, 200);
  var hideHint = setTimeout(function () {
    var toolEl = buttonEye.querySelector('.tool-tip');
    toolEl.remove();
  }, 2000);
}


var openRedEye = function () {
  buttonEye.classList.add('red');
  buttonEye.classList.remove('closed');
  redEye.style.display = 'block';
  closedEye.style.display = 'none';
  tear.classList.add('tear-big');
  pass.type = 'text';
}

loginButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  let btnDisabled = loginButton.classList.contains('dis');
  if (!btnDisabled) {
    location.reload();
  }
});