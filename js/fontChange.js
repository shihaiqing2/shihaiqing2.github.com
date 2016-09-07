(function(doc,win){
	function setFont(){
		doc.documentElement.style.fontSize=doc.documentElement.clientWidth/320*20+'px';
	}
	setFont();
	win.addEventListener('resize',setFont,false);
})(document,window);