const arr=['sana','sana','zakir','maa','maa','sana']
const result=arr.reduce(function(preValue,currentValue){
    if(preValue.hasOwnProperty(currentValue)){
        preValue[currentValue]++
    }else{
        preValue[currentValue]=1
    }
    return [preValue]
},{})