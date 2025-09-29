function saveToLocalStorage() {
    // Get selected team
    const team = document.querySelector('input[name="team"]:checked');
    const selectedTeam = team ? team.value : null;

    // Get driver number
    const driverNumber = document.getElementById('Number').value;

    // Get name
    const name = document.getElementById('Name').value;

    // Simple validation
    if (!selectedTeam || !driverNumber || !name) {
        alert("Please fill out all the fields before submitting.");
        return;
    }

    // Store in localStorage
    const quizData = {
        team: selectedTeam,
        number: driverNumber,
        name: name
    };

    localStorage.setItem('f1QuizData', JSON.stringify(quizData));

    alert("Your answers have been saved!");

    // Redirect to results page
    window.location.href = "results.html";
}