//iGotTech

var number = 0;
var combination = "";

for(var b=3; b<9; b++)
    number++;

combination += number;
number = 0;

for(var c=12; c<32; c+=4)
    number++;

combination += number;
number = 0;

for(var d=80; d<70; d+=2)
    number++;

combination += number;
number = 1;

for(var e=100; d<850; d+=100)
    number++;

combination += number;

console.log(combination);

//black word lock
var list1 = ['T','B','2','Z','9','L','8','3','H','R','7','E','6','R','G'];
var list2 = ['9','7','C','B','T','8','L','P','E','U','1','R','Z','0','G'];
var list3 = [];

for(var a=0; a<list1.length; a++){
    if(list1.indexOf(list2[a])<0)
        list3.push(list2[a]);
}

console.log(list3);