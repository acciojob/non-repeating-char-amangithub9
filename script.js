function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount ={};

	for(let i=0;i<str.length;i++){
		const char = str[i];
		charCount[char] =(charCount[char] || 0)+1;
	}

	for(let i=0;i<str.length;i++){
		const char = str[i];
		if(charCount[char] === 1){
			return char;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
