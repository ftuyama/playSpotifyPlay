$(document).ready(() => {
    var currentState = localStorage.currentState || "start";
    console.log(currentState);

    if (currentState == "start") {
        function playPlay() {
            setTimeout(() => {
                var button = $("button[data-testid='control-button-playpause']")[0];
                if (button.getAttribute('aria-label') == 'Play') {
                    button.click();
                }
                playPlay();
            }, 1000);
        }
        playPlay();
    }

    setTimeout(() => {
        console.log('loaded');
        $("figure[data-testid='user-widget-avatar']")[0].onclick = function() {
            if (localStorage.currentState == "start") {
                console.log("stop");
                localStorage.currentState = "stop";
            }
            else {
                console.log("start");
                localStorage.currentState = "start";
            }
        };
    }, 5000);
});
