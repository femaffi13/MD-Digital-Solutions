fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())
.then(data => mostrarData(data))
.catch(error => console.log(error));

const mostrarData = (data) =>{
    let body = '';

    for (let i=0; i<data.length; i++){
        body += `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].username}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].address.street}, ${data[i].address.suite}</td>
                    <td>${data[i].address.city}</td>
                </tr>`;
    }

    document.getElementById('body').innerHTML = body;
}

