var $head = $('#mw-head');
$head.prepend($('#p-search'));
$toc = $('#toc');
$fontCurrent = $('<div id="current-font">Font-size:</div>');
$fontSlider = $('<input type="range" min=0.8 max=1.8 step=0.05 id="font-slider">');
$fontSlider.val(localStorage.textSize || 0.94);

$fontSlider.change(function () {
	localStorage.textSize = this.value;
	setTextsize();
});

var $style = $("<style>").appendTo("head");

function setTextsize() {
	$style.text('.mw-body-content {font-size: ' + localStorage.textSize + 'em}');
	$('#firstHeading-container').css('max-width', 'calc(' + localStorage.textSize + ' * 76ex)');
}

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

$('#p-cactions .menu ul').append($('#ca-talk'));
$('#pt-userpage').append($('#pt-notifications'));


$('a.new').removeAttr("href");

setTextsize();
