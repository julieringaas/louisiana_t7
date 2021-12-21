// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");
// console.log(id);

// const url = "https://kea21s-2b20.restdb.io/rest/louisiana" + id;
// console.log(url);
// const options = {
//   headers: {
//     "x-apikey": "61c0a49198cf0d3f741b90ed",
//   },
// };

// console.log("hello?");

// fetch(url, options)
//   .then((response) => {
//     if (!response.ok) {
//       throw Error(response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     // we have the data
//     showProduct(data); //something weird here maybe?
//   })
//   .catch((e) => {
//     // Something went wrong
//     console.error("An error occured:", e.message);
//   });

const url = "https://kea21s-2b20.restdb.io/rest/louisiana?max=20";

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
    handleData(data);
  });
function handleData(data) {
  console.log(data);
  data.forEach(showData);
}

function showData(obj) {
  //   console.log(obj);
  //console.log("yo");
  const template = document.querySelector("template").Content;
  const clone = template.cloneNode(true);
  clone.querySelector(".name").textContent = obj.name;
  clone.querySelector("#img1").src = obj.img1_url;
  const mainEl = document.querySelector("main");
  // const mainEl = document.querySelector("body");
  mainEl.appendChild(clone);
}

//   function handleData(louisiana) {
//     louisiana.forEach((obj) => {
//       console.log(obj);
//       //     //1. make a template
//       //     //2. grab it
//       const template = document.querySelector("#").content;
//       //     //3. clone it
//       const clone = template.cloneNode(true);
//       //     //4. populate with data
//       clone.querySelector("h1").textContent = obj.name;
//       clone
//         .querySelector(".link")
//         .setAttribute("href", "product.html?id=" + obj._id);
//       // clone.querySelector("h2").textContent = obj.artist;

//       clone.querySelector("#img1").src = obj.img1_url;
//       clone.querySelector("h2").textContent = obj.artist;
//       clone.querySelector("p").textContent = obj.about;
//       clone.querySelector("h3").textContent = obj.year;
//       //clone.querySelector("#exhibition").textContent = obj.exhibition;
//       clone.querySelector("#img1").textContent = obj.img1;
//       //clone.querySelector("#img2").textContent = obj.img2;

//       //     //5. append it to the DOM
//       const mainEl = document.querySelector("main");
//       mainEl.appendChild(clone);
//     });
//   }

// function showProduct(obj) {
//   console.log(obj);

//   //const obj = obj._id + 1;
//   // create templates
//   const template = document.querySelector("#product_template").content;

//   // clone the template
//   const copy = template.cloneNode(true);

//   // change dynamic data
//   document.querySelector(".name").textContent = obj.name;
//   document
//     .querySelector(".artist")
//     .setAttribute("href", "productlist.html?id=" + obj._id);
//   document.querySelector("#img1").src = obj.img1_url;
//   document.querySelector("p").textContent = obj.about;
//   document.querySelector("h3").textContent = obj.year;
//   document.querySelector("#exhibition").textContent = obj.exhibition;
//   document.querySelector("#img1").textContent = obj.img1;
//   document.querySelector("#img2").textContent = obj.img2;

//   // append it to main
//   const elemParent = document.querySelector("productmain");
//   elemParent.appendChild(copy);
// }

//change content
