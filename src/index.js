import './style.css';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Test Webpack';
  element.classList.add('hello');

  return element;
}

document.getElementById('app').appendChild(component());
