let homePoints = document.getElementById("home-el"),
    guestPoints = document.getElementById("guest-el"),
    period = document.getElementById("period"),
    foulsHome = document.getElementById("fouls-home"),
    foulsGuest = document.getElementById("fouls-guest"),
    minutes = document.getElementById("minutes"),
    seconds = document.getElementById("seconds"),
    startBtn = document.getElementById("start-btn")

let totalSeconds = 0




let pointsHome = 0,
    pointsGuest = 0,
    pointsPeriod = 0,
    pointsFoulsHome = 0,
    pointsFoulsGuest = 0


//Home
function addPoints(points, team) {
    if (team) {
        guestPoints.innerHTML = parseInt(guestPoints.innerHTML) + points
    } else {
        homePoints.innerHTML = parseInt(homePoints.innerHTML) + points
    }
}

function addFouls(team) {
    if (team) {
        foulsGuest.innerHTML = parseInt(foulsGuest.innerHTML) + 1
    } else {
        foulsHome.innerHTML = parseInt(foulsHome.innerHTML) + 1
    }
}

function addPeriod() {
    period.innerHTML = parseInt(period.innerHTML) + 1

}

function setTime() {
    ++totalSeconds;
    if (totalSeconds <= 720) {
        seconds.innerHTML = pad(totalSeconds % 60)
        minutes.innerHTML = pad(parseInt(totalSeconds / 60))
    } else {
        totalSeconds = 0
        addPeriod()
        
    }
}

function pad(value) {
    let varString = value + "";
    if (varString.length < 2) {
        return "0" + varString
    } else {
        return varString
    }
}

function startGame() {
    newGame()
    startBtn.disabled = true
    setInterval(setTime, 1000)
}

function newGame() {
    totalSeconds = 0;
    pointsHome = 0;
    pointsGuest = 0;
    pointsPeriod = 0;
    pointsFoulsHome = 0;
    pointsFoulsGuest = 0;
    homePoints.textContent = pointsHome;
    guestPoints.textContent = pointsGuest;
    period.textContent = pointsPeriod;
    foulsHome.textContent = pointsFoulsHome;
    foulsGuest.textContent = pointsFoulsGuest;
}