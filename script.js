//your JS code here. If required.
function activateSearch() {
	const search1 = document.getElementsByClassName("search");
	const active1 = document.getElementsByClassName("input");
	search1.classList.toggle("active");
	 if (search1.classList.contains("active")) {
            active1.focus();
        }
}