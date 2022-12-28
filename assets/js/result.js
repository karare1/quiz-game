const name = document.getElementById('username');
        const saveBtn = document.getElementById('save-btn');
        const sumPoints = document.getElementById('p-result');
        // get the player's result from the local storage
        const totalResult = localStorage.getItem('totalResult');
    
        // an array of highscores 
        const topScore = JSON.parse(localStorage.getItem('topScore')) || [];
         console.log(topScore);

        const highestResults = 7;
        //displaying the resut from local storage in the result page
        sumPoints.innerText = `${totalResult} / 1200`;

        function saveScore(event) {
         event.preventDefault();

        const result = {
            result: totalResult,
            userName: name.value,
        };


        // push object result into an array
        topScore.push(result);


        //sort out the scores, compararing a new score with previous high scores
        topScore.sort(function(a, b) { 
            return b.result - a.result;
        });

        //displaying only highest 7 scores 
        topScore.splice(7);



        //updating highscore
        // converting array into string using JSON stringify() method
        localStorage.setItem('topScore', JSON.stringify(topScore));
         window.location.assign('/');
    };

        let saveResult = document.forms[0];
        saveResult.addEventListener('submit', saveScore);


