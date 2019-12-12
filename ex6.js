var a=45;
var b=26;
var c=75;

var max;
var middle;
var min;

if(a<b && a<c){
min=a;
if(b<c)
{
middle=b;
max=c;

}else {middle=c;
      max=b;}
}


if(b<a && b<c){
min=b;
if(a<c)
{
middle=a;
max=c;

}else {middle=c;
       max=c;}
      
}

if(c<b && c<a){
min=c;
if(b<a)
{
middle=b;
max=a;

}else{ middle=a;
      max=b;}
}

console.log(min,middle,max);