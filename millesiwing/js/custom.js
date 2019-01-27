/*=================Calculation==============*/    
$(document).ready(function () {
  window.onload=function(){
    var  num_people = $("#num_people").val();
    var  wine_testing = $("#wine_testing").val();
    var wine_total = num_people * wine_testing;
    document.getElementById("wine_testing_value").innerHTML=wine_total;
    document.getElementById("total_values").innerHTML=wine_total;
 
    $('select[name=wine_testing]').change(compute);
    $('select[name=food_opt]').change(compute);
    $('select[name=language_opt]').change(compute);
    $('input[name=num_people]').change(compute);


function compute() {
    
    var people = document.getElementById("num_people"),value;
    var wine_testing = document.getElementById("wine_testing"),value;
    var food_opt = document.getElementById("food_opt"),value;
    var language_opt = document.getElementById("language_opt"),value;
         
   
    var people=people.value;
    var wine_testing=wine_testing.value;
    var food_opt=food_opt.value;
    var language_opt=language_opt.value;
    
    
    var wine_testing_total  = Number(people) * Number(wine_testing) ;
    var food_opt_total  = Number(people) * Number(food_opt) ;
    var lan_opt_total  = Number(people) * Number(language_opt) ;
    var all_total  =  Number(wine_testing_total) +  Number(food_opt_total) + Number(lan_opt_total)   ;

 
  document.getElementById("wine_testing_value").innerHTML=wine_testing_total;
  document.getElementById("food_value").innerHTML=food_opt_total;
  document.getElementById("language_value").innerHTML=lan_opt_total;
  document.getElementById("total_values").innerHTML=all_total;
 
       
    }
     }
     
     /*=========End calculate=====*/
     
    
     $('[data-toggle="popover"]').popover({
        placement : 'top',
        trigger : 'hover'
    });
});

        /*=========Validation=====*/
     $(document).ready(function() {
        
    $('#reg_form').bootstrapValidator({
     
        fields: {
            first_name: {
                validators: {
                        
                        notEmpty: {
                        message: 'Please Enter your First name'
                    }
                }
            },
            
             confirm: {
                validators: {
                    
                    notEmpty: {
                        message: 'Please tick the checkbox'
                    }
                }
            },
             last_name: {
                validators: {
                    
                    notEmpty: {
                        message: 'Please Enter your Last name'
                    }
                }
            },
             date: {
                validators: {
                    
                    notEmpty: {
                        message: 'Please Enter a valid Date'
                    }
                }
            },
           
            phone: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter your phone number'
                    },
                    phone: {
                        
                        message: 'Please Enter your phone number'
                    }
                }
            },
              
	 
	 email: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter a valid Email address'
                    },
                    emailAddress: {
                        message: 'Please Enter a valid Email address'
                    }
                }
            },
					
	password: {
            validators: {
                identical: {
                    field: 'confirmPassword',
                    message: 'Confirm your password below - type same password please'
                }
            }
        },
        confirmPassword: {
            validators: {
                identical: {
                    field: 'password',
                    message: 'The password and its confirm are not the same'
                }
            }
         },
			
            
            }
        })
		
 	
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#reg_form').data('bootstrapValidator').resetForm();

            // Prevent form submission
            e.preventDefault();

            // Get the form instance
            var $form = $(e.target);

            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');

            // Use Ajax to submit form data
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
 

    //  radio form  
$('input[type="radio"]').click(function(){

            if($(this).attr("value")=="contact"){

                $(".box").not(".red").hide();

                $(".red").show();

            }

            if($(this).attr("value")=="book"){

                $(".box").not(".show-box").hide();

                $(".show-box").show();

            }

           
        });

  
    
                                                                          
    });    
    /*=================UP DOWN QUANTITY==============*/
 jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/top.png"></div><div class="quantity-button quantity-down"><img src="img/bottom.png"></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function() {
      var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    }); 
    
 
 window.onload=function(){
      $('.selectpicker').selectpicker();
      $('.rm-mustard').click(function() {
        $('.remove-example').find('[value=Mustard]').remove();
        $('.remove-example').selectpicker('refresh');
      });
      $('.rm-ketchup').click(function() {
        $('.remove-example').find('[value=Ketchup]').remove();
        $('.remove-example').selectpicker('refresh');
      });
      $('.rm-relish').click(function() {
        $('.remove-example').find('[value=Relish]').remove();
        $('.remove-example').selectpicker('refresh');
      });
      $('.ex-disable').click(function() {
          $('.disable-example').prop('disabled',true);
          $('.disable-example').selectpicker('refresh');
      });
      $('.ex-enable').click(function() {
          $('.disable-example').prop('disabled',false);
          $('.disable-example').selectpicker('refresh');
      });

      // scrollYou
      //$('.scrollMe .dropdown-menu').scrollyou();

      //prettyPrint();
      }; 
 
/*=========Dropdown=====*/
    $(function(){
    $(".dropdown").hover(            
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
                $(this).toggleClass('open');
                            
            },
            function() {
                $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
                $(this).toggleClass('open');
                         
            });
    });
    
    
    $('.video').parent().click(function () {
    if($(this).children(".video").get(0).paused){
        $(this).children(".video").get(0).play();
        $(this).children(".playpause").fadeOut();
    }else{
       $(this).children(".video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});
  
  $('#date_pick').datetimepicker({
minDate: moment(),
format: 'DD-MM-YYYY',

});

$(function(){

    $('.spinner .btn:first-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('max') == undefined || parseInt(input.val()) < parseInt(input.attr('max'))) {    
        input.val(parseInt(input.val(), 10) + 1);
      } else {
        btn.next("disabled", true);
      }
    });
    $('.spinner .btn:last-of-type').on('click', function() {
      var btn = $(this);
      var input = btn.closest('.spinner').find('input');
      if (input.attr('min') == undefined || parseInt(input.val()) > parseInt(input.attr('min'))) {    
        input.val(parseInt(input.val(), 10) - 1);
      } else {
        btn.prev("disabled", true);
      }
    });

})    
