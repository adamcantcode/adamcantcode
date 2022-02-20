function DataManipulator() {
  const newsData = JSON.parse(localStorage.getItem('newsData'));
  this.getTitles = () => {
    const { articles } = newsData;
    let titles = [];
    articles.forEach((items) => {
      const { title } = items;
      titles.push(title);
    });
    return titles;
  };

  this.getAuthors = () => {
    const { articles } = newsData;
    articles.forEach((items) => {
      const { author } = items;
      console.log(author);
    });
  };
}

const manipulateData = new DataManipulator();

export { manipulateData };
