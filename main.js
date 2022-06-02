//task 1
const h2 = document.getElementById('h2');
const p = document.querySelector('.p-text');

//для h2 
const changeColor = (el) => {
    if(el.style.backgroundColor == 'black'){ 
        el.style.color = 'red';
        el.style.backgroundColor='pink';
    }else{
        el.style.backgroundColor='black';
        el.style.color = 'white';    
    }
};
h2.addEventListener('click', () => changeColor(h2));

//для p
const changeColor2 = (el) => {
    if(el.style.backgroundColor == 'orange'){ 
        el.style.color = 'blue';
        el.style.backgroundColor='yellow';
    }else{
        el.style.backgroundColor='orange';
        el.style.color = 'black';    
    }
};

p.addEventListener('click', () => changeColor2(p));


//task 2
const img = document.getElementById('img');

function makeBig() {
    img.style.width="45%";
  }
  function makeSmall() {
    img.style.width="25%";
  }
  function deleteImage() {
    image.innerHTML = "";
  }
  function addImage(){
    document.getElementById("image").innerHTML="<a id='image'><img id='img' src='Budapest.jpg'></a>";
  }