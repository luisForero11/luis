let suma= 0
for (let i = 1; i< 100;i++){
if (i % 2 == 0) {
 console.log("fizz" + i)   
} else{
    console.log("bump" + i)
    
}
suma = suma + i
}
console.log("resultado final" + suma)
