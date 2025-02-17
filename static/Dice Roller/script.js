// Function to roll the dice and update the results
function rollDice() {
    // Generate two random dice rolls between 1 and 6
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    // Update the input fields with the rolled values
    document.getElementById("dice1").value = dice1;
    document.getElementById("dice2").value = dice2;
}
