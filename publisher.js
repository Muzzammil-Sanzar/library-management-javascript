displayPublisherData();

function displayPublisherData(){
    let arr = localStorage.getItem('bookData');
    if(arr == null){
        data = [];
    } else {
        data = JSON.parse(arr);
    }

    let rows = '';

    const arr1 = getUniqueListBy(data, 'publisher');

    arr1.forEach((item, index) => {
            rows += `<tr class = 'tr'>
            <td>${index + 1}</td>
            <td>${item.publisher}</td>
            <td>${bookNames(item['publisher'])}</td>
            <td><button onClick = 'deleteData(${index})'>Delete</button></td>
            </tr>`
    })

    var tbody = document.getElementById("publisherTable");
    tbody.innerHTML = rows;
}

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

function bookNames (publisher){
    const counts = data.filter(item => item['publisher'] === publisher).map(i => i.name);
    return counts.length;
}

function deleteData (a){
    const arr = getUniqueListBy(data, 'publisher');
    let author = arr[a]['publisher'];
    const dele = data.filter(data => data.publisher !== author);
    localStorage.setItem('bookData', JSON.stringify(dele));
    displayPublisherData();
}