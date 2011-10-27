var $head = $('#mw-head');
$head.prepend($('#p-search'));
$toc = $('#toc');
$fontCurrent = $('<div id="current-font">Font-size:</div>');
$fontSlider = $('<div id="font-slider"></div>').slider({
	min: 0.7,
	max: 1.6,
	step: 0.05,
	value: localStorage.textSize || 0.91,
	slide: function (e, ui) {
		localStorage.textSize = ui.value;
		$('#bodyContent').css('font-size', ui.value + 'em');
	}
});
$widthCurrent = $('<div id="current-width">Column width:</div>');
$widthSlider = $('<div id="width-slider"></div>').slider({
	min: 35,
	max: 95,
	step: 1,
	value: localStorage.columnWidth || 60,
	slide: function (e, ui) {
		localStorage.columnWidth = ui.value;
		$('#bodyContent, #firstHeading-container').css('max-width', ui.value + '%');
	}
});

$toggleNotes = $('<div id="toggleNotesCont"><input type="checkbox" id="toggleNotes"><label for="toggleNotes">Show footnotes</label></div>');
$head.append($fontCurrent, $fontSlider, $widthCurrent, $widthSlider, $toggleNotes);

var $refs = $('.reference, .Template-Fact');
var footNotesHidden = false;
$toggleNotes.find('input').change(function () {
	$refs.toggle();
});
$('#p-cactions').attr('class', 'vectorTabs');
$('#ca-move a').wrap('<span>');
$('#firstHeading').wrap('<div id="firstHeading-container">');
$('#firstHeading').after($('#left-navigation'), $('#right-navigation'));

$('#bodyContent, #firstHeading-container').css('max-width', localStorage.columnWidth + '%');
$('#bodyContent').css('font-size', localStorage.textSize + 'em');
