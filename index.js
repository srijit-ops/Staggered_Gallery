let images= document.querySelectorAll(".image")
        images.forEach(image=>{
            image.addEventListener("mouseenter",()=>{
                for(let node of images){
                    if(node !== image){
                        node.classList.add("image_bw")
                    }
                }
            })
            image.addEventListener("mouseleave",()=>{
                for(let node of images){
                    if(node !== image){
                        node.classList.remove("image_bw")
                    }
                }
            })
        })