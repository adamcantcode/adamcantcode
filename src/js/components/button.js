import { manipulateData } from './manipulateData';
let clickedOnce = false;

const buttonClick = () => {
  // const button = document.getElementById('button');
  button.addEventListener('click', () => { // Holy shit--does it find the elementID by default?
    // Get the titles on first click, then authors
    if (!clickedOnce) {
      manipulateData.getTitles();
      clickedOnce = !clickedOnce;
    } else {
      manipulateData.getAuthors();
      clickedOnce = !clickedOnce;
    }
  });
};

export { buttonClick };
