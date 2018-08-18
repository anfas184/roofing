var cancelBtn = document.querySelector('button.cancel');

cancelBtn.addEventListener('click',function(){
	var form = document.forms[0];
	form.reset();
})