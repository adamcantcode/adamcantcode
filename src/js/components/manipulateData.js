function DataManipulator() {

  this.arrangeData = function () {
    const newsData = JSON.parse(localStorage.getItem('newsData'));
    const { ...data } = newsData;

    data.articles.forEach((items) => {
      for (const keyValues of Object.values(items)) {
        console.log(keyValues);
      }
    });
    
  };
}

const manipulateData = new DataManipulator();

export { manipulateData };
