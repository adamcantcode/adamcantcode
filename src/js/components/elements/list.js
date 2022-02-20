function CreateElement() {
  this.createElement = (tag, classes, content) => {
    console.log('creating');
    const newElement = document.createElement(tag);
    newElement.classList.add(classes);
    newElement.textContent = content;
    document.querySelector('#swup').append(newElement);
  };
}

const createElement = new CreateElement();

export { createElement };
