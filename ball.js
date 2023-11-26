// var ball=document.getElementById("ball");
// let x=0;
// let y=0;
// let speed=10;
// let windowwidth=window.innerWidth;
// let windowheight=window.innerHeight;
// document.addEventListner("keydown",(e)=>{
// 	if(e.keyCode===65||e.keyCode===97){
// 		//move left
// 		if(x>0){
// 			x-=speed;
// 			ball.style.left=x+'px';
// }
// 		}
// 		else if(e.keyCode===87||e.keyCode===119){
// 			//move up
// 			if(y>0){
// 				y-=speed;
// 				ball.style.top=y+'px';
// 			}
// 		}
// 		else if(e.KeyCode===68||e.keyCode===100){
// 		   //move right
// 			if(x+100<windowwidth){
// 				x+=speed;
// 				ball.style.left=x+'px';
// 			}
// 		}
// 		else if(e.keyCode===83||e.keyCode===115){
// 			//move down
// 			if(y+100<windowHeight){
// 				y+=speed;
// 				ball.style.top=y+'px';
// 			}
// 		}
// 		});
	


	
var ball=document.getElementById('ball');
ball.style.top=Math.floor(Math.random()*50).toString()+"px";
ball.style.left=Math.floor(Math.random()*50).toString()+"px";
window.addEventListener('keydown', function(event)
{
    let code=event.keyCode;
    if(code==87)
    {
        if(ball.style.top=="0px")
        {
            return;
        }
        let current_top_distance=ball.style.top;
        let length_of_current_top_distance=ball.style.top.length;
        let numerical_distance=parseInt(current_top_distance.substring(0, length_of_current_top_distance-2));
        numerical_distance--;
        ball.style.top=numerical_distance.toString()+"px";
    }
    else if(code==65)
    {
        if(ball.style.left=="0px")
        {
            return;
        }
        let current_left_distance=ball.style.left;
        let length_of_current_left_distance=current_left_distance.length;
        let numerical_distance=parseInt(current_left_distance.substring(0, length_of_current_left_distance-2));
        numerical_distance--;
        ball.style.left=numerical_distance.toString()+"px";
    }
    else if(code==83)
    {
        if(ball.style.top==(window.innerHeight-200).toString()+"px")
        {
            return;
        }
        let current_top_distance=ball.style.top;
        let length_of_current_top_distance=ball.style.top.length;
        let numerical_distance=parseInt(current_top_distance.substring(0, length_of_current_top_distance-2));
        numerical_distance++;
        ball.style.top=numerical_distance.toString()+"px";
    }
    else if(code==68)
    {
        if(ball.style.left==(window.innerWidth-201).toString()+"px")
        {
            return;
        }
        let current_left_distance=ball.style.left;
        let length_of_current_left_distance=current_left_distance.length;
        let numerical_distance=parseInt(current_left_distance.substring(0, length_of_current_left_distance-2));
        numerical_distance++;
        ball.style.left=numerical_distance.toString()+"px";
    }
});