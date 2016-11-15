function Od(id){
	this.id = id;
}
Od.prototype.gd = function(idString){
	return document.getElementById(String(idString));
}

var od = new Od();
