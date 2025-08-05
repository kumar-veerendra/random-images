const imageContainerEle = document.querySelector(".image-container");
const btnEle = document.querySelector(".btn");

btnEle.addEventListener("click", () =>{
    imageNum=12;
    addNewImages();
});

function addNewImages(){
    for(let i=0; i<imageNum; i++){
        const newImgEle = document.createElement("img");
        let randomNum = Math.floor(Math.random()*2000);
        newImgEle.src = `https://picsum.photos/300?random=${randomNum}`;

        imageContainerEle.appendChild(newImgEle);
    }

}