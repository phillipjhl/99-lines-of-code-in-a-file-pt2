
document.addEventListener('DOMContentLoaded', function () {
    let button = document.createElement('button');
    button.innerText = 'Sing!';
    document.body.appendChild(button);
    button.addEventListener('click', function () {
        let friends = ['Katrina', 'Norah', 'Walt', 'Hank', 'Denis'];
        for (i = 0; i < friends.length; i++) {
            let name = friends[i];
            let friendDiv = document.createElement('div');
            friendDiv.className = 'friend';
            document.body.appendChild(friendDiv);
            let header = document.createElement('h3');
            header.innerHTML = '' + name + '';
            friendDiv.appendChild(header);
            for (j = 99; j > 0; j--) {
                if (j > 1) {
                    let songLine = document.createElement('p');
                    songLine.innerHTML = j + ' lines of code in the file, ' + j + ' lines of code; ' + name + ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file';
                    friendDiv.appendChild(songLine);
                }
                else {
                    let endLine = document.createElement('p');
                    endLine.innerHTML = j + ' line of code in the file, ' + j + ' line of code; ' + name + ' strikes one out, clears it all out, no more lines of code in the file';
                    friendDiv.appendChild(endLine);
                }
            }
        }
    });    
});