	var at = document.getElementById('at'),
		ht=document.getElementById('ht'),
		step=document.getElementById('step'),
		hs=document.getElementById('hs'),
		st=document.getElementById('st'),
		r = document.getElementById('r'),
		w = document.getElementById('w'),
		l = document.getElementById('l');
	var pl;
	var alltime = 1;
	var steps = 1;
	var spList = document.getElementsByTagName('span');
	var spLen = spList.length;
	var bef=0;
	var adds = true;
	var clickOne = true;
	var rnum = 0;
	var wnum = 0;
	var lnum = 0;
	function start(type){
		window.clearInterval(pl);
		switch (type)
		{
			case 1:
				alltime = at.value*60;
				break;
			case 2:
				steps = step.value;
				break;
			default:
				break;
		}
		for(var i=0;i<spLen;i++){
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
		pl = window.setInterval('showColor('+type+')',1000)
	}

	var showColor = function(type){
		if(alltime == 0 || steps == 0){
			window.clearInterval(pl);
			return false;
		}
		spList[bef].style.backgroundColor = '#FFF';
		var mt = Math.round(Math.random()*8);
		if(mt == 0 && mt == bef){
			mt = 1; 
		}else if(mt == bef){
			mt = spLen-1;
		}
		spList[mt].style.backgroundColor = '#C9AD20';
		bef = mt;
		switch (type)
		{
			case 1:
				alltime -= 1;
				ht.innerText = alltime;
				break;
			case 2:
				steps -= 1;
				hs.innerText = steps;
				break;
			default:
				break;
		}
		if(clickOne){
			l.innerText = ++lnum;
		}
		clickOne = true;
	}
