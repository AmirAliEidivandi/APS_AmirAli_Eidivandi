const valueDispalays = document.querySelectorAll('.num')

let interVal = 5000;

valueDispalays.forEach(valueDispalay => {
    let startValue = 0;
    let endValue = parseInt(valueDispalay.getAttribute('data-val'))
    
    let duration = Math.floor(interVal / endValue)
    let counter = setInterval(() => {
        startValue += 1;
        valueDispalay.textContent = startValue

        if (startValue === endValue) {
            clearInterval(counter)
        }
    }, duration)
})