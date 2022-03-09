document.querySelector('#yell').addEventListener('click', run)

function run() {
    
    let temp = document.querySelector('#celsius').value

    temp = temp * 9/5 + 32

    document.querySelector('#placeToYell').innerText = `${temp}°F`
}
