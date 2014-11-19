//This is my work using if...else statement

var testscore = Math.round(Math.random()*101)
console.log(testscore)
if (testscore >= 90){
	console.log("A");
}
else if (testscore >= 80){
	console.log("B");
}
else if (testscore >= 70){
	console.log("C");
}
else if (testscore >= 50){
	console.log("D");
}
else{
	console.log("F");
}

//This is my work using switch statement

var Grade = Math.round(Math.random()*101)
switch(true){
	case Grade >= 90:
		console.log("A")
		break;
	case Grade >= 80:
		console.log("B")
		break;
	case Grade >= 70:
		console.log("C")
		break;
	case Grade >= 60:
		console.log("D")
		break;
	default:
		console.log("F")
		break;
}
