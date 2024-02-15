var z=0;
var memory=[];
var keys=['b1','b2','b3','b4']
var s=0;
var mg=document.getElementById('mssg');
var score=document.getElementById('score');
var bttns=document.querySelectorAll('.btn');
bttns.forEach((item)=> item.addEventListener('click' ,()=> clicked(item.id) ));
document.addEventListener('keydown',(e)=>{ 
  if(e.key=='Enter') 
  { 
      score.innerHTML='Score : 0';
      s=0;
      z=0;
      memory=[];
      listen();
  } 
});
function  clicked(btn_Id)
{
    if(z<memory.length)
    {
      music(btn_Id);
      if(memory[z]==btn_Id)
        z+=1;
      else 
      {
        mg.innerHTML="Game  Over ! press enter";
        z=0;
        memory=[];
        s=0;
      }
    }
    if(z==memory.length)
    {
      if(memory.length!=0)
       {
        s+=1;
        score.innerHTML="Score : "+s;
        z=0;
        listen();
       }
    }
}
function music(x)
{
   var audio;
   var b;
   if( x=="b1")
     { 
       audio=new Audio('music/Sa.mp3');
       b=document.getElementById('b1');
      }
    else if(x=="b2")
    { 
      audio=new Audio('music/Pa.mp3'); 
      b=document.getElementById('b2');
    }
    else if(x=="b3")
    {
      audio=new Audio('music/Ni.mp3');
      b=document.getElementById('b3');
    }
    else
    { 
      audio=new Audio('music/Da.mp3');
      b=document.getElementById('b4');
    }
    b.style.opacity='0.5';
    audio.play();
    audio.addEventListener('ended',function release()
    {
      b.style.opacity='1';
    });
}
function listen()
{
  setTimeout(()=> mg.innerHTML="Listen Notes..." ,1000);
  var x=keys[parseInt(Math.random()*4)];
  memory.push(x);
  playNotesInMemory();
}
async function playNotesInMemory()
{
   for(let i=0;i<memory.length;i++)
   {
    await new Promise(resolve=> setTimeout(resolve,1500));
    music(memory[i]);
   }
   setTimeout(()=> mg.innerHTML='Play' , 1000)
}

