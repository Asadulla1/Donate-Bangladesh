window.addEventListener("scroll", function () {
  const nav = document.querySelector("#nav");
  const btnDiv = document.querySelector("#btn-div");
  if (window.scrollY > 0) {
    nav.classList.remove("bg-[#F9F7F3]");
    btnDiv.classList.remove("bg-white");
    nav.classList.add("backdrop-blur-sm");
    btnDiv.classList.add("backdrop-blur-sm");
  } else {
    nav.classList.add("bg-[#F9F7F3]");
    btnDiv.classList.add("bg-white");
    btnDiv.classList.remove("backdrop-blur-sm");
    nav.classList.remove("backdrop-blur-sm");
  }
});
