// JavaScript Document
//className
function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var aEl=oParent.getElementsByTagName('*');
		var res=[];
		for(var i=0;i<aEl.length;i++){
			var tmp=aEl[i].className.split(' ');
			for(var j=0;j<tmp.length;j++){
				if(tmp[j]==sClass){
					res.push(aEl[i]);
				}
			}
		}
	}
	return res;
}

//getById
function getById(id){
	return document.getElementById(id);
}

//事件绑定
function addEvent(obj,ev,fn){
	if(obj.addEventListener){
		obj.addEventListener(ev,fn,false);
	}else{
		obj.attachEvent('on'+ev,fn);
	}
}



