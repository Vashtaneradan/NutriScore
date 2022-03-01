function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

let negativeComponentsList = {};
let positiveComponentsList = {};
let negativeComponentsCalculated = [];
let positiveComponentsCalculated = [];

docReady(function () {
    // DOM is loaded and ready for manipulation here
    const negativeComponents = document.querySelectorAll('.component__N');
    const positiveComponents = document.querySelectorAll('.component__P');


    negativeComponents.forEach(e => e.addEventListener('change', evt => {
        let currentItem = evt.target.name;
        negativeComponentsList[currentItem] = evt.target.value;
        console.log(evt.target.classList);
        if (evt.target.classList.contains('water')) {
            console.log('water');
            updatewater(evt.target.value, currentItem);
        } else {
            update(evt.target.value, currentItem);
        }
        evt.target.nextSibling.querySelector('.reachedPoints').innerHTML = negativeComponentsCalculated[currentItem];
    }))

    positiveComponents.forEach(e => e.addEventListener('change', evt => {
        let currentItem = evt.target.name;
        positiveComponentsList[currentItem] = evt.target.value;
        console.log(evt.target);
        if (evt.target.classList.contains('water')) {
            console.log('water');
            updatewater(evt.target.value, currentItem);
        } else {
            update(evt.target.value, currentItem);
        }
        evt.target.nextSibling.querySelector('.reachedPoints').innerHTML = positiveComponentsCalculated[currentItem];
    }))
});

function updatewater(value, index) {
    switch (index) {
        case 'kj':
            if (value > 270) {
                negativeComponentsCalculated[index] = 10;
            } else if (value <= 270) {
                negativeComponentsCalculated[index] = 9;
            } else if (value <= 240) {
                negativeComponentsCalculated[index] = 8;
            } else if (value <= 210) {
                negativeComponentsCalculated[index] = 7;
            } else if (value <= 180) {
                negativeComponentsCalculated[index] = 6;
            } else if (value <= 150) {
                negativeComponentsCalculated[index] = 5;
            } else if (value <= 120) {
                negativeComponentsCalculated[index] = 4;
            } else if (value <= 90) {
                negativeComponentsCalculated[index] = 3;
            } else if (value <= 60) {
                negativeComponentsCalculated[index] = 2;
            } else if (value <= 30) {
                negativeComponentsCalculated[index] = 1;
            } else if (value <= 0) {
                negativeComponentsCalculated[index] = 0;
            }
            break;
        case 'fat':
            if (value > 10) {
                negativeComponentsCalculated[index] = 10;
            } else if (value > 9) {
                negativeComponentsCalculated[index] = 9;
            } else if (value > 8) {
                negativeComponentsCalculated[index] = 8;
            } else if (value > 7) {
                negativeComponentsCalculated[index] = 7;
            } else if (value > 6) {
                negativeComponentsCalculated[index] = 6;
            } else if (value > 5) {
                negativeComponentsCalculated[index] = 5;
            } else if (value > 4) {
                negativeComponentsCalculated[index] = 4;
            } else if (value > 3) {
                negativeComponentsCalculated[index] = 3;
            } else if (value > 2) {
                negativeComponentsCalculated[index] = 2;
            } else if (value > 1) {
                negativeComponentsCalculated[index] = 1;
            } else if (value <= 1) {
                negativeComponentsCalculated[index] = 0;
            }
            break;
        case 'sugar':
            if (value > 13.5) {
                negativeComponentsCalculated[index] = 10;
            } else if (value <= 13.5) {
                negativeComponentsCalculated[index] = 9;
            } else if (value <= 12) {
                negativeComponentsCalculated[index] = 8;
            } else if (value <= 10.5) {
                negativeComponentsCalculated[index] = 7;
            } else if (value <= 9) {
                negativeComponentsCalculated[index] = 6;
            } else if (value <= 7.5) {
                negativeComponentsCalculated[index] = 5;
            } else if (value <= 6) {
                negativeComponentsCalculated[index] = 4;
            } else if (value <= 4.5) {
                negativeComponentsCalculated[index] = 3;
            } else if (value <= 3) {
                negativeComponentsCalculated[index] = 2;
            } else if (value <= 1.5) {
                negativeComponentsCalculated[index] = 1;
            } else if (value <= 0) {
                negativeComponentsCalculated[index] = 0;
            }
            break;
        case 'salt':
            value = (value / 2.5) * 1000
            if (value > 900) {
                negativeComponentsCalculated[index] = 10;
            } else if (value > 810) {
                negativeComponentsCalculated[index] = 9;
            } else if (value > 720) {
                negativeComponentsCalculated[index] = 8;
            } else if (value > 630) {
                negativeComponentsCalculated[index] = 7;
            } else if (value > 540) {
                negativeComponentsCalculated[index] = 6;
            } else if (value > 450) {
                negativeComponentsCalculated[index] = 5;
            } else if (value > 360) {
                negativeComponentsCalculated[index] = 4;
            } else if (value > 270) {
                negativeComponentsCalculated[index] = 3;
            } else if (value > 180) {
                negativeComponentsCalculated[index] = 2;
            } else if (value > 90) {
                negativeComponentsCalculated[index] = 1;
            } else if (value <= 90) {
                negativeComponentsCalculated[index] = 0;
            }
            break;
    }

    switch (index) {
        case 'extras':
            if (value > 80) {
                positiveComponentsCalculated[index] = 5;
            } else if (value > 60) {
                positiveComponentsCalculated[index] = 4;
            } else if (value > 40) {
                positiveComponentsCalculated[index] = 2;
            } else if (value <= 40) {
                positiveComponentsCalculated[index] = 0;
            }
            break;
        case 'fibres':
            if (value > 7.4) {
                positiveComponentsCalculated[index] = 5;
            } else if (value > 3.7) {
                positiveComponentsCalculated[index] = 4;
            } else if (value > 2.8) {
                positiveComponentsCalculated[index] = 3;
            } else if (value > 1.9) {
                positiveComponentsCalculated[index] = 2;
            } else if (value > 0.9) {
                positiveComponentsCalculated[index] = 1;
            } else if (value <= 1.9) {
                positiveComponentsCalculated[index] = 0;
            }
            break;
        case 'proteins':
            if (value > 8.0) {
                positiveComponentsCalculated[index] = 5;
            } else if (value > 6.4) {
                positiveComponentsCalculated[index] = 4;
            } else if (value > 4.8) {
                positiveComponentsCalculated[index] = 3;
            } else if (value > 3.2) {
                positiveComponentsCalculated[index] = 2;
            } else if (value > 1.6) {
                positiveComponentsCalculated[index] = 1;
            } else if (value <= 1.6) {
                positiveComponentsCalculated[index] = 0;
            }
            break;
    }
}

