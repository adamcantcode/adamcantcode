function HandleCursor() {
  this.cursorFocus = () => {
    var searchContainer = document.getElementById('search');
    searchContainer.focus();
    searchContainer.select();
  };
}

const handleCursor = new HandleCursor();

export { handleCursor };
