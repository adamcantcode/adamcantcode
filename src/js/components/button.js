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
      const interval = 30;
      returnData.forEach((item, index) => {
        setTimeout(() => {
          createElement.createElement('div', 'text-rose-500 opacity-0 transition duration-500', item);
        }, index * interval);
      });
      clickedOnce = !clickedOnce;
    } else {
      manipulateData.getAuthors();
      clickedOnce = !clickedOnce;
    }
  });
};

export { buttonClick };
