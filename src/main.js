const btn = document.querySelector('#btn')
const form = document.querySelector('#form')

form.addEventListener('submit', calcular)
function calcular(e){
    e.preventDefault();
    const uValue = parseInt(document.querySelector('#user_value').value)
    const resBox = document.querySelector('#result_box')
    const times = [...Array(10).keys()].map(i => i+1)
    resBox.innerHTML = ''

    times.forEach(function(n){
        const res = uValue*n
        resBox.innerHTML += `<p>${uValue} x ${n} = ${res}`
    })
}