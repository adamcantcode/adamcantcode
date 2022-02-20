import { manipulateData } from './manipulateData';
import { createElement } from './elements/list';
let clickedOnce = false;

const buttonClick = () => {
  // const button = document.getElementById('button');
  button.addEventListener('click', () => {
    // Holy shit--does it find the elementID by default?
    // Get the titles on first click, then authors
    if (!clickedOnce) {
      const returnData = manipulateData.getTitles();
      returnData.forEach(item => {
        createElement.createElement('div', 'text-rose-500', item);
      });
      clickedOnce = !clickedOnce;
    } else {
      manipulateData.getAuthors();
      clickedOnce = !clickedOnce;
    }
  });
};

export { buttonClick };
