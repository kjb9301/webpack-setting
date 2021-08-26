function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Test Webpack';

  return element;
}

document.getElementById('app').appendChild(component());
