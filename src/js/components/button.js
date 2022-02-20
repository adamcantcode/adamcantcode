import { list } from 'postcss';
import { data } from './data';
import { manipulateData } from './manipulateData';

function ButtonClick() {
  let clickedOnce = false;
  this.buttonClick = () => {
    // const button = document.getElementById('button');
    button.addEventListener('click', () => {
      // Holy shit--does it find the elementID by default?
      // Get the titles on first click, then authors
      if (!clickedOnce) {
        const localNewsData = JSON.parse(localStorage.getItem('newsData'));
        if (!localNewsData) {
          data();
        } else {
          manipulateData.listData(localNewsData);
        }
        clickedOnce = !clickedOnce;
      } else {
        document.getElementById('list').textContent = '';
        clickedOnce = !clickedOnce;
      }
    });
  };
}

const buttonClick = new ButtonClick();

export { buttonClick };
