const ul = document.querySelector(".pop_rel_keywords");
const searchInput = document.querySelector(".search_input");
const relContainer = document.querySelector(".rel_search");
let cache = '';


const checkInput = () => {
    const beforeInput = searchInput.value;
    timer(beforeInput);
}


const timer = (beforeInput) => {
  setTimeout(() => {

    if(searchInput.value === beforeInput) {
      console.log("입력멈춤");
      loadData(searchInput.value);
      checkInput();
      
    } else {
      console.log("입력변함");
      checkInput();
    }
   
    if(searchInput.value === "") {
      relContainer.classList.add("hide");
    } else {
      relContainer.classList.remove("hide");
    }
  }, 500);
}

const loadData = (input) => {
    const url = `http://127.0.0.1:8000/owners/location?city_name=${input}`;
    
    if(cache === url) return;
    else {
      cache = url;
      fetch(url)
        .then((res) => res.json())
        .then(res => fillSearch(res.suggestions))
    }
  }

const fillSearch = (suggestArr) => {
  ul.innerHTML = "";
  suggestArr.forEach((el, idx) => {
    const li = document.createElement("li");
    li.innerHTML = el.value;
    ul.appendChild(li);
  }) 
     
   const liList = document.querySelectorAll(".pop_rel_keywords li");

  
}

const highlightText = () => {


}

checkInput();
