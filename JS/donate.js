document
  .getElementById("donate-for-noakhali-btn")
  .addEventListener("click", () => {
    const inputValue = getInputValue("donate-for-noakhali");
    const donationAmount = getDonationAmount("noakhali-donation-amount");
    calculation(
      inputValue,
      donationAmount,
      "noakhali-donation-amount",
      "noakhali-donation-title"
    );
  });

document.getElementById("donate-for-feni-btn").addEventListener("click", () => {
  const inputValue = getInputValue("donate-for-feni");
  const donationAmount = getDonationAmount("feni-donation-amount");
  calculation(
    inputValue,
    donationAmount,
    "feni-donation-amount",
    "feni-donation-title"
  );
});

document
  .getElementById("donate-for-quota-btn")
  .addEventListener("click", () => {
    const inputValue = getInputValue("donate-for-quota");
    const donationAmount = getDonationAmount("quota-donation-amount");
    calculation(
      inputValue,
      donationAmount,
      "quota-donation-amount",
      "quota-donation-title"
    );
  });
