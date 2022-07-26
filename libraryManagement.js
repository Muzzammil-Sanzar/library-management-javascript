// document.getElementById('test').style.backgroundColor = "#F6FBF4";
// document.querySelector('h1').innerHTML = "from JavaScript";
// document.querySelector('.submit').addEventListener('click', function(event){
//     alert('you have pressed me....')
// });
let counter = 1;
let indexOfData;
let name = document.querySelector('#name');
let author = document.querySelector('#author');
let publisher = document.querySelector('#publisher');
let date = document.querySelector('#date');

displayData();
function Add(){
    // displayData();
    let name = document.querySelector('#name').value;
    let author = document.querySelector('#author').value;
    let publisher = document.querySelector('#publisher').value;
    let date = document.querySelector('#date').value;

    if(name === '' && author === '' && publisher ==='' && date ===''){
        document.querySelector('.error').innerHTML = '&#9888 please fill this field';
        document.querySelector('#authorError').innerHTML = '&#9888 please fill this field';
        document.querySelector('#publisherError').innerHTML = '&#9888 please fill this field';
        document.querySelector('#dateError').innerHTML = '&#9888 please fill this field';
    } else if(name != '' && author === '' && publisher ==='' && date ===''){
        document.querySelector('.error').innerHTML = '';
        document.querySelector('#authorError').innerHTML = '&#9888 please fill this field';
        document.querySelector('#publisherError').innerHTML = '&#9888 please fill this field';
        document.querySelector('#dateError').innerHTML = '&#9888 please fill this field';
    } else if(name != '' && author != '' && publisher ==='' && date ===''){
        document.querySelector('.error').innerHTML = '';
        document.querySelector('#authorError').innerHTML = '';
        document.querySelector('#publisherError').innerHTML = '&#9888 please fill this field';
        document.querySelector('#dateError').innerHTML = '&#9888 please fill this field';
    } else if(name != '' && author != '' && publisher !='' && date ===''){
        document.querySelector('.error').innerHTML = '';
        document.querySelector('#authorError').innerHTML = '';
        document.querySelector('#publisherError').innerHTML = '';
        document.querySelector('#dateError').innerHTML = '&#9888 please fill this field';
    } else if(name === '' && author != '' && publisher ==='' && date ===''){
        document.querySelector('.error').innerHTML = '&#9888 please fill this field';
        document.querySelector('#authorError').innerHTML = '';
        document.querySelector('#publisherError').innerHTML = '&#9888 please fill this field';
        document.querySelector('#dateError').innerHTML = '&#9888 please fill this field';
    } else if(name != '' && author != '' && publisher !='' && date !=''){
        document.querySelector('.error').innerHTML = '';
        document.querySelector('#authorError').innerHTML = '';
        document.querySelector('#publisherError').innerHTML = '';
        document.querySelector('#dateError').innerHTML = '';
        let avalable = false;
        let localdata = localStorage.getItem("bookData");
        if(localdata == null){
            data = [];
        } else {
            data = JSON.parse(localdata);
        }
        data.forEach((item) => 
            (item.name.toLowerCase() === name.toLowerCase()) ? avalable = true : ''
            );
            console.log(name)
        if(avalable === false){
            data.push({name, author, publisher, date});
            localStorage.setItem('bookData', JSON.stringify(data));
            document.querySelector('#name').value = '';
            document.querySelector('#author').value = '';
            document.querySelector('#publisher').value = '';
            document.querySelector('#date').value = '';
            counter += 1;
        } else{
            document.querySelector('.error').innerHTML = 'Book already Exists';
            // console.log(avalable)
        }
        // data.forEach(element => {
        //     console.log(element)
        // });
    }
    displayData();
}

function displayData(){
    let arr = localStorage.getItem('bookData');
    if(arr == null){
        data = [];
    } else {
        data = JSON.parse(arr);
    }
    let rows = '';
    data.forEach((item, index) => {
        rows += `<tr class = 'tr'>
            <td>${index + 1}</td>
            <td>${item['name']}</td>
            <td>${item['author']}</td>
            <td>${item['publisher']}</td>
            <td>${item['date']}</td>
            <td><button onClick = 'edit(${index})'>Edit</button></td>
            <td><button onClick = 'deleteData(${index})'>Delete</button></td>
            </tr>`
    })
    var tbody = document.getElementById("table");
    tbody.innerHTML = rows;
    // // document.querySelector('#table tbody').innerHTML = rows;
    // data.forEach(a => console.log(a[0], a[1], a[2], a[3]));
}

function edit(index){
    let editBtn = document.querySelector('#edit');
    let addBtn = document.querySelector('#add');
    indexOfData = index;
    editBtn.style.display = 'block';
    addBtn.style.display = 'none';

    name.value = data[index]['name'];
    author.value = data[index]['author'];
    publisher.value = data[index]['publisher'];
    date.value = data[index]['date'];
    console.log(indexOfData);
}

function deleteData(index){
    data.splice(index, 1);
    localStorage.setItem('bookData', JSON.stringify(data));
    displayData();
}

let editBtn = document.querySelector('#edit');
editBtn.addEventListener('click', function(){
    let editBtn = document.querySelector('#edit');
    let addBtn = document.querySelector('#add');
    data[indexOfData]['name'] = name.value;
    data[indexOfData]['author'] = author.value;
    data[indexOfData]['publisher'] = publisher.value;
    data[indexOfData]['date'] = date.value;
    localStorage.setItem('bookData', JSON.stringify(data));
    displayData();
    editBtn.style.display = 'none';
    addBtn.style.display = 'block';
    name.value = '';
    author.value = '';
    publisher.value = '';
    date.value = '';
})