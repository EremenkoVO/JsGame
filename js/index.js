// enter name
let name = prompt("Пожалуйста введите свое имя");

while(name == '' || name == null) {
    name = prompt("Пожалуйста введите свое имя");
}

alert("Добро пожаловать в игру угадай число. " + name + ", я загадал число от 1 до 100. Попробуй отгодать за меньшее количество ходов.");

let number = random(100);
let guess = prompt("Введите число");
let numberOfGuesses = 0;

while(guess != number) {
    if (guess > number){
        alert("Ваше число больше моего. Попробуйте снова"); 
        guess = prompt("Введите число");
        numberOfGuesses = numberOfGuesses + 1;
    }
    if (guess < number) {
        alert("Ваше число меньше моего. Поробуйте снова");
        guess = prompt("Введите число");
        numberOfGuesses = numberOfGuesses + 1;
    }
}

alert("Ты угадал это число " + number + ", за " + numberOfGuesses + " шагов");