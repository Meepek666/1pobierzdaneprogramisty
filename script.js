let btnGetData = document.getElementById('get-data');

const getData = () => {

    fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(res => res.json())
        .then(data => {
console.log(data);
            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pId.innerText = `Post ID: ${data.imie}`;
            pUserId.innerText = `User ID: ${data.nazwisko}`;
            pTitle.innerText = `Title: ${data.zawod}`;
            pBody.innerText = `Body: ${data.firma}`;

            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);


        })
        .catch(error => {
            console.error(error);
        })


}
btnGetData.addEventListener("click", getData)
