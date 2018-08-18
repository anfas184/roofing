window.onload = function () {

	var submitBtn = document.querySelector('button[type="submit"]')
	var inputPWD = document.querySelector('#password')
	var inputConfirmPWD = document.querySelector('#confirm-password')
	var pwdStatus = document.querySelector('#pwd-status')
	var password = document.querySelectorAll('.password-check')
	var inputicon = document.querySelector('#confirm-password + .input-icon > i')
	var iconAfter = document.querySelector('#confirm-password + .input-icon')

	console.log(iconAfter)
	for (var i = 0; i < password.length; i++) {
		password[i].onkeyup = function () {

			if (inputPWD.value !== "" && inputPWD.value === inputConfirmPWD.value) {
				pwdStatus.style.visibility = "visible"
				pwdStatus.innerHTML = "Password Match"
				pwdStatus.style.color = "green"
				inputConfirmPWD.style.borderColor = '#64ac15'
				inputicon.style.color = '#64ac15';
				submitBtn.disabled = false;
				inputConfirmPWD.classList.remove('fail')


			} else {
				inputConfirmPWD.classList.add('fail')
				pwdStatus.style.visibility = "visible"
				pwdStatus.innerHTML = "Password Dont Match"
				pwdStatus.style.color = "red"
				inputConfirmPWD.style.borderColor = 'red';
				inputicon.style.color = 'red';
				submitBtn.disabled = true;
				iconAfter.style.borderColor = "red"

			}
		}
	}
}
