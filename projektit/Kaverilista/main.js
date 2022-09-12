const friends = [];
i = 0;

function add() {
    if(i<10){
        i++
        addFriend = document.getElementById("kaverit").value;
        friends.push(addFriend);
        document.getElementById("1").innerHTML = friends;
        document.getElementById("kaverit").value = '';
        document.getElementById("1").innerHTML = '1. ' + friends [0];
        document.getElementById("2").innerHTML = '2. ' + friends [1];
        document.getElementById("3").innerHTML = '3. ' + friends [2];
        document.getElementById("4").innerHTML = '4. ' + friends [3];
        document.getElementById("5").innerHTML = '5. ' + friends [4];
        document.getElementById("6").innerHTML = '6. ' + friends [5];
        document.getElementById("7").innerHTML = '7. ' + friends [6];
        document.getElementById("8").innerHTML = '8. ' + friends [7];
        document.getElementById("9").innerHTML = '9. ' + friends [8];
        document.getElementById("10").innerHTML = '10. ' + friends [9];
    }
}

function del(){
    if(i<20){
        i = i - 1;
        delFriend = document.getElementById('kaverit').value;
        let index = friends.indexOf(delFriend);
        if (index > -1) {
            friends.splice(index, 1);
        }
        console.log(friends);
    }
    document.getElementById('kaverit').value = '';
    document.getElementById('1').innerHTML = '1. ' + friends [0];
    document.getElementById('2').innerHTML = '2. ' + friends [1];
    document.getElementById('3').innerHTML = '3. ' + friends [2];
    document.getElementById('4').innerHTML = '4. ' + friends [3];
    document.getElementById('5').innerHTML = '5. ' + friends [4];
    document.getElementById('6').innerHTML = '6. ' + friends [5];
    document.getElementById('7').innerHTML = '7. ' + friends [6];
    document.getElementById('8').innerHTML = '8. ' + friends [7];
    document.getElementById('9').innerHTML = '9. ' + friends [8];
    document.getElementById('10').innerHTML = '10. ' + friends [9];
}

function sort(){
    friends.sort();
    document.getElementById('kaverit').value = '';
    document.getElementById('1').innerHTML = '1. ' + friends [0];
    document.getElementById('2').innerHTML = '2. ' + friends [1];
    document.getElementById('3').innerHTML = '3. ' + friends [2];
    document.getElementById('4').innerHTML = '4. ' + friends [3];
    document.getElementById('5').innerHTML = '5. ' + friends [4];
    document.getElementById('6').innerHTML = '6. ' + friends [5];
    document.getElementById('7').innerHTML = '7. ' + friends [6];
    document.getElementById('8').innerHTML = '8. ' + friends [7];
    document.getElementById('9').innerHTML = '9. ' + friends [8];
    document.getElementById('10').innerHTML = '10. ' + friends [9];
}
