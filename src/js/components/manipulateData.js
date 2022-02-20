import { data } from './data';
import { createElement } from './elements/list';

function DataManipulator() {
  this.listData = (data) => {
    const returnData = manipulateData.getTitles(data);
    const interval = 30;
    returnData.forEach((item, index) => {
      setTimeout(() => {
        createElement.createElement(
          'div',
          'lowercase text-rose-500 opacity-0 transition duration-500',
          item
        );
      }, index * interval);
    });
  };

  this.getTitles = (data) => {
    const { articles } = data;
    let titles = [];
    articles.forEach((items) => {
      const { title } = items;
      titles.push(title);
    });
    return titles;
  };
}

const manipulateData = new DataManipulator();

export { manipulateData };
