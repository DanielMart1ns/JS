let n = 5

function fatorial(num){
    var res = 1
    for(var i = num; i >= 1; i--){
        res *= i
    }

    return res
}


console.log(fatorial(n))