var slideToggle = 0;

$('#activity').on('click',function(){
	if (slideToggle == 1) {
		
		$('#activity-feed').slideToggle("750", function(){

		});

	} else {
			$('#feed-requests').empty();
			$('#feed-responses').empty();
			$.get('http://localhost:3000/users/responses/me', function(data) {
					$.each(data, function(key, data){
						$.each(data.responses, function(key, data){
						$('#feed-responses').append('<li><div class="info"><img src="https://profile-b.xx.fbcdn.net/hprofile-ash4/c12.12.156.156/s100x100/1005311_10201185469335496_586304505_a.jpg" class="rounded"><h2>' + data.name + '</h2><p>“' + data.body + '”</p><a href="mailto:' + data.author + '">' + data.author + '</a><br /><span><i class="icon-trophy"></i> ' + Math.floor((Math.random()*5)+1) +' &nbsp; <i class="icon-frown"></i> ' + Math.floor((Math.random()*5)+1) +'</span></div></li>');
						});
					});
			});	

			$.get('http://localhost:3000/users/requests/me', function(data) {
				$.each(data, function(key, data){
				$('#feed-requests').append('<li><div class="info"><div class="rqstbx cf"><span class="yes-btn">✔</span><span class="no-btn">✖</span></div><img src="https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash3/c9.9.113.113/s100x100/581705_10151527993128698_567010700_s.jpg" class="rounded"><h2>' + data.request.name + '</h2><p>“' + data.request.description + '”</p><a href="mailto:' + data.request.author + '">' + data.request.author + '</a><br /><span><i class="icon-trophy"></i> ' + Math.floor((Math.random()*5)+1) +' &nbsp; <i class="icon-frown"></i> ' + Math.floor((Math.random()*5)+1) +'</span></div></li>');
				});
			});	


			$('#activity-feed').slideToggle("750");
	}
});


$('#requests').on('click',function(){
	$('#feed-responses').fadeOut(function(){
		$('.intro').text('people think you would be good at these:').fadeIn();
		$('#feed-requests').fadeIn();
	});

	$('#requests').addClass('active');
	$('#responses').removeClass('active');
});

$('#responses').on('click',function(){
		$('.intro').text('people who are interested:').fadeIn();
	
	$('#feed-requests').fadeOut(function(){
		$('#feed-responses').fadeIn();
	});

	$('#requests').removeClass('active');
	$('#responses').addClass('active');
});