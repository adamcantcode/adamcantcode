import { data } from './data';
import { createElement } from './elements/list';

function DataManipulator() {
  this.listData = (data) => {
    // const returnData = manipulateData.getTitles(data);
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

  this.getSources = (data) => {
    const { articles } = data;
    let sources = [];
    articles.forEach((items) => {
      const { source : { name } } = items;
      sources.push(name);
    });
    return sources;
  };

  this.postDate = (data) => {
    const { articles } = data;
    let publishDates = [];
    articles.forEach((items) => {
      const { publishedAt } = items;
      publishDates.push(publishedAt);
    });
    return publishDates;
  };
}

const manipulateData = new DataManipulator();

export { manipulateData };
