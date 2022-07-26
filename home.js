displayData();
function displayData(){
    let arr = localStorage.getItem('bookData');
    if(arr == null){
        data = [];
    } else {
        data = JSON.parse(arr);
    }
    let rows = '';
    data.map((item, index) => {
        rows += `<tr class = 'tr'>
            <td>${index + 1}</td>
            <td>${item['name']}</td>
            <td>${item['author']}</td>
            <td>${item['publisher']}</td>
            <td>${item['date']}</td>
            </tr>`
    })
    var tbody = document.getElementById("table");
    tbody.innerHTML = rows;
}
