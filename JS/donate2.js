document
  .getElementById("donate-for-noakhali-btn")
  .addEventListener("click", () => {
    const inputValue = getInputValue("donate-for-noakhali");
    const donationAmount = getDonationAmount("noakhali-donation-amount");
    calculation(inputValue, donationAmount, "noakhali-donation-amount");
  });
