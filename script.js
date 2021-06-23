console.log("Hi user");

const tiles_arr =["tile1","tile2","tile3","tile4","tile5","tile6","tile7","tile8","tile9","tile10"];

const colour_array=["red","black","blue","yellow","brown"];

var red_array=[];
	black_array=[];
	blue_array=[];
	yellow_array=[];
	purple_array=[];

var last_colour =[];

	click=0; 

	clicked_tiles=[];

	duplicate_tiles=false;

	game_start=false;

document.getElementById("start").addEventListener("click",start_game);

document.getElementById("reset").addEventListener("click",reset_game);


document.getElementById("tile1").addEventListener("click",function(){
	tiles("tile1");
});
document.getElementById("tile2").addEventListener("click",function(){
	tiles("tile2");
});
document.getElementById("tile3").addEventListener("click",function(){
	tiles("tile3");
});
document.getElementById("tile4").addEventListener("click",function(){
	tiles("tile4");
});
document.getElementById("tile5").addEventListener("click",function(){
	tiles("tile5");
});
document.getElementById("tile6").addEventListener("click",function(){
	tiles("tile6");
});
document.getElementById("tile7").addEventListener("click",function(){
	tiles("tile7");
});
document.getElementById("tile8").addEventListener("click",function(){
	tiles("tile8");
});
document.getElementById("tile9").addEventListener("click",function(){
	tiles("tile9");
});
document.getElementById("tile10").addEventListener("click",function(){
	tiles("tile10");
});
function reset_var_shallow()
{
	last_colour="",
	click=0,
	clicked_tiles=[],
	duplicate_tiles=false;
	game_start=true;

	for(var i=1;i<=10;i++)
	{
		var element="tile"+i;
		document.getElementById(element).style.backgroundColor="green";
	}
}

function start_game()
{
	
	reset_var_shallow();
}

function reset_game()
{
	console.log("reset");
	reset_var_shallow();
}

function reset_var_deep()
{
	var red=0,
		black=0,
		blue=0,
		yellow=0,
		purple=0;

	red_array=[],
	black_array=[],
	blue_array=[],
	yellow_array=[],
	brown_array=[];

	for(var i=0;i<10;i++)
	{
		var numb=Math.floor(Math.random()*5);

		if(numb==0)
		{
			if(red<2)
			{
				red++;
				red_array.push(tiles_arr[i]);

			}	
			else{
				i--;
			}
		}
		else if(numb==1)
		{
			if(black<2)
			{
				black++;
				black_array.push(tiles_arr[i]);

			}	
			else{
				i--;
			}
		}
		else if(numb==2)
		{
			if(blue<2)
			{
				blue++;
				blue_array.push(tiles_arr[i]);

			}	
			else{
				i--;
			}
		}
		else if(numb==3)
		{
			if(yellow<2)
			{
				yellow++;
				yellow_array.push(tiles_arr[i]);

			}	
			else{
				i--;
			}
		}
		else if(numb==4)
		{
			if(purple<2)
			{
				purple++;
				purple_array.push(tiles_arr[i]);

			}	
			else{
				i--;
			}
		}
	}
}
	


window.onload=function()
{
	reset_var_deep();
}

function tiles(tile) 
{
    if (game_start) {
        console.log("The game has started");
        for (var i = 0; i < clicked_tiles.length; i++) {
            if (tile == clicked_tiles[i]) {
                duplicate_tiles = true;
                console.log("Duplicate tile clicked");
            }
        }

     
        if (!duplicate_tiles) {
            clicked_tiles.push(tile);


            if (tile == red_array[0] || tile == red_array[1]){
                if (last_colour.length > 2){
                    if (last_colour == "red"){
                        document.getElementById(tile).style.backgroundColor = colour_array[0];
                        last_color = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = colour_array[0];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = colour_array[0];
                    last_color = "red";
                }
            }

          
            else if (tile == blue_array[0] || tile == blue_array[1]){
                
                if (last_colour.length > 2){
                  
                    if (last_color == "blue"){
                        document.getElementById(tile).style.backgroundColor = colour_array[1];
                        last_colour = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = colour_array[1];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = colour_array[1];
                    last_colour = "blue";
                }
            }

          
            else if (tile == yellow_array[0] || tile == yellow_array[1]){
              
                if (last_colour.length > 2){
                   
                    if (last_colour == "yellow"){
                        document.getElementById(tile).style.backgroundColor = colour_array[2];
                        last_colour = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = colour_array[2];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = colour_array[2];
                    last_colour = "yellow";
                }
            }

            else if (tile == purple_array[0] || tile == purple_array[1]){
             
                if (last_colour.length > 2){
                  
                    if (last_colour == "purple"){
                        document.getElementById(tile).style.backgroundColor = color_array[3];
                        last_colour = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = colour_array[3];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = colour_array[3];
                    last_colour = "purple";
                }
            }

          
            else if (tile == black_array[0] || tile == black_array[1]){
                //d
                if (last_colour.length > 2){
                   
                    if (last_color == "black"){
                        document.getElementById(tile).style.backgroundColor = colour_array[4];
                        last_colour = "";
                    }
                    else {
                        document.getElementById(tile).style.backgroundColor = colour_array[4];
                        game_start = false;
                        setTimeout(function(){
                            start_game();
                        }, 2000);
                    }
                }
                else {
                    document.getElementById(tile).style.backgroundColor = colour_array[4];
                    last_colour = "black";
                }
            }

            click++;
        }

       
        duplicate_click = false;
    }
 
    else {
        console.log("The game has not started yet");
    }
}

function display_score()
{
	alert(click);
}

document.getElementById("score").addEventListener("click",display_score);