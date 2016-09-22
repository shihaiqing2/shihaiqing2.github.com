// JavaScript Document
$(function(){
	//head
	var aLi=$('.c_list').children();
	$('.choose').hover(function(){
		show();
	},function(){
		hide();
	});
	function show(){
		setTimeout(function(){
			$('.c_list').show();
		},100);
	}
	function hide(){
		setTimeout(function(){
			$('.c_list').hide();
		},100);
	}
	$('.c_list').hover(function(){
		show();
	},function(){
		hide();
	});
	aLi.click(function(){
		$('.choose').html($(this).html()+'<em></em>');
		$('.c_list').hide();
	});
	
	//显示隐藏
	function showHide(oParent,oChild){
		$(oParent).hover(function(){
			$(oChild).show();
			$(this).addClass('active');
		},function(){
			$(oChild).hide();
			$(this).removeClass('active');
		});
	}
	showHide('.user','.user_box');
	showHide('.direct','.direct_box');
	
	//banner
	$.ajax({
		url:'js/data1.js',
		success: function(str){
			var json=eval('('+str+')');
			for(var i=0;i<json.img.length;i++){
				var oA=$('<a href="javascript:;" class="fl banner_box"><img src="'+json.img[i]+'" alt="book" /></a>');
				$('.banner_left').append(oA);
			}
		}
	});
	
	var aBtn=$('.small_list').children();
	aBtn.click(function(){
		aBtn.removeClass('active');
		$(this).addClass('active');
		$('.banner_box').hide();
		$('.banner_box').eq($(this).index()).show();
	});
	
	//书列表
	$.ajax({
		url:'js/data2.js',
		success:function(str){
			var arr=eval('('+str+')');
			for(var i=0;i<arr.length;i++){
				var oDiv=$('\
				<div class="list1">\
					<h3>\
						<a href="javascript:;">'+arr[i].title+'</a>\
					</h3>\
					<ul class="clearfix book_list">\
						<li>\
							<a href="javascript:;"><span>['+arr[i].children[0].span+']</span>'+arr[i].children[0].text+'</a>\
						</li>\
						<li>\
							<a href="javascript:;"><span>['+arr[i].children[1].span+']</span>'+arr[i].children[1].text+'</a>\
						</li>\
						<li>\
							<a href="javascript:;"><span>['+arr[i].children[2].span+']</span>'+arr[i].children[2].text+'</a>\
						</li>\
						<li>\
							<a href="javascript:;"><span>['+arr[i].children[3].span+']</span>'+arr[i].children[3].text+'</a>\
						</li>\
						<li>\
							<a href="javascript:;"><span>['+arr[i].children[4].span+']</span>'+arr[i].children[4].text+'</a>\
						</li>\
						<li>\
							<a href="javascript:;"><span>['+arr[i].children[5].span+']</span>'+arr[i].children[5].text+'</a>\
						</li>\
						<li>\
							<a href="javascript:;"><span>['+arr[i].children[6].span+']</span>'+arr[i].children[6].text+'</a>\
						</li>\
						<li>\
							<a href="javascript:;"><span>['+arr[i].children[7].span+']</span>'+arr[i].children[7].text+'</a>\
						</li>\
					</ul>\
				</div>\
				');
				$('.list_box').append(oDiv);
			}
		}
	});
	
	//试读列表
	$.ajax({
		url:'js/data3.js',
		success:function(str){
			var arr=eval('('+str+')');
			for(var i=0;i<arr.length;i++){
				var oLi=$(
				'<li>\
					<a href="javascript:;" class="fl img_box"><img src="'+arr[i].src+'" /></a>\
					<div class="fl text_box">\
						<h4><a href="javascript:;">'+arr[i].title+'</a></h4>\
						<p><a href="javascript:;">'+arr[i].text+'</a></p>\
					</div>\
				</li>'
				);
				$('.read_list').append(oLi);
			}
		}
	});
	
	//选项卡
	(function(){
		var aHead=$('#rank1').children();
		var aContent=$('.novel1').find('ol');
		var aHead2=$('.rank_title3').find('span');
		var aContent2=$('.novel_rank2').find('ol');
		var aHead3=$('.rank4').find('span');
		var aContent3=$('.novel_rank3').find('ol');
		var aHead4=$('.rank5').find('span');
		var aContent4=$('.novel_rank4').find('ol');
		function tab(btn,content){
			btn.click(function(){
				btn.removeClass('active');
				content.hide();
				$(this).addClass('active');
				content.eq($(this).index()).show();
				
			});
		}
		tab(aHead,aContent);
		tab(aHead2,aContent2);
		tab(aHead3,aContent3);
		tab(aHead4,aContent4);
	})();
});