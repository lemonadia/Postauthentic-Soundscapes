const researchSections = document.querySelectorAll(".section")
const lastImages = document.querySelectorAll(".fake-img")

 const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0.1) {
        entry.target.parentNode.classList.add("in-view")
      } else {
         entry.target.parentNode.classList.remove("in-view")
      }
    })
  }, {
    threshold: [0, 0.1, 1]
  })
 

  lastImages.forEach(image => {
    observer.observe(image)
  })


window.onload = function() {
  document.getElementById("loading-animation").style.display = "none";
  document.getElementById("research-wrapper").style.display = "block";
}
