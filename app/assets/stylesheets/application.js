document.addEventListener('DOMContentLoaded', function() {
	M.AutoInit();
	var elems = document.querySelectorAll('.sidenav');
	var test = M.Sidenav.getInstance(document.querySelectorAll('.btnsld'))
	console.log(test, document.querySelectorAll('.btnsld'))
    var instances = M.Sidenav.init(elems, {});
});