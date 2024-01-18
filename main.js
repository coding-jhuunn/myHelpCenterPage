const searchBtn = document.getElementById("searchBtn");
const searchHeader = document.querySelector(".search-header");
const closeBtn = document.getElementById("searchClose");

searchBtn.addEventListener("click", function () {
  searchHeader.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  searchHeader.classList.remove("show");
});
