var res = par_impar(3)

function par_impar(n){
    if (n % 2 == 0){
        return 'par'
    }
    else{
        return 'ímpar'
    }
}

console.log(res)