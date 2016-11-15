	var at = document.getElementById('at'),
		ht=document.getElementById('ht'),
		step=document.getElementById('step'),
		hs=document.getElementById('hs'),
		st=document.getElementById('st'),
		r = document.getElementById('r'),
		w = document.getElementById('w'),
		l = document.getElementById('l'),
		pl,
		alltime = 0,
		steps = 0,
		spList = document.getElementsByTagName('span'),
		spLen = spList.length,
		bef=0,
		clickOne = false,
		clickWrong = true,
		clickRight = true,
		clickHas = true,
		startClick = false,
		rnum = 0,
		wnum = 0,
		lnum = 0;

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
			var pics = Math.round(Math.random()*10);
			spList[i].style.background = 'url(images/a'+String(pics)+'.jpg)';
			spList[i].addEventListener('click',function(e){
				if(startClick){
					for(var j=0;j<spLen;j++){
						if(spList[j] == this){
							if(j == bef && clickRight){
								spList[j].getElementsByTagName('img')[0].setAttribute('src','images/dadao.jpg');
								r.innerText = ++rnum;
								clickRight = false;//判断点对
							}
						}			
					}
					clickOne = false;//判断点漏
				}
			})
		}
		pl = window.setInterval('showDishu('+type+')',2000)
	}

	var showDishu = function(type){
		if(alltime < 0 || steps < 0){
			window.clearInterval(pl);
			return false;
		}
		if(alltime > 0 || steps >0){
			spList[bef].innerHTML = '';
			var mt = Math.round(Math.random()*35);
			if(mt == 0 && mt == bef){
				mt = 1; 
			}else if(mt == bef){
				mt = spLen-1;
			}
			console.log(mt)
			spList[mt].innerHTML = '<img src="images/dishu1.jpg" style="width:94px;height:94px;border:3px solid #c40000">';
		}
		if(clickOne && startClick)l.innerText = ++lnum;
		if(startClick && !clickOne && clickRight)w.innerText = ++wnum;
		if(alltime > 0 || steps > 0){
			startClick = clickRight = clickOne = true;
			bef = mt;
		}else{
			startClick = clickOne = false;
		}
		switch (type)
		{
			case 1:
				alltime -= 2;
				if(alltime > -1)ht.innerText = alltime;
				break;
			case 2:
				steps -= 1;
				if(steps > -1)hs.innerText = steps;
				break;
			default:
				break;
		}
	}
	
