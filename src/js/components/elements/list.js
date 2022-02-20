function CreateElement() {
  this.createElement = (tag, classes, content) => {
    const newElement = document.createElement(tag);
    newElement.classList += classes;
    newElement.textContent = content;
    document.querySelector('#swup').append(newElement);
    window.getComputedStyle(newElement).opacity;
    newElement.classList.remove('opacity-0');
  };
}

const createElement = new CreateElement();

export { createElement };
