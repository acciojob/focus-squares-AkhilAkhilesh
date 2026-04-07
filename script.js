//your JS code here. If required.
const ele = document.getElementsByClassName('square');
		Array.from(ele).forEach(element => {
			element.addEventListener('mouseover', (e) => {
				for(let i=0; i<ele.length; i++){
					if(!(ele[i] === e.target)){
						ele[i].style.backgroundColor = '#6F4E37';
					}
				}
				return;
			});

			element.addEventListener('mouseout', () => {
				for(let i=0; i<ele.length; i++){
					ele[i].style.backgroundColor = '';
				}
			});
		});