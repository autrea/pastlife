var title = true;

$("#pauseHand, #playHand, #textPause, #textPlay, #selectStory, #storyDotsKasuki, #storyDotsSito").hide();
$("#credit_0").hide();
$("#credit_1").hide();
$("#credit_2").hide();
$("#credit_3").hide();
$("#credit_4").hide();

$(".handle, .letter").hide();
$(".handle, .letter").css("fill", "white");
$(".sword").css("fill", "white");
$(".sword").css("transition", "5s");

setTimeout(function () {
    $(".sword").css("fill", "black");
}, 1000);

var dt = 100;

/* pastlife fade in ----------------------------------------- */

setTimeout(function () {
    var counter = 0;

    setInterval(function () {
        if (counter < 8) {
            var object = "#pastlife_" + counter;
            $(object).delay(dt * counter).fadeIn(1000);
            counter++
        }
    }, (dt * counter));

}, 3000);

/* kasuki fade in ----------------------------------------- */

setTimeout(function () {
    var counter = 0;

    setInterval(function () {
        if (counter < 6) {
            var object = "#kasuki_" + counter;
            $(object).delay(dt * counter).fadeIn(1000);
            counter++
        }
    }, (dt * counter));

}, 3000 + (dt * 8));

/* sito fade in ----------------------------------------- */

setTimeout(function () {
    var counter = 0;

    setInterval(function () {
        if (counter < 7) {
            var object = "#sito_" + counter;
            $(object).delay(dt * counter).fadeIn(1000);
            counter++
        }
    }, (dt * counter));

}, 3000 + (dt * 8));

/* handle fade in ----------------------------------------- */

setTimeout(function () {
    var counter = 0;

    setInterval(function () {
        if (counter < 16) {
            var object = "#handle_" + counter;
            $(object).delay(dt * counter).fadeIn(1000);
            counter++
        }
    }, (dt * counter));
}, 3000 + (dt * 16));

/* swap colors ----------------------------------------- */

setTimeout(function () {
    $(".letter, .handle").css("transition", "5s");
    $(".sword").css("fill", "black");
    $(".handle, .letter").css("fill", "red");
    $("#overlay").css("background-color", "red");

    $("#credit_0").fadeIn(1000);
    $("#credit_1").delay(100).fadeIn(1000);
    $("#credit_2").delay(200).fadeIn(1000);
    $("#credit_3").delay(300).fadeIn(1000);
    $("#credit_4").delay(400).fadeIn(1000);

}, 7000);

/* reset transition ----------------------------------------- */

// var fadeOutDelay = 11000;

setTimeout(function () {
    $(".letter, .handle").css("transition", "none");
}, 11000);

/* pastlife fadeOut ----------------------------------------- */

$("#credits").on("click", function () {
    fadeTitleScreen();
});

$("#overlay").on("click", function () {
    fadeTitleScreen();
});

$("#titleSVG").on("click", function () {
    fadeTitleScreen();
});

function fadeTitleScreen() {
    title = false;
    var counter = 0;

    setInterval(function () {
        if (counter < 8) {
            var object = "#pastlife_" + counter;
            $(object).delay(dt * counter).fadeOut(1000);
            counter++
        }
    }, (dt * counter));


    /* kasuki fadeOutn ----------------------------------------- */

    setTimeout(function () {
        var counter = 0;

        setInterval(function () {
            if (counter < 6) {
                var object = "#kasuki_" + counter;
                $(object).delay(dt * counter).fadeOut(1000);
                counter++
            }
        }, (dt * counter));

    }, (dt * 8));

    /* sito fadeOutn ----------------------------------------- */

    setTimeout(function () {
        var counter = 0;

        setInterval(function () {
            if (counter < 7) {
                var object = "#sito_" + counter;
                $(object).delay(dt * counter).fadeOut(1000);
                counter++
            }
        }, (dt * counter));

    }, (dt * 8));

    /* handle fadeOutn ----------------------------------------- */

    setTimeout(function () {
        var counter = 0;

        setInterval(function () {
            if (counter < 16) {
                var object = "#handle_" + counter;
                $(object).delay(dt * counter).fadeOut(1000);
                counter++
            }
        }, (dt * counter));
    }, (dt * 16));

    /* fadeOut sword ----------------------------------------- */

    
    $("#overlay").css("background-color", "black");
    

    setTimeout(function () {
        // transition and jquery fades don't play nicely, so remove the transition before using fadeIn and fadeOut
        $("#overlay").removeClass("overlayTransition");
        $("#selectStory, #storyDotsKasuki, #storyDotsSito").fadeIn(5000);
        $("#titleSVG").hide();
        $("#credits").hide();
        canChooseStory = true;
    }, 5000);
}

