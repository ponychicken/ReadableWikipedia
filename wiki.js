var $head = $('#mw-head');
$head.prepend($('#p-search'));
$toc = $('#toc');
$fontCurrent = $('<div id="current-font">Font-size:</div>');
$fontSlider = $('<input type="range" min=0.8 max=1.8 step=0.05 id="font-slider">');
$fontSlider.val(localStorage.textSize || 0.94);
$fontSlider.change(function () {
	localStorage.textSize = this.value;
	$('#bodyContent').css('font-size', this.value + 'em');
	$('#firstHeading-container').css('max-width', $('#bodyContent').width()+'px');
});

$toggleNotes = $('<div id="toggleNotesCont"><input type="checkbox" id="toggleNotes"><label for="toggleNotes">Show footnotes</label></div>');
$head.append($fontCurrent, $fontSlider, $toggleNotes);

var $refs = $('.reference, .Template-Fact');
var footNotesHidden = false;
$toggleNotes.find('input').change(function () {
	$refs.toggle();
});
$('#p-cactions').attr('class', 'vectorTabs');
$('#ca-move a').wrap('<span>');
$('#firstHeading').wrap('<div id="firstHeading-container">');
$('#firstHeading').after($('#left-navigation'), $('#right-navigation'));

$('#p-cactions menu').append($('#ca-talk'))

$('#bodyContent').css('font-size', localStorage.textSize + 'em');
$('#firstHeading-container').css('max-width', $('#bodyContent').width()+'px');
$('a.new').removeAttr("href");
//$("#p-logo a").css({"background-image": "url(//upload.wikimedia.org/wikipedia/commons/b/b3/Wikipedia-logo-v2-en.svg)"})
