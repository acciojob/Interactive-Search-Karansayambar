//your JS code here. If required.
function activateSearch() {
        var searchContainer = document.getElementById("searchContainer");
        var searchInput = document.getElementById("searchInput");

        searchContainer.classList.toggle("active");

        if (searchContainer.classList.contains("active")) {
            searchInput.focus();
        }
    }