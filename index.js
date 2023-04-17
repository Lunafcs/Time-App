function UpdateTime() {
    var time = new Date();
    var h = time.getHours() - 12;
    var m = time.getMinutes();
    var s = time.getSeconds();
    var Total_time = `${h}:${m}:${s}`;
    var Hour = document.createElement("div")
    var time_container = document.getElementById("Time-Container");
    time_container.innerHTML = Total_time;
}

setInterval(UpdateTime, 1000)