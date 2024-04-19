// Code your solutions in this file
function writeCards(array, giftType) {
  let thanksMessages = [];
  for (let i = 0; i < array.length; i++) {
    thanksMessages.push(
      `Thank you, ${array[i]}, for the wonderful ${giftType} gift!`
    );
  }
  return thanksMessages;
}

writeCards(["Elaf", "Amina", "Abdulrahman"], "Birthday");

function countDown(number) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
  }
}

countDown(10);
