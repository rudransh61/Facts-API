//select
const button = document.querySelector(".abc .joke .clk");
const jokeDiv = document.querySelector(".abc .joke p");

//event
document.addEventListener("DOMContentLoaded", getJock);
button.addEventListener("click", getJock);

//f(x) to fetch api
async function getJock() {
  fetch('https://factsapi.netlify.app/api/api.json').then(data => data.json()).then(res=>
    jokeDiv.innerHTML = res[Math.floor(Math.random() * res.length)].fact
  ) // convrt api response readable to json js object
}