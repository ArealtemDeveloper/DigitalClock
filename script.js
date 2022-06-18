let clock = document.querySelector(".clock");
let clockDate = document.querySelector(".date");
function time() {
    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes = date.getMinutes()< 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds()< 10 ? "0" + date.getSeconds() : date.getSeconds();
    
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function dateFunction() {
    let date = new Date(2022,7);
    let year = date.getFullYear();
    let month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    clockDate.innerHTML = `${year}-${month}`;

}

setInterval(time, 1000);
setInterval(dateFunction,1000)
