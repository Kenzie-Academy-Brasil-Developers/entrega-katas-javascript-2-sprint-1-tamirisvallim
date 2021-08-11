// comece a criar a sua função add na linha abaixo 

function add (x, y){

    return  x + y
}
// descomente a linha seguinte para testar sua função
 //console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (x,y){
    let num = 0
    for (a = 1; a <= y; a++) {
        num = add(num, x) 
    }
    return num
} 
 
// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let pow = 1
    for (p =1; p <= n; p++){
        pow = multiply(pow,x)
    }
   return pow
}

// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(z){
    let fact = z
    for (let f = z-1 ; f !==0;f--){
        fact = multiply(fact, f)
    }
    return fact
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
  
// descomente a linha seguinte para testar sua função
// console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
