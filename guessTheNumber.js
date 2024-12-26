function guessTheNumberGame() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attempts = 5;

    alert("Добро пожаловать в игру 'Угадай число'! Компьютер выбрал число от 1 до 10. У вас есть 5 попыток.");

    while (attempts > 0) {
        let userInput = prompt(`У вас осталось ${attempts} попыток. Введите число от 1 до 10:`);

        if (userInput === null) {
            alert("Вы отменили игру. Спасибо за попытку!");
            return;
        }

        let guessedNumber = parseInt(userInput);

        if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 10) {
            alert("Неверный ввод! Пожалуйста, введите число от 1 до 10.");
            continue;
        }

        if (guessedNumber === randomNumber) {
            alert("Поздравляю! Вы угадали правильное число!");
            break;
        } else if (guessedNumber > randomNumber) {
            alert("Введенное вами число больше нужного.");
        } else {
            alert("Введенное вами число меньше нужного.");
        }

        attempts--;

        if (attempts === 0) {
            alert(`Вы проиграли! Правильное число было ${randomNumber}.`);
        }
    }

    if (confirm("Хотите сыграть снова?")) {
        guessTheNumberGame();
    } else {
        alert("Спасибо за игру! До свидания!");
    }
}

guessTheNumberGame();
