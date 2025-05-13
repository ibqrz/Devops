<p id="descrição"></p>

<img src="./src/images/logoReadme.png" alt="logo" width="1000px">

# :stars: Cosmovisão 

<p align="justify">

Cosmovisão é um site que simula uma empresa fictícia, que foi criado com o intuito de juntar entusiastas e pesquisadores, com o viés de divulgação científica e exploração do universo.   

</p>

<p>url do projeto: https://ibqrz-devops-ci-2402805.azurewebsites.net/</p>

![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Azure](https://img.shields.io/badge/azure-%230072C6.svg?style=for-the-badge&logo=microsoftazure&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

## Menu 

<ul>
    <li>
        <a href="#descrição">Descrição</a>
    </li>
    <li>
        <a href="#pipeline">Pipeline</a>
    </li>
    <li>
        <a href="#mapa">Mapa do Projeto</a>
    </li>
    <li>
        <a href="#colaboradores">Colaboradores</a>
    </li>
</ul>

<p id="pipeline"></p>

## :repeat: Pipeline


<p>O workflow de Integração Contínua (CI) utilizado foi configurado para ser executado de modo automático sempre que houver um 'push' para a branch 'dev' do repositório. O nome deste workflow é 'integration', e cada execução será identificada como 'Pipeline de CI' na interface do GitHub Actions.</p>

<p>O workflow define um único job chamado 'build', nomeado como 'Build and analyze'. Este job será executado em um ambiente Ubuntu Linux fornecido pelo GitHub Actions ('ubuntu-latest'). Criado o ambiente será executada duas etapas:</p>

<p>

- O checkout do código, onde é utilizada a action 'actions/checkout@v4' para fazer o download do código do repositório para o ambiente de execução. A opção 'fetch-depth: 0' garante que um clone completo do repositório, incluindo todo o histórico de commits, seja realizado. 

- A análise de código com SonarQube é realizada utilizando a action 'SonarSource/sonarqube-scan-action@v5'.</p>

<p>Para se comunicar com o servidor SonarQube, são definidas duas variáveis de ambiente:

- SONAR_TOKEN -> Contém o token de autenticação para o SonarQube;
- SONAR_HOST_URL -> Especifica o endereço do servidor SonarQube.</p>

<p> A action do SonarQube é configurada com argumentos adicionais para especificar detalhes do projeto a serem analisados:

- Dsonar.projectKey=aula-devops -> Define uma chave única para identificar o projeto no SonarQube.
- Dsonar.projectName=aula-devops -> Define o nome do projeto que será exibido na interface do SonarQube.
- Dsonar.projectVersion=1.0.0 -> Define a versão do projeto sendo analisado
- Dsonar.sources=. -> Indica que o diretório raiz do repositório (.) contém o código fonte a ser analisado.</p>


<p>Já o workflow de Entrega Contínua (CD) tem como ponto de início o 'push' de código para a branch 'main' do repositório. Ele recebe o nome de 'continuous deployement', e sua execução tem a identificação de 'Deploy do App'.</p>

<p>A primeira coisa que acontece é a etapa de 'deploy'. Nessa etapa, o GitHub pega o código mais recente, faz login no Docker Hub, constrói uma imagem Docker da aplicação, e envia essa imagem para o Docker Hub.</p>

<p>As credenciais de login do Docker Hub são adicionadas em secrets do GitHub:

- username: ${{ secrets.DOCKER_USER }} -> Obtém o nome de usuário do Docker Hub.
- password: ${{ secrets.DOCKER_PASSWORD }} -> Obtém a senha do Docker Hub.</p>

<p>Depois, na imagem é a implantada um serviço chamado 'Azure Web App', que é onde a aplicação fica rodando na internet. 

Para configurar o deploy no Azure:

- app-name: ibqrz-devops-ci-2402805 -> Nome do Azure Web App.
- publish-profile: ${{ secrets.PUBLISH_PROFILE }} -> Perfil de publicação do Azure Web App.</p>

<p>Assim que a aplicação é atualizada e o 'deploy' é realizado com sucesso, o site passa para a etapa de testes 'e2e-testing'. Aqui, é feito o chekout de código, configura o Node.js, instala as ferramentas de teste (Cypress), e então executa os testes de ponta a ponta, simulando como um usuário real interagiria com a aplicação, garantindo que tudo está funcionando corretamente.</p>




<p id="mapa"></p>

## Mapa do Projeto
<!-- usar comando 'tree /F' no terminal -->
```.
│   .gitignore
│   cadastro.html
│   Dockerfile
│   index.html
│   login.html
│   README.md
│
├───.github
│   └───workflows
│           continuous-deployment.yaml
│           integration.yaml
│
├───integration-test
│   │   cypress.config.js
│   │   package.json
│   │
│   └───cypress
│       ├───e2e
│       │       pag-inicial.cy.js
│       │       voltar.cy.js
│       │
│       ├───fixtures
│       │       example.json
│       │
│       └───support
│               commands.js
│               e2e.js
│
└───src
    ├───css
    │       main.css
    │       style.css
    │
    ├───images
    │       alien.png
    │       arrow.png
    │       arrow1.png
    │       bj-login.png
    │       black-logo.png
    │       cometa.png
    │       foguete.png
    │       galaxy-view.png
    │       ic_baseline-tiktok.png
    │       img1.png
    │       img2.png
    │       img3.png
    │       img4.png
    │       livro-de-astronomia.png
    │       logo.png
    │       marte.png
    │       planet-hero.png
    │       prime_twitter.png
    │       simple-icons_instagram.png
    │       telescopico (1).png
    │
    └───pages
            astronomia.html
            cosmologia.html
            estrels-galaxias.html
            exploracao-espacial.html
            observacao-ceu.html
            sistema-solar.html
```

<p id="colaboradores"></p>

## :busts_in_silhouette: Colaboradores

<p>Gabriel Fernando da Silva</p>

<p>Giovana Pereira Gustavo</p>

<p>Isabel Queiroz Almeida</p>

<p>Isaias Neri da Conceição Junior</p>

<p>Luis Eduardo Boaretto Rigoni</p>