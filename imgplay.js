var a=1;
function b1(){
    a=1;
    document.getElementById("p1").src="poem/poem1.png";
    document.getElementById("b1").className="choosen";
    document.getElementById("b2").className="normal";
    document.getElementById("b3").className="normal";
    document.getElementById("b4").className="normal";
}
function b2(){
    a=2;
    document.getElementById("p1").src="poem/poem2.png";
    document.getElementById("b2").className="choosen";
    document.getElementById("b1").className="normal";
    document.getElementById("b3").className="normal";
    document.getElementById("b4").className="normal";
}
function b3(){
    a=3;
    document.getElementById("p1").src="poem/poem3.png";
    document.getElementById("b3").className="choosen";
    document.getElementById("b2").className="normal";
    document.getElementById("b1").className="normal";
    document.getElementById("b4").className="normal";
}
function b4(){
    a=4;
    document.getElementById("p1").src="poem/poem4.png";
    document.getElementById("b4").className="choosen";
    document.getElementById("b2").className="normal";
    document.getElementById("b3").className="normal";
    document.getElementById("b1").className="normal";
}
function next(){
    a++;
    if(a>4)
    a=1;
    switch(a){
        case 1:b1();
            break;
        case 2:b2();
            break;
        case 3:b3();
            break;
        case 4:b4();   
            break;
    }
}
function before(){
    a--;
    if(a<1)
    a=4;
    switch(a){
        case 1:b1();
            break;
        case 2:b2();
            break;
        case 3:b3();
            break;
        case 4:b4();
            break;
    }
}