<script>
var datefield=document.createElement("input")
    datefield.setAttribute("type", "date")

if (datefield.type!="date"){ 
	document.write("<link href=https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css rel=stylesheet type=text/css />\n")
        document.write("<script src=https://code.jquery.com/jquery-1.12.4.js><\/script>\n")
        document.write("<script src=https://code.jquery.com/ui/1.12.1/jquery-ui.js><\/script>\n") 
}
</script>

<script>
if (datefield.type!="date"){ 

    jQuery(function($){ //on document.ready
        $("#tb_date").datepicker(); 
    })
}
</script>
