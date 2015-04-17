$(document).ready(function(){
	$("#speed_ctrl").change(function(){
		$("#speed_val").html($(this).val());

		direction = $("#dir .btn input[type='radio']:checked").val();
		speed=$("#speed_ctrl").val();

		$.post( "parse_post.wsgi", { dir: direction, m_speed: speed }, function( data ) {
		  $( ".result" ).html( data );
		});
	});

	$("#dir .btn").click(function(){
		$("#speed_val").html($("#speed_ctrl").val());

		direction = $(this).find("input").val();
		speed=$("#speed_ctrl").val();

		$.post( "parse_post.wsgi", { dir: direction, m_speed: speed }, function( data ) {
		  $( ".result" ).html( data );
		});
	});
});
