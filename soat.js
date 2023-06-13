const hour=document.getElementById('hour')
const minute=document.getElementById('minute')
const second=document.getElementById('second')
const day=document.getElementById('day')

var monthName = [
    'January',
    'February',
    'March',
    'April',
    'June',
    'July',
    'Agust',
    'September',
    'Octuber',
    'November',
    'december'
]

const clock=setInterval(function time (){
    let today=new Date()
    let d=today.getDate()
    let m=today.getMonth()
    let y=today.getFullYear()
    let h=today.getHours()
    let min=today.getMinutes()
    let sec=today.getSeconds()
    
    day.innerHTML=`${d} ${monthName[m]} ${y}`
    hour.textContent=h
    minute.innerText=min
    second.innerText=sec
})