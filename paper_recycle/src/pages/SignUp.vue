<template>
    <div class="container">
        <div class="formBox">
            <form class="form" autocomplete="off" method="" ref="inputs" @submit.prevent="checkFormValidity">
                <label for="username" class="textLabel">İstifadəçi adı</label>
                <input type="text" class="inp" id="username" v-model="username" :class="usernameIsValid ? 'success': ''" />
                <span class="error" v-if="!usernameIsValid" >{{ usernameErrorMessage }}</span>
                <div class="inputBox">
                    <label for="signup__email" class="textLabel">Email adres</label>
                    <input type="text" id="signup__email" class="inp" v-model="email" :class="emailIsValid ? 'success': ''" placeholder="numune@gmail.com" />
                    <span class="error">{{ emailErrorMessage }}</span>
                </div>

                <div class="inputBox">
                    <label for="signup__password" class="textLabel">Yeni şifre</label>
                    <div class="passwordValidateBox">
                        <input type="password" id="signup__password" class="inp" v-model="password" :class="passwordIsValid ? 'success': ''" spellcheck="false" autocomplete="off"  />
                    </div>
                    <span class="conditions" :class="passwordContainLowerLetter ? 'success-text': ''">Ən az 1 kiçik hərf olmalıdır</span>
                    <span class="conditions" :class="passwordContainUpperLetter ? 'success-text': ''">Ən az bir böyük hərf olmalıdır</span>
                    <span class="conditions" :class="passwordContainDigit ? 'success-text': ''">Ən az bir rəqəm olmalıdır</span>
                    <span class="conditions" :class="validatePasswordLength ? 'success-text': ''">Şifrə uzunluğu 8 və ya daha çox olmalıdır</span>
                </div>
                <div class="inputBox">
                    <label for="confirm__password" class="textLabel">Şifrəni təsdiqləyin</label>
                    <div class="passwordValidateBox">
                        <input type="password" id="confirm__password" v-model="confirm_password" :class="confirmPassword ? 'success': ''" class="inp" spellcheck="false" autocomplete="off" />
                    </div>
                    <span class="error">{{ confirmPasswordError }}</span>
                </div>
                <div class="btnBox">
                    <input type="submit" value="Hesab yarat" />
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
            username: null,
            email: null,
            password: null,
            confirm_password: null,
        }
    },
    computed: {
        usernameIsValid(){
            if(this.username){
                return true;
            }else{
                return false;
            }
        },
        usernameErrorMessage(){
            if(this.username || this.username===null){
                return ''
            }else{
                return 'İstifadəçi adı daxil edin';
            }
        },
        emailIsValid(){
           return this.checkEmail();
        },
        emailErrorMessage(){
            if(this.email === null){
                return '';
            }
            else if(!this.email){
                return 'Email daxil edin';
            }else{
                const validEmail = this.checkEmail();
                if(!validEmail){
                   return 'Düzgün email ünvanı daxil edin';
                }
                else{
                    return '';
                }
                }
        },
        passwordIsValid(){
            return this.checkPassword();
        },
        passwordContainLowerLetter(){
            const lower_letter = /[a-z]/;
            return this.passwordContain(lower_letter);
        },
        passwordContainUpperLetter(){
            const upper_letter = /[A-Z]/;
            return this.passwordContain(upper_letter);
        },
        passwordContainDigit(){
            const digit = /[\d]/;
            return this.passwordContain(digit);
        },
        validatePasswordLength(){
            if(this.password != null && this.password.length >= 8){
                return true;
            }else{
                return false;
            }
        },
        confirmPassword(){
            if(!this.confirm_password){
                return false;
            }else{
                if(this.confirm_password && this.password === this.confirm_password){
                    return true;
                }else{
                    return false;
                }
            }
        },
        confirmPasswordError(){
            if(this.confirm_password && this.password != this.confirm_password){
                return 'Daxil etdiyiniz sifre uzlasmir'
            }else{
                return '';
            }
        }
    },
    methods: {
        checkEmail(){
           const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           if(this.email && this.email.match(emailregex)){
               return true;
           }else{
               return false;
           }
        },
        checkPassword(){
            const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=\S+$).{8,15}$/;
            if(this.password && this.password.match(password_pattern)){
                return true;
            }else{
                return false;
            }
        },
        passwordContain(pattern){
            if(this.password && this.password.search(pattern) != -1){
                return true;
            }else{
                return false;
            }
        },
        checkFormValidity(e){
            const validEmail = this.emailIsValid;
            const validUsername = this.usernameIsValid;
            const validPassword = this.passwordIsValid;
            const validConfirmPassword = this.confirmPassword;
            if( validEmail && validUsername && validPassword && validConfirmPassword){
                const user = {"username": this.username, "email": this.email, "password": this.password};
                console.log(user);
            }else{
                e.preventDefault();
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
::placeholder{
    letter-spacing: 1px;
}
.warningText{
    margin-top: .6rem;
    font-size: var(--font-size-0-8);
}
.redText{
    color: var(--red-scale-color);
}
.passwordValidateBox{
    display: flex;
    flex-direction: column;
    position: relative;
}
</style>