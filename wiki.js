var $style = $("<style>").appendTo("head");
var styleSettings = {
	'.mw-body-content': {
		'font-size': '1em'
	},
	'.reference, .Template-Fact': {
		display: 'inline'
	}
}


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


function setStyle() {
	var styleText = '.mw-body-content {font-size: ' + localStorage.textSize + 'em!important;} ';
	
	var display =  JSON.parse(localStorage.footnotes) ? 'inline' : 'none';
	    styleText += '.reference, .Template-Fact {display:' + display + ';}';
	$style.text(styleText);
	$('#firstHeading-container').css('max-width', 'calc(' + localStorage.textSize + ' * 76ex)');
}

$toggleNotes = $('<div id="toggleNotesCont"><input type="checkbox" id="toggleNotes"><label for="toggleNotes">Show footnotes</label></div>');
$head.append($fontCurrent, $fontSlider, $toggleNotes);


$toggleNotes.find('input').change(function () {
	localStorage.footnotes = this.checked;
	setStyle();
});

$('#p-cactions').attr('class', 'vectorTabs');
$('#ca-move a').wrap('<span>');
$('#firstHeading').wrap('<div id="firstHeading-container">');
$('#firstHeading').after($('#left-navigation'), $('#right-navigation'));

$('#p-cactions .menu ul').append($('#ca-talk'));
$('#pt-userpage').append($('#pt-notifications'));

$('a.new').removeAttr("href");

// Init
localStorage.footnotes = localStorage.footnotes || true;
$toggleNotes.find('input').attr('checked', localStorage.footnotes);
setStyle();
