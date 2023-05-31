document.getElementById("debtForm").addEventListener("submit", function(event) {
    event.preventDefault()

    let sum = parseFloat(document.getElementById("totalDebt").value)
    let peopleCount = parseInt(document.getElementById("numPeople").value)

    let result = sum / peopleCount * (1 + (20/(100 * peopleCount)))

    document.getElementById("result").textContent = result.toFixed(2) + " ₽"
});
