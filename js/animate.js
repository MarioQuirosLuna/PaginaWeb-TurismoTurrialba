var canvas=null, ctx=null, x=20, y=45, i=55, j=45;
var imgS; 
var imgT; 
var direccion1 = 1, direccion2 = -1;   

window.requestAnimationFrame=(
    function(){
        return window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        function(callback){
            window.setTimeout(callback,17);
        }
    }()
);

function paint(ctx){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    ctx.drawImage(imgS,x,y,32,32);
    ctx.drawImage(imgT,i,j,32,32);

} // paint

function update(){

    if(direccion1 === 1){
        y+=1;
    }else{
        y-=1;
    }
    if(y>canvas.height - 50 || y === 30){
        direccion1 *= -1;
    }


    if(direccion2 === 1){
        j+=1;
    }else{
        j-=1;
    }
    if(j>canvas.height - 50 || j === 30){
        direccion2 *= -1;
    }
}

function run(){
    window.requestAnimationFrame(run);
    update();
    paint(ctx);
}

function init(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');

    canvas.setAttribute('width',150);

    imgS=new Image(); 
    imgT=new Image(); 

    imgS.src="img/sAnimation.png";
    imgT.src="img/tAnimation.png";
    canvas.height = 110;

    run();
}

window.addEventListener('load', init, false);

