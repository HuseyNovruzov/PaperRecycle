<template>
    <div class="container">
        <div class="formBox">
                <form action="" class="form">
                    <label for="login__email" class="textLabel">Email adres</label>
                    <input type="email" class="inp" id="login__email" v-model="email" />
                    <div class="inputBox">
                        <label for="login__password" class="textLabel">Şifrə</label>
                        <input type="password" id="login__password" class="inp" autocomplete="off" v-model="password" />
                    </div>
                    <label for="repair__password" class="repairPassword">
                        <router-link to="reset_password" id="repair__password">Şifrəni unutmusuz?</router-link>
                    </label>
                    <div class="btnBox">
                        <input type="submit" value="Daxil ol"/>
                    </div>
                </form>
                <question-box context="Hesab yoxdur?" link="Yeni hesab yarat" route="register"></question-box>
            </div> 
        </div>
</template>

<script>

import QuestionBox from '../reusablecomponents/QuestionBox'
export default {
    data(){
        return{
            email: null,
            password: null,
        }
    },
    methods: {
        checkUserExists(){
            if(this.email!=null && this.password!=null){
                const user = { "email": this.email, "password": this.password };
                return user;
            }
            else{
                return null;
            }
        }
    },
    components: { QuestionBox },
}
</script>
<style scoped>

.repairPassword a{
    color: var(--blue-scale-color);
    font-size: var(--label-font-size);
}
:disabled{
    cursor: not-allowed;
    filter: brightness(60%);
}
</style>