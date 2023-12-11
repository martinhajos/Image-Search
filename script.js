
const accessKey = "vv7njb-mGU2u5FpBRbsJk-Taqy7UQPvPS8-FV2A4S-g"
const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResult = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")

const CallData = {
  inputData: "",
  page: "1",
  searchImages : async function (){
    CallData.inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${CallData.page}&query=${CallData.inputData}&client_id=${accessKey}`
    const response = await fetch(url);
    const data = await response.json();

  }
};

/*
let inputData = ""
let page = 1;


async function searchImages(){
  CallData.inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${CallData.page}&query=${CallData.inputData}&client_id=${accessKey}`;



  const response = await fetch(CallData.url);
  const data = await response.json();
*/
  const results = data.results;

  if(CallData.page ===1){
    searchResult.innerHTML="";
  }
  results.map((result) =>{
    const imageWrapper = document.createElement('div')
    imageWrapper.classList.add('search-result')
    const image = document.createElement('img')
    image.src = result.urls.small
    image.alt = result.alt_description
    const imageLink = document.createElement('a')
    imageLink.href = result.links.html
    imageLink.target = "_blank"
    imageLink.textContent = result.alt_description

    imageWrapper.appendChild(image)
    imageWrapper.appendChild(imageLink)
    searchResult.appendChild(imageWrapper);
  });

  CallData.page++

  if(CallData.page >1){
    showMore.style.display="block"
  }


formEl.addEventListener("submit",(event) =>{
  event.preventDefault();
  console.log("Form submitted");
  CallData.page = 1;
  CallData.searchImages();
})

showMore.addEventListener("click",() =>{
  console.log("Show more clicked");
  CallData.searchImages();
})

// oop re átírni ne legyen globális!!