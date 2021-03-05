function openSlideMenu(){
    document.getElementById('side-menu').style.width='250px';
}

function closeSlideMenu(){
    document.getElementById('side-menu').style.width='0';
}
let carts=document.querySelectorAll('.add-cart')

let products=[
    {
        name:'Lienzo',
        tag:'lienzo',
        price:200,
        inCart:0
    },
    {
        name:'Bote',
        tag:'bote',
        price:100,
        inCart:0
    },
    {
        name:'Caja',
        tag:'caja',
        price:50,
        inCart:0
    }
];

for (let i=0; i< carts.length;i++){
    carts[i].addEventListener('click',()=>{
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.ContadorCarrito').textContent=productNumbers;
    }
}


function cartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('.ContadorCarrito').textContent=productNumbers+1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.ContadorCarrito').textContent=1;
    }
}

///https://www.youtube.com/watch?v=PoTGs38DR9E

onLoadCartNumbers();