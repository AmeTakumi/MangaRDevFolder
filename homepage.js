document.getElementById('search-bar').addEventListener('keyup', function(event) {
    if (event.key === "Enter") {
        searchManga(this.value); // Placeholder function for search functionality
    }
});

function searchManga(query) {
    // Logic to search manga titles based on the query
    console.log(`Searching for manga with the query: ${query}`);
    // This would typically involve making a request to your backend to find matching manga titles
}
