//function to clear the display
function clr(val){
    console.log("clear it out!");
    document.getElementById("result").value=val;
}

//function to display the value
function display(val){
    document.getElementById('result').value+=val
    console.log("display");
}

function myFunction(event){
    if ( event.key=='0' || event.key=='1' ||
    event.key=='2' || event.key=='3' ||
    event.key=='4' || event.key=='5' ||
    event.key=='6' || event.key=='7' ||
    event.key=='8' || event.key=='9' ||
    event.key=='+' || event.key=='-' ||
    event.key=='*' || event.key=='/'    
    )
    console.log("key pressed");
    document.getElementById("result").value+=event.key;
}

var cal=document.getElementById("calculator");
cal.onkeyup=function(event){
    if (event.keyCode===13){
        console.log("Enter");
        let x=document.getElementById('result').value
        console.log(x);
        solve();
    }
}

//function to evalute the digit and return result
function solve(){
    let x=document.getElementById("result").value
    let y=math.evaluate(x)
    document.getElementById("result").value=y
    console.log("solving!");
}

