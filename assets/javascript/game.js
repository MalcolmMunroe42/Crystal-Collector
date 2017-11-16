$(document).ready(function() {

	var gemOneValue, gemTwoValue, gemThreeValue, gemFourValue;
	var wins = 0;
	var losses = 0;

	var randomGoalNumber;

	var userTotal;

	function initializeVariables() {
		
		randomGoalNumber = 21 + Math.floor(Math.random() * 100);
	
		gemOneValue = 1 + Math.floor(Math.random() * 12);
		gemTwoValue = 1 + Math.floor(Math.random() * 12);
		gemThreeValue = 1 + Math.floor(Math.random() * 12);
		gemFourValue = 1 + Math.floor(Math.random() * 12);
		
		userTotal = 0;
	
		$("#winTally").html("Wins: " + wins);
		$("#lossTally").html("Losses: " + losses);
		$("#randomNum").html(randomGoalNumber);
		$("#userScore").html(userTotal);
		displayVariables();
	}

	function didUserWinOrLose() {

		if (userTotal > randomGoalNumber) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		if (userTotal == randomGoalNumber) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}

	function displayVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("gemOneValue: ", gemOneValue + " gemTwoValue: " + gemTwoValue + " gemThreeValue: " + gemThreeValue + " gemFourValue: " + gemFourValue);
		console.log("randomGoalNumber: " + randomGoalNumber + " userTotal: " + userTotal);
		console.log("----------------------------------");

	}

	initializeVariables();

	$(".gem").on("click", function() {
		
		var pressed = $(this).attr("value");
        console.log(pressed);
      
        if (pressed == "gem1") {
        	userTotal += gemOneValue;
        } else if (pressed == "gem2") {
        	userTotal += gemTwoValue;
        } else if (pressed == "gem3") {
        	userTotal += gemThreeValue;
        } else if (pressed == "gem4") {
        	userTotal += gemFourValue;
        } else {
        	console.log("error");
        }
     
        $("#userScore").html(userTotal);
        displayVariables();
        
        didUserWinOrLose();
	});

});