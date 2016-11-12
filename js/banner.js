//焦点轮播
window.onload = function() {
	var banner = document.getElementById('banner'),
	    pic = document.getElementById('pic'),
	    list = document.getElementById('list').getElementsByTagName('li'),
	    index = 0,
	    timer = null;

	function auto() {
		timer = setInterval(function() {
			index++;
			if(index >= list.length){
			index = 0;
			}
		change(index);
		},2000);  
	}
	auto();

	function change(curIndex) {
		pic.style.marginTop = -314*curIndex + 'px';
		for(var n = 0; n < list.length; n++){
			list[n].className = '';
		}
		list[curIndex].className = 'on';
		index = curIndex;
	}
	banner.onmouseover = function() {
		clearInterval(timer);
	}
	banner.onmouseout = auto;
	for(var i = 0; i < list.length; i++) {
		list[i].id = i;
		list[i].onmouseover = function() {
		change(this.id);          
		}
	}
}