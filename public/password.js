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

function generate() {
    const output = document.getElementById('passwordDisplay');
    const lengthInput = document.getElementById('length');
    const passwordlength = parseInt(lengthInput.value, 10);

    const includeLowercase = document.getElementById('includeLowercase').checked;
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    try {
        const password = generatePassword(passwordlength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
        output.innerHTML = `Generated Password: <span class="password-highlight">${password}</span>`;
    } catch (err) {
        // Show friendly message in the UI
        output.innerHTML = `<span style="color:#ff6b6b">${err.message}</span>`;
        console.error(err);
    }
}