import '../css/main.css';

import * as InitialState from './components/initial_state/cursor-focus';
import * as Button from './components/button';
import * as SearchValues from './components/search_values/get-values';

// Needed because js is running before button element is acutally rendered
document.addEventListener('DOMContentLoaded', () => {
  InitialState.handleCursor.cursorFocus();
  Button.buttonClick.buttonClick();
  SearchValues.searchValues.getValues();
  // Display inital page state
  // Handle curson
  // Handle search query
  // Get data
  // Display data
  // Handle 
});
