// JavaScript Document
function id(obj) {
    return document.getElementById(obj);
}
function bind(obj, ev, fn) { 
    if (obj.addEventListener) {
        obj.addEventListener(ev, fn, false);
    } else {
        obj.attachEvent('on' + ev, function() {
            fn.call(obj);
        });
    }
}
function view() {
    return {
        w: document.documentElement.clientWidth,
        h: document.documentElement.clientHeight
    };
}
function addClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) {
        obj.className = sClass;
        return;
    }
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) return;
    }
    obj.className += ' ' + sClass;
}

function removeClass(obj, sClass) { 
    var aClass = obj.className.split(' ');
    if (!obj.className) return;
    for (var i = 0; i < aClass.length; i++) {
        if (aClass[i] === sClass) {
            aClass.splice(i, 1);
            obj.className = aClass.join(' ');
            break;
        }
    }
}

window.onload=function(){
	document.body.style.height=view().h+'px';
	(function(){
		var oIndex=id('index');
		function fnLoad(){
			var iTime=new Date().getTime();
			var oW=id('welcome');
			var bTime=false;
			var timer=null;
			bind(oW,"webkitTransitionEnd",end);
			bind(oW,"transitionend",end);
			timer=setInterval(function(){
				if(new Date().getTime()-iTime>=4000){
					bTime=true;
				}
				if(bTime){
					clearInterval(timer);
					oW.style.opacity=0;
					addClass(oIndex,'pageShow');
				}
			},1000);
			
			function end(){
				removeClass(oW,'pageShow');
				fnTab();
			}
		}
		fnLoad();
		
		//轮播
		function fnTab(){
			var oTab=id("tabPic");
			var oList=id("picList");
			var aNav=oTab.getElementsByTagName("nav")[0].children;
			var aText=id('text_list').children;
			var iNow=0;
			var iX=0;
			var iW=view().w;
			var oTimer=0;
			var iStartTouchX=0;
			var iStartX=0;
			bind(oTab,"touchstart",fnStart);
			bind(oTab,"touchmove",fnMove);
			bind(oTab,"touchend",fnEnd);
			auto();
			/*if(!window.BfnScore)
			{
				fnScore();
				window.BfnScore=true;
			}*/
			function auto(){
				oTimer=setInterval(function(){
					iNow++;	
					iNow=iNow%aNav.length;
					tab();
				},2000);
			}
			function fnStart(ev){
				oList.style.transition="none";
				ev=ev.changedTouches[0];
				iStartTouchX=ev.pageX;
				iStartX=iX;
				clearInterval(oTimer);
			}
			function fnMove(ev){
				ev=ev.changedTouches[0];
				var iDis=ev.pageX-iStartTouchX;
				iX=iStartX+iDis;
				oList.style.WebkitTransform=oList.style.transform="translateX("+iX+"px)";
			}
			function fnEnd(){
				iNow=iX/iW;
				iNow=-Math.round(iNow);
				if(iNow<0){
					iNow=0;
				}
				if(iNow>aNav.length-1){
					iNow=aNav.length-1;
				}
				tab();
				auto();
			}
			function tab(){
				iX=-iNow*iW;
				oList.style.transition="0.5s";
				oList.style.WebkitTransform=oList.style.transform="translateX("+iX+"px)";
				for(var i=0;i<aNav.length;i++){
					removeClass(aNav[i],"active");
					removeClass(aText[i],'show');
				}
				addClass(aNav[iNow],"active");
				addClass(aText[iNow],'show');
			}
		}
		//评分
		var oScore=id('score');
		var aLi=oScore.getElementsByTagName('li');
		for(var i=0;i<aLi.length;i++){
			fn(aLi[i]);
		}
		function fn(obj){
			var aNav=obj.getElementsByTagName('a');
			var oInput=obj.getElementsByTagName("input")[0];
			for(var i=0;i<aNav.length;i++){
				aNav[i].index=i;
				bind(aNav[i],'touchstart',function(){
					for(var i=0;i<aNav.length;i++){
						if(i<=this.index){
							addClass(aNav[i],'active');
						}else{
							removeClass(aNav[i],'active');
						}
					}
					oInput.value=this.index;
				});
			}
		}
		
		//提交按钮
		var oBtn=id('btn');
		bind(oBtn,'touchstart',function(){
			if(isChecked()){
				if(isTag()){
					alert('提交成功')
				}else{
					alert('请添加标签');
				}
			}else{
				alert('请评分');
			}
		});
		function isChecked(){
			var aInput=oScore.getElementsByTagName('input');
			for(var i=0;i<aInput.length;i++){
				if(aInput[i].value==0){
					return false;
				}
			}
			return true;
		}
		
		function isTag(){
			var oTag=id('indexTag');
			var aInput2=oTag.getElementsByTagName('input');
			for(var i=0;i<aInput2.length;i++){
				if(aInput2[i].checked){
					return true;
				}
			}
			return false;
		}
	})();
	
};
