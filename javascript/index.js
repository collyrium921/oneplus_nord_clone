document.addEventListener('DOMContentLoaded', delaySlide);

function delaySlide() {
    var visible = 3;

    function vis() {
        if (position < 600) {
            getStyle('black-stage-left').height = visible + 'px';
            visible += 3;
            setTimeout(vis, 1);
        }
    }
    setTimeout(vis, 1);
    var position = 1;

    function slider() {
        if (position < 700) {
            getStyle('black').right = position * -5 + 'px';
            if (position == 70)
                getStyle('black-stage-left').display = "none";
            position++;
            setTimeout(slider, 1);
        }
    }
    setTimeout(slider, 2000);
}

function getTop(element_name) { return document.getElementById(element_name).getBoundingClientRect().top; }

function getStyle(element_name) { return document.getElementById(element_name).style; }

function changeWidth(w) { getStyle("button").width = w + 'px'; }

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop,
        navbar = getStyle('navbar'),
        wrapper = getStyle('wrapper'),
        topArrays = [getTop('section-two'), getTop("section-three"), getTop('section-four'), getTop("section-five"), getTop("section-six"), getTop("section-eight"), getTop("section-nine"), getTop("section-eleven"), getTop("section-twelve"), getTop("section-thirteen"), getTop("section-fourteen"), getTop("section-sixteen"), getTop("section-seventeen"), getTop("section-eighteen"), getTop("section-ninteen")];
    navbar.position = scroll > 50 ? "fixed" : "absolute";
    navbar.top = scroll > 50 ? 0 : '60px';
    if (scroll < 50) {
        wrapper.transform = "translateX(70%)";
    } else if (scroll >= 50 && scroll < 750) {
        var translate = 70 - (scroll - 50) / 10;
        wrapper.transform = "translateX(" + translate + "%)";
    } else if (scroll >= 750) {
        wrapper.transform = "translateX(0%)";
    }
    var contentArray = [],
        changeWidth = [],
        changeImage = [],
        arr = ['flagship-camera', 'nightscape', 'dual-selfie', 'oxygen', 'display', 'snapdragon', 'ready', 'charge'],
        changeColor = [topArrays[0] <= 220 && topArrays[0] > 170, topArrays[0] <= 170 && topArrays[0] > 120, topArrays[0] <= 120 && topArrays[0] > 70, topArrays[0] <= 70 && topArrays[0] > 50, topArrays[0] <= 50 && topArrays[0] > 0, topArrays[0] <= 0 && topArrays[0] > -50, topArrays[0] <= -50 && topArrays[0] > -100, topArrays[0] <= -100 && topArrays[0] > -200];
    for (i = 0; i < 8; i++) {
        var s = 'title-' + (i + 1).toString();
        contentArray.push(getStyle(s));
        changeWidth.push(getStyle(arr[i]));
        changeImage.push(getStyle(arr[i] + '-image'));
    }
    for (i = 0; i < 8; i++) {
        changeWidth[i].color = (changeColor[i] ? "black" : "#b2b2b2");
        changeWidth[i].fontSize = (changeColor[i] ? 2.5 : 2) + 'em';
        changeImage[i].zIndex = changeColor[i] ? i + 1 : 0;
        contentArray[i].display = changeColor[i] ? "block" : "none";
    }
    var secThreeCondition = [topArrays[1] <= 50 && topArrays[1] > -550, topArrays[1] <= -550 && topArrays[1] > -950, topArrays[1] >= -800],
        partOne = getStyle('part-one');
    partOne.zIndex = secThreeCondition[0] ? 1 : secThreeCondition[1] ? 3 : "null";
    partOne.backgroundColor = secThreeCondition[0] ? "black" : "null";
    partOne.top = secThreeCondition[0] ? 0 : secThreeCondition[1] ? '550px' : secThreeCondition[2] ? 0 : "null";
    partOne.position = secThreeCondition[0] ? "fixed" : secThreeCondition[1] ? "absolute" : secThreeCondition[2] ? "absolute" : "null";
    partOne.paddingTop = secThreeCondition[0] ? '50px' : "null";
    partOne.display = secThreeCondition[0] ? "block" : secThreeCondition[1] ? "block" : secThreeCondition[2] ? "none" : "null";
    getStyle('part-two').paddingTop = secThreeCondition[0] ? (50 - topArrays[1]) + 'px' : "null";
    navbar.backgroundColor = secThreeCondition[0] ? "white" : secThreeCondition[1] ? "black" : secThreeCondition[2] ? "white" : "null";
    navbar.color = secThreeCondition[0] ? "black" : secThreeCondition[1] ? "white" : secThreeCondition[2] ? "black" : "null";
    var insideSecFour = getStyle('inside-section-four'),
        secFourImage = getStyle('section-four-image'),
        leftContentTwo = getStyle('left-content-two');
    if (topArrays[2] > 120) {
        insideSecFour.position = "absolute";
        insideSecFour.top = '50px';
    } else if (topArrays[2] <= 120 && topArrays[2] >= 50) {
        secFourImage.right = -100 + (120 - topArrays[2]) * 40 / 70 + '%';
        getStyle('section-left-content').opacity = (120 - topArrays[2]) / 120;
        navbar.backgroundColor = "black";
        navbar.color = "white";
    } else if (topArrays[2] < 50 && topArrays[2] >= -190) {
        insideSecFour.position = "fixed";
        insideSecFour.top = '50px';
        getStyle('left-im').top = (-190 - topArrays[2]) + 'px';
        secFourImage.right = -60 + (50 - topArrays[2]) * 20 / 240 + '%';
        navbar.backgroundColor = "white";
        navbar.color = "black";
    } else if (topArrays[2] < -190 && topArrays[2] >= -590) {
        getStyle('left-section-four').top = (190 + topArrays[2]) + 'px';
        secFourImage.width = 100 + (190 + topArrays[2]) * 35 / 780 + '%';
        secFourImage.right = -40 + (-190 - topArrays[2]) * 40 / 400 + '%';
        getStyle('top-image').opacity = (590 + topArrays[2]) / 400;
        getStyle('left-content-one').opacity = (-190 - topArrays[2]) / 400;
    } else if (topArrays[2] < -590 && topArrays[2] >= -790) {
        leftContentTwo.marginTop = (790 + topArrays[2]) + 'px';
        for (i = 0; i < 4; i++) {
            getStyle('line-' + (i + 1)).opacity = (-590 - topArrays[2]) / 200;
            getStyle('content-' + (i + 1) + '-line').opacity = (-590 - topArrays[2]) / 200;
        }
        secFourImage.top = 50 + 'px';
    } else if (topArrays[2] < -790 && topArrays[2] >= -800) {
        for (i = 0; i < 4; i++) {
            getStyle('line-' + (i + 1)).width = '120px';
            getStyle('content-' + (i + 1) + '-line').marginTop = '-2px';
        }
        leftContentTwo.marginTop = 0;
        secFourImage.top = '50px';
    } else if (topArrays[2] < -800) {
        insideSecFour.position = "absolute";
        insideSecFour.top = '800px';
        leftContentTwo.marginTop = 0;
        secFourImage.top = '50px';
    }
    var secImageOne = getStyle('section-image-one'),
        secImageThree = getStyle('section-image-three');
    if (topArrays[3] < 50 && topArrays[3] >= -250) {
        getStyle('section-five-content').opacity = (100 + topArrays[3]) / 150;
        secImageOne.marginLeft = 15 + (50 - topArrays[3]) * 25 / 300 + '%';
        secImageThree.marginLeft = 65 - (50 - topArrays[3]) * 25 / 300 + '%';
        secImageOne.marginTop = 150 - (50 - topArrays[3]) * 50 / 300 + 'px';
        secImageThree.marginTop = 50 + (50 - topArrays[3]) * 50 / 300 + 'px';
    }
    var secSixCondition = [topArrays[4] <= 275 && topArrays[4] >= 0, topArrays[4] < 0],
        secSixContent = getStyle('section-six-content');
    getStyle('sec-six-black').opacity = secSixCondition[0] ? (topArrays[4]) / 275 : "null";
    navbar.backgroundColor = secSixCondition[0] ? "white" : secSixCondition[1] ? "black" : "null";
    navbar.color = secSixCondition[0] ? "black" : secSixCondition[1] ? "white" : "null";
    secSixContent.opacity = secSixCondition[0] ? (275 - topArrays[4]) / 275 : "null";
    secSixContent.opacity = secSixCondition[1] ? (20 + topArrays[4]) / 20 : "null";
    var secEightCondition = [topArrays[5] <= 215 && topArrays[5] > 0, topArrays[5] <= 0 && topArrays[5] > -50, topArrays[5] <= -50, ],
        secEightInside = getStyle('section-eight-inside');
    secEightInside.position = secEightCondition[0] ? "absolute" : secEightCondition[1] ? "fixed" : secEightCondition[2] ? "absolute" : "null";
    secEightInside.top = secEightCondition[0] ? 0 : secEightCondition[1] ? 0 : secEightCondition[2] ? '50px' : "null";
    getStyle('div-one').height = secEightCondition[0] ? 150 - (215 - topArrays[5]) * 150 / 215 + 'px' : "null";
    getStyle('div-two').left = secEightCondition[0] ? -(215 - topArrays[5]) * 40 / 215 + '%' : "null";
    getStyle('div-three').right = secEightCondition[0] ? -(215 - topArrays[5]) * 40 / 215 + '%' : "null";
    getStyle('variable-section').opacity = secEightCondition[1] ? (50 + topArrays[5]) / 50 : "null";
    navbar.backgroundColor = secEightCondition[0] ? "black" : secEightCondition[1] ? "white" : secEightCondition[2] ? "white" : "null";
    navbar.color = secEightCondition[0] ? "white" : secEightCondition[1] ? "black" : secEightCondition[2] ? "black" : "null";
    var insideSectionNine = getStyle('inside-section-nine'),
        ninePartTwo = getStyle('nine-part-two'),
        ninePartThree = getStyle('nine-part-three'),
        mask = getStyle('mask');
    if (topArrays[6] > 50) {
        insideSectionNine.position = "absolute";
        insideSectionNine.top = 0;
    } else if (topArrays[6] <= 50 && topArrays[6] > -1100) {
        insideSectionNine.position = "fixed";
        insideSectionNine.top = '50px';
        mask.display = "block";
        if (topArrays[6] <= 0 && topArrays[6] > -300) {
            mask.display = "none";
            getStyle('nine-part-four').opacity = (300 + topArrays[6]) / 300;
            ninePartThree.opacity = -(topArrays[6]) / 300;
        } else if (topArrays[6] <= -400 && topArrays[6] > -700) {
            var rotate_one = (400 + topArrays[6]) * 45 / 300;
            ninePartThree.opacity = (700 + topArrays[6]) / 300;
            getStyle('silence').transform = "rotate(" + rotate_one + "deg)";
            getStyle('selfie').transform = "rotate(" + (-rotate_one) + "deg)";
            ninePartTwo.opacity = (-400 - topArrays[6]) / 300;
        } else if (topArrays[6] <= -800 && topArrays[6] > -1100) {
            ninePartTwo.opacity = (1100 + topArrays[6]) / 300;
            getStyle('nine-part-one').opacity = (-800 - topArrays[6]) / 300;
        }
    } else if (topArrays[6] <= -1100) {
        insideSectionNine.position = "absolute";
        insideSectionNine.top = '1100px';
    }

    function changeParameters(element_id, value) {
        getStyle(element_id).top = (value + topArrays[7]) + 'px';
    }
    var iterStrings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven'];
    var values = [250, 450, 600, 1100, 900, 1000, 1500];
    var p = [675, 800, 900, 1500];
    if (topArrays[7] < 0 && topArrays[7] > -1000) {
        for (i = 0; i < iterStrings.length; i++) {
            changeParameters('nine-image-' + iterStrings[i], values[i]);
            if (i < 3) changeParameters('nine-written-' + iterStrings[i], p[i]);
        }
    }
    getStyle('right-section-twelve').marginLeft = (topArrays[8] > 130) ? '90%' : (topArrays[8] <= 130) ? '35%' : "null";

    var insideSecThirteen = getStyle('inside-section-thirteen'),
        thirteenImages = [getStyle('thirteen-image-one'), getStyle('thirteen-image-two'), getStyle('thirteen-image-three'), getStyle('thirteen-image-four'), getStyle('thirteen-image-five'), getStyle('thirteen-image-six'), getStyle('thirteen-image-seven'), getStyle('thirteen-image-eight')];

    function changeTop(index, addValue) {
        thirteenImages[index].top = addValue + (900 + topArrays[9]) * (12 / 5) + 'px';
    }

    function changeLeftRight(index, styleval, addValue, fraction) {
        if (styleval == 'left') thirteenImages[index].left = addValue - (topArrays[9] + 400) * (fraction) + '%';
        else thirteenImages[index].right = addValue - (topArrays[9] + 400) * (fraction) + '%';
    }
    if (topArrays[9] > 0) {
        insideSecThirteen.position = "absolute";
        insideSecThirteen.top = 0;
    } else if (topArrays[9] <= 0 && topArrays[9] > -300) {
        insideSecThirteen.position = "fixed";
        insideSecThirteen.top = 50 + 'px';
        thirteenImages[2].top = -(topArrays[9]) * 4 + 'px';
        getStyle('top-content-o').paddingTop = 0;
        if (topArrays[9] <= -250) {
            getStyle('content-sect').display = "none";
        }
        if (topArrays[9] <= -290) {
            getStyle('top-content-two').paddingTop = 0;
        }
        var x = 12 + (topArrays[9]) / 50;
        thirteenImages[2].transform = "scale(" + x + ")";
    } else if (topArrays[9] <= -300 && topArrays[9] > -400) {
        getStyle('content-section').marginTop = (topArrays[9] + 300) * 3 + 'px';
    } else if (topArrays[9] <= -400 && topArrays[9] > -900) {
        var y = 6 + (topArrays[9] + 400) / 100;
        var topValues = [0, 100, 0, 100, 450, 550, 450, 550];
        var leftRight = [-200, -100, 55, -310, -200, -100, 55, -310];
        var leftRightFraction = [21 / 50, 14 / 50, 15 / 500, 275 / 500, 21 / 50, 14 / 50, 15 / 500, 275 / 500];
        for (i = 0; i < 8; i++) {
            thirteenImages[i].transform = "scale(" + y + ")";
            changeTop(i, topValues[i]);
        }
        for (i = 0; i < 8; i++) {
            if (i == 3 || i == 7) changeLeftRight(i, 'right', leftRight[i], leftRightFraction[i]);
            else changeLeftRight(i, 'left', leftRight[i], leftRightFraction[i]);
        }
    } else if (topArrays[9] <= -900) {
        insideSecThirteen.position = "absolute";
        insideSecThirteen.top = 900 + 'px';
    }

    var fourteenCondition = [topArrays[10] > -50, topArrays[10] <= -50 && topArrays[10] > -250, topArrays[10] <= -250],
        insideSectionFourteen = getStyle('inside-section-fourteen'),
        fourteenSectionOne = getStyle('fourteen-section-one');
    insideSectionFourteen.position = fourteenCondition[0] ? "absolute" : fourteenCondition[1] ? "fixed" : fourteenCondition[2] ? "absolute" : "null";
    insideSectionFourteen.top = fourteenCondition[0] ? 0 : fourteenCondition[1] ? -50 + 'px' : fourteenCondition[2] ? 200 + 'px' : "null";
    getStyle('fourteen-section-two').opacity = fourteenCondition[1] ? (250 + topArrays[10]) / 200 : "null";
    fourteenSectionOne.opacity = fourteenCondition[1] ? (-50 - topArrays[10]) / 200 : "null";
    fourteenSectionOne.opacity = fourteenCondition[2] ? 1 : "null";
    getStyle('sixteen-image-three').right = (topArrays[11] < 50 && topArrays[11] >= -50) ? (-4 - (50 + topArrays[11]) + '%') : "null";
    getStyle('sixteen-image-two').display = topArrays[11] <= -50 ? "none" : "null";
    if (topArrays[12] <= 50) {
        for (i = 0; i < 6; i++) {
            getStyle('seventeen-line-' + (i + 1)).paddingTop = 0;
        }
        getStyle('seventeen-image').marginTop = 0;
    }
    for (i = 1; i < 4; i++) { getStyle('inside-eighteen-' + (i + 1)).marginTop = topArrays[13] < 50 ? 0 : -920 + 'px'; }
    getStyle('inside-eighteen-one').marginTop = topArrays[13] < 50 ? 0 : '-90px';
    if (topArrays[14] < 50) {
        getStyle('top-image-two').opacity = (250 + topArrays[14]) / 250;
        getStyle('top-image-one').opacity = (50 - topArrays[14]) / 250;
    }
}