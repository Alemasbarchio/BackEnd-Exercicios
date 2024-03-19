//



//  const socket = io();
const btnAdd = document.getElementById("btn-add")
const btnDelete = document.getElementById("btn-delete");
const btnEdit=document.getElementById("btn-edit")
const formActive = document.getElementById("form-active")
const formData=document.getElementById("teste-form");

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
      deleteProduct(code);
   });
}

btnEdit.onclick = () => {
   let code
   

   Swal.fire({
      title: "Editar Produto",
      input: "text",
      text: "Digite o código do produto para editar",
      inputValidator: (value) => {
         return !value && "Você precisa digitar um código!";
      },
      allowOutsideClick: false,
   }).then((result) => {
      code = result.value;
      editProduct(code);
      formActive.className = "d-flex-column"
   });
}
const deleteProduct = async (code) => {
   try {
      const response = await fetch(`/realtimeproducts/${code}`, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },

      })

      if (response.ok) {
         console.log("produto deletedo com sucesso")
      }
      else {
         //console.error(`Erro ao excluir produto. Status: ${response.status}`);
         window.location.href = `/realtimeproducts`;
      }
   } catch (error) {
      console.error('Erro na solicitação de exclusão:', error);
   }

}

const editProduct=async(pcode)=>{
  
//var newForm= new FormData(formData);
//console.log(newForm);
const response = await fetch(`/realtimeproducts/${pcode}`, {
   method: 'PUT',
   headers: {
     'Content-Type': 'application/json',
   },
  
 });
}


// ## region: modelo persistencia usando FileSystem exer 3 & 4
//socket.emit('delete', code);
// socket.on("produtosAtualizados", (data) => {
//    const tbodyProdutos = document.getElementById("ler-produtos");
//    tbodyProdutos.innerHTML = "";
//    data.producList.forEach((produto) => {
//       const row = tbodyProdutos.insertRow();
//       const cellTitle = row.insertCell(0);
//       const cellDesc = row.insertCell(1);
//       const cellPrice = row.insertCell(2);
//       const cellCode = row.insertCell(3);
//       const cellStock = row.insertCell(4);

//       cellTitle.textContent = produto.title;
//       cellDesc.textContent = produto.description;
//       cellPrice.textContent = produto.price;
//       cellCode.textContent = produto.code;
//       cellStock.textContent = produto.stock;

//    });



// });