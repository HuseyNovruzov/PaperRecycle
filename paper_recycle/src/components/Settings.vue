<template>
    <div class="settingsContainer">
        <section class="logOut">
            <a href="#">Hesabdan cix</a>
        </section>
        <h2>Sifreni yenile</h2>
        <section class="resetPasswordContainer">
                <form action="" class="resetPasswordForm">
                    <label for="former__password" class="resetPasswordLabel">Movcud sifreni daxil edin</label>
                    <input type="password" id="former__password">
                    <label for="new__password">Yeni sifreni daxil edin</label>
                    <input type="password" v-model="password" @keyup="checkValidity()" name="" id="new__password">
                   <p class="warningText" v-show="!validatePass">Emin olun ki teyin etdiyiniz sifre en azi <span class="redText">15 simvoldan ibaretdir
                        ve yaxud en azi 1 kicik herf, 1 boyuk herf, 1 reqem ve bu simvollardan @#$*%&^+= en azi birini ozunde saxlayir ve minimum uzunlugu 8-dir. </span></p>
                    <input type="submit" value="Deyis" class="submitBtn" />
                </form> 
 
        </section>
        <h2>Mekan melumatlari</h2>
        <section class="locationContainer">
            <form action="" class="locationForm">
                <label for="set__city">Seher secin</label>
                <select name="" id="set__city" class="setCity">
                    <option value="Baki">Baki</option>
                </select>
                <p class="warningText redText">Hal-hazirda ancaq baki seheri uzre fealiyyet gosteririk</p>
                <label for="">Unvan daxil edin</label>
                <input type="text" placeholder="Kagizlarin sizden tehvil alinacagi deqiq unvan">
                <input type="submit" value="Yadda saxla" class="submitBtn" />
            </form>
        </section>
    </div>
</template>


<script>

export default{
    name: 'Settings',
    data(){
        return{
            password: '',
            validatePass: false,
        }
    },
    methods: {
        checkValidity(){
            if(this.password.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$*%^&+=])(?=\S+$).{8,15}/) || this.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=\S+$).{15,20}/)){
                return this.validatePass = true;
            }
            else{
                return this.validatePass = false;
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
}
.logOut{
    width: 700px;
    display: flex;
    justify-content: flex-end;
    margin-top: var(--mg-top);
}
.logOut a{
    color: var(--blue-scale-color);
}
.resetPasswordContainer, .locationContainer{
    border: 1px solid var(--white-scale-9-border-color);
    background: var(--white-scale-8-bg-color);
    display: flex;
    flex-direction: column;
    width: 700px;
    padding: 0 10px;
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
    border: 1px solid var(--white-scale-9-border-color);
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
    background: var(--green-scale-color);
    color: var(--white-text-color);
    font-weight: var(--font-weight-700);
    border: none;
    padding: 7px;
    width: 200px;
}
input[type=submit]:hover{
    filter: brightness(90%);
}
.resetPasswordForm:last-child, .locationForm:last-child{
    margin-bottom: calc(var(--mg-bottom) - 1rem);
}
input:focus{
    box-shadow: 0 0 3px 1px var(--blue-scale-color);
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