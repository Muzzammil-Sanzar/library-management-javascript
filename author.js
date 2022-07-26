displayAuthorData();

function displayAuthorData(){
    let arr = localStorage.getItem('bookData');
    if(arr == null){
        data = [];
    } else {
        data = JSON.parse(arr);
    }
    let rows = '';
    const dup = data.map(v => v.author).filter((v, i, vIds) => {
        if(vIds.indexOf(v) !== i){
            return true;
        }
    }
    );

    const duplicates = data.filter(obj => dup.includes(obj.author));
    const arr1 = getUniqueListBy(data, 'author');

    arr1.forEach((item, index) => {
            rows += `<tr class = 'tr'>
            <td>${index + 1}</td>
            <td>${item.author}</td>
            <td>${bookNames(item['author'])}</td>
            <td><button onClick = 'deleteData(${index})'>Delete</button></td>
            </tr>`
    })

    var tbody = document.getElementById("authorTable");
    tbody.innerHTML = rows;
}

function getUniqueListBy(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()]
}

function bookNames (author){
    const counts = data.filter(item => item['author'] === author).map(i => i.name);
    return counts.length;
}

function deleteData (a){
    const arr = getUniqueListBy(data, 'author');
    let author = arr[a]['author'];
    const dele = data.filter(data => data.author !== author);
    localStorage.setItem('bookData', JSON.stringify(dele));
    displayAuthorData();
}