function update(value, index) {
    switch (index) {
        case 'kj':
            if (value > 3350) {
                negativeComponentsCalculated[index] = 10;
            } else if (value > 3015) {
                negativeComponentsCalculated[index] = 9;
            } else if (value > 2680) {
                negativeComponentsCalculated[index] = 8;
            } else if (value > 2345) {
                negativeComponentsCalculated[index] = 7;
            } else if (value > 2010) {
                negativeComponentsCalculated[index] = 6;
            } else if (value > 1675) {
                negativeComponentsCalculated[index] = 5;
            } else if (value > 1340) {
                negativeComponentsCalculated[index] = 4;
            } else if (value > 1005) {
                negativeComponentsCalculated[index] = 3;
            } else if (value > 670) {
                negativeComponentsCalculated[index] = 2;
            } else if (value > 335) {
                negativeComponentsCalculated[index] = 1;
            } else if (value <= 335) {
                negativeComponentsCalculated[index] = 0;
            }
            break;
        case 'fat':
            if (value > 10) {
                negativeComponentsCalculated[index] = 10;
            } else if (value > 9) {
                negativeComponentsCalculated[index] = 9;
            } else if (value > 8) {
                negativeComponentsCalculated[index] = 8;
            } else if (value > 7) {
                negativeComponentsCalculated[index] = 7;
            } else if (value > 6) {
                negativeComponentsCalculated[index] = 6;
            } else if (value > 5) {
                negativeComponentsCalculated[index] = 5;
            } else if (value > 4) {
                negativeComponentsCalculated[index] = 4;
            } else if (value > 3) {
                negativeComponentsCalculated[index] = 3;
            } else if (value > 2) {
                negativeComponentsCalculated[index] = 2;
            } else if (value > 1) {
                negativeComponentsCalculated[index] = 1;
            } else if (value <= 1) {
                negativeComponentsCalculated[index] = 0;
            }
            break;
        case 'sugar':
            if (value > 45) {
                negativeComponentsCalculated[index] = 10;
            } else if (value > 40) {
                negativeComponentsCalculated[index] = 9;
            } else if (value > 36) {
                negativeComponentsCalculated[index] = 8;
            } else if (value > 31) {
                negativeComponentsCalculated[index] = 7;
            } else if (value > 27) {
                negativeComponentsCalculated[index] = 6;
            } else if (value > 22.5) {
                negativeComponentsCalculated[index] = 5;
            } else if (value > 18) {
                negativeComponentsCalculated[index] = 4;
            } else if (value > 13.5) {
                negativeComponentsCalculated[index] = 3;
            } else if (value > 9) {
                negativeComponentsCalculated[index] = 2;
            } else if (value > 4.5) {
                negativeComponentsCalculated[index] = 1;
            } else if (value <= 4.5) {
                negativeComponentsCalculated[index] = 0;
            }
            break;
        case 'salt':
            value = (value / 2.5) * 1000
            if (value > 900) {
                negativeComponentsCalculated[index] = 10;
            } else if (value > 810) {
                negativeComponentsCalculated[index] = 9;
            } else if (value > 720) {
                negativeComponentsCalculated[index] = 8;
            } else if (value > 630) {
                negativeComponentsCalculated[index] = 7;
            } else if (value > 540) {
                negativeComponentsCalculated[index] = 6;
            } else if (value > 450) {
                negativeComponentsCalculated[index] = 5;
            } else if (value > 360) {
                negativeComponentsCalculated[index] = 4;
            } else if (value > 270) {
                negativeComponentsCalculated[index] = 3;
            } else if (value > 180) {
                negativeComponentsCalculated[index] = 2;
            } else if (value > 90) {
                negativeComponentsCalculated[index] = 1;
            } else if (value <= 90) {
                negativeComponentsCalculated[index] = 0;
            }
            break;
    }

    switch (index) {
        case 'extras':
            if (value === 80) {
                positiveComponentsCalculated[index] = 5;
            } else if (value > 60) {
                positiveComponentsCalculated[index] = 2;
            } else if (value > 40) {
                positiveComponentsCalculated[index] = 1;
            } else if (value <= 40) {
                positiveComponentsCalculated[index] = 0;
            }
            break;
        case 'fibres':
            if (value > 7.4) {
                positiveComponentsCalculated[index] = 5;
            } else if (value > 3.7) {
                positiveComponentsCalculated[index] = 4;
            } else if (value > 2.8) {
                positiveComponentsCalculated[index] = 3;
            } else if (value > 1.9) {
                positiveComponentsCalculated[index] = 2;
            } else if (value > 0.9) {
                positiveComponentsCalculated[index] = 1;
            } else if (value <= 1.9) {
                positiveComponentsCalculated[index] = 0;
            }
            break;
        case 'proteins':
            if (value > 8.0) {
                positiveComponentsCalculated[index] = 5;
            } else if (value > 6.4) {
                positiveComponentsCalculated[index] = 4;
            } else if (value > 4.8) {
                positiveComponentsCalculated[index] = 3;
            } else if (value > 3.2) {
                positiveComponentsCalculated[index] = 2;
            } else if (value > 1.6) {
                positiveComponentsCalculated[index] = 1;
            } else if (value <= 1.6) {
                positiveComponentsCalculated[index] = 0;
            }
            break;
    }
}

