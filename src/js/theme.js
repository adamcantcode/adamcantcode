import '../css/main.css';

import * as Button from './components/button';

// Needed because js is running before button element is acutally rendered
document.addEventListener('DOMContentLoaded', () => {
  Button.buttonClick.buttonClick();
});
