/*document.querySelector('.message') = 'Correct Number 😎🎉🎉🎉🎉'

ducemnet.querySelector('number')
ducemnet.querySelector('score')
ducemnet.querySelector('guess').value = 23;
*/

const secretNumber = Math.trunc(Math.random()*20+1)
document.querySelector('.number').textContent = secretNumber

const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', () => {
    const guess = Number (document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number';
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number 🎉🎉🎉'
    } else if (guess > secretNumber) {
        document.querySelector('.message').textContent = 'Too high ⬆️'
    } else if (guess < secretNumber) {
        document.querySelector('.message').textContent = 'Too low ⬇️'
    }
});



