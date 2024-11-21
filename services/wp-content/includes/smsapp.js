function sendSMSfn(){
	var mobile = $('#mobile').val();
	var captchaAnswer = $('#captchaAnswer').val();
	if((mobile.length == 10) && (captchaAnswer!="")){
    clevertap.event.push("App_link_sent", {
			"Mobile No": mobile,
			"Date": new Date()
		});
	$.ajax({
			type: "POST",
			url: '/wp-content/includes/content-sms-app-ajax.php?mobile='+ mobile + '&xAction=generatesms',
			data: $("form#sendsmsdata").serialize()
		}).done(function (response){	
			$("#display-message").html('');			
			if(response=="success"){
				$('#mobile').val('');
				$('#captchaAnswer').val('');
				$("#display-message").html('<span class="alert alert-success" style="font-size: 12px;">Message sent successfully to your mobile</span>');					
			}else if(response=="error"){						
				$("#display-message").html('<span class="alert alert-warning" style="font-size: 12px;">something went wrong .Please try again later</span>');
			}else if(response == "invalidcaptcha"){				
				$('#display-message').html('<span class="alert alert-warning" style="font-size: 12px;">Please enter a valid Captcha.</span>');
			}
		});

	}else{
		alert('please fill in the details completely!');
	}
}

function sendSMSfn2(){
	var mobile2 = $('#mobile2').val();
	var captchaAnswer2 = $('#captchaAnswer2').val();
	if((mobile2.length == 10) && (captchaAnswer2!="")){
	$.ajax({
			type: "POST",
			url: '/wp-content/includes/content-sms-app-ajax2.php?mobile='+ mobile2 + '&xAction=generatesms',
			data: $("form#sendsmsdata2").serialize()
		}).done(function (response){	
			$("#display-message2").html('');			
			if(response=="success"){
				$('#mobile2').val('');
				$('#captchaAnswer2').val('');
				$("#display-message2").html('<span class="alert alert-success">Message sent successfully to your mobile</span>');						
			}else if(response=="error"){						
				$("#display-message2").html('<span class="alert alert-warning">something went wrong. Please try again later</span>');
			}else if(response == "invalidcaptcha"){				
				$('#display-message2').html('<span class="alert alert-warning">Please enter a valid Captcha.</span>');
			}
		});
	}else{
		alert('Please fill in the details completely!');
	}
}
function sendSMSfn6(){
	var mobile6 = $('#mobile6').val();
	var captchaAnswer6 = $('#captchaAnswer6').val();
	if((mobile6.length == 10) && (captchaAnswer6!="")){
	$.ajax({
			type: "POST",
			url: '/wp-content/includes/content-sms-app-ajax6.php?mobile='+ mobile6 + '&xAction=generatesms',
			data: $("form#sendsmsdata6").serialize()
		}).done(function (response){	
			$("#display-message6").html('');			
			if(response=="success"){
				$('#mobile6').val('');
				$('#captchaAnswer6').val('');
				$("#display-message6").html('<span class="alert alert-success">Message sent successfully to your mobile</span>');						
			}else if(response=="error"){						
				$("#display-message6").html('<span class="alert alert-warning">something went wrong. Please try again later</span>');
			}else if(response == "invalidcaptcha"){				
				$('#display-message6').html('<span class="alert alert-warning">Please enter a valid Captcha.</span>');
			}else if(response == "error108"){				
				$('#display-message6').html('<span class="alert alert-warning">Scheduling feature disabled.</span>');
			}
			
		});
	}else{
		alert('Please fill in the details completely!');
	}
}
function sendSMSfn3(){
	var mobile3 = $('#mobile3').val();
	
	if(mobile3.length == 10){
	$.ajax({
			type: "POST",
			url: '/wp-content/includes/content-sms-app-ajax3.php?mobile='+ mobile3 + '&xAction=generatesms',
			data: $("form#sendsmsdata3").serialize()
		}).done(function (response){	
			$("#display-message3").html('');	
            $("#display-message3").show();	
			if(response=="success"){
				$('#mobile3').val('');
                
				$('#sendsmsdata3').hide();
				$('.m-title').hide();
				$("#display-message3").html('<div><img src="/wp-content/uploads/2022/02/tick-g-01.png" alt="" srcset=""></div><span>SMS for download link has been successfully sent to your number</span>');
                
			}else if(response=="error"){						
				$("#display-message3").html('<span>something went wrong. Please try again later</span>');
			}
		});
	}else{
		alert('Please fill in the details completely Please!');
	}
}