function calculateScoreNormal(event) {
    let resultPoints;
    event.preventDefault();
    const negativeComponentValue = Object.values(negativeComponentsCalculated).reduce((accu, currentValue) => accu + currentValue);
    const positiveComponentValue = Object.values(positiveComponentsCalculated).reduce((accu, currentValue) => accu + currentValue);

    if (negativeComponentValue < 11) {
        resultPoints = negativeComponentValue - positiveComponentValue;
    } else {
        if (positiveComponentsCalculated[0] < 5) {
            resultPoints = negativeComponentValue - (positiveComponentsCalculated[0] + positiveComponentsCalculated[2]);
        } else {
            resultPoints = negativeComponentValue - positiveComponentValue;
        }
    }
    console.log(resultPoints);

    let nutriScore = '';
    let backgroundColor = '';
    if (resultPoints >= 19 && resultPoints <= 40) {
        nutriScore = 'E';
        backgroundColor = '#EF2D1A';
    } else if (resultPoints >= 11 && resultPoints <= 18) {
        nutriScore = 'D';
        backgroundColor = '#F4730E';
    } else if (resultPoints >= 3 && resultPoints <= 10) {
        nutriScore = 'C';
        backgroundColor = '#FBC801';
    } else if (resultPoints >= 0 && resultPoints <= 2) {
        nutriScore = 'B';
        backgroundColor = '#74C928';
    } else if (resultPoints >= -15 && resultPoints <= -1) {
        nutriScore = 'A';
        backgroundColor = '#0E8648';
    }

    document.querySelector('.slider').value = resultPoints;
    document.querySelector('#resultPoints').innerHTML = `You reached ${resultPoints.toString()} points.`;
    document.querySelector('#resultScore').innerHTML = `Nutri Score:  ${nutriScore}`;
    document.querySelector('#resultScore').style['background-color'] = backgroundColor;
}

