# reposicao-UFRN
Calculadora da média com a reposição

# Descrição do Código HTML para Calculadora de Reposição

Este é um código HTML que define uma página web para uma "Calculadora de Reposição". O objetivo da página é permitir que o usuário insira valores para três unidades e calcule uma média, além de fornecer uma entrada para um valor de reposição e calcular a média final. A página inclui elementos básicos de HTML e interage com um arquivo de JavaScript para realizar os cálculos.

## Estrutura do Código

### Cabeçalho (`<head>`)

- **Meta Tags**:
  - `charset="UTF-8"`: Define a codificação de caracteres para UTF-8.
  - `name="viewport"`: Configura a viewport para dispositivos móveis, garantindo que a página se ajuste corretamente em diferentes tamanhos de tela.

- **Título**:
  - Define o título da página como "Calculadora de reposição".

- **Folha de Estilo**:
  - Inclui um arquivo CSS externo (`style.css`) para estilizar a página.

### Corpo (`<body>`)

- **Conteúdo Principal (`<main>`)**:
  - Contém uma tabela com os seguintes campos:
    - **Unidade 1, Unidade 2, Unidade 3**: Campos de entrada numérica para o usuário inserir valores.
    - **Média**: Campo de saída que mostra a média dos valores das três unidades. Este campo é somente leitura.
    - **Reposição**: Campo de entrada numérica para o usuário inserir um valor de reposição.
    - **Média final**: Campo de saída que mostra a média final após aplicar a reposição. Este campo é somente leitura.
    - **Botão Calcular**: Um botão que aciona a função `calcular()` definida no arquivo JavaScript `script.js`.

### Rodapé (`<footer>`)

- **Informações de Copyright**:
  - Inclui o nome do autor (Felipe Cordeiro), a data (Agosto de 2024) e a versão do código (v 1.0).

### Scripts

- **JavaScript**:
  - O arquivo `script.js` é incluído ao final da página e é responsável por realizar os cálculos necessários quando o botão "Calcular" é pressionado.

## Observações

- Os campos de entrada numérica (`input type="number"`) possuem limites (`min`, `max`, `step`) definidos, restringindo os valores que podem ser inseridos.
- Os campos de média e média final são desativados (`disabled`), o que significa que não podem ser editados diretamente pelo usuário.

Este código fornece a base para uma calculadora simples e pode ser expandido com funcionalidades adicionais, como validação de entrada e melhor tratamento de erros.
