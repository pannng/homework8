$(document).ready(function(){
    $('#ch3form').submit(function(e){
        var grade = $('input[name="standing"]:checked')
        var year = $('input[name="gradDate"]:checked')

        console.log(grade);
        console.log(year);
        
    
    if(grade.length==0){
        if(year.length==0){
            alert('You must select a class standing and graduation date!');
        }
        else{
            alert('You must a class standing');
        }
        e.preventDefault()
    }
    else{
        if(year.length==0){
            alert('You must select a graduation date!');
            e.preventDefault()
        }
        else{
            console.log("pass");
        }
    }
    
        
    })
})