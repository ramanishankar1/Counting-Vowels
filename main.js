var letters=prompt("Enter the name");
var count=0;
var len=letters.length
for(let i=0;i<=len;i++){
    if(letters[i]==='a'||letters[i]==='e' || letters[i]==='i'|| letters[i]==='o'||letters[i]==='u' ){
        count++;
}else{
    console.log(" Letters are Consonants");
}

}
console.log(count);
