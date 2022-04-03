import { data } from "../data";

function SearchValues() {
  this.getValues = () => {
    var searchField = document.getElementById('search');
    searchField.addEventListener('keypress', (e) => {
      if(e.keyCode == 13) {
        var values = searchField.value;
        console.log('getting vals');
        data(values);
      }
    })
  };
}

const searchValues = new SearchValues();

export { searchValues };
