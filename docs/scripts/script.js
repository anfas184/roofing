
var addBtn = $('#add-btn')

var addBtn = document.getElementById('add-btn')
addBtn.addEventListener('click', function () {
	
//	cloning the html template tag
	var template = document.getElementsByTagName("template")[0];
	var clone = template.content.cloneNode(true);
	template.parentNode.appendChild(clone)


//	attaching the event listner to the close button of the newly created template row
	var closeBtn = document.getElementsByClassName('close')
	for (var i = 0; i < closeBtn.length; i++) {
		closeBtn[i].addEventListener('click', function (event) {
			this.parentElement.remove()
		})
	}
})


