
function heartColor1(){
document.getElementById('heart1').style.filter="invert(90%) sepia(90%) saturate(3207%) hue-rotate(240deg) brightness(90%) contrast(90%)";
}

function heartColor2(){
document.getElementById('heart2').style.filter="invert(90%) sepia(90%) saturate(3207%) hue-rotate(240deg) brightness(90%) contrast(90%)";
}

function heartColor3(){
document.getElementById('heart3').style.filter="invert(90%) sepia(90%) saturate(3207%) hue-rotate(240deg) brightness(90%) contrast(90%)";
}

function heartColor4(){
document.getElementById('heart4').style.filter="invert(90%) sepia(90%) saturate(3207%) hue-rotate(240deg) brightness(90%) contrast(90%)";
}
            
  elem1=0;
  cost=0;
function addToCard1(){
    elem1+=1
    cost+=105.20;
    return(elem1)
}
function deleteFromCard1(){
    elem1-=1
    cost-=105.20;
    return(elem1)
}

  elem2=0;
function addToCard2(){
    elem2+=1;
    cost+=200.50;
    return(elem2)
}
function deleteFromCard2(){
    elem2-=1;
    cost-=200.50;
    return(elem2)
}

  elem3=0;
function addToCard3(){
    elem3+=1;
    cost+=50.30;
    return(elem3)
}
function deleteFromCard3(){
    elem3-=1;
    cost-=50.30;
    return(elem3)
}

  elem4=0;
function addToCard4(){
    elem4+=1;
    cost+=124.45;
    return(elem4)
}
function deleteFromCard4(){
    elem4-=1;
    cost-=124.45;
    return(elem4)
}
function cartDisplay(){
    confirm(`your shopping card contains:

    ${elem1}:  Stylish Mens Jacket .
    ${elem2}:  Long mens Coat .
    ${elem3}:  Shirt For Women . 
    ${elem4}:  Short mens Coat .

    the total cost:  € ${cost} EUR`);
}
function cartClear(){
    elem1=0;
    elem2=0;
    elem3=0;
    elem4=0;
    cost=0;
    cartDisplay();
}