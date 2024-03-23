const btnUpdate= document.getElementById("btn-update")
const formData = document.getElementById("teste-form");
const codeInput=document.getElementById("code")

btnUpdate.onclick=async()=>{
     editProduct (codeInput.value);
   }
   const editProduct = async (code) => {
    const newForm= new FormData(document.getElementById("teste-form"));
    const title= newForm.get("title")
     const response = await fetch(`/realtimeproducts/${code}`, {
       method: 'put',
       headers: {
          'Content-Type': 'application/json',
       },
       body: JSON.stringify(Object.fromEntries(newForm))
    });
   
    if(response.ok){
        Swal.fire({
            icon:"success",
            title: "Salvando Produto...",
            text: "Produto " + `${title}`+ " atualizado",
            width:"20%",
        }).then((result)=>{
            if(result.isConfirmed){
                window.location.href = `/realtimeproducts`;
              }
         })
    }
    }