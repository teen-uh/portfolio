//selecting all required elements
const filterItem = document.querySelector(".items");
const filterMod = document.querySelectorAll(".mod");

window.onload = ()=>{ //once window loaded
  filterItem.onclick = (selectedItem)=>{ //when user clicked on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user click element has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in the first element
      selectedItem.target.classList.add("active"); //add the active class on the user selection
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of the user selected item and storing in a filterName variable
      filterMod.forEach((mod)=>{
        let filterMods = mod.getAttribute("data-name"); //getting module data-name value
        //if user selected item data-name value is equal to image data-name value
        //or user selected item data-name value is equal to "all"
        if((filterMods == filterName) || filterName == "all"){
          mod.classList.remove("hide");
          mod.classList.add("show");
        } else {
          mod.classList.add("hide");
          mod.classList.remove("show");
        }
      });
    }
    
  }
  
  if (window.matchMedia('(max-width: 600px)').matches){
        var navWidth = $(".items").width();
  $("nav").css("width", navWidth + "px");
  } 
  
  
}