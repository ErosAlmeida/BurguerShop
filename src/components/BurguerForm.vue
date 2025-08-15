<template>
    <div>
        <p>Componente de mensagem</p>
    </div>

    <div>
        <form id="burguer-form">
            <div class="input-container">
                <label for="nome">Nome do cliente:</label>
                <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
            </div>

            <div class="input-container">
                <label for="pao">Escolha o pão:</label>
                <select name="pao" id="pao" v-model="pao"/>
                    <option value="">Selecione o seu pão</option>
                    <option value="integral">integral</option>
                
            </div>

            <div class="input-container">
                <label for="carne">Escolha a carne do seu Burguer:</label>
                <select name="carne" id="carne" v-model="carne"/>
                    <option value="">Selecione o tipo da carne</option>
                    <option value="maminha">maminha</option>
                
            </div>

            <div class="input-container">
                <label for="opcionais">Selecione os opcionais:</label>
                <div class="checkbox-container">
                    <input type="checkbox" name="opcionais" v-model="opcionais" value="salame">
                    <span>salame</span>
                </div>

                <div class="input-con">
                    <input type="submit" class="subimit-dtn" value="Criar meu Burguer">
                </div>
                
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name:"BurguerForm"
}
</script>

<style scoped>

</style>