function ofAKind(hand,howMany)
    hand.valueSort();
    var valueCounts = [];
    var i=0;

    var count = 1;

    while(j<hand.length-1){
        if(hand.cardAt(i).value === han.cardAt(i+1).value)
            count++;
        else{
            valueCounts.push(count);
            count = 1;
        }
        i++;
    }
    valueCounts.push(count);
    
    return valueCounts.indexOf(howMany)>=0;
}


//Blue Master
//819