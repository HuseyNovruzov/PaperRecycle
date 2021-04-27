<template>
    <div class="settingsContainer">
        <h2>Şifrəni yenilə</h2>
        <section class="resetPasswordContainer">
                <form action="" class="resetPasswordForm" @submit.prevent="refreshPassword">
                    <label for="former__password" class="resetPasswordLabel">Mövcud şifrəni daxil edin</label>
                    <input type="password" v-model="password" :class="currentPasswordIsValid ? 'success': 'generalBorder'">
                    <span class="error">{{ }}</span>
                    <label for="new__password">Yeni şifrəni daxil edin</label>
                    <input type="password" v-model="new_password" :class="new_passwordIsValid ? 'success': 'generalBorder'" />
                    <span class="conditions" :class="new_passwordContainLower ? 'success-text': ''">Ən az bir kiçik hərf olmalıdır</span>
                    <span class="conditions" :class="new_passwordContainUpper ? 'success-text': ''">Ən az bir böyük hərf olmalıdır</span>
                    <span class="conditions" :class="new_passwordContainDigit ? 'success-text': ''">Ən az bir rəqəm olmalıdır</span>
                    <span class="conditions" :class="new_passwordLength ? 'success-text': ''">Şifrə uzunluğu 8 və ya daha artıq olmalıdır</span>
                    <input type="submit" value="Deyis" class="submitBtn" :class="disableChangePasswordButton ? 'submitBtnProp': 'disable'" :disabled="disableChangePasswordButton ? false : true" />
                </form> 
 
        </section>
        <h2>Məkan məlumatları</h2>
        <section class="locationContainer">
            <form action="" class="locationForm" @submit.prevent="setLocation">
                <label for="set__city">Şəhər seçin</label>
                <select name="" id="set__city" class="setCity generalBorder" v-model="city">
                    <option value="Baki">Bakı</option>
                </select>
                <p class="warningText redText">Hal-hazirda ancaq Bakı şəhəri üzrə fəaliyyət göstəririk</p>
                <label for="">Ünvan daxil edin</label>
                <input type="text" placeholder="Kağızların sizdən təhvil alinacağı dəqiq ünvan" class="generalBorder" v-model="address">
                <input type="submit" value="Yadda saxla" class="submitBtn" :class="disableSendLocationButton ? 'submitBtnProp': 'disable'" :disabled="disableSendLocationButton ? false: true" />
            </form>
        </section>
    </div>
</template>


<script>
export default {
    name: 'Settings',
    data(){
        return{
            password: null,
            new_password: null,
            city: null,
            address: null
        }
    },
    computed: {
        currentPasswordIsValid(){
            return this.passwordIsValid(this.password);
        },
        new_passwordIsValid(){
            return this.passwordIsValid(this.new_password);
        },
        new_passwordContainLower(){
            const lower_letter = /[a-z]/;
            return this.new_passwordContain(lower_letter);
        },
        new_passwordContainUpper(){
            const upper_letter = /[A-Z]/;
            return this.new_passwordContain(upper_letter);
        },
        new_passwordContainDigit(){
            const digit = /[\d]/;
            return this.new_passwordContain(digit);
        },
        new_passwordLength(){
            if(this.new_password!=null && this.new_password.length >= 8){
                return true;
            }else{
                return false;
            }
        },
        disableChangePasswordButton(){
            return this.isValidPasswordForm();
        },
        disableSendLocationButton(){
            return this.isValidLocationForm();
        }
    },
    methods: {
        /* ----- Validate password ----- */
        passwordIsValid(password){
            const password_pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=\S+$).{8,15}$/;
            if(password && password.match(password_pattern)){
                return true;
            }else{
                return false;
            }
        },
        /* ----- Filter password ----- */
        new_passwordContain(pattern){
            if(this.new_password && this.new_password.search(pattern) != -1){
                return true;
            }else{
                return false;
            }
        },
        /* ----- Validete city ----- */
        cityIsSelected(){
            if(this.city){
                return true;
            }else{
                return false;
            }
        },
        /* ----- Validate address ----- */
        addressIsSelected(){
            if(this.address){
                return true;
            }else{
                return false;
            }
        },
        /* ----- Validate password change form ----- */
        isValidPasswordForm(){
            const current = this.passwordIsValid(this.password);
            const new_pass = this.passwordIsValid(this.new_password);
            if(current && new_pass){
                return true;
            }else{
                return false;
            }
        },
        /* ------ Validate set location form ----- */
        isValidLocationForm(){
            const city_name = this.cityIsSelected();
            const address_name = this.addressIsSelected();
            if(city_name && address_name){
                return true;
            }else{
                return false;
            }
        },
        /* ----- Send password change to backend ----- */
        refreshPassword(e){
            const valid_current_password = this.currentPasswordIsValid;
            const valid_new_password = this.new_passwordIsValid;
            if(valid_current_password && valid_new_password){
                const refresh = {"new_password": this.new_password }
                console.log(refresh)
                return refresh;
            }else{
                e.preventDefault();
            }
        }, 
        setLocation(e){
            const city_bool = this.cityIsSelected;
            const address_bool = this.addressIsSelected;
            if(city_bool && address_bool){
                const address_form = {"city": this.city, "address": this.address }
                console.log(address_form)
                return address_form;
            }else{
                e.preventDefault();
            }
        }
    }
}
</script>

<style scoped>
.settingsContainer{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: var(--mg-bottom);
}
.generalBorder{
     border: 1px solid var(--white-scale-9-border-color);
}
.resetPasswordContainer, .locationContainer{
    border: 1px solid var(--white-scale-9-border-color);
    background: var(--white-scale-8-bg-color);
    display: flex;
    flex-direction: column;
    width: 700px;
    padding: 0 1rem;
    border-radius: 5px;
}

.resetPasswordForm, .locationForm{
    display: flex;
    flex-direction: column;
    width: 90%;
}
.resetPasswordForm label, .locationForm label{
    font-size: var(--label-font-size);
    color: var(--black-text-color);
    margin-top: var(--mg-top);
}
.resetPasswordForm input, .locationForm input, select{
    padding: 5px;
    border-radius: 5px;
    outline: none;
    margin-top: var(--mg-top);
}
.setCity{
    width: 200px;
}
.warningText{
    font-size: var(--warningtext-font-size);
}
.redText{
    color: var(--red-scale-color);
}
.submitBtn{
    color: var(--white-text-color);
    font-weight: var(--font-weight-700);
    border: none;
    padding: 7px;
    width: 200px;
}

.resetPasswordForm:last-child, .locationForm:last-child{
    margin-bottom: var(--mg-unit);
}

@media only screen and (max-width: 840px) {
    .logOut, .resetPasswordContainer, .locationContainer, .setCity{
        width: 100%;
    }
}
@media only screen and (max-width: 600px){
    .submitBtn{
        width: 100%;
    }
}
</style>