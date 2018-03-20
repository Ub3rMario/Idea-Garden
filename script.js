var dataBase = [
	{
		username: "Adam",
		password: "Test"
	},
	{
		username: "Carl",
		password: "dead"
	},
	{
		username: "Zoë",
		password: "TestUmlaut"
	},
	{
		username: "Andy",
		password: "dandy"
	},
	{
		username: "Greg",
		password: "Hawaii"
	},
];

var userPrompt = prompt("What is your username?");
var pwPrompt = prompt("What's your password?");

function signIn(un, pw) 
{
	for (var i = 0; i < dataBase.length; i++) {
		if (un === dataBase[i].username) {
			if (pw === dataBase[i].password) {
				return true;
			}
		}
	}
	return false;
}

if (signIn(userPrompt, pwPrompt)) {
	alert("You exist!")
} else {
	alert("Sorry, wrong username & password.")
}