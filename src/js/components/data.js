import { manipulateData } from './manipulateData';

const data = (localNewsData) => {
  console.log('getting news');
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  fetch(
    'https://newsapi.org/v2/everything?q="joe rogan"&sortBy=popularity&from=2022-03-20&to=2022-03-22&pageSize=100&apiKey=dce83e83cc0d425aaeefdba5ba3d329f',
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      localStorage.setItem('newsData', result);
      const data = JSON.parse(localStorage.getItem('newsData'));
      console.log(data);
      manipulateData.listData(data);
    })
    .catch((error) => console.log('error', error));
};

export { data };