/* after title ----------------------------------------- */
/* after title ----------------------------------------- */
/* after title ----------------------------------------- */






// var audioKasuki_0 = document.getElementById("audioKasuki__0");

// var audioKasuki = [];
// var audioSito = [];

audioKasuki_0 = new Audio('assets/voice/kasuki_0.wav');
audioKasuki_1 = new Audio('assets/voice/kasuki_1.wav');
audioKasuki_2 = new Audio('assets/voice/kasuki_2.wav');
audioKasuki_3 = new Audio('assets/voice/kasuki_3.wav');
audioKasuki_4 = new Audio('assets/voice/kasuki_4.wav');

audioSito_0 = new Audio('assets/voice/sito_0.wav');
audioSito_1 = new Audio('assets/voice/sito_1.wav');
audioSito_2 = new Audio('assets/voice/sito_2.wav');
audioSito_3 = new Audio('assets/voice/sito_3.wav');
audioSito_4 = new Audio('assets/voice/sito_4.wav');

// for(var i = 0; i < 5; i++) { 
//     audioKasuki[i] = new Audio('assets/voice/kasuki_' + i + '.wav');
//     audioSito[i] = new Audio('assets/voice/sito_' + i + '.wav');
// }


var cameraEl = document.querySelector('a-camera');
// cameraEl.removeAttribute('wasd-controls');

var counterKasuki = 0;
var counterSito = 0;

// querySelector() returns one element
var sceneEl = document.querySelector('a-scene');


/* https://stackoverflow.com/questions/3583724/how-do-i-add-a-delay-in-a-javascript-loop */

var camX = 50;
var camY = 1.75;
var camZ = 10;



cameraEl.setAttribute('position', {
    x: camX,
    y: camY,
    z: camZ
});

var play = false;
var canChooseStory = false;
var kasuki = false;
var sito = false;
var canChooseDot = false;

/* ---------------------------------------------- */
/* -------------------- myo --------------------- */
/* ---------------------------------------------- */

Myo.connect();

// wave in
Myo.on('wave_in', function () {

    // hand glow
    TweenMax.to("#handKasuki .hand", 0.5, { opacity: "1" });
    TweenMax.to("#handKasuki .hand", 0.5, { delay: 1, opacity: "0.5" });

    this.vibrate();
    if (canChooseStory == true) {
        // select kasuki's story
        kasuki = true;
        sito = false;
        canChooseStory = false;
        canChooseDot = true;
        // set selection when using myo
        $("#storyDotKasuki__" + counterKasuki).addClass("myoSelectDot");
        for (var i = 0; i < 5; i++) {
            $("#storyDotSito__" + i).removeClass("myoSelectDot");
        }

        // show play instruction
        $("#playHand").fadeIn(1000);
        $("#textPlay").fadeIn(1000);

        // change text to next instructions
        TweenMax.to("#selectStoryKasuki h1", 0.5, { color: "black" });
        TweenMax.to("#selectStorySito h1", 0.5, { color: "black" });
        setTimeout(function () {
            $("#selectStoryKasuki h1").text("BACKWARDS");
            $("#selectStorySito h1").text("FORWARDS");
            TweenMax.to("#selectStoryKasuki h1", 0.5, { color: "white" });
            TweenMax.to("#selectStorySito h1", 0.5, { color: "white" });
        }, 1000);

    } else if (canChooseDot == true) {
        if (kasuki == true) {
            $("#play, #textPlay").fadeIn(1000);
            $(".storyDotKasuki").addClass("pointer");
            $(".storyDotSito").removeClass("pointer");
            if (kasuki == true) {
                if (counterKasuki > 0) {
                    counterKasuki--;
                }

                for (var i = 0; i < 5; i++) {
                    $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
                    if (i == counterKasuki) {
                        $("#storyDotKasuki__" + i).addClass("myoSelectDot");
                    }
                }
            }
        } else if (sito == true) {
            $("#play, #textPlay").fadeIn(1000);
            $(".storyDotKasuki").removeClass("pointer");
            $(".storyDotSito").addClass("pointer");
            if (sito == true) {
                if (counterSito > 0) {
                    counterSito--;
                }

                for (var i = 0; i < 5; i++) {
                    $("#storyDotSito__" + i).removeClass("myoSelectDot");
                    if (i == counterSito) {
                        $("#storyDotSito__" + i).addClass("myoSelectDot");
                    }
                }
            }
        }
    }
});

