const btn = document.querySelector('#btn')
const form = document.querySelector('#form')

form.addEventListener('submit', calcular)
function calcular(e){
    e.preventDefault();
    const uValue = parseInt(document.querySelector('#user_value').value)
    const resBox = document.querySelector('#result_box')
    const times = [1,2,3,4,5,6,7,8,9,10]
    resBox.innerHTML = ''

    times.forEach(function(n){
        const res = uValue*n
        resBox.innerHTML += `<p>${uValue} x ${n} = ${res}`
    })
}