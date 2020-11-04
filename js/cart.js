
const addToCart = document.querySelectorAll(".btnPlus");
//console.log(addToCart);
//console.log(Array.from(addToCart));
Array.from(addToCart).map((el) => {
el.addEventListener("click",() => {
    el.innerHTML="added ✌️";

    const divE = document.createElement('div');
    //each element's name
    const ElementName = document.querySelectorAll(".elementName").innerHTML;
    //each price 
    const price = document.querySelectorAll('#price').innerHTML;
    //total price
    const total = Number(document.querySelectorAll('.total').textContent);
    total.innerHTML=parseInt(total.innerHTML)+parseInt(el.nextElementSibling.innerHTML);
    divE.className = 'ContentAdded alert alert-light parentELem p-0';

  divE.innerHTML = `
 ${ElementName} that costs: ${price}
  <input class="quantity" id="id_form-0-quantity" min="0" 
  name="form-0-quantity" value="1" type="number" 
  style="width:4.3em; height:2.3rem;">
  `;
  document.querySelector('#CART').appendChild(divE);
});
})
/////////////////////////////////////////////////////////////////
const removeButn = document.querySelectorAll('.btnMn');

Array.from(removeButn).map((el) => {
el.addEventListener("click",() => {
    el.innerHTML="removed ✌️";
    document.querySelector('.ContentAdded').remove();
  })
})
/////////////////////////////////////////////////////////////////
const removeButton = document.querySelectorAll('.removeBUTTON');
Array.from(removeButton).map((el) => {
  el.addEventListener("click", () => {
    el.parentElement.remove();
  })
})

////////////////////////////////////////////////////////////////
const heartBtn = document.querySelectorAll("#imgH");
//console.log(heartBtn)
Array.from(heartBtn).map((el) => {
  el.addEventListener("click", () => {
    el.style.filter = "invert(90%) Sepia(90%) saturate(3207%) hue-rotate(240deg) brightness(90%) contrast(90%)";
  });
})
/////////////////////////////////////////////////////////////////
