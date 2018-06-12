;(function(){
    var loginVerif = prompt ('Введите Ваш логин: ', '');
    if (loginVerif === 'Админ' ) {
        var passwordVerif = prompt ('Введите Ваш пароль: ');
        if (passwordVerif === 'Черный Властелин'){
            alert ('Добро пожаловать!')
        } else if (passwordVerif === null) {
            alert('Вход отменен!')
        }else {
            alert ('Пароль не верен!')
        }
    }else if (loginVerif === null) {
        alert('Вход отменен!')
    }else {
        alert ('Я Вас не знаю!')
    }
})();