const output = document.getElementById('passwordDisplay');

function generatePassword(passwordlength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz ';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
    const numberChars = '0123456789 ';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>? ';

    let allowedChars = '';
    let password = '';

    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numberChars : '';
    allowedChars += includeSymbols ? symbolChars : '';

    if (allowedChars.length === 0) {
        throw new Error('At least one character type must be selected');
    }
    for(let i = 0; i < passwordlength; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

function generate(){
    const passwordlength = parseInt(document.getElementById("length").value);
    const lowercaseChars = document.getElementById("includeLowercase").checked;
    const uppercaseChars = document.getElementById("includeUppercase").checked;
    const numberChars = document.getElementById("includeNumbers").checked;
    const symbolChars = document.getElementById("includeSymbols").checked;
    const password = generatePassword(passwordlength, lowercaseChars, uppercaseChars, numberChars, symbolChars);
    output.innerHTML = `Generated Password: <span class="password-highlight">${password}</span>`;
}