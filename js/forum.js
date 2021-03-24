// form validation for emailing developer
$(function(){
	$("#email-form").validate({
		rules:{//rules for each feild
			name:{
				required:true,
				minlength: 2
			},
			email: {
					required: true,
					email: true
			},
			message:{
				required:true,
				minlength: 10
			}

		}

	});
});






//aviods form submit since no backend implementation is done
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});


//validates  if the button is clicked
$("#button").click(function () {
	//$("#forum-form").validate();
     if ($("#forum-form").valid()){
     	SubmitForum();
     }
     else{
         //Validate Form
         $("#forum-form").valid()
    }

});

function SubmitForum() {
	//posts the message at the bottom of the page
	var text=document.getElementById("forum-message").value;//obtain forum info 
	var name=document.getElementById("forum-name").value;
	forum= document.getElementById("forumdiv");//get the forum div
	var div = document.createElement("div");// create elements to add text
	var textp = document.createElement("p");
	var textn = document.createElement("p");
	var br = document.createElement("br");
	node=document.createTextNode("\t"+text);//adding text
	textp.appendChild(node);
	node=document.createTextNode(name);
	textn.appendChild(node);
	div.classList.add("forumd");//add css style to format post
	div.style.backgroundColor="#28111f";
	//append children to parent
	div.appendChild(textn);
	div.appendChild(br);
	div.appendChild(textp);
	div.style.margin= "5%";
	div.style.padding="10px 20px 20px 10px";
	//append post to the bottem of body!
	document.body.appendChild(div);

	




}