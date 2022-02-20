import '../css/main.css';

import * as Data from './components/data';
import * as Button from './components/button';

// Needed because js is running before button element is acutally rendered
document.addEventListener('DOMContentLoaded', () => {
  // Data.data();
  Button.buttonClick.buttonClick();
});
