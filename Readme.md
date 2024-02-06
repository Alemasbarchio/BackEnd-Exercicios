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