canvas=new fabric.Canvas("myCanvas");
block_image_width=30;
block_image_height=30;

player_x=150;
player_y=200;

var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){

     player_object=Img;

     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({
        left:player_x,
        top:player_y    });

    canvas.add(player_object);

    });
}

function new_image(get_image)
{
   fabric.Image.fromURL(get_image,function(Img)
   {
       block_image_object=Img;

       block_image_object.scaleToWidth(block_image_width);
       block_image_object.scaleToHeight(block_image_height);
       block_image_object.set(

        {
            left:player_x,
            top:player_y
        }

       );
    canvas.add(block_image_object);
   }
   );
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);

    if(e.shiftKey==true&&keypressed=="80")
    {
        console.log("Shift+P is pressed");
        block_image_height=block_image_height+10;
        block_image_width=block_image_width+10;

        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(e.shiftKey==true&&keypressed=="77")
    {
        console.log("Shift+m is pressed");
        block_image_height=block_image_height-10;
        block_image_width=block_image_width-10;

        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(keypressed=="37")
    {
        console.log("Left arrow is pressed");
        left();

    }

    if(keypressed=="38")
    {
        console.log("Up arrow is pressed")
        up();
    }
    if(keypressed=="40")
    {
        console.log("down arrow is pressed");
        down();
    }
    if(keypressed=="39")
    {
       console.log("Right arrow is pressed");
       right();
    }

    if(keypressed=="67")
    {
        new_image("cloud.jpg");
        console.log("C is pressed");

    }

    if(keypressed=="68")
    {
        new_image("dark_green.png");
        console.log("D is pressed");
    }

    if(keypressed=="71")
     {
         new_image("ground.png");
         console.log("G is pressed");
     }

    if(keypressed=="76")
    {
        new_image("light_green.png");
        console.log("L is pressed");
    } 

    if(keypressed=="82")
    {
        new_image("roof.jpg");
        console.log("R is pressed");
    }

    if(keypressed=="84")
    {
        new_image("trunk.jpg");
        console.log("T is pressed");
    }

   if(keypressed=="85")
   {
       new_image("unique.png");
       console.log("U is pressed");
   }

   if(keypressed=="87")
   {
       new_image("wall.jpg");
       console.log("W is pressed");
   }
   if(keypressed=="89")
   {
       new_image("yellow_wall.png");
       console.log("Y is pressed");
   }
}

function up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height;
        console.log("Current height of the block :"+block_image_height);
        console.log("X="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

}

function down()
{
    if(player_y<500)
    {
       player_y=player_y+block_image_height;
       console.log("Current Height od block is:"+block_image_height);
       console.log("X="+player_x+"Y="+player_y);
       canvas.remove(player_object);
       player_update();
    }
}

function left()
{
     if(player_x>=0)
     {
        player_x=player_x-block_image_width;
        console.log("Current Width of block is:"+block_image_width);
        console.log("X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
     }    
}

function right()
{
    if(player_x<=900)
    {
        player_x=player_x+block_image_width;
        console.log("Current Width of block is:"+block_image_width);
        console.log("X="+player_x+"Y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


