function average(scores)
{
    var total= 0;
    scores.forEach(function(score) {
        total +=score;
    });
    var avg=total/scores.length
    return Math.round(avg);
}

console.log("you score on environment science is")
var scores =[89,76,54,99,100];
console.log(average(scores));