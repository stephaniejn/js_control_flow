var words = ["scones", "clotted cream", "cucumber sandwiches", "tea", "jam"]
var maxLength = 7;
var otherWords= [];
	for(var i=0; i<words.length; i++){
	if (words[i].length < maxLength){
		otherWords.push(words[i]);}
	}
console.log(otherWords)