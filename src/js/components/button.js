import { manipulateData } from './manipulateData';

const buttonClick = () => {
  const button = document.getElementById('button');
  console.log(button);
  button.addEventListener('click', function () {
    manipulateData();
  });
};

export { buttonClick };
