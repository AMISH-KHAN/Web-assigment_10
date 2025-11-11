let movieUl=document.getElementById("movieUl")
let totalMovie=document.getElementById("totalMovie")

let movieList=[]

totalMovie.innerHTML=movieList.length

function update(){
    
    movieUl.innerHTML=""
    movieList.forEach((item)=>{
        let movieEl=document.createElement("li")
        movieEl.textContent=item
        movieUl.appendChild(movieEl)
        movieEl.addEventListener("click",()=>{
            deleteMovie(movieEl,movieList.indexOf(item))
        })
        
        
    })
    totalMovie.innerHTML=movieList.length
    
}

function addMovie(){
    let movie=document.getElementById("name")
    console.log(movie.value)
    if(movie.value==="" || movie.value===undefined){
        alert("please enter the movie name")
        return
    }
    movieList.push(movie.value)
    update()
}


let removeChild=document.getElementsByTagName("li")
console.log(removeChild)


function deleteMovie(movieEl,index){
    console.log(index+" "+movieList[index])
    console.log(movieList)
    movieList.splice(index,1)
    console.log(movieList)
    // totalMovie--
    movieEl.remove()
    update()
}
function clearList(){
    movieList=[]
    update();
}