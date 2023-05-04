function displayTime() {
    let currentDate = new Date();
    let currentTime = currentDate.getHours() + ":" + currentDate.getMinutes();

    document.getElementById("time").innerHTML = currentTime;
}