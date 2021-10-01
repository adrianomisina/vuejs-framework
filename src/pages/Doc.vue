<template>
    <q-page class="flex column justtify-center flex-center q-gutter q-mt-lg">
        <q-card class="flex column justtify-center flex-center bg-primary my-card q-gutter">
            <div class="q-pt-md">
                <img alt="Vue logo" src="~assets/vue-logo.png" style="width: 20em; height: auto;" />
            </div>

            <h2 style="color: #3ab982;">Vue Doc</h2>

            <q-img src="~assets/evan-you.jpg">
                <div class="absolute-bottom text-h6">
                    Evan You - Criador do Vue JS
                </div>
            </q-img>

            <q-card-section style="color: #c7eadb; font-size: 1.1em;">
                <h4 style="color: #3ab982;">Origem:</h4>

                <p>
                    O Vue foi criado por Evan You após trabalhar para o Google usando AngularJS em vários projetos.
                </p>

                <p>
                    Mais tarde, extraindo o melhor do React e do Ângular, Evan resume seu processo de pensamento: "Eu imaginei, e se eu pudesse simplesmente extrair a parte que eu realmente gosto do Ângular e construir algo realmente leve."
                </p>

                <p>
                    O primeiro código-fonte do commit do projeto foi datado de julho de 2013, e o Vue foi lançado pela primeira vez em fevereiro de 2014. Os nomes das versões são freqüentemente derivados de mangás e animes , a maioria dos
                    quais dentro do gênero de ficção científica .
                </p>

                <h4 style="color: #3ab982;">1º no Github:</h4>

                <p>
                    Segundo o <a href="https://www.youtube.com/watch?v=bEl6yN3vd-U" style="color: #c7eadb;">Canal Código Fonte</a> , a poluparidade do Vue JS entre os desenvolvedores Frontend vem crescendo absurdamente, ultrapassando o
                    ReactJS e o Ângular em número de estrelas no Github.
                </p>
                <q-img src="~assets/estrelas-github.jpg"></q-img>

                <h4 style="color: #3ab982;">Leve:</h4>
                <p>
                    Ele é absurdamente leve (cerca de 20.9K Gzipped), isso já com todas as ferramentas básicas para iniciar o projeto.
                </p>

                <h4 style="color: #3ab982;">Backend Integrado:</h4>

                <p>
                    Integração, por exemplo, com a Linguagem PHP e com seu principal framework Laravel:
                </p>

                <q-img src="~assets/laravel-vue.jpeg"></q-img>

                <h4>Instalação CLI:</h4>

                <p>O Vue.js foi criado com base no template do Angular, porém usando recursos do React, como a componentização e controle e manipulação da árvore DOM.</p>

                <p>O Vue tem sua ferramenta de configuração de projetos, o Vue ClI, que ajuda e muito a começar um projeto. Com a ferramenta é possível só ir escolhendo o que você quer ou não no projeto.</p>

                <p>O Vue ClI também tem uma interface gráfica, o que facilita ainda mais o trabalho.</p>

                <p>O template engine do Vue é muito fácil e intuitivo, se você já tiver o mínimo conhecimento com Angular ou React, você não terá dificuldade nenhuma em fazer um projeto em Vue:</p>

                <q-img class="q-mt-md" src="~assets/template-vue.jpg"></q-img>

                <h4>Instalação CDN:</h4>

                <p>Se a instalção via cli já é molezinha, com o CDN vira coisa de criança.</p>
                <p>Apenas uma linha de script, isso mesmo, basta uma linha de script, em seu HTML o Vue JS estará rodando.</p>

                <q-img src="~assets/cli-vue.jpg"></q-img>

                <h4>Doc Oficial:</h4>

                <p>
                    A Documentação do Vue JS é muito rica, fácil de consultar e de se aplicar, destacando os conceito de: Diretivas, Reaproveitamento de Código - Programação Orientada a Objetos, Two Way Data Binde, Conceitos de Reatividade
                    e Componentização.
                </p>

                <p>Acesse: <a href="https://vuejs.org/" style="color: #c7eadb;">https://vuejs.org/</a></p>
            </q-card-section>
        </q-card>
        <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
            <q-btn round icon="keyboard_arrow_up" color="positive" />
        </q-page-scroller>
    </q-page>
</template>

<script>
    export default {};
</script>

<style scoped>
    .my-card {
        width: 100%;
        max-width: 48em;
    }
</style>
