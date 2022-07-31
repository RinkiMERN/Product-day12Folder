let div1=document.querySelector("#buttons");
let photo=document.querySelector("#getPhotos");
// console.log(div1);
photo.style.visibility="hidden";
div1.addEventListener("click",e=>{
    console.log(e.target);
    let value=e.target.innerText;
photo.style.visibility="visible";
    getImages(value);
});

async function getImages(value)
{
let urlPath="https://dummyjson.com/products";
let data=await window.fetch(urlPath);
console.log(data);
let res= await data.json();
console.log(res);
let x=res.products;
console.log(x);
// let y=x.images;
// console.log(y);
let img="";

        for(let image of x )
        {
            // let {id,images}=image;
            // console.log(y[2]);
           
            let description=image.description;
            console.log(description.slice(0,20));
            // console.log(image.stock );
            let stock=image.stock;
            img+=`<div class="pics">
            <img src=${image.images[0]} />
            <p class="title">${image.title}</p> 
            <p class="price"> price: ${image.price} </p>
             <p class="discount">Discount: ${image.discountPercentage} </p>
            <p class="rating"> Rating: ${image.rating}</p>
            <p class='${stock<50 ? "red":"green"}'>${image.stock} </p>
            <span>${description.slice(0,20)} </span>
            </div>`
           
           
        }
        photo.innerHTML=img;
}
// getImages();
