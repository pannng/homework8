$(document).ready(function(){
    $('#sameAddress').change(function(){
        let home = $("#home");
	    let billing = $("#bill");
        
        if (this.checked){
            home.val(billing.val());
		    home.attr("disabled","true");
        }else{
            home.val("");
            home.removeAttr("disabled","false");
        }
    })
})