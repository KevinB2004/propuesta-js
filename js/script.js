
const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function(){
	alert('SABIA QUE DIRIAS QUE SI');
	alert('ME HACES LA PERSONA MAS FELIZ');

});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function(){
	const randomX = parseInt(Math.random()*100);
	const randomY = parseInt(Math.random()*100);
	noBtn.style.setProperty('top',randomX+'%');
	console.log(randomX)
	noBtn.style.setProperty('left',randomY+'%');
	console.log(randomY)
});

