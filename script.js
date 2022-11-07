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

/*let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Name";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Email";
let heading_3 = document.createElement('th');
heading_3.innerHTML =" Photo"


row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = ;
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = "an email_2.2";
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "an image_2.3"

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);




let row_3 = document.createElement('tr');
let row_3_data_1 = document.createElement('td');
row_3_data_1.innerHTML = "name_3.1";
let row_3_data_2 = document.createElement('td');
row_3_data_2.innerHTML ="email_3.2";
let row_3_data_3 =document. createElement('td');
row_3_data_3.innerHTML= "photo_3.3";


row_3.appendChild(row_3_data_1);
row_3.appendChild(row_3_data_2);
row_3.appendChild(row_3_data_3);
tbody.appendChild(row_3);

*/
