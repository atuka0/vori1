// script.js

document.getElementById('searchBtn').addEventListener('click', function() {
  const query = document.getElementById('searchInput').value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
  } else {
    alert('Please enter an anime to search.');
  }
});
