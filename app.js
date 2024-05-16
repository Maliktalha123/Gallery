let heading = document.querySelector('h1')
let listImages = document.getElementsByClassName('listImages')
console.log(listImages)
let previewImage = document.getElementById('previewImage')


for (let i =0;i<listImages.length;i++ ){
    listImages[i].addEventListener('mouseover',()=>{
        
    previewImage.src = listImages[i].src 
    listImages[i].style.border = '3px solid white';
    heading.style.color = 'white'
    
})
listImages[i].addEventListener('mouseout',()=>{
        heading.style.color = 'red'
  
    listImages[i].style.border = '3px solid black';
    
})
}