function generatePassword() {
    const size = document.getElementById('length');
    const length=size.value;

    const display = document.getElementById('password');

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbol = "!-_.,/%#@";
    const allchars = uppercase + lowercase + numbers + symbol;

    let password = "";
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    while (length > password.length) {
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    display.value = password;
}
function copyPassword() {
    const display = document.getElementById('password');
    display.select();
    document.execCommand('copy');
}