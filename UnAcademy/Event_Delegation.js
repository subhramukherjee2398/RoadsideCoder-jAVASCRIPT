
document.querySelector("#product").addEventListener("click",(event)=>{
    if(event.target.tagName === 'LI'){
        window.location.href = "#"+event.target.id
    }
})