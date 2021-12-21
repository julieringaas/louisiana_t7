const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const url = "https://kea21s-2b20.restdb.io/rest/louisiana?max=20" + id;

//The API key:
const options = {
  headers: {
    "x-apikey": "61c0a49198cf0d3f741b90ed",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data
    console.log(data);
    showData(data);
  });

function handleData(data) {
  data.forEach(showData).catch((e) => {
    //Woops, something went wrong
    console.error("An error occured:", e.message);
  });
}

function showData(obj) {
  //console.log(obj);
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);
  clone.querySelector(".name").textContent = obj.name;
  clone.querySelector(".artist").textContent = obj.artist;
  clone.querySelector(".description").textContent = obj.about;
  clone.querySelector(".year").textContent = obj.year;
  clone.querySelector(".exhibition").textContent = obj.exhibition;
  clone.querySelector("#img1").textContent = obj.img1_url;
  clone.querySelector("#img2").textContent = obj.img1_url;

  // clone.querySelector("h2").textContent = obj.artist;
  // clone.querySelector("p").textContent = obj.about;
  // clone.querySelector("h3").textContent = obj.year;
  // clone.querySelector("#exhibition").textContent = obj.exhibition;
  // clone.querySelector("#img1").textContent = obj.img1;
  // clone.querySelector("#img2").textContent = obj.img2;

  //     //5. append it to the DOM
  const mainEl = document.querySelector("productmain");
  mainEl.appendChild(clone);
}

// function showData(obj) {
//   const template = document.querySelector("template").content;
//   const clone = template.cloneNode(true);
//   clone.querySelector("h1").textContent = obj.name;
//   clone.querySelector("img").src = obj.image;
//   const mainEl = document.querySelector("body");
//   mainEl.appendChild(clone);
// }

// function handleData(louisiana) {
//   louisiana.forEach((obj) => {
//     console.log(obj);
//     //     //1. make a template
//     //     //2. grab it
//     const template = document.querySelector("template").content;
//     //     //3. clone it
//     const clone = template.cloneNode(true);
//     //     //4. populate with data
//     clone.querySelector("h1").textContent = obj.name;
//     clone
//       .querySelector(".link")
//       .setAttribute("href", "product.html?id=" + obj._id);
//     // clone.querySelector("h2").textContent = obj.artist;

//     clone.querySelector("#img1").src = obj.img1_url;

//     // clone.querySelector("p").textContent = obj.about;
//     // clone.querySelector("h3").textContent = obj.year;
//     // clone.querySelector("#exhibition").textContent = obj.exhibition;
//     // clone.querySelector("#img1").textContent = obj.img1;
//     // clone.querySelector("#img2").textContent = obj.img2;

//     //     //5. append it to the DOM
//     const mainEl = document.querySelector("main");
//     mainEl.appendChild(clone);
//   });
// }

//Note - Show only H1 and #img1 on this page//

//Adding functions for links//
