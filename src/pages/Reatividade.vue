<template>
    <q-page class="flex column justtify-center flex-center q-gutter q-mt-lg">
        <q-card class="flex column justtify-center flex-center bg-primary my-card q-gutter">
            <div class="q-pt-md">
                <img alt="Vue logo" src="~assets/vue-logo.png" style="width: 20em; height: auto;" />
            </div>

            <h3 style="color: #3ab982;">Reativo Vue JS</h3>
            <q-img src="~assets/data.png"> </q-img>
            <q-card-section style="color: #c7eadb; font-size: 1.1em;">
                <h4 style="color: #3ab982;">Two Way Data Bind:</h4>

                <p>
                    Reativo diz respeito a sua arquitetura que atualiza sua camada visual cada vez que há uma mudança de estado, ou seja, o seu HTML, será atualizado, toda vez que uma variável, um componente ou um objeto for atualizado.
                </p>

                <p>
                    Gera uma interação mais fluída entre o usuário e a aplicação, além de fácil integração com o Backend;
                </p>

                <p>Sendo assim, o conceito de <strong>Two Way Data Bind</strong> - O que é modificado no Java Script é modificado automaticamente no HTML e vice-versa;</p>

                <p>
                    Isso facilita muito na hora do desenvolvimento, seja uma aplicação simple, ou um sistema que possui uma arquitetura mais complexa.
                </p>

                <h4 style="color: #3ab982;">Reatividade:</h4>

                <p>
                    No exemplo abaixo, a diretiva V-Model será utilizada em um Input.
                </p>

                <p>Realizaremos a completa integração entre as partes: HTML e Java Script, que inicialmente, será renderizado em um Virtual DOM.</p>

                <p>Após a complilação do código - Bundle, nesse caso o Babel que é uma ferramenta já integrada ao Vue JS - disponibilizará as informações de forma objetiva.</p>

                <div class="flex flex column justtify-center flex-center">
                    <input v-model="message" class="q-mt-xl" />
                    <p class="q-mt-md">{{ message }}</p>
                </div>

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
        data() {
            return {
                message: "Hello Vue.js!",
            };
        },
    };
</script>

<style>
    .my-card {
        width: 100%;
        max-width: 48em;
    }
</style>
