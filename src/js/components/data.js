import { manipulateData } from './manipulateData';
import { searchValues } from './search_values/get-values';

const data = (values) => {
  console.log(values);
  console.log('getting news');
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  var url = `https://newsapi.org/v2/everything?q="${values}"&sortBy=popularity&from=2022-04-02&to=2022-04-02&pageSize=100&apiKey=dce83e83cc0d425aaeefdba5ba3d329f`;

  fetch(url, requestOptions)
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
