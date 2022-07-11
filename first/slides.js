const slides = document.querySelectorAll("section div.slides");

slides.forEach(slide => {

    let current = 0; 
    let z = 100;
    
    const images = slide.querySelectorAll("img");
    
    images.forEach(image => {
        z = z - 1;
        image.style.zIndex = z;
    })
    
    slide.addEventListener("click", function(){
        
        z = z - 1;
    
        images[current].style.zIndex = z; 
        
        current = current + 1;
        current = current % images.length;
    })

})

