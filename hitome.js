const arrow = document.querySelector(".arrow");
console.log(arrow);
const movieLists= document.querySelectorAll(".movie-list");
console.dir(movieLists);

arrows.forEach((arrow,i)=>{
    arrow.addEventListener("click",()=>{
        movieLists[i].computedStyleMap.backgroundColor = "red"
    })
    })
