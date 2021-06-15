var form = document.querySelector('form');
var pass = document.querySelector('#password');
var passConf = document.querySelector('#password_confirm');
var date = document.querySelector('#date');
var name = document.querySelector('#name');
var surname = document.querySelector('#surname');
var email = document.querySelector('#email');

const regName = /^[a-zA-Zа-яА-Я ,.'-]{0,35}$/i;
const regEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
const regPass = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;

var today = new Date();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var year = today.getFullYear() - 18;
    if(month < 10)
    	month = '0' + month;
    if(day < 10)
        day = '0' + day;
    var minDate = year + '-' + month + '-' + day;

var errorName = false;
var errorSurname = false;
var errorEmail = false;
var errorPassowrd = false;
var errorPassowrdconfirm = false;
var errorDate = false;

form.addEventListener('submit', function(event){
	event.preventDefault();
	for(let elem of form.elements){
		if (!elem.classList.contains('btn')) {
			if(elem.value == ''){
				elem.nextElementSibling.textContent = 'Данное поле не заполнено';
			}else{
				elem.nextElementSibling.textContent = '';
			}
		}
	}
	if (errorName == true && errorSurname == true && errorEmail == true && errorPassowrd == true && errorPassowrdconfirm == true && errorDate == true) {
	this.submit();
}
});

for(let elem of form.elements){
	if (!elem.classList.contains('btn')) {
		elem.addEventListener('blur', function(){
			validate(elem);
		});
		}
	}

validate = function(elem){
	if (elem.name == 'name') {
		if (!regName.test(elem.value))  {
			elem.nextElementSibling.textContent = 'Имя может содержать только буквы анлийского или русского алфавита и не должно превышать 35 символов';
			errorName = false;
		}else{
			elem.nextElementSibling.textContent = '';
			errorName = true;
		}
	}

	if (elem.name == 'surname') {
		if (!regName.test(elem.value)) {
			elem.nextElementSibling.textContent = 'Фамилия может содержать только буквы анлийского или русского алфавита и не должно превышать 35 символов';
			errorSurname = false;
		}else{
			elem.nextElementSibling.textContent = '';
			errorSurname = true;
		}
	}

	if (elem.name == 'email') {
		if (!regEmail.test(elem.value)) {
			elem.nextElementSibling.textContent = 'Введите email, в формате: example@mail.ru';
			errorEmail = false;
		}else{
			elem.nextElementSibling.textContent = '';
			errorEmail = true;
		}
	}

	if (elem.name == 'password_confirm') {
		if (passConf.value != pass.value) {
			elem.nextElementSibling.textContent = 'Пароли не совпадают';
			errorPassowrdconfirm = false;
		}else{
			elem.nextElementSibling.textContent = '';
			errorPassowrdconfirm = true;
		}
	}

	if (elem.name == 'password') {
		if (!regPass.test(elem.value)) {
			elem.nextElementSibling.textContent = 'Пароль должен быть не менее 8 символов и содержать по одной букве в верхнем и нижнем регистре, одну цифру и один символ';
			errorPassowrd = false;
		}else{
			elem.nextElementSibling.textContent = '';
			errorPassowrd = true;
		}
	}

	if (elem.name == 'date'){
		if (date.value > minDate) {
			elem.nextElementSibling.textContent = 'Возраст не должен быть меньше 18 лет';
			errorDate = false;
		}else{
			elem.nextElementSibling.textContent = '';
			errorDate = true;
		}
	}	
}

