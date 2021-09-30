<template>
    <q-page class="flex column justtify-center flex-center q-gutter q-mt-lg">
        <q-card class="flex column justtify-center flex-center bg-primary my-card q-gutter">
            <div class="q-pt-md">
                <img alt="Vue logo" src="~assets/vue-logo.png" style="width: 25em; height: auto;" />
            </div>

            <h3 style="color: #3ab982;">Progress Vue JS</h3>
            <q-img src="~assets/laravel-vue.jpeg"> </q-img>
            <q-card-section style="color: #c7eadb; font-size: 1.1em;">
                <h4 style="color: #3ab982;">Adaptação é a Chave:</h4>

                <p>
                    Altamente adaptável para a utilização de frameworks e bibliotecas;
                </p>

                <p>
                    Você pode utilizar o Vue em toda a sua aplicação ou em uma parte, ou seja, muito adaptável para conexoes entre o backend (Laravel e etc).
                </p>

                <p>Usado para a construção de aplicações front-end, e atualmente uma das melhores opções quando usada junto ao framework Laravel.</p>

                <p>
                    Ele é basicamente uma biblioteca (lib) javascript para o desenvolvimento de componentes reativos para interfaces web.
                </p>

                <h4 style="color: #3ab982;">API Simples:</h4>

                <p>
                    Sua API é intuitiva e simples e você pode utilizá-lo da maneira que achar melhor dentro do seu projeto, o que torna o VueJS flexível. Vamos elencar aqui 3 pontos positivos:
                </p>

                <p><strong>Documentação detalhada:</strong> possui uma boa documentação, facilitando o aprendizado de todos os envolvidos no projeto;</p>

                <p><strong>Menos complexo:</strong> em termos de design e API, o Vue é muito mais simples e possui curvas de aprendizado menos complexas;</p>

                <p><strong>Flexibilidade:</strong> faz uso de template padrão, possui funções de renderização e suporte JSX.</p>

                <p>
                    Resumidamente, o VueJS permite aplicações mais dinâmicas e com menos reloads dentro dos sistemas.
                </p>

                <h4 style="color: #3ab982;">Doc Oficial:</h4>

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
    export default {
        data() {},
    };
</script>

<style>
    .my-card {
        width: 100%;
        max-width: 48em;
    }
</style>
