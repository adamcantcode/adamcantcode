const manipulateData = () => {
  const newsData = JSON.parse(localStorage.getItem('newsData'));

  const {...data} = newsData;
  data.articles.forEach(items => {
    for (const keyValues of Object.values(items)) {
      console.log(keyValues);
    }
  });
  // console.log(data.articles);

  // articles.forEach((element) => {
  //   console.log(element.title);
  // });
};

export { manipulateData };
