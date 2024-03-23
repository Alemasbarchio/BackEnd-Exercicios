const btnCreateUser = document.getElementById("btn-createUser");
const inpUsername = document.getElementById("user-name")
const msgUser = document.getElementById("msg-users")

let user;


Swal.fire({
    title: "Identificar",
    input: "text",
    text: "Digite seu nome!",
    inputValidator: (value) => {
        return !value && "Você precisa escrever seu nome!";
    },
    allowOutsideClick: false,
}).then((result) => {
    user = result.value;
    inpUsername.value = user;
});

const socket = io();

msgUser.addEventListener('keyup', (e) => {
    console.log("keyup", e.key);
    if (e.key === 'Enter') {
        if (msgUser.value.trim().length > 0) {

            console.log("enviando mensagem", msgUser.value);
            socket.emit('message', { user: user, message: msgUser.value });
            userData();
            msgUser.value = '';

        }
    }
});

const userData = async () => {
    let userData = {
        user: user,
        message: msgUser.value
    }
    console.log(userData);
    const response = await fetch("/chat", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
    })

}

socket.on('messageLogs', async (data) => {

    let logs = document.getElementById('msg-logs');
    let messages = ""
    data.forEach((message) => {
        messages = messages + `${message.user} diz: ${message.message}`;
    });
    logs.innerHTML = messages;
});

