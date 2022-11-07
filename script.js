async function getUsers() {

    const resp = await fetch('https://api.randomuser.me/?results=10');
    const data = await resp.json();

    for(i=0; i<data.results.length; i++){

        const userName = data.results[i].name.first;
        const userMail = data.results[i].email;
        const userImage =data.results[i].picture.thumbnail;

        const tbodyData = document.getElementById('tbody');

        let row = document.createElement('tr');
        let row_data_1 = document.createElement('td');
        row_data_1.innerText = userName;
        let row_data_2 = document.createElement('td');
        row_data_2.innerText = userMail;
        let row_data_3 = document.createElement('td');
        let image = document.createElement('img');
        image.setAttribute('src',userImage);
        row_data_3.appendChild (image);
      
        
        row.appendChild(row_data_1);
        row.appendChild(row_data_2);
        row.appendChild(row_data_3);
        tbody.appendChild(row);


    }


}

getUsers()
