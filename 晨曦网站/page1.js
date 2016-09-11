var jr=document.getElementById("jr");
var enter_div=document.getElementById("enter_div");
enter_div.onclick=function()
{   
	jr.style.display="none";
	
}


var content1=document.querySelector(".content1_head");
var xx_div=content1.querySelectorAll(".c1");

var botton_div=document.querySelectorAll(".c2");
for(var i=0;i<xx_div.length;i++)
{
	xx_div[i].index=i;
	xx_div[i].onmouseover=function()
	{
		for(var i=0;i<xx_div.length;i++)
		{
			botton_div[i].style.display="none";
		}
		this.style.backgroundColor='rgb(95,95,95)';
		botton_div[this.index].style.display="block";
	}
}
for(var i=0;i<xx_div.length;i++)
{
     xx_div[i].onmouseout=function()
	{
		this.style.backgroundColor='rgb(210,232,210)';
	}
}

