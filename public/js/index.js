

const socket = io();
const btnAdd = document.getElementById("btn-add")
const btnDelete = document.getElementById("btn-delete");
const formActive = document.getElementById("form-active")





btnAdd.onclick = () => {
   formActive.className = "d-flex-column"
   console.log(formActive);
}

btnDelete.onclick = () => {
   let code
   formActive.className = "d-none"

   Swal.fire({
      title: "Excluir Produto",
      input: "text",
      text: "Digite o código do produto",
      inputValidator: (value) => {
         return !value && "Você precisa digitar um código!";
      },
      allowOutsideClick: false,
   }).then((result) => {
      code = result.value;
      socket.emit('delete', code);
   });

}


socket.on("produtosAtualizados", (data) => {
   const tbodyProdutos = document.getElementById("ler-produtos");
   tbodyProdutos.innerHTML = "";
   data.producList.forEach((produto) => {
      const row = tbodyProdutos.insertRow();
      const cellTitle = row.insertCell(0);
      const cellDesc = row.insertCell(1);
      const cellPrice = row.insertCell(2);
      const cellCode = row.insertCell(3);
      const cellStock = row.insertCell(4);

      cellTitle.textContent = produto.title;
      cellDesc.textContent = produto.description;
      cellPrice.textContent = produto.price;
      cellCode.textContent = produto.code;
      cellStock.textContent = produto.stock;

   });



});