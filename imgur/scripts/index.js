import { makeAPICall, appendImages } from "../scripts/main.js";
let page = 1;

let res = await makeAPICall(page);

let container = document.getElementById("container");
appendImages(res, container);

let search = document.querySelector(".search");

let debounceSearch;

search.addEventListener("input", () => {
   if (debounceSearch) {
      clearTimeout(debounceSearch);
   }

   debounceSearch = setTimeout(() => {
      searchData();
   }, 800);
});

function searchData() {
   let query = search.value;
   console.log("query:", query);

   fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=bESk1zhXjAJAd4AWL9VjlNKhx6Ijt23sJd1UlE5GdJc`
   )
      .then((res) => res.json())
      .then((data) => {
         console.log("data:", data.results);
         appendImages(data.results, container);
      });
}

let nextPage = document.getElementById("nextPage");
nextPage.addEventListener("click", makeAPICall(page + 1));

let prevPage = document.getElementById("prevPage");
prevPage.addEventListener("click", makeAPICall(page - 1));
