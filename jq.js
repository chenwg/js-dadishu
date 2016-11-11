	var at = document.getElementById('at'),
		ht=document.getElementById('ht'),
		st=document.getElementById('st'),
		r = document.getElementById('r'),
		w = document.getElementById('w');
	var pl;
	var alltime = at.value*60;
	var spList = document.getElementsByTagName('span');
	var spLen = spList.length;
	var bef=999999;
	var adds = true;
	var clickOne = true;
	var rnum = 0;
	var wnum = 0;
	function start(){
		pl = window.setInterval('showColor()',1000)
	}
	
	function showColor(){
		if(alltime == 0){
			window.clearInterval(pl);
			return false;
		}
		for(var i=0;i<spLen;i++){
			spList[i].style.backgroundColor = '#FFF';
			if(adds){
				spList[i].addEventListener('click',function(e){
					for(var j=0;j<spLen;j++){
						if(spList[j] == this){
							if(clickOne){
								if(j == bef){
									r.innerText = ++rnum;
								}else{
									w.innerText = ++wnum;
								}
								clickOne = false;
							}
						}
							
					}
				})
			}
		}
		adds = false;
		var mt = Math.round(Math.random()*8);
		if(mt == 0 && mt == bef){
			mt = 1; 
		}else if(mt == bef){
			mt = spLen-1;
		}
		spList[mt].style.backgroundColor = '#C9AD20';
		bef = mt;
		alltime -= 1;
		ht.innerText = alltime;
		clickOne = true;
	}
