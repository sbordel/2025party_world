$(document).ready(function () {
    var baseUrl = "assets/audio/";
    var audio = ["pw-sako.mp3", "pw-simon.mp3", "pw-sam.mp3"];


    $('.tiles').click(function () {
        var i = $(this).attr("id").substring(1);
        new Audio(baseUrl + audio[i - 1]).play();
    });

});