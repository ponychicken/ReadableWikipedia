var $head = $('#mw-head');
$head.prepend($('#p-search'));
$toc = $('#toc');
$fontCurrent = $('<div id="current-font">Font-size:</div>');
$fontSlider = $('<div id="font-slider"></div>').slider({
	min: 0.8,
	max: 1.3,
	step: 0.05,
	value: localStorage.textSize || 0.91,
	slide: function (e, ui) {
		localStorage.textSize = ui.value;
		$('#bodyContent').css('font-size', ui.value + 'em');
		$('#firstHeading-container').css('max-width', $('#bodyContent').width()+'px');
	}
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

$('#bodyContent').css('font-size', localStorage.textSize + 'em');
$('#firstHeading-container').css('max-width', $('#bodyContent').width()+'px');
