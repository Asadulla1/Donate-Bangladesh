document
  .getElementById("history-section-show")
  .addEventListener("click", () => {
    const historySectionContainer = document.getElementById(
      "history-section-div"
    );
    historySectionContainer.classList.remove("hidden");
    const donateSectionContainer = document.getElementById(
      "donate-section-container"
    );
    donateSectionContainer.classList.add("hidden");
  });

document
  .getElementById("donation-section-show")
  .addEventListener("click", () => {
    const historySectionContainer = document.getElementById(
      "history-section-div"
    );
    historySectionContainer.classList.add("hidden");
    const donateSectionContainer = document.getElementById(
      "donate-section-container"
    );
    donateSectionContainer.classList.remove("hidden");
  });
