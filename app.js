let listImages = document.getElementsByClassName('listImages')
console.log(listImages)
let previewImage = document.getElementById('previewImage')


for (let i =0;i<listImages.length;i++ ){
    listImages[i].addEventListener('mouseover',()=>{
        
    previewImage.src = listImages[i].src 
    listImages[i].style.border = '3px solid white';
    
})
listImages[i].addEventListener('mouseout',()=>{
        
  
    listImages[i].style.border = '3px solid black';
    
})
}