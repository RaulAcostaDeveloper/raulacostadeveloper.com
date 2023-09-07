const canvas = document.getElementById('CanvasArcoiris');
let context = canvas.getContext("2d");
let starlist = [];
function init(){
	canvas.width = window.innerWidth-17; //Pixeles que mide el scroll 17
	canvas.height = window.innerHeight-250;
}
init();
window.onresize = init;
 
canvas.addEventListener('mousemove',function(e){
	starlist.push(new Star(e.offsetX,e.offsetY));
})
 
function random(min,max){
	return Math.floor( (max-min) * Math.random() + min);
}

//Elemento visual
function Star(x,y){
	this.x = x;
	this.y = y;
	this.vx = (Math.random()-0.5)*3;
	this.vy = (Math.random()-0.5)*3;
    //Genera el color random pero dentro de un rango
	this.color = 'rgb('+random(0,256)+','+random(0,256)+','+random(0,256)+')';
	this.a = 1;
	this.draw();
}

//Necesario revisar esos métodos nativos
Star.prototype={
	draw:function(){
		context.beginPath();
		context.fillStyle = this.color;
		context.globalCompositeOperation='lighter';
		context.globalAlpha= this.a;
		context.arc(this.x,this.y,30,0,Math.PI*2,false);
		context.fill();
		this.updata();
	},
	updata(){
		this.x+=this.vx;
		this.y+=this.vy;
		this.a*=0.98;
	}
}

function render(){
	context.clearRect(0,0, canvas.width, canvas.height)
	starlist.forEach((item,i)=>{
		item.draw();
		if(item.a<0.05){
			starlist.splice(i,1);
		}
	})
	requestAnimationFrame(render);
}
render();	