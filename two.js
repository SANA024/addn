const colors=[
    white='peace',
    green='nature',
blue='tranquality'
]

function arr2obj(arr){
    const result={}
    for(let i=0;i<arr.length;i++){
         result[arr[i][0]]=arr[i][1]
    }
    return result
}
console.log(arr2obj(colors))