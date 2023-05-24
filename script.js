function calculate () {
    let myContainer = document.getElementById('container')
    let myTimeInput = document.getElementById('time-input')
    let myJumpInput = document.getElementById('jump-input')
    let timeInMinutes = myTimeInput.value
    let jumps = myJumpInput.value
    console.log(timeInMinutes)
    console.log(jumps)
    let count = timeInMinutes / 10 * jumps
    console.log(count)
    myContainer.innerHTML = "За " + timeInMinutes + " минут в соцсетях полагается " + count + " прыжков."
}