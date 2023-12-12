function indexOfIgnoreCase(s1, s2) {
  // write your code here
	if(s1.length === 0 && s2.length === 0){
		return  -1 ;
	}
	let case_1 = s1.toLowerCase();
	let case_2 = s2.toLowerCase();
	let ans = case_1.indexOf(case_2)
	return ans ;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));

