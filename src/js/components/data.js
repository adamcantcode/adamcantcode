const data = () => {
  const newsData = localStorage.getItem('newsData');

  if (!newsData) {
    console.log('getting news');
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      'https://newsapi.org/v2/everything?q="joe rogan"&sortBy=popularity&from=2022-02-01&to=2022-02-14&apiKey=dce83e83cc0d425aaeefdba5ba3d329f',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => localStorage.setItem('newsData', result))
      .catch((error) => console.log('error', error));
  } else {
    console.log('no new news');
  }
};

export { data };
