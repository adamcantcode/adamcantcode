const data = () => {
  // const api = 'https://newsapi.org/v2/everything?'
  // const apiKey = 'dce83e83cc0d425aaeefdba5ba3d329f'

  const newsData = localStorage.getItem('newsData');
  if (!newsData) {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    // const queries = {
    //   'q': 'joe rogan',
    //   'sortBy': 'popularity',
    //   'from': '2022-02-01',
    //   'to': '2022-02-14',
    // }

    fetch(
      'https://newsapi.org/v2/everything?q="joe rogan"&sortBy=popularity&from=2022-02-01&to=2022-02-14&apiKey=dce83e83cc0d425aaeefdba5ba3d329f',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => localStorage.setItem('newsData', result))
      .catch((error) => console.log('error', error));
  }
};

const manipulateData = () => {
  const newsData = JSON.parse(localStorage.getItem('newsData'));
  const articles = newsData.articles;

  articles.forEach((element) => {
    console.log(element.title);
  });
};

export { data, manipulateData };
