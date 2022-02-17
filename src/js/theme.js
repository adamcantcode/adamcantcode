import '../css/main.css';

import * as Data from './components/data';
import * as Button from './components/button';
// import * as manipulatedData from './components/manipulateData';
// import {testFunction, testFunctionTwo} from './components/test';
document.addEventListener('DOMContentLoaded', () => {
  Data.data();
  Button.buttonClick();
});
