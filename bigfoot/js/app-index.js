$(document).ready(function() {


	$( "#content" ).delegate( "*", "focus blur", function() {
	  var elem = $( this );
	  setTimeout(function() {
	    elem.toggleClass( "focused", elem.is( ":focus" ) );
	  }, 0 );
	});



	$("#main-side-filterbar").hide();

	// TABLE WITH INSPECTOR
	$("#task-inspect" ).hide();

	$("tr").click(function() {
	  $("#task-inspect").show();
	  $(".main").addClass("main-sidebar");
	});

	$("#btn-close").click(function() {
	  $("#task-inspect" ).hide();
	  $(".main").removeClass("main-sidebar");
	});

	$(".form-element").keypress(function (e) {
	 var key = e.which;
	 var elem = $(this);
	 if(key == 13)  // the enter key code
	  {
	    //$("#table-1").append( "<tr><td></td><td>high-strength steel</td><td>Term</td><td>12,404</td><td><span class='hi'>&#9679;</span><span class='hi'>&#9679;</span><span class='med'>&#9679;</span><span class='low'>&#9679;</span><span class='low'>&#9679;</span></td></tr>" );
	    elem.prev().append( "<tr><td></td><td>10555328</td><td>Paul Van Slembrouck</td><td>New task name task name task that I just added</td><td>Mid</td></tr>" );
	    elem.val('');
	    return false;  
	  }
	});   

	// FILTER BAR
	$("#btn-filterbar-close").click(function() {
	  $("#main-side-filterbar").hide();
	  $("#btn-main-filterbar").show();
	  $(".main").removeClass("main-filterbar");
	});

	$("#btn-main-filterbar").click(function() {
	  $("#btn-main-filterbar").hide();
	  $("#main-side-filterbar").show();
	  $(".main").addClass("main-filterbar");
	});
	
	// SIDEBAR NAVIGATION
	$("#btn-main-sidebar").click(function() {
	  	$(".main").toggleClass("main-dashboard-sidebar");
	  	$("#main-side-nav").toggle();
	  	console.log("click to open");
	});

	// TABLE WITH EXPANDABLE ROW
	$(".collapsed-row").click(function() {
		console.log("click");
	 	$(this).toggleClass("collapsed");
	});




	$(window).scroll(function(){
	  var y = $(window).scrollTop();
	  console.log(y);
	    if (y > 40){
	      $("#book-meeting-top-b").slideUp();
	      $("#book-bottom").addClass("form-short");
	      $("#meeting-bottom").addClass("form-short");
	    } else {
		    if (y < 40){
		      $("#book-meeting-top-b").slideDown();
		      $("#book-bottom").removeClass("form-short");
		      $("#meeting-bottom").removeClass("form-short");
		    }
		}
	});


});