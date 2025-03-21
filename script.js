alert('Hello!');

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      element.parentElement.style.color = 'black';
      element.parentElement.style.backgroundColor = 'black';
    }
  }
}

replaceText(document.body);
