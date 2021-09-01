

var output = document.querySelector("#output");
var btn = document.querySelectorAll(".btn");

for(var item = 0 ; item < btn.length ; item++){

    btn[item].addEventListener('click', (e)=>{
        btntext = e.target.innerText;

        output.value+=btntext;
    });
}

function sin(){
    output.value = Math.sin(output.value);
}
function cos(){
    output.value = Math.cos(output.value);
}
function tan(){
    output.value = Math.tan(output.value);
}
function pow(){
    output.value = Math.pow(output.value,2);
}
function sqrt(){
    output.value = Math.sqrt()(output.value,2);
}
function log(){
    output.value = Math.log()(output.value);
}
function pi(){
    output.value = 3.14159265359;
}
function e(){
    output.value = 2.71828182846;
}

function fact(){
    var i, num, f;

    f=1;
    num = output.value;

    for(i = 1 ; i<=num ; i++){
        f*=i;
    }
    i=i-1;

    output.value = f;
}

function backspc(){

    output.value = output.value.substr(0, output.value.length - 1);
}