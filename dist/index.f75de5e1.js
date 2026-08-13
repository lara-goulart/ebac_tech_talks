AOS.init();
const eventDate = new Date("Aug 12, 2026 19:00:00");
const eventTimeStamp = eventDate.getTime();
const hoursCount = setInterval(function() {
    const now = new Date();
    const nowTimeStamp = now.getTime();
    const eventTimer = eventTimeStamp - nowTimeStamp;
    const msDay = 86400000;
    const msHour = 3600000;
    const msMinute = 60000;
    const eventDays = Math.floor(eventTimer / msDay);
    const eventHours = Math.floor(eventTimer % msDay / msHour);
    const eventMinutes = Math.floor(eventTimer % msHour / msMinute);
    const eventSeconds = Math.floor(eventTimer % msMinute / 1000);
    document.getElementById("count").innerHTML = `${eventDays}d ${eventHours}h ${eventMinutes}m ${eventSeconds}s`;
    if (eventTimer < 0) {
        clearInterval(hoursCount);
        document.getElementById("count").innerHTML = `Evento expirado`;
    }
}, 1000);

//# sourceMappingURL=index.f75de5e1.js.map
