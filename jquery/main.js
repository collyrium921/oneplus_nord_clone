$(function() {
    var visible = 3;

    function vis() {
        if (position < 600) {
            $('#black-stage-left').css({ height: visible + 'px' });
            visible += 3;
            setTimeout(vis, 1);
        }
    }
    setTimeout(vis, 1);
    var position = 1;

    function slider() {
        if (position < 700) {
            $('#black').css({ right: position * -5 + 'px' });
            if (position == 70)
                $('#black-stage-left').css({ display: "none" });
            position++;
            setTimeout(slider, 1);
        }
    }
    setTimeout(slider, 2000);
});

function changeWidth(w) { $("#button").css({ width: w + 'px' }) };

function getTop(element_name) { return $(element_name)[0].getBoundingClientRect().top; }
$(window).scroll(function() {
    var scroll = document.documentElement.scrollTop,
        wrapper = $("#wrapper"),
        topArrays = [getTop("#section-two"), getTop("#section-three"), getTop('#section-four'), getTop("#section-five"), getTop("#section-six"), getTop("#section-eight"), getTop("#section-nine"), getTop("#section-eleven"), getTop("#section-twelve"), getTop("#section-thirteen"), getTop("#section-fourteen"), getTop("#section-sixteen"), getTop("#section-seventeen"), getTop("#section-eighteen"), getTop("#section-ninteen")];

    if (scroll < 50) {
        wrapper.css({ transform: "translateX(70%)" });
    } else if (scroll < 750) {
        var translate = 70 - (scroll - 50) / 10;
        wrapper.css({ transform: "translateX(" + translate + "%)" });
    } else {
        wrapper.css({ transform: "translateX(0)" });
    }

    function getPositionTop(element_id, positionVal, topVal) {
        element_id.css({ "position": positionVal, "top": topVal });
    }

    function navbarStyle(colorVal, backgroundColorVal) {
        $("#navbar").css({ "color": colorVal, "background-color": backgroundColorVal });
    }
    var arr = ['#flagship-camera', '#nightscape', '#dual-selfie', '#oxygen', '#display', '#snapdragon', '#ready', '#charge'],
        changeColor = [topArrays[0] <= 220 && topArrays[0] > 170, topArrays[0] <= 170 && topArrays[0] > 120, topArrays[0] <= 120 && topArrays[0] > 70, topArrays[0] <= 70 && topArrays[0] > 50, topArrays[0] <= 50 && topArrays[0] > 0, topArrays[0] <= 0 && topArrays[0] > -50, topArrays[0] <= -50 && topArrays[0] > -100, topArrays[0] <= -100 && topArrays[0] > -200];

    function stylings(index) {
        $(arr[index]).css({ "color": 'black', "fontSize": "2.5em" });
        $(arr[(index + 1) % 8]).css({ "color": "#b2b2b2", "fontSize": "2em" });
        $(arr[(index + 7) % 8]).css({ "color": "#b2b2b2", "fontSize": "2em" });
        $(arr[index] + '-image').css({ "z-index": index + 1 });
        $(arr[(index + 1) % 8] + '-image').css({ "z-index": '0' });
        $(arr[(index + 7) % 8] + '-image').css({ "z-index": '0' });
        $('#title-' + (index + 1)).css({ "display": "block" });
        $('#title-' + (index)).css({ "display": "none" });
        $('#title-' + (index + 2)).css({ "display": "none" });
    }
    for (i = 0; i < 8; i++) { if (changeColor[i]) stylings(i); }
    var secThreeCondition = [topArrays[1] <= 50 && topArrays[1] > -550, topArrays[1] <= -550 && topArrays[1] > -950, topArrays[1] >= -800],
        partOne = $("#part-one");
    if (secThreeCondition[0]) {
        partOne.css({ "z-index": 1, "background-color": "black", "padding-top": "50px", "display": "block" })
        getPositionTop(partOne, 'fixed', 0);
        navbarStyle('black', 'white');
        $("#part-two").css({ "padding-top": (50 - topArrays[1]) + 'px' });
    } else if (secThreeCondition[1]) {
        partOne.css({ "z-index": 3, "display": "block" });
        getPositionTop(partOne, 'absolute', '550px');
        navbarStyle('white', 'black');
    } else if (secThreeCondition[2]) {
        partOne.css({ "display": "none" });
        getPositionTop(partOne, 'absolute', 0);
        navbarStyle('black', 'white');
    }
    var insideSecFour = $("#inside-section-four"),
        secFourImage = $("#section-four-image"),
        leftContentTwo = $("#left-content-two");
    if (topArrays[2] > 120) {
        getPositionTop(insideSecFour, 'absolute', '50px');
    } else if (topArrays[2] <= 120 && topArrays[2] >= 50) {
        secFourImage.css({ "right": (-100 + (120 - topArrays[2]) * 40 / 70) + '%' });
        $("#section-left-content").css({ "opacity": (120 - topArrays[2]) / 120 });
        navbarStyle('white', 'black');
    } else if (topArrays[2] < 50 && topArrays[2] >= -190) {
        getPositionTop(insideSecFour, 'fixed', '50px');
        $("#left-im").css({ "top": (-190 - topArrays[2]) + 'px' });
        secFourImage.css({ "right": -60 + (50 - topArrays[2]) * 20 / 240 + '%' });
        navbarStyle('black', 'white');
    } else if (topArrays[2] < -190 && topArrays[2] >= -590) {
        $("#left-section-four").css({ "top": (190 + topArrays[2]) + 'px' });
        secFourImage.css({ "width": 100 + (190 + topArrays[2]) * 35 / 780 + '%', "right": -40 + (-190 - topArrays[2]) * 40 / 400 + '%' });
        $("#top-image").css({ "opacity": (590 + topArrays[2]) / 400 });
        $("#left-content-one").css({ "opacity": (-190 - topArrays[2]) / 400 });
    } else if (topArrays[2] < -590 && topArrays[2] >= -790) {
        leftContentTwo.css({ "margin-top": (790 + topArrays[2]) + 'px' });
        secFourImage.css({ "top": '50px' });
        for (i = 0; i < 4; i++) {
            $("#line-" + (i + 1)).css({ "opacity": (-590 - topArrays[2]) / 200 });
            $("#content-" + (i + 1) + "-line").css({ "opacity": (-590 - topArrays[2]) / 200 });
        }
    } else if (topArrays[2] < -790 && topArrays[2] >= -800) {
        for (i = 0; i < 4; i++) {
            $("#line-" + (i + 1)).css({ "width": "120px" });
            $("#content-" + (i + 1) + "-line").css({ "margin-top": "-2px" });
        }
    } else if (topArrays[2] < -800) {
        getPositionTop(insideSecFour, 'absolute', '800px');
    }
    var secImageOne = $("#section-image-one"),
        secImageThree = $("#section-image-three");
    if (topArrays[3] < 50 && topArrays[3] >= -250) {
        secImageOne.css({ "margin-left": 15 + (50 - topArrays[3]) * 25 / 300 + '%', "margin-top": 150 - (50 - topArrays[3]) * 50 / 300 + 'px' });
        secImageThree.css({ "margin-left": 65 - (50 - topArrays[3]) * 25 / 300 + '%', "margin-top": 50 + (50 - topArrays[3]) * 50 / 300 + 'px' });
    }
    if (topArrays[4] <= 275 && topArrays[4] >= 0) $("#sec-six-black").css({ "opacity": (topArrays[4]) / 275 });
    var secEightCondition = [topArrays[5] <= 215 && topArrays[5] > 0, topArrays[5] <= 0 && topArrays[5] > -50, topArrays[5] <= -50, ],
        secEightInside = $("#section-eight-inside");
    if (secEightCondition[0]) {
        getPositionTop(secEightInside, 'absolute', 0);
        navbarStyle('white', 'black');
        $("#div-one").css({ "height": 150 - (215 - topArrays[5]) * 150 / 215 + 'px' });
        $("#div-two").css({ "left": -(215 - topArrays[5]) * 40 / 215 + '%' });
        $("#div-three").css({ "right": -(215 - topArrays[5]) * 40 / 215 + '%' });
    } else if (secEightCondition[1]) {
        getPositionTop(secEightInside, 'fixed', 0);
        navbarStyle('black', 'white');
        $("#variable-section").css({ "opacity": (50 + topArrays[5]) / 50 });
    } else if (secEightCondition[2]) {
        getPositionTop(secEightInside, 'absolute', '50px');
        navbarStyle('black', 'white');
    }
    var insideSectionNine = $("#inside-section-nine"),
        ninePartTwo = $("#nine-part-two"),
        ninePartThree = $("#nine-part-three"),
        mask = $("#mask");
    if (topArrays[6] > 50) {
        getPositionTop(insideSectionNine, 'absolute', 0);
    } else if (topArrays[6] <= 50 && topArrays[6] > -1100) {
        getPositionTop(insideSectionNine, 'fixed', '50px');
        mask.css({ "display": "block" });
        if (topArrays[6] <= 0 && topArrays[6] > -300) {
            mask.css({ "display": "none" });
            $("#nine-part-four").css({ "opacity": (300 + topArrays[6]) / 300 });
            ninePartThree.css({ "opacity": -(topArrays[6]) / 300 });
        } else if (topArrays[6] <= -400 && topArrays[6] > -700) {
            var rotate_one = (400 + topArrays[6]) * 45 / 300;
            ninePartThree.css({ "opacity": (700 + topArrays[6]) / 300 });
            $("#silence").css({ "transform": "rotate(" + rotate_one + "deg)" });
            $("#selfie").css({ "transform": "rotate(" + (-rotate_one) + "deg)" });
            ninePartTwo.css({ "opacity": (-400 - topArrays[6]) / 300 });
        } else if (topArrays[6] <= -800 && topArrays[6] > -1100) {
            ninePartTwo.css({ "opacity": (1100 + topArrays[6]) / 300 });
            $("#nine-part-one").css({ "opacity": (-800 - topArrays[6]) / 300 });
        }
    } else if (topArrays[6] <= -1100) {
        getPositionTop(insideSectionNine, 'absolute', '1100px');
    }

    function changeParameters(element_id, value) {
        $(element_id).css({ "top": (value + topArrays[7]) + 'px' });
    }
    var iterStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'],
        values = [250, 450, 600, 1100, 900, 1000, 1500],
        p = [675, 800, 900, 1500];
    if (topArrays[7] < 0 && topArrays[7] > -1000) {
        for (i = 0; i < iterStrings.length; i++) {
            changeParameters('#nine-image-' + iterStrings[i], values[i]);
            if (i < 3) changeParameters('#nine-written-' + iterStrings[i], p[i]);
        }
    }
    if (topArrays[8] > 130) $('#right-section-twelve').css({ "margin-left": "90%" });
    else if (topArrays[8] <= 130) $('#right-section-twelve').css({ "margin-left": "35%" });
    var insideSecThirteen = $('#inside-section-thirteen'),
        thirteenImages = [$('#thirteen-image-one'), $('#thirteen-image-two'), $('#thirteen-image-three'), $('#thirteen-image-four'), $('#thirteen-image-five'), $('#thirteen-image-six'), $('#thirteen-image-seven'), $('#thirteen-image-eight')];

    function changeTop(index, addValue) {
        thirteenImages[index].css({ "top": addValue + (900 + topArrays[9]) * (12 / 5) + 'px' });
    }

    function changeLeftRight(index, styleval, addValue, fraction) {
        if (styleval == 'left') thirteenImages[index].css({ "left": addValue - (topArrays[9] + 400) * (fraction) + '%' });
        else thirteenImages[index].css({ "right": addValue - (topArrays[9] + 400) * (fraction) + '%' });
    }
    if (topArrays[9] > 0) {
        getPositionTop(insideSecThirteen, 'absolute', 0);
    } else if (topArrays[9] <= 0 && topArrays[9] > -300) {
        getPositionTop(insideSecThirteen, 'fixed', '50px');
        thirteenImages[2].css({ "top": -(topArrays[9]) * 4 + 'px' });
        $('#top-content-o').css({ "padding-top": "0" });
        if (topArrays[9] <= -250) $('#content-sect').css({ "display": "none" });
        if (topArrays[9] <= -290) $('#top-content-two').css({ "padding-top": "0" });
        var x = 12 + (topArrays[9]) / 50;
        thirteenImages[2].css({ "transform": "scale(" + x + ")" });
    } else if (topArrays[9] <= -300 && topArrays[9] > -400) {
        $("#content-section").css({ "margin-top": (topArrays[9] + 300) * 3 + 'px' });
    } else if (topArrays[9] <= -400 && topArrays[9] > -900) {
        var y = 6 + (topArrays[9] + 400) / 100;
        var topValues = [0, 100, 0, 100, 450, 550, 450, 550];
        var leftRight = [-200, -100, 55, -310, -200, -100, 55, -310];
        var leftRightFraction = [21 / 50, 14 / 50, 15 / 500, 275 / 500, 21 / 50, 14 / 50, 15 / 500, 275 / 500];
        for (i = 0; i < 8; i++) {
            thirteenImages[i].css({ "transform": "scale(" + y + ")" });
            changeTop(i, topValues[i]);
            if (i == 3 || i == 7) changeLeftRight(i, 'right', leftRight[i], leftRightFraction[i]);
            else changeLeftRight(i, 'left', leftRight[i], leftRightFraction[i]);
        }
    } else if (topArrays[9] <= -900) {
        getPositionTop(insideSecThirteen, 'absolute', '900px');
    }
    var fourteenCondition = [topArrays[10] > -50, topArrays[10] <= -50 && topArrays[10] > -250, topArrays[10] <= -250],
        insideSectionFourteen = $('#inside-section-fourteen'),
        fourteenSectionOne = $('#fourteen-section-one');
    if (fourteenCondition[0]) {
        insideSectionFourteen.css({ "position": "absolute", "top": "0" });
    } else if (fourteenCondition[1]) {
        insideSectionFourteen.css({ "position": "fixed", "top": "-50px" });
        $('#fourteen-section-two').css({ "opacity": (250 + topArrays[10]) / 200 });
        fourteenSectionOne.css({ "opacity": (-50 - topArrays[10]) / 200 });
    } else if (fourteenCondition[2]) {
        insideSectionFourteen.css({ "position": "absolute", "top": "200px" });
    }
    if (topArrays[11] < 50 && topArrays[11] >= -50) $("#sixteen-image-three").css({ "right": (-4 - (50 + topArrays[11]) + '%') });
    if (topArrays[11] <= -50) $("#sixteen-image-two").css({ "display": "none" });
    if (topArrays[12] <= 50) {
        for (i = 0; i < 6; i++) {
            $('#seventeen-line-' + (i + 1)).css({ "padding-top": "0" });
        }
    }
    for (i = 1; i < 4; i++) {
        if (topArrays[13] < 50) $("#inside-eighteen-" + (i + 1)).css({ "margin-top": "0" });
        else $("#inside-eighteen-" + (i + 1)).css({ "margin-top": "-920px" });
    }
    if (topArrays[13] < 50) $("#inside-eighteen-one").css({ "margin-top": "0" });
    else $("#inside-eighteen-one").css({ "margin-top": "-90px" });
    if (topArrays[14] < 50) {
        $('#top-image-two').css({ "opacity": (250 + topArrays[14]) / 250 });
        $('#top-image-one').css({ "opacity": (50 - topArrays[14]) / 250 });
    }
});