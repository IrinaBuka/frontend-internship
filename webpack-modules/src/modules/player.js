var $ = require('jquery');

require('jquery-ui/themes/base/core.css');
require('jquery-ui/themes/base/theme.css');

require('jquery-ui/themes/base/slider.css');
require('jquery-ui/ui/widgets/slider');

var $player = $('#video');
// $player.css('');
// console.log($player);

// var player = document.getElementById('video');
// player.style.display = 'none';
// console.log(player);

$('#play').on('click', function () {
    $player.get(0).play();
});

$('#slider').slider({
    change: function (event, ui) {
        // video.seekTo(value);
        console.log(ui);

        $player.get(0).currentTime = 100;
        // alert(value);
    }
});