// wave out
Myo.on('wave_out', function () {

    // hand glow
    TweenMax.to("#handSito .hand", 0.5, { opacity: "1" });
    TweenMax.to("#handSito .hand", 0.5, { delay: 1, opacity: "0.5" });

    this.vibrate();
    if (canChooseStory == true) {
        // select sito's story
        kasuki = false;
        sito = true;
        canChooseStory = false;
        canChooseDot = true;
        // set selection when using myo
        $("#storyDotSito__" + counterSito).addClass("myoSelectDot");
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
        }

        // show play instruction
        $("#playHand").fadeIn(1000);
        $("#textPlay").fadeIn(1000);

        // change text to next instructions
        TweenMax.to("#selectStoryKasuki h1", 0.5, { color: "black" });
        TweenMax.to("#selectStorySito h1", 0.5, { color: "black" });
        setTimeout(function () {
            $("#selectStoryKasuki h1").text("BACKWARDS");
            $("#selectStorySito h1").text("FORWARDS");
            TweenMax.to("#selectStoryKasuki h1", 0.5, { color: "white" });
            TweenMax.to("#selectStorySito h1", 0.5, { color: "white" });
        }, 1000);

    } else if (canChooseDot == true) {
        if (kasuki == true) {
            $("#play, #textPlay").fadeIn(1000);
            $(".storyDotKasuki").addClass("pointer");
            $(".storyDotSito").removeClass("pointer");
            if (kasuki == true) {
                if (counterKasuki < 4) {
                    counterKasuki++;
                }

                for (var i = 0; i < 5; i++) {
                    $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
                    if (i == counterKasuki) {
                        $("#storyDotKasuki__" + i).addClass("myoSelectDot");
                    }
                }
            }
        } else if (sito == true) {
            $("#play, #textPlay").fadeIn(1000);
            $(".storyDotKasuki").removeClass("pointer");
            $(".storyDotSito").addClass("pointer");
            if (sito == true) {
                if (counterSito < 4) {
                    counterSito++;
                }

                for (var i = 0; i < 5; i++) {
                    $("#storyDotSito__" + i).removeClass("myoSelectDot");
                    if (i == counterSito) {
                        $("#storyDotSito__" + i).addClass("myoSelectDot");
                    }
                }
            }
        }
    }
});

// spread / play
Myo.on('fingers_spread', function () {

    this.vibrate();
    for (var i = 0; i < 5; i++) {
        $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
        $("#storyDotSito__" + i).removeClass("myoSelectDot");
    }
    if (kasuki == true && canChooseDot == true) {
        resetActiveStoryDot();
        resume();
        switch (counterKasuki) {
            case 0: kasuki__0(); break;
            case 1: kasuki__1(); break;
            case 2: kasuki__2(); break;
            case 3: kasuki__3(); break;
            case 4: kasuki__4(); break;
        }
    } else if (sito == true && canChooseDot == true) {
        resetActiveStoryDot();
        resume();
        switch (counterSito) {
            case 0: sito__0(); break;
            case 1: sito__1(); break;
            case 2: sito__2(); break;
            case 3: sito__3(); break;
            case 4: sito__4(); break;
        }
    }
});

// fist / pause
Myo.on('fist', function () {

    this.vibrate();

    if(title == true) {
        fadeTitleScreen();
    } else if (play == true) {
        pause();
    }
});



/* ---------------------------------------------- */
/* --------------- click listeners -------------- */
/* ---------------------------------------------- */

