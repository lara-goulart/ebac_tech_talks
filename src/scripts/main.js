AOS.init();

const eventDate = new Date("Dec 12, 2026 19:00:00")
const eventTimeStamp = eventDate.getTime()

const hoursCount = setInterval(function() {
    const now = new Date()
    const nowTimeStamp = now.getTime()

    const eventTimer = eventTimeStamp - nowTimeStamp

    const msDay = 1000 * 60 * 60 * 24
    const msHour = 1000 * 60 * 60
    const msMinute = 1000 * 60

    const eventDays = Math.floor(eventTimer / msDay)
    const eventHours = Math.floor((eventTimer  % msDay) / msHour)
    const eventMinutes = Math.floor((eventTimer % msHour) / msMinute)
    const eventSeconds = Math.floor((eventTimer % msMinute) / 1000)

    document.getElementById('count').innerHTML = `${eventDays}d ${eventHours}h ${eventMinutes}m ${eventSeconds}s`

    if(eventTimer < 0) {
        clearInterval(hoursCount)
        document.getElementById('count').innerHTML = `Evento expirado`
    }
}, 1000)