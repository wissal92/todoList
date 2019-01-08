$('ul').on('click', 'li', function(){
	$(this).toggleClass('momy');
});
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove()
	});
	event.stopPropagation();
})
$('input').keypress('click', function(event){
    if(event.which === 13){
      let newText = $(this).val();
      $(this).val('')
      $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + newText + '</li>')
    }
})
$('.fa-plus-square').click(function(){
	$('input').fadeToggle();
});
