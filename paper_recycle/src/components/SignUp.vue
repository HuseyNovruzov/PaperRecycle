<template>
    <div class="container">
        <div class="formBox signUpBox">
            <form action="" class="form" autocomplete="off">
                <label for="username" class="textLabel">Istifadeci adi</label>
                <input type="text" class="inp" id="username" v-model="username" required />
                <div class="inputBox">
                    <label for="signup__email" class="textLabel">Email address</label>
                    <input type="email" id="signup__email" class="inp" v-model="email" required/>
                </div>
                <div class="inputBox">
                    <label for="signup__password" class="textLabel">Yeni Sifre</label>
                    <div class="passwordValidateBox">
                        <input type="password" id="signup__password" class="inp" v-model="password" @keyup="validatePassword"  required spellcheck="false" autocomplete="off"  />
                        <img src="../assets/done.svg" alt="confirm image" v-show="validatePass">
                    </div>
                    <p class="warningText" v-show="!validatePass">Emin olun ki teyin etdiyiniz sifre en azi <span class="redText">15 simvoldan ibaretdir
                        yaxud da en azi 1 kicik herf, 1 boyuk herf, 1 reqem ve bu @#$*%^&+= simvollardan ibaretdir ve minimum uzunlugu 8dir. </span></p>
                </div>
                <!-- <div class="registerPassword">
                    <label for="" class="loginLabel">Sifreni tesdiqleyin</label>
                    <div class="passwordValidateBox">
                        <input type="password" class="registerPasswordInp" v-model="confirmpassword" @keyup="confirmPassword" required/>
                        <img src="../assets/done.svg" alt="" v-show="confirmPass">
                    </div>
                </div> -->
                <div class="btnBox">
                    <input type="submit" value="Hesab yarat" @click="passData" />
                </div>
            </form>
            <question-box context="Artiq hesab movcuddur?" link="Hesaba daxil ol" route="login"></question-box>
        </div>
        
    </div>
</template>

<script>
import QuestionBox from '../reusablecomponents/QuestionBox'
export default {
    name: 'SignUp',
    components: { QuestionBox },
    data(){
        return{
            validatePass: false,
            username: '',
            email:'',
            password:'',
        }
    },
    methods: {

        validatePassword(){
            
            if(this.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$*%^&+=])(?=\S+$).{8,15}/) || this.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=\S+$).{15,20}/)){
                return this.validatePass = true;
            }
            else{
                return this.validatePass = false;
            }
        },
        
        passData(){
            if(this.username){
                localStorage.setItem("username",this.username);
            } 
        },
        
    }
}
</script>

<style scoped>

.signUpBox{
    height: var(--signupbox-height);
}

.warningText{
    margin-top: .6rem;
    font-size: var(--warningtext-font-size);
}
.redText{
    color: var(--red-scale-color);
}
.passwordValidateBox{
    display: flex;
    flex-direction: column;
    position: relative;
}
.passwordValidateBox img{
    position: absolute;
    right: 2%;
    top: 1.3em;
}
</style>