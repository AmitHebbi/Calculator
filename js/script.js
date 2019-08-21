function getHistory()
{
    return document.getElementById("history-value").innerText;
}

function printHistory(num)
{
    document.getElementById("history-value").innerText=num;
}


function getOutput()
{
    return document.getElementById("output-value").innerText;
}

function printOutput(num)
{
    document.getElementById("output-value").innerText=num;
}





var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
{
    operator[i].addEventListener('click',function(){



        if(this.id=="clear")
        {
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace")
        {
            var output=getOutput().toString();
            var history=getHistory().toString();
            if(output)
            {
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
            if(history)
            {
                history=history.substr(0,history.length-1);
                printHistory(history);
            }
        }
        else
        {
            var output=getOutput();
            var history=getHistory();

            if(output==""&&history!="")
            {
				if(isNaN(history[history.length-1])){
					history= history.substr(0,history.length-1);
				}
			}
            if(output!="" || history!=="")
            {

                history+=output;
                printHistory(history);

                if(this.id=="=")
                {
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else
                {

                    history+=this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }



    })
}


var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
{
    number[i].addEventListener('click',function(){

        var output=getOutput();
        if(output!=NaN)
        {
            output+=this.id;
            printOutput(output);
        }

    })
}
