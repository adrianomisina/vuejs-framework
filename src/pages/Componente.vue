<template>
    <q-page class="flex column justtify-center flex-center q-gutter q-mt-lg">
        <q-card class="flex column justtify-center flex-center bg-primary my-card q-gutter">
            <div class="q-pt-md">
                <img alt="Vue logo" src="~assets/vue-logo.png" style="width: 20em; height: auto;" />
            </div>

            <h3 style="color: #3ab982;">Components:</h3>

            <q-img src="~assets/vue_component.png" style="background-color: #fff;">
                <div class="absolute-bottom text-h6">
                    Componentização:
                </div>
            </q-img>

            <q-card-section style="color: #c7eadb; font-size: 1.1em;">
                <h4 style="color: #3ab982;">Estruturado vs POO</h4>

                <p>
                    Esqueça grandes blocos - o Foco da componentização é a organização do código em componentes pensando em re-utilização, e manutenção do código.
                </p>

                <p>
                    Ao criar componentes VueJs, sempre há preocupações sobre como eles podem se comunicar entre si.
                </p>
                <p>Com isso em mente, vejamos algumas abordagens diferentes para resolver esse problema.</p>

                <h4 style="color: #3ab982;">Props:</h4>

                <p>
                    Uma maneira muito fácil de passar dados para um componente é usar propriedades (props).
                </p>

                <p>
                    Toda instância do componente Vuejs possui seu próprio escopo isolado, e isso significa que não podemos acessar diretamente qualquer dado do componente pai em um componente filho.
                </p>

                <p>
                    Os dados podem ser transmitidos para um componente filho usando props.
                </p>

                <p>
                    Embora o Vue facilite a adição de propriedades ao seu componente, às vezes você precisa de um pouco mais de controle sobre quais tipos de coisas são permitidos nele.
                </p>

                <p>
                    Felizmente, o Vue fornece maneiras integradas de adicionar verificação de tipo, validação, valores padrão e restrições às suas definições de prop.
                </p>

                <h4 style="color: #3ab982;">Verificação de Tipo:</h4>

                <p>
                    Você pode facilmente adicionar verificação de tipo às suas definições de propriedade, adicionando o modelo propriedade para ele.
                </p>

                <p>
                    Por exemplo, o componente a seguir restringe os valores de entrada possíveis a números.
                </p>

                <q-img src="~assets/props.jpg"></q-img>

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
    export default {};
</script>

<style scoped>
    .my-card {
        width: 100%;
        max-width: 48em;
    }
</style>