// click kasuki hand
$("#selectStoryKasuki").on('click', function () {

    // hand glow
    TweenMax.to("#handKasuki .hand", 0.5, { opacity: "1" });
    TweenMax.to("#handKasuki .hand", 0.5, { delay: 1, opacity: "0.5" });

    if (canChooseStory == true) {
        // select kasuki's story
        kasuki = true;
        sito = false;
        canChooseStory = false;
        canChooseDot = true;
        // set selection when using myo
        $("#storyDotKasuki__" + counterKasuki).addClass("myoSelectDot");
        for (var i = 0; i < 5; i++) {
            $("#storyDotSito__" + i).removeClass("myoSelectDot");
        }

        // show play instruction
        $("#playHand").fadeIn(1000);
        $("#textPlay").fadeIn(1000);

        // change text to next instructions
        TweenMax.to("#selectStoryKasuki h1", 0.5, { color: "black" });
        TweenMax.to("#selectStorySito h1", 0.5, { color: "black" });
        setTimeout(function () {
            $("#selectStoryKasuki h1").text("BACKWARDS");
            $("#selectStorySito h1").text("FORWARDS");
            TweenMax.to("#selectStoryKasuki h1", 0.5, { color: "white" });
            TweenMax.to("#selectStorySito h1", 0.5, { color: "white" });
        }, 1000);

        $(".storyDotKasuki").addClass("pointer");
        $(".storyDotSito").removeClass("pointer");

    } else if (canChooseDot == true) {
        if (kasuki == true) {
            $("#play, #textPlay").fadeIn(1000);
            if (kasuki == true) {
                if (counterKasuki > 0) {
                    counterKasuki--;
                }

                for (var i = 0; i < 5; i++) {
                    $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
                    if (i == counterKasuki) {
                        $("#storyDotKasuki__" + i).addClass("myoSelectDot");
                    }
                }
            }
        } else if (sito == true) {
            $("#play, #textPlay").fadeIn(1000);
            $(".storyDotKasuki").removeClass("pointer");
            $(".storyDotSito").addClass("pointer");
            if (sito == true) {
                if (counterSito > 0) {
                    counterSito--;
                }

                for (var i = 0; i < 5; i++) {
                    $("#storyDotSito__" + i).removeClass("myoSelectDot");
                    if (i == counterSito) {
                        $("#storyDotSito__" + i).addClass("myoSelectDot");
                    }
                }
            }
        }
    }
});

// click sito hand
$("#selectStorySito").on('click', function () {

    // hand glow
    TweenMax.to("#handSito .hand", 0.5, { opacity: "1" });
    TweenMax.to("#handSito .hand", 0.5, { delay: 1, opacity: "0.5" });

    if (canChooseStory == true) {
        // select sito's story
        kasuki = false;
        sito = true;
        canChooseStory = false;
        canChooseDot = true;
        // set selection when using myo
        $("#storyDotSito__" + counterSito).addClass("myoSelectDot");
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
        }

        // show play instruction
        $("#playHand").fadeIn(1000);
        $("#textPlay").fadeIn(1000);

        // change text to next instructions
        TweenMax.to("#selectStoryKasuki h1", 0.5, { color: "black" });
        TweenMax.to("#selectStorySito h1", 0.5, { color: "black" });
        setTimeout(function () {
            $("#selectStoryKasuki h1").text("BACKWARDS");
            $("#selectStorySito h1").text("FORWARDS");
            TweenMax.to("#selectStoryKasuki h1", 0.5, { color: "white" });
            TweenMax.to("#selectStorySito h1", 0.5, { color: "white" });
        }, 1000);

    } else if (canChooseDot == true) {
        if (kasuki == true) {
            $("#play, #textPlay").fadeIn(1000);
            $(".storyDotKasuki").addClass("pointer");
            $(".storyDotSito").removeClass("pointer");
            if (kasuki == true) {
                if (counterKasuki < 4) {
                    counterKasuki++;
                }

                for (var i = 0; i < 5; i++) {
                    $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
                    if (i == counterKasuki) {
                        $("#storyDotKasuki__" + i).addClass("myoSelectDot");
                    }
                }
            }
        } else if (sito == true) {
            $("#play, #textPlay").fadeIn(1000);
            $(".storyDotKasuki").removeClass("pointer");
            $(".storyDotSito").addClass("pointer");
            if (sito == true) {
                if (counterSito < 4) {
                    counterSito++;
                }

                for (var i = 0; i < 5; i++) {
                    $("#storyDotSito__" + i).removeClass("myoSelectDot");
                    if (i == counterSito) {
                        $("#storyDotSito__" + i).addClass("myoSelectDot");
                    }
                }
            }
        }
    }
});

