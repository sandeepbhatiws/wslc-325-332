

document.getElementById('gallery').addEventListener('click',(event) =>{
    if(event.target.tagName == 'IMG'){
        document.getElementById('image').src = event.target.src;
        document.querySelector('.lightbox').classList.remove('display');
    }
    
}); 

document.getElementById('close').addEventListener('click',(event) => {
    document.querySelector('.lightbox').classList.add('display');
})