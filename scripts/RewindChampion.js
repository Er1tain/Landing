var namePerson = ['Арон Нимцович', 'Рихард Рети', 'Остап Бендер']

var current = 3;
var view = document.querySelector('#player_buttons div');
function preventPerson() {
    if (current == 3) {
        var btn = document.querySelector('#player_buttons button')[0]
        btn.style.disabled = true;
        btn.style.backgroundColor = '#D6D6D6';
        return 0;
    }
    current -= 3;
    view.innerHTML = current  + "<span>/ 6</span>";
}

function nextPerson() {
    if (current == 6) {
        var btn = document.querySelector('#player_buttons button')[1]
        btn.style.disabled = true;
        btn.style.backgroundColor = '#D6D6D6';
        return 0;
    }

    current += 3;
    view.innerHTML = current  + "<span>/ 6</span>";
}