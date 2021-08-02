import $ from 'jquery'
import './app1.css'

const $value = $('#app1 #value')
const $pbutton = $('#app1 #plus')
const $m1button = $('#app1 #minus')
const $m2button = $('#app1 #multiple')
const $dbutton = $('#app1 #divide')

$value.text(localStorage.getItem('currentValue') || 100)

const saveValue = (n) => {
    localStorage.setItem('currentValue', n)
}

$pbutton.on('click', () => {
    let n = parseFloat($value.text())
    n += 1
    $value.text(n)
    saveValue(n)
})

$m1button.on('click', () => {
    let n = parseFloat($value.text())
    n -= 1
    $value.text(n)
    saveValue(n)
})

$m2button.on('click', () => {
    let n = parseFloat($value.text())
    n *= 2
    $value.text(n)
    saveValue(n)
})

$dbutton.on('click', () => {
    let n = parseFloat($value.text())
    n /= 2
    $value.text(n)
    saveValue(n)
})
