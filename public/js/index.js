const btnAdd = document.getElementById("btn-add")
const btnDelete = document.getElementById("btn-delete");
const btnEdit = document.getElementById("btn-edit")
const formActive = document.getElementById("form-active")
const formData = document.getElementById("teste-form");
const btnSend = document.getElementById("btn-enviar")
const btnchat = document.getElementById("btn-chat")


btnSend.onclick = async () => {

   try {
      const newForm = new FormData(document.getElementById("teste-form"));
      const response = await fetch(`/realtimeproducts/`, {
         method: 'post',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(Object.fromEntries(newForm))

      });

      if (response.ok) {
         window.location.href = "/realtimeproducts"
      }

   } catch (error) {
      console.error('Erro', error);

   }

}


btnchat.onclick = async () => {
   window.open("/chat", "_blank")

}
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
      width: "20%",
      inputValidator: (value) => {
         return !value && "Você precisa digitar um código!";
      },
      allowOutsideClick: false,
   }).then((result) => {
      code = result.value;
      deleteProduct(code);
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
         window.location.href = `/realtimeproducts`;
      }
   } catch (error) {
      console.error('Erro na solicitação de exclusão:', error);
   }

}

btnEdit.onclick = () => {
   let code;
   Swal.fire({
      title: "Editar Produto",
      input: "text",
      text: "Digite o código do produto para editar",
      width: "20%",
      inputValidator: (value) => {
         return !value && "Você precisa digitar um código!";
      },
      allowOutsideClick: false,
   }).then((result) => {
      code = result.value;
      formActive.className = "d-flex-column"
      getProductByCode(code);

      //
   });
}
const getProductByCode = async (pcode) => {

   try {
      const response = await fetch(`/realtimeproducts/${pcode}`, {
         method: 'get',
         headers: {
            'Content-Type': 'application/json',
         }
      });

      if (response.ok) {
         window.location.href = `/realtimeproducts/${pcode}`;

      } else {
         console.error("Falha ao obter detalhes do produto. Status da resposta:", response.status);

      }
   } catch (error) {
      console.error("Ocorreu um erro ao tentar obter os detalhes do produto:", error);

   }
}