/* ---------------------------------------------- */
/* --------------- storyDotKasuki --------------- */
/* ---------------------------------------------- */

$("#storyDotKasuki__0").on("click", function () {
    if (canChooseDot == true) {
        counterKasuki = 0;
        resume();
        resetActiveStoryDot();
        kasuki__0();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotKasuki__1").addClass("activeStoryDot");
    }
});

$("#storyDotKasuki__1").on("click", function () {
    if (canChooseDot == true) {
        counterKasuki = 1;
        resume();
        resetActiveStoryDot();
        kasuki__1();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotKasuki__1").addClass("activeStoryDot");
    }
});

$("#storyDotKasuki__2").on("click", function () {
    if (canChooseDot == true) {
        counterKasuki = 2;
        resume();
        resetActiveStoryDot();
        kasuki__2();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotKasuki__2").addClass("activeStoryDot");
    }
});

$("#storyDotKasuki__3").on("click", function () {
    if (canChooseDot == true) {
        counterKasuki = 3;
        resume();
        resetActiveStoryDot();
        kasuki__3();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotKasuki__3").addClass("activeStoryDot");
    }
});

$("#storyDotKasuki__4").on("click", function () {
    if (canChooseDot == true) {
        counterKasuki = 4;
        resume();
        resetActiveStoryDot();
        kasuki__4();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotKasuki__4").addClass("activeStoryDot");
    }
});

/* ---------------------------------------------- */
/* ---------------- storyDotSito ---------------- */
/* ---------------------------------------------- */

$("#storyDotSito__0").on("click", function () {
    if (canChooseDot == true) {
        counterSito = 0;
        resume();
        resetActiveStoryDot();
        sito__0();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotSito__0").addClass("activeStoryDot");
    }
});

$("#storyDotSito__1").on("click", function () {
    if (canChooseDot == true) {
        counterSito = 1;
        resume();
        resetActiveStoryDot();
        sito__1();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotSito__1").addClass("activeStoryDot");
    }
});

$("#storyDotSito__2").on("click", function () {
    if (canChooseDot == true) {
        counterSito = 2;
        resume();
        resetActiveStoryDot();
        sito__2();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotSito__2").addClass("activeStoryDot");
    }
});

$("#storyDotSito__3").on("click", function () {
    if (canChooseDot == true) {
        counterSito = 3;
        resume();
        resetActiveStoryDot();
        sito__3();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotSito__3").addClass("activeStoryDot");
    }
});

$("#storyDotSito__4").on("click", function () {
    if (canChooseDot == true) {
        counterSito = 4;
        resume();
        resetActiveStoryDot();
        sito__4();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
            $("#storyDotSito__" + i).removeClass("activeStoryDot");
        }
        $("#storyDotSito__4").addClass("activeStoryDot");
    }
});

/* ---------------------------------------------- */
/* ------------------ controls ------------------ */
/* ---------------------------------------------- */

// pause/play button click
$("#pause").on('click', function () {
    if (play == true) {
        pause();
    } else if (canChooseDot == true) {
        resetActiveStoryDot();
        for (var i = 0; i < 5; i++) {
            $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
            $("#storyDotSito__" + i).removeClass("myoSelectDot");
        }
        if (kasuki == true && canChooseDot == true) {
            resetActiveStoryDot();
            resume();
            switch (counterKasuki) {
                case 0: kasuki__0(); break;
                case 1: kasuki__1(); break;
                case 2: kasuki__2(); break;
                case 3: kasuki__3(); break;
                case 4: kasuki__4(); break;
            }
        } else if (sito == true && canChooseDot == true) {
            resetActiveStoryDot();
            resume();
            switch (counterSito) {
                case 0: sito__0(); break;
                case 1: sito__1(); break;
                case 2: sito__2(); break;
                case 3: sito__3(); break;
                case 4: sito__4(); break;
            }
        }
    }
});

