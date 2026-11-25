# Saúde Fácil

## Apresentação
O Saúde Fácil é um protótipo acadêmico de uma plataforma digital de orientação em saúde pública. A proposta é facilitar o acesso a informações introdutórias sobre o SUS, vacinação, prevenção e caminhos para buscar atendimento na rede pública.

O projeto foi desenvolvido como uma entrega individual da atividade substitutiva **Global Solution 2026/2**, cujo tema é **Saúde Pública Inteligente**. O protótipo demonstra uma solução navegável e interativa utilizando HTML, CSS e JavaScript.

## Problema e proposta
Informações sobre serviços, prevenção e vacinação podem estar distribuídas em diferentes canais. Isso pode dificultar a compreensão sobre onde buscar orientação. O Saúde Fácil reúne conteúdos educativos, links para fontes oficiais e uma busca demonstrativa por tipo de serviço e município informado.

## Páginas do protótipo
- **Início (`index.html`)**: apresenta o desafio, a proposta e os caminhos de navegação.
- **Solução (`pages/solucao.html`)**: reúne o assistente Doutorzinho, orientações educativas, busca demonstrativa de serviços e formulário de validação.
- **Impacto (`pages/impacto.html`)**: apresenta a contribuição social esperada e a relação da proposta com os ODS 3 e 10.

O site possui três páginas navegáveis, conforme o requisito mínimo da atividade.

## Como executar
1. Extraia o arquivo ZIP.
2. Abra a pasta `Saude-Facil` no Visual Studio Code.
3. Abra `index.html` diretamente no navegador ou utilize a extensão Live Server.
4. Não é necessário instalar dependências ou executar servidor de aplicação.

## Tecnologias
- HTML5
- CSS3
- JavaScript puro (Vanilla JavaScript)

Não são utilizados frameworks ou bibliotecas externas.

## Funcionalidades demonstrativas
- Navegação entre as três páginas do protótipo.
- Assistente Doutorzinho com dez orientações educativas sobre SUS, UBS, UPA, SAMU, vacinação, prevenção, Meu SUS Digital, Ouvidoria, Cartão SUS e saúde mental.
- Busca interativa por município informado e tipo de serviço.
- Exibição dinâmica de registros fictícios para demonstrar a interação da busca.
- Formulário com validação local de nome, e-mail, assunto e mensagem.
- Ajuste do tamanho do texto.
- Modo de alto contraste.
- Navegação por teclado e indicação visual de foco.

## Acessibilidade implementada
- Documento em português (`lang="pt-BR"`).
- Regiões semânticas para cabeçalho, navegação, conteúdo principal e rodapé.
- Link para pular diretamente ao conteúdo principal.
- Estados de foco visíveis para links, botões e campos de formulário.
- Textos alternativos nas imagens informativas.
- Campos de formulário associados a rótulos (`label`).
- Mensagens de validação associadas aos respectivos campos e anunciadas por tecnologia assistiva.
- Regiões de atualização dinâmica com mensagens de status.
- Controles para aumentar, diminuir e restaurar o tamanho do texto, além de modo de alto contraste.
- Respeito à preferência do sistema por redução de movimento, conforme as regras CSS implementadas.

Os recursos foram verificados por inspeção do código. Isso não substitui testes completos com leitores de tela, navegação por teclado em diferentes navegadores ou avaliação formal de conformidade WCAG.

## Estrutura de arquivos
```text
Saude-Facil/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   ├── doutorzinho.png
│   └── impacto-hero-background.jpg
└── pages/
    ├── solucao.html
    └── impacto.html
```

## Fontes oficiais de referência
- Ministério da Saúde: https://www.gov.br/saude/pt-br
- Vacinação: https://www.gov.br/saude/pt-br/vacinacao
- SAMU 192: https://www.gov.br/saude/pt-br/composicao/saes/samu-192/samu-192
- Atenção Primária à Saúde: https://www.gov.br/saude/pt-br/composicao/saps
- Rede de Atenção Psicossocial: https://www.gov.br/saude/pt-br/composicao/saes/desmad/raps
- Ouvidoria do SUS: https://www.gov.br/saude/pt-br/canais-de-atendimento/ouvsus
- Meu SUS Digital: https://meususdigital.saude.gov.br/

## Limites e cuidados
Este é um projeto acadêmico demonstrativo e não representa um canal oficial do SUS ou do Ministério da Saúde. Não realiza diagnósticos, prescrição, agendamento, encaminhamento ou atendimento real.

Os registros exibidos na busca são fictícios. O município digitado personaliza a simulação, mas não consulta uma base oficial nem confirma a existência de unidades naquele local. A interface informa que os resultados são demonstrativos.

O conteúdo é educativo e não substitui avaliação de profissionais de saúde. Em emergência, procure atendimento ou ligue 192 (SAMU). O formulário apenas valida os campos localmente: não envia nem armazena informações. Não insira dados pessoais reais.

## Vídeo pitch
O link do vídeo pitch deve ser inserido após a publicação do vídeo, conforme as instruções de entrega da atividade.

## Uso de ferramentas de IA
Ferramentas de IA foram utilizadas como apoio à organização de ideias, revisão textual e desenvolvimento/explicação de partes do código. O conteúdo e o funcionamento do protótipo devem ser revisados e compreendidos pelo estudante responsável, observando as regras acadêmicas da instituição.
