import { manipulateData } from './manipulateData';

const buttonClick = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', function () {
    manipulateData.arrangeData();
  });
};

export { buttonClick };