/* ----- kasuki hand / sito hand mouseover ----- */

$("#handKasuki").on("mouseenter", function () {
    $("#handKasuki .hand").css("opacity", "1");
    $("#handKasuki").on("mouseleave", function () {
        $("#handKasuki .hand").css("opacity", "0.5");
    });
});

$("#handSito").on("mouseenter", function () {
    $("#handSito .hand").css("opacity", "1");
    $("#handSito").on("mouseleave", function () {
        $("#handSito .hand").css("opacity", "0.5");
    });
});

/* ----- pause/play mouseover ----- */

$("#pause").on("mouseenter", function () {
    $("#pause .hand").css("opacity", "1");
    $("#pause").on("mouseleave", function () {
        $("#pause .hand").css("opacity", "0.5");
    });
});

$(".storyDot").on("mouseenter", function () {
    if (canChooseDot == true) {
        removeMyoDot();
        if (kasuki == true) {
            $(".storyDotKasuki").addClass("storyDotHover");
            $(".storyDotKasuki").on("mouseleave", function () {
                $(".storyDotKasuki").removeClass("storyDotHover");
            });
        } else if (sito == true) {
            $(".storyDotSito").addClass("storyDotHover");
            $(".storyDotSito").on("mouseleave", function () {
                $(".storyDotSito").removeClass("storyDotHover");
            });
        }

    }
});

function pause() {
    for (var i = 0; i < 5; i++) {

        audioKasuki_0.pause();
        audioKasuki_0.currentTime = 0;
        audioKasuki_1.pause();
        audioKasuki_1.currentTime = 0;
        audioKasuki_2.pause();
        audioKasuki_2.currentTime = 0;
        audioKasuki_3.pause();
        audioKasuki_3.currentTime = 0;
        audioKasuki_4.pause();
        audioKasuki_4.currentTime = 0;

        audioSito_0.pause();
        audioSito_0.currentTime = 0;
        audioSito_1.pause();
        audioSito_1.currentTime = 0;
        audioSito_2.pause();
        audioSito_2.currentTime = 0;
        audioSito_3.pause();
        audioSito_3.currentTime = 0;
        audioSito_4.pause();
        audioSito_4.currentTime = 0;
    }
    canChooseStory = true;
    play = false;
    $("#overlay").fadeIn(1000);
    $("#pauseHand").fadeOut(1000);
    $("#textPause").fadeOut(1000);
    $("#selectStory").fadeIn(1000);

    $("#selectStoryKasuki h1").text("KASUKI");
    $("#selectStorySito h1").text("SITO");
}

/* ---------------------------------------------- */
/* ----------------- play story ----------------- */
/* ---------------------------------------------- */

/* ----- kasuki ----- */

function kasuki__0() {
    setTimeout(function () {
        audioKasuki_0.play();
    }, 2000);

    cameraEl.setAttribute('position', {
        x: 50,
        y: camY,
        z: 10
    });

    // tween();
    // var position = 7;
    // var target = 10;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: 50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position < target) {
    //             tween();
    //         }
    //     }, 10);
    //     position += (target / 10000);


    // }
}

function kasuki__1() {
    setTimeout(function () {
        audioKasuki_1.play();
    }, 2000);

    cameraEl.setAttribute('position', {
        x: 50,
        y: camY,
        z: 10
    });

    // tween();
    // var position = 7;
    // var target = 10;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: 50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position < target) {
    //             tween();
    //         }
    //     }, 10);
    //     position += (target / 10000);


    // }
}

function kasuki__2() {
    setTimeout(function () {
        audioKasuki_2.play();
    }, 2000);

    cameraEl.setAttribute('position', {
        x: 50,
        y: camY,
        z: 10
    });

    // tween();
    // var position = 7;
    // var target = 10;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: 50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position < target) {
    //             tween();
    //         }
    //     }, 10);
    //     position += (target / 10000);


    // }
}

