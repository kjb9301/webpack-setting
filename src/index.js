import './style.css';
import image from './testImage.png';

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Test Webpack';
  element.classList.add('hello');

  const myImage = new Image();
  myImage.src = image;

  element.appendChild(myImage);

  return element;
}

document.getElementById('app').appendChild(component());
