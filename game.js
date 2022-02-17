var secretNumber = 7;

var guess = prompt("Guess a Number");

if (Number(guess)=== secretNumber)
{
	alert("YOU GOT IT RIGHT");
}
else if (Number(guess)>secretNumber) 
{

	alert("Too High,Guess again!");
}
else
{
	alert("Too Low,Guess again!");
}