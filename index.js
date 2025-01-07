function shout(string) {
    return string.toUpperCase(); //'HELLO!'
}
function whisper(string) {
    return string.toLowerCase(); //'Hello'

}
function logShout(string) {
    console.log(string.toUpperCase()); // 'HELLO'
}
function logWhisper(string) {
    console.log(string.toLowerCase()); // Logs the string in lowercase
}

function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
}
