let currentPage = 1; // Starting page
const totalPages = 10; // Placeholder for total number of pages

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        updatePage();
    }
});

function updatePage() {
    // Placeholder function to change the manga page source
    // You'll need to replace this logic to load the actual manga page from your server or a static directory
    const mangaPage = document.getElementById('manga-page');
    mangaPage.src = `path-to-your-manga-page-${currentPage}.jpg`;
    mangaPage.alt = `Manga Page ${currentPage}`;
}

updatePage(); // Initial call to set the first page
