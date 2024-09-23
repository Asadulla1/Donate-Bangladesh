function getInputValue(id) {
  const inputValue = document.getElementById(id).value;
  const inputValueNumber = parseFloat(inputValue);
  document.getElementById(id).value = "";
  return inputValueNumber;
}

function getDonationAmount(id) {
  const donationAmount = document.getElementById(id).innerText;
  const parsedDonationAmount = parseFloat(donationAmount);
  return parsedDonationAmount;
}
function calculation(
  inputValueNumber,
  parsedDonationAmount,
  donationAmountID,
  donationTitle
) {
  if (inputValueNumber > 0 && typeof inputValueNumber === "number") {
    const totalAmountBalance = document.getElementById(
      "total-amount-balance"
    ).innerText;
    const parsedTotalAmountBalance = parseFloat(totalAmountBalance);
    if (inputValueNumber <= parsedTotalAmountBalance) {
      const updatedDonationAmount = parsedDonationAmount + inputValueNumber;
      document.getElementById(donationAmountID).innerText =
        updatedDonationAmount;
      const updatedTotalAmount = parsedTotalAmountBalance - inputValueNumber;
      document.getElementById("total-amount-balance").innerText =
        updatedTotalAmount;
      document.getElementById("total-amount-balance-hamburg").innerText =
        updatedTotalAmount;
      modalDisplay("my_modal_1");
      makeTransactionHistory(inputValueNumber, donationTitle);
    } else {
      alert("Your Donation Amount is greater than your total amount balance");
    }
  } else {
    alert("Something went wrong");
  }
}
function modalDisplay(id) {
  const modal = document.getElementById(id);
  modal.showModal();
}

function makeTransactionHistory(donationAmount, donationTitle) {
  const transactionHistoryContainer = document.getElementById(
    "history-section-div"
  );
  const transactionTitle = document.getElementById("transaction-id");
  transactionTitle.classList.add("hidden");
  const div = document.createElement("div");
  const date = new Date();
  const heading = document.getElementById(donationTitle).innerText;
  const donate = heading.split("Donate for");
  let filteredArr = donate.filter(function (item) {
    return item !== "";
  });
  div.innerHTML = `
  <h1 class="text-xl font-extrabold">
 ${donationAmount} Taka is Donated for ${filteredArr}
  </h1>
  <p class="text-sm font-semibold">
  Date: ${date}
  </p>
  `;
  div.classList.add(
    "shadow-lg",
    "p-10",
    "border-1",
    "border-gray-300",
    "rounded-xl"
  );
  transactionHistoryContainer.appendChild(div);
}
