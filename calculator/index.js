function display(number) {
    document.getElementById("demo").value +=number;
    }


    function Result(){
        try{
            document.getElementById("demo").value=eval( document.getElementById("demo").value) ;
        }
        catch(err){
            alert("You have entered invalid input, Please enter valid input for calculation")
        }
    }

    function clr(){
        document.getElementById("demo").value=" ";
    }
    function DE(){
        document.getElementById("demo").value = document.getElementById("demo").value.slice(0,-1);
    }