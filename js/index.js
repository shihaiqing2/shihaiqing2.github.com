// JavaScript Document
window.onload=function(){

	var oBox=getByClass(document,'banner_box')[0];
	var oUl=getByClass(document,'img_list')[0];
	var aContent=oUl.children;
	var oText=getById('text');
	var oOl=getById('ol1');
	var aLi2=oOl.getElementsByTagName('li');
	var oLeft=getById('left');
	var oRight=getById('right');
	var aText=[
		'<h2>纵横小说网</h2><p>使用Div和less布局，利用jQ实现选项卡等效果，通过aJax获取数据，运行良好<a href="../novel1/novel.html" target="_blank">[点击查看]</a></p>',
		'<h2>百度传课页面</h2><p>基于Div和Css编写，通过jQ实现轮播图，二级菜单等效果，使用grunt进行代码图片压缩<a href="../baidu/index.html"  target="_blank">[点击查看]</a></p>',
		'<h2>MZ后台管理界面</h2><p>基于Bootstrap搭建的页面，很好的实现了响应式功能，并用git传至github<a href="../MZ/h_index.html" target="_blank">[点击查看]</a></p>',
		'<h2>贝贝网手机页面</h2><p>基于rem布局，使用H5新标签及Css3新样式，通过swiper实现轮播效果，并且用git传至github<a href="../beibei/b_index.html">[点击查看]</a></p>'
	];
	
	var iCount=0;
	var timer=null;
	
	function tab(){
		if(iCount<0){
			iCount=3;
		}
		if(iCount>3){
			iCount=0;
		}
		for(var i=0;i<aLi2.length;i++){
				aLi2[i].className='';
				aContent[i].style.display='none';
			}
		aLi2[iCount].className='active';
		aContent[iCount].style.display='block';
		oText.innerHTML=aText[iCount];
		
	}
	
	for(var i=0;i<aLi2.length;i++){
		
		aLi2[i].index=i;
		aLi2[i].onclick=function(){
			iCount=this.index;
			tab();
		};
	}
	
	oLeft.onclick=function(){
		iCount--;
		tab();
	};
	
	oRight.onclick=function(){
		iCount++;
		tab();
	};
	
	timer=setInterval(function(){
		iCount++;
		tab();
	},3000);
	
	oBox.onmouseover=function(){
		clearInterval(timer);
	};
	oBox.onmouseout=function(){
		timer=setInterval(function(){
			iCount++;
			tab();
		},3000);
	};
	
	
	//回到顶部
	(function(){
		var timer=null;
		function toTop(iTarget,time){
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var dis=iTarget-start;
			var count=Math.round(time/30);
			var n=0;
			clearInterval(timer);
			timer=setInterval(function(){
				n++;
				var a=1-(n/count);
				document.documentElement.scrollTop=start+dis*(1-a*a*a);
				document.body.scrollTop=start+dis*(1-a*a*a);
				if(n==count){
					clearInterval(timer);
				}
			},30);
		}
		var oBtn=getByClass(document,'top_btn')[0];
		oBtn.onclick=function(){
			toTop(0,800);
		};
	})();
	

};
