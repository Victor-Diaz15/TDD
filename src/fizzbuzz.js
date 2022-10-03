/*
    Escribir una funcion que al pasar un numero
    - Muestra "fizz" si el numero es multiplo de 3.
    - Muestra "buzz" si el numero es multiplo de 5.
    - Muestra "fizzbuzz" si el numero es multiplo de 3 y 5.
    - Muestra el numero si no es multiplo de ninguno de los anteriores.
*/

export const fizzbuzz = (number) => {
    if (typeof number !== 'number') throw new Error('parameter must be a number')
    if (Number.isNaN(number)) throw new Error('parameter must be a number')

    const multiplies = { 3: 'fizz', 5: 'buzz', 7: 'woff' }
    let output = '';

    Object
        .entries(multiplies)
        .forEach(([multiplier, word]) => {
            if (number % multiplier == 0) output += word
        })

    return output === '' ? number : output

}