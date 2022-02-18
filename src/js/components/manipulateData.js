function DataManipulator() {
  const newsData = JSON.parse(localStorage.getItem('newsData'));

  console.log(newsData);

  this.getTitles = () => {
    const { articles } = newsData;
    articles.forEach((items) => {
      const { title } = items;
      console.log(title);
    });
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
