$(document).ready(function() {
    let selectChange = document.getElementById("select_change");
    const firstName = document.querySelectorAll('.first_name');
    const lastName = document.querySelectorAll('.last_name');
    var arrayFirstObject = [],
        arrayFirstName = [],
        arrayLastObject = [],
        arrayLastName = [],
        arraySequenceNum = [];
    for (let i = 0; i < firstName.length; i++) {
        arrayFirstObject[i] = {
            'id': firstName[i].parentNode.parentNode.parentNode.id,
            'firstName': firstName[i].innerText
        }
        arrayFirstName[i] = firstName[i].innerText;
    }
    for (let i = 0; i < lastName.length; i++) {
        arrayLastObject[i] = {
            'id': lastName[i].parentNode.parentNode.parentNode.id,
            'lastName': lastName[i].innerText
        }
        arrayLastName[i] = lastName[i].innerText;
    }
    arrayFirstName.sort();
    console.log(arrayFirstName);
    arrayLastName.sort();
    console.log(arrayLastName);
    var arr = [],
        list = document.getElementById('place-list'),
        c = list.children,
        l = c.length;
    for (let i = 0; i < l; i++) arr[i] = c[i];
    selectChange.onchange = function() {

        if (selectChange.value == 0) {
            for (let i = 0; i < l; i++) {
                list.appendChild(arr[i]);
            }
        }
        if (selectChange.value == 1) {
            arrayFirstName.sort();
            for (let i = 0; i < l; i++) {
                for (let j = 0; j < l; j++) {
                    console.log(arrayFirstName[i]);
                    if (arrayFirstName[i] == arrayFirstObject[j]['firstName']) {
                        let idValue = arrayFirstObject[j]['id']
                        list.appendChild(arr[idValue - 1]);
                    }
                }
            }
        }
        if (selectChange.value == 2) {
            for (i = 0; i < l; i++) {
                for (let j = 0; j < l; j++) {
                    if (arrayLastName[i] == arrayLastObject[j]['lastName']) {
                        let idValue = arrayLastObject[j]['id'];
                        list.appendChild(arr[idValue - 1]);
                    }
                }
            }
        }
    }

});