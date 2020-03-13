function sayHello() {
    const favColors = ["Red", "Green", "Periwinkle"];
    const msg = { 'compatible': "We are compatible", 'incompatible': "We aren't compatible", };
    let state;

    let userName = prompt(`Whats your name?`);
    let userColor = prompt(`what's your favorite color?`);
    userColor.toUpperCase();

    function checkAgainst(color) {
        if (userName == color) {
            state = 'compatible';
            return
        } else {
            state = 'incompatible';
        }
    }

    favColors.forEach(checkAgainst);

    alert(msg[state]);
}