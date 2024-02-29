# Exercício 1 - Classes com ECMAScript
### Descrição
1. Deve ter um método "addProduct" que adicionará um produto array produtos
2. Validar que o campo "código" não se repete e que todos campos são obrigatórios
3. Criar id de incremento automático
4. Método "getProductById" procurar o produto pelo id
5. Caso nenhum id corresponda, exibir uma mensagem de erro

#### **instalação do pacote: npm install prompt-sync**

# Exercício 2 - Gestão de arquivos em JavaScript
### Descrição
1.  Com base no desafio anterior adiconar o fileSystem para alterar modelo de persistência.
2. A classe ProductManager deve conter os métodos "Adicionar", "Consultar", "Modificar" e "Excluir" um produto e gerenciá-lo em persistência de arquivo.
3. Uma variável this.path será inicializada a partir do construtor e receber o caminho do arquivo.

## **O exercício em questão de incluir os seguintes requisitos**
1. addProduct
    - Método para adicionar um produto.
    - Atribiu um Id autoincrementado ao produto.
    - Salva o produto em array no arquivo.
2. getProducts
    - Método para obter todos os produtos.
    - Realiza a leitura do arquivo de produtos.
    - Retorna produtos em formato array.
3. getProductsById
    - Método para obter um produto específico por ID.
    - Recebe um ID como parâmetro.
    - Após a leitura do arquivo, localiza e retorna o produto correspondente em formato de objeto.  
4. updateProduct
    - Método para atualizar um produto.
    - Atualiza o produto no arquivo, assegurando que o Id não seja excluído.
5. deleteProduct 
    - Método para deletar um produto.
    - Receber um id e deve deletar o produto com esse id no arquivo.     

# Exercício 3 - Servidor com Express 
### Descrição
1. Desenvolver um servidor baseado em express
2. Consultar arquivos de produtos

## ** Aspectos a incluir**
1. Persistência de arquivo
- usar a classe ProductManager
- Desenvolver um servidor express arquivo app.js
2. EndPoints 
- "/products" ler arquivo products e retornar objeto
- receber parâmetro de query o valor ?limit= que receberá um limite de resultados
- rota "/products/:id deve reveber o ID do produto por req.params e retornar apenas produto solicitado

# Exercício 4 - Websockets + Handlebars
### Descrição 
Integrar views e sockets ao servidor para trabalhar com Handlebars
### Requisitos
1. Configurar servidor para integrar template engime do Handlebars (socket.io)
2. Criar uma visualização "home.handlebars" com produtos adicionados
3. Criar uma view "realTimeProducts.handlebars" com lista de produtos que funcionará com websocktes
4. Atualizar automaticamente a lista quando houver modificações(websockets: criar novo produto ou excluir)

 **Observações**
Evitar a conexão direta entre uma consulta HTTP e WebSocket dentro da classe. Em vez disso, propõe-se a criação de um formulário simples na view para lidar com a criação e exclusão de um produto, enviando o conteúdo via WebSocket em vez de HTTP.