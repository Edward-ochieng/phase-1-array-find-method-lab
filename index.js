// code your solution here
function superbowlWin(record){
    const foundWin = record.find(a => a.result === 'W');
    if(foundWin){
        return foundWin.year;
    }
    else {return};
} 