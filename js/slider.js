var slider = {
	freq: 18,  
	fadeStep: 2, 
	betweenFades: 3000, 	
	imgFiles: ['images/banner6.jpg','images/banner7.jpg','images/banner8.jpg','images/banner9.jpg','images/banner10.jpg','images/banner11.jpg','images/banner12.jpg','images/banner13.jpg','images/banner14.jpg','images/banner15.jpg','images/banner16.jpg','images/banner17.jpg','images/banner18.jpg','images/banner19.jpg','images/banner20.jpg','images/banner21.jpg'],
	current: 0, 
	imgs: [],  





 
	init: function() {
		slider.imgArea = document.getElementById('slider');
 
		
		var img = slider.imgArea.getElementsByTagName('img')[0];
		img.loaded = true;
		slider.imgs.push(img);
 
		
		for (var i=0; i<slider.imgFiles.length; i++) {
			img = document.createElement('img');
			img.src = slider.imgFiles[i];
			img.onload = function() {
				this.loaded = true;
			}
			slider.imgs.push(img);
		}
 
		setTimeout(slider.fadeNext, slider.betweenFades);
	},






 
	
	fadeNext: function() {
		slider.current++;
 
		if (slider.current >= slider.imgs.length) {
			
			slider.current = 0;
		}
 
		if (!slider.imgs[slider.current].loaded) {
			
			slider.current--;
			setTimeout(slider.fadeNext, 1000);
			return;
		}
 
		
		var img = slider.imgs[slider.current];
		slider.setOpacity(img, 0);
 
		slider.imgArea.appendChild(img);
 
		slider.opacity = 0;  
		slider.currentImg = img;
		setTimeout(slider.fadeIn, slider.freq);
	},
 







	
	fadeIn: function() {
		slider.opacity += slider.fadeStep;
		if (slider.opacity > 100) {
			slider.opacity = 100;
		}
 
		slider.setOpacity(slider.currentImg, slider.opacity);
 
		if (slider.opacity < 100) {
			
			setTimeout(slider.fadeIn, slider.freq);
		} else {
			

			var firstImg = slider.imgArea.getElementsByTagName('img')[0];
			slider.imgArea.removeChild(firstImg);
			setTimeout(slider.fadeNext, slider.betweenFades);
		}
	},
 





	
	setOpacity: function(elem, op) {
		op = Math.round(op);
		elem.style.opacity = op/100;
		elem.style.filter = "alpha(opacity=" + op + ")";
	}


}
