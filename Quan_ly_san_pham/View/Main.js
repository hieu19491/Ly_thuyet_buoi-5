let store = new Store();


// function main(){
//     let product = new Product (1, "Laptop", 5, 10000);
//     store.add(product);
//     console.log(store)
// }
// main()

function showAll(){
    let productOfstore = store.findAll();
    let str = ``;
    let a;
    for (let i = 0; i < productOfstore.length ; i++) {
        str += `
        <table id="listproduct" style=" border: 1px solid darkgreen">
    <tr>
        <td>
            <table>
                <tr>
                    <td>${productOfstore[i].id}</td>
                </tr>
                <tr>
                    <td>${productOfstore[i].name}</td>
                </tr>
                <tr>
                    <td><img src="${productOfstore[i].img}" alt=""></td>
                </tr>
                <tr>
                    <td>Số lượng tồn: ${productOfstore[i].quantity}</td>
                </tr>
                <tr>
                    <td>Đơn vị tính:${productOfstore[i].unit}</td>
                </tr>
                <tr>
                    <td style="font-size: 20px;">${productOfstore[i].price} đ</td>
                </tr>
                <tr>
                    <th>
                        <button style="width: 100px; background: rgba(0, 101, 69); color: #eeecec;border: none; border-radius: 4px; cursor: pointer"
                                onmouseenter="this.style.backgroundColor='#03481b'"
                                onmouseleave="this.style.backgroundColor='#006545FF'" onClick="remove(${i})">Del</button>
                    </th>
                </tr>
                <tr>
                    <th>
                        <button style="width: 100px; background: rgba(0, 101, 69); color: #eeecec;border: none; border-radius: 4px; cursor: pointer"
                                onmouseenter="this.style.backgroundColor='#03481b'"
                                onmouseleave="this.style.backgroundColor='#006545FF'" onClick="showFormEdit(${i})">Edit</button>
                    </th>
                </tr>
            </table>
        </td>
    </tr>
</table>`
    }
    document.getElementById("product").innerHTML = str;
}
showAll()
function add(){
    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let img = document.getElementById("img").value;
    let quatity = document.getElementById("quatity").value;
    let unit = document.getElementById("unit").value;
    let price = document.getElementById("price").value;
    let btnAdd = document.getElementById("btn-add");
    const modalContainer = document.getElementById("modal-container");
    let newProduct = new Product (id, name, img, quatity, unit, price);
    store.add(newProduct);
    alert("Add Success");
    modalContainer.classList.remove("show")
    resetForm()
    showAll()
}

function resetForm(){
    let id = document.getElementById("id").value = "";
    let name = document.getElementById("name").value = "";
    let img = document.getElementById("img").value = "";
    let quatity = document.getElementById("quatity").value = "";
    let unit = document.getElementById("unit").value = "";
    let price = document.getElementById("price").value = "";
}

 function showFormAdd(){
  let btnCancle = document.getElementById("btn-cancle");
  let modalContainer = document.getElementById("modal-container");
  modalContainer.classList.add("show")
  btnCancle.addEventListener('click', ()=>{
      modalContainer.classList.remove("show")
      resetForm()
  });
}

function remove(index){
    let isConfirm = confirm("Bạn có chắc muốn xóa sản phẩm này?")
    if (isConfirm){
        store.remove(index)
        showAll()
    }
}

function edit(){
    let index = -1;
    let id = document.getElementById("id1").value;
    for (let i = 0; i < store.listProduct.length; i++) {
        if (store.listProduct[i].id == id) {
            index = i;
        }
    }
    let name = document.getElementById("name1").value;
    let img = document.getElementById("img2").value;
    let quatity = document.getElementById("quatity1").value;
    let unit = document.getElementById("unit1").value;
    let price = document.getElementById("price1").value;
    let modalEdit = document.getElementById("modal-edit");
    let newProduct = new Product (id, name, img, quatity, unit, price);
    store.edit(index, newProduct);
    alert("Edit Success");
    modalEdit.classList.remove("show")
    resetForm()
    showAll();


}

function showFormEdit(index){
    let listProduct = store.findAll();
    console.log(listProduct[index])
    let productEdit = listProduct[index];
    let modalEdit = document.getElementById("modal-edit");
    let btnCancle1 = document.getElementById("btn-cancle1");
    modalEdit.classList.add("show")
    document.getElementById('id1').value = productEdit.id;
    document.getElementById('name1').value = productEdit.name;
    document.getElementById('img1').innerHTML = `<img style="width: 50px; height: 50px" src="${productEdit.img}"><input id="img2" value="${productEdit.img}">`;
    document.getElementById('quatity1').value = productEdit.quantity;
    document.getElementById('unit1').value = productEdit.unit;
    document.getElementById('price1').value = productEdit.price;
    btnCancle1 .addEventListener('click', ()=>{
        modalEdit.classList.remove("show")
        resetForm()
    });

}

function searchProduct() {
    let value = document.getElementById("search").value;
    let productOfstore = store.search(value);
    let str = ``;
    for (let i = 0; i < productOfstore.length ; i++) {
        str += `
        <table id="listproduct"  >
            <tr>
                <th>
                    <table>
                        <tr>
                            <th>${productOfstore[i].id}</th>
                        </tr>
                        <tr>
                            <th>${productOfstore[i].name}</th>
                        </tr>
                        <tr>
                            <th><img src="${productOfstore[i].img}" alt=""></th>
                        </tr>
                        <tr>
                            <th>Số lượng tồn: ${productOfstore[i].quantity}</th>
                        </tr>
                        <tr>
                            <th>Đơn vị tính:${productOfstore[i].unit}</th>
                        </tr>
                        <tr>
                            <th style="font-size: 20px">${productOfstore[i].price} đ</th>
                        </tr>
                        <tr>
                            <th>
                                <button style="width: 100px; background: rgba(0, 101, 69); color: #eeecec;border: none; border-radius: 4px; cursor: pointer"
                                onmouseenter="this.style.backgroundColor='#03481b'"
                                onmouseleave="this.style.backgroundColor='#006545FF'" onClick="remove(${i})">Del</button>
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <button style="width: 100px; background: rgba(0, 101, 69); color: #eeecec;border: none; border-radius: 4px; cursor: pointer"
                                onmouseenter="this.style.backgroundColor='#03481b'"
                                onmouseleave="this.style.backgroundColor='#006545FF'" onClick="showFormEdit(${i})">Edit</button>
                            </th>
                        </tr>
                    </table>
                </th>
            </tr>
        </table>`
    }
    document.getElementById("product").innerHTML = str;
}



