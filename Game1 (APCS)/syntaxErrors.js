function ofAKind(hand,howMany){
    hand.valueSort();
    valueCounts = [];
    var i=0;

    var count = 1;
    var highCount = count;

    while(i<hand.length-1){
        if(hand.cardAt(i).value === hand.cardAt(i+1).value)
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