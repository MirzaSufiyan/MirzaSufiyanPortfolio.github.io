window.onload = function() {
    function loadHTMLFile(url, elementId) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    document.getElementById(elementId).innerHTML = xhr.responseText;
                } else {
                    console.error('Error loading HTML file:', url);
                }
            }
        };
        xhr.open('GET', url, true);
        xhr.send();
    }
    // Load header and footer HTML files
    loadHTMLFile('https://mirzasufiyan.github.io/MirzaSufiyanPortfolio.github.io/header.html', 'header');
    loadHTMLFile('https://mirzasufiyan.github.io/MirzaSufiyanPortfolio.github.io/footer.html', 'footer');
};
