//LoginForm next  input  field  keep focus  on  enter 
var currentBoxNumber = 0;
$("#LoginForm,#add_new_form,#new_voucher,.tab-content").keypress(function (event) {
    if (event.keyCode == 13) {
        textboxes = $("input,select,textarea");
        currentBoxNumber = textboxes.index(event.target);
        if (textboxes[currentBoxNumber + 1] != null) {
            nextBox = textboxes[currentBoxNumber + 1];
            nextBox.focus();
            nextBox.select();
            event.preventDefault();
            return false;
        }
    }
});

//number varification

  $('input[name=phone],input[name=buyercode],input[name=fax],input[name=debit],input[name=credit]').keyup(function(){
        $(this).val($(this).val().replace(/[^\d]/,''));
  });

 $(function () {
  $('[data-toggle="popover"]').popover()
});

$('.popover-dismiss').popover({
  trigger: 'focus'
});


 
$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});

	$(function (){
		  $('#add_lot_no,#sr_no').select2({
			theme: "bootstrap"
		  });
		});
        
    
$('#primaryModal').on('shown.bs.modal', function () {
    $('.first-input').focus();
});
 
 
  $(document).ready(function() {

$("#new_voucher a.nav-link").click(function(){
    var contentPanelId = jQuery(this).attr("href");
    //alert(contentPanelId);
   $(".tab-pane").removeClass("active");
   $(contentPanelId).addClass('active');
});
$("#primaryModal .dual-tab a.nav-link").click(function(){
    var contentPanelId = jQuery(this).attr("href");
    //alert(contentPanelId);
   $(".tab-pane").removeClass("active");
   $(contentPanelId).addClass('active');
});


});


 //Make the DIV element draggagle:
dragElement(document.getElementById("primaryModal"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "drag")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "drag").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



 $('.date-calender').datetimepicker({
    language:  'en',
    weekStart: 1,
    //todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,  
    openSelectorTopOfInput: true,   
    forceParse: 0
    });