function calculateScoreCheese(event) {
    event.preventDefault();
    const negativeComponentValue = Object.values(negativeComponentsCalculated).reduce((accu, currentValue) => accu + currentValue);
    const positiveComponentValue = Object.values(positiveComponentsCalculated).reduce((accu, currentValue) => accu + currentValue);

    const resultPoints = negativeComponentValue - positiveComponentValue;

    let nutriScore = '';
    let backgroundColor = '';
    if (resultPoints >= 19 && resultPoints <= 40) {
        nutriScore = 'E';
        backgroundColor = '#EF2D1A';
    } else if (resultPoints >= 11 && resultPoints <= 18) {
        nutriScore = 'D';
        backgroundColor = '#F4730E';
    } else if (resultPoints >= 3 && resultPoints <= 10) {
        nutriScore = 'C';
        backgroundColor = '#FBC801';
    } else if (resultPoints >= 0 && resultPoints <= 2) {
        nutriScore = 'B';
        backgroundColor = '#74C928';
    } else if (resultPoints >= -15 && resultPoints <= -1) {
        nutriScore = 'A';
        backgroundColor = '#0E8648';
    }

    document.querySelector('.slider').value = resultPoints;
    document.querySelector('#resultPoints').innerHTML = `You reached ${resultPoints.toString()} points.`;
    document.querySelector('#resultScore').innerHTML = `Nutri Score:  ${nutriScore}`;
    document.querySelector('#resultScore').style['background-color'] = backgroundColor;
}

function calculateScoreLiquid(event) {
    event.preventDefault();
    const negativeComponentValue = Object.values(negativeComponentsCalculated).reduce((accu, currentValue) => accu + currentValue);
    const positiveComponentValue = Object.values(positiveComponentsCalculated).reduce((accu, currentValue) => accu + currentValue);

    const resultPoints = negativeComponentValue - positiveComponentValue;

    let nutriScore = '';
    let backgroundColor = '';
    if (resultPoints >= 10 && resultPoints <= 40) {
        nutriScore = 'E';
        backgroundColor = '#EF2D1A';
    } else if (resultPoints >= 6 && resultPoints <= 9) {
        nutriScore = 'D';
        backgroundColor = '#F4730E';
    } else if (resultPoints >= 2 && resultPoints <= 5) {
        nutriScore = 'C';
        backgroundColor = '#FBC801';
    } else if (resultPoints >= -15 && resultPoints <= 1) {
        nutriScore = 'B';
        backgroundColor = '#74C928';
    } else if (resultPoints === -15) {
        nutriScore = 'A';
        backgroundColor = '#0E8648';
    }

    document.querySelector('.slider').value = resultPoints;
    document.querySelector('#resultPoints').innerHTML = `You reached ${resultPoints.toString()} points.`;
    document.querySelector('#resultScore').innerHTML = `Nutri Score:  ${nutriScore}`;
    document.querySelector('#resultScore').style['background-color'] = backgroundColor;
}
