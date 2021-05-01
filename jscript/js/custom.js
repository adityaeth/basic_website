var a=5;
var b=6;
var c='5';

if( a < b && c==a )
{
    console.log("True");
    if(a===c){
        console.log("False")
    }else{
        console.log("True")
        while(a<10){
            console.log(a + " hello");
            a++;
            if(a==7){
                break;
            }
        }
    }
}else{
    console.log("False");
}

function adition(a,b,c)
{
    console.log(a+b+c);
}

function loopFrom(x,y,z){
    for(i=x;i<y;i++){
        console.log(i+ "Hello World!");
        if(i==z){
            console.log("Hi there!");
            continue;
        }
    }
}
var names=["Adii","DDT","King"]; 