function kasuki__3() {
    setTimeout(function () {
        audioKasuki_3.play();
    }, 2000);

    cameraEl.setAttribute('position', {
        x: 50,
        y: camY,
        z: 10
    });

    // tween();
    // var position = 7;
    // var target = 10;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: 50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position < target) {
    //             tween();
    //         }
    //     }, 10);
    //     position += (target / 10000);


    // }
}

function kasuki__4() {
    setTimeout(function () {
        audioKasuki_4.play();
    }, 2000);

    cameraEl.setAttribute('position', {
        x: 50,
        y: camY,
        z: 10
    });

    // tween();
    // var position = 7;
    // var target = 10;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: 50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position < target) {
    //             tween();
    //         }
    //     }, 10);
    //     position += (target / 10000);


    // }
}

/* ---------------------------------------------- */
/* ----------------- play story ----------------- */
/* ---------------------------------------------- */

/* ----- sito ----- */

function sito__0() {
    setTimeout(function () {
        audioSito_0.play();
    }, 2000);


    cameraEl.setAttribute('position', {
        x: -50,
        y: camY,
        z: 2
    });

    // tween();
    // var position = 10;
    // var target = 2;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: -50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position > target) {
    //             tween();
    //         }
    //     }, 10);
    //     position -= (target / 350);


    // }
}

function sito__1() {
    setTimeout(function () {
        audioSito_1.play();
    }, 2000);


    cameraEl.setAttribute('position', {
        x: -50,
        y: camY,
        z: 2
    });

    // tween();
    // var position = 10;
    // var target = 2;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: -50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position > target) {
    //             tween();
    //         }
    //     }, 10);
    //     position -= (target / 350);


    // }
}

function sito__2() {
    setTimeout(function () {
        audioSito_2.play();
    }, 2000);


    cameraEl.setAttribute('position', {
        x: -50,
        y: camY,
        z: 2
    });

    // tween();
    // var position = 10;
    // var target = 2;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: -50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position > target) {
    //             tween();
    //         }
    //     }, 10);
    //     position -= (target / 350);


    // }
}

function sito__3() {
    setTimeout(function () {
        audioSito_3.play();
    }, 2000);


    cameraEl.setAttribute('position', {
        x: -50,
        y: camY,
        z: 2
    });

    // tween();
    // var position = 10;
    // var target = 2;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: -50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position > target) {
    //             tween();
    //         }
    //     }, 10);
    //     position -= (target / 350);


    // }
}

function sito__4() {
    setTimeout(function () {
        audioSito_4.play();
    }, 2000);


    cameraEl.setAttribute('position', {
        x: -50,
        y: camY,
        z: 2
    });

    // tween();
    // var position = 10;
    // var target = 2;
    // function tween() {

    //     setTimeout(function () {
    //         cameraEl.setAttribute('position', {
    //             x: -50,
    //             y: camY,
    //             z: position
    //         });

    //         if (position > target) {
    //             tween();
    //         }
    //     }, 10);
    //     position -= (target / 350);


    // }
}

// reset

function resetActiveStoryDot() {
    for (var i = 0; i < 5; i++) {
        $("#storyDotKasuki__" + i).removeClass("activeStoryDot");
        $("#storyDotSito__" + i).removeClass("activeStoryDot");
        if (kasuki == true) {
            if (i == counterKasuki) {
                $("#storyDotKasuki__" + i).addClass("activeStoryDot");
            }
        } else if (sito == true) {
            if (i == counterSito) {
                $("#storyDotSito__" + i).addClass("activeStoryDot");
            }
        }
    }
}


function removeMyoDot() {
    for (var i = 0; i < 5; i++) {
        $("#storyDotKasuki__" + i).removeClass("myoSelectDot");
        $("#storyDotSito__" + i).removeClass("myoSelectDot");
    }
}

// resume

function resume() {
    play = true;
    canChooseDot = false;
    $("#playHand").fadeOut(1000);
    $("#textPlay").fadeOut(1000);

    $("#pauseHand").delay(1000).fadeIn(1000);
    $("#textPause").delay(1000).fadeIn(1000);

    $("#overlay").fadeOut(1000);
    $("#selectStory").fadeOut(1000);
    $(".storyDot").removeClass("pointer");
}