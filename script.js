document.addEventListener("DOMContentLoaded",
  function(){
    localStorage.clear("name")
    const main = document.querySelectorAll(".main")
    const myName = document.querySelectorAll('.name')
    main.forEach(element =>{
      element.classList.remove("container")
    })
    const name = document.getElementById('name')
    const savedName = localStorage.getItem("name")
    if (savedName == null || savedName == ""){
      main[0].classList.add("container")
      document.getElementById("button").addEventListener('click', function(){
        localStorage.setItem('name', name.value)
      })
    }
    else{
      main[1].classList.add("container")
      myName.forEach(name => {
        name.textContent = savedName
      })
    }
  }
)