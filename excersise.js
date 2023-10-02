const arr=[10,20,'dct','academy',30,'banglore']
const number= [],string =[]
for(let i = 0;i < arr.length;i++){
if(Number.isNaN(parseInt(arr[i]))){
    string.push(arr[i])
}else{
    number.push(arr[i])
}
}
console.log(number.concat(string))