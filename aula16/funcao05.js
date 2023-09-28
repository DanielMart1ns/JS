//Resursividade
function fatorial_recursivo(x){
    if (x == 1){
        return 1
    } else{
        return x * fatorial_recursivo(x - 1)
    }
}

console.log(fatorial_recursivo(5))