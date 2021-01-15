//const addToCart = document.querySelectorAll(".btnPlus");
//console.log(addToCart);
//console.log(Array.from(addToCart));
/*Array.from(addToCart).map((el) => {
  el.addEventListener("click", () => {
    el.innerHTML = "added ✌️";

    const divE = document.createElement("div");
    //each element's name
    const ElementName = Array.from(
      document.querySelectorAll(".elementName").innerHTML
    );
    //each price
    const price = Array.from(document.querySelectorAll("#price").innerHTML);
    //total price
    const total = Number(document.querySelectorAll(".total").textContent);
    total.innerHTML =
      parseInt(total.innerHTML) + parseInt(el.nextElementSibling.innerHTML);
    divE.className = "ContentAdded alert alert-light parentELem p-0";

    divE.innerHTML = `<div class="alert alert-info" role="alert"> a new ${ElementName} is added '</div>
  `;
    document.querySelector("#CART").appendChild(divE);
  });
});*/
/////////////////////////////////////////////////////////////////

/*const removeButn = document.querySelectorAll(".btnMn");

Array.from(removeButn).map((el) => {
  el.addEventListener("click", () => {
    el.innerHTML = "removed ✌️";
    document.querySelector(".ContentAdded").remove();
  });
});*/
/////////////////////////////////////////////////////////////////

const removeButton = document.querySelectorAll(".removeBUTTON");
Array.from(removeButton).map((el) => {
  el.addEventListener("click", () => {
    el.parentElement.remove();
  });
});

////////////////////////////////////////////////////////////////
let hearts = document.getElementsByClassName("fas fa-heart");

for (let x of hearts) {
  x.addEventListener("click", () => {
    if (x.style.color == "red") {
      x.style.color = "gray";
    } else {
      x.style.color = "red";
    }
  });
}
/////////////////////////////////////////////////////////////////

let buttonremove = document.getElementsByClassName("fas fa-trash");

for (let x of buttonremove) {
  x.addEventListener("click", function () {
    x.parentNode.parentElement.remove();
    somme();
  });
}
///////////////////////////////////////////////////////////////////

let buttonplus = document.getElementsByClassName("add");
for (let x of buttonplus) {
  x.addEventListener("click", function () {
    x.nextElementSibling.innerHTML++;
    somme();
  });
}
///////////////////////////////////////////////////////////////////

let buttonmoins = document.getElementsByClassName("moins");
for (let x of buttonmoins) {
  x.addEventListener("click", function () {
    if (x.previousElementSibling.innerHTML > 0) {
      x.previousElementSibling.innerHTML--;
      somme();
    }
  });
}
///////////////////////////////////////////////////////////////////
somme = function () {
  let achat = Array.from(document.getElementsByClassName("achat"));
  let prix = Array.from(document.getElementsByClassName("prix"));
  let sum = 0;

  for (let i = 0; i < achat.length; i++) {
    sum += achat[i].innerHTML * prix[i].innerHTML;
  }
  document.getElementById("total").innerHTML = sum;
};
