async function makeRequest(url = '') {
  const response = await fetch(url);
  return response.json(); // parses JSON response into native JavaScript objects
}

document.addEventListener('DOMContentLoaded', function(event) {
  if(event) {
    makeRequest('/api/get-data.js')
      .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
      });
  }
});