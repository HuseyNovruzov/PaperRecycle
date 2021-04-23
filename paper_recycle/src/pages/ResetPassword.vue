<template>
    <div class="resetPasswordBox">
        <div class="resetbox">
            <form action="" class="reset__password">
                <label for="login_field" class="resetLabel">Qeydiyyatdan kecdiyiniz email addresinizi 
                    daxil edin ve emaile sifreni yenileme linki gonderilecek</label>
                <input type="email" class="resetInput" placeholder="Emaili daxil edin"/>
                <div class="resetBtnBox">
                    <input type="submit" value="Gonder" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Resetpassword',
    date(){
        return{
            email: null
        }
    }

}

</script>

<style scoped>
.resetPasswordBox{
    height: 40vh;
    margin: var(--mg-top) 0 var(--mg-unit) 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
}
.resetbox{
    width: var(--loginbox-width);
    display: flex;
    flex-direction: column;
}
.reset__password{
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: var(--white-scale-8-bg-color);
    border-radius: 5px;
    border: 1px solid var(--white-scale-9-border-color);
}
.resetLabel{
    font-size: var(--label-font-size);
    line-height: 1.6;
}
.resetInput{
    border-radius: 5px;
    padding: 5px;
    border: 1px solid var(--white-scale-9-border-color);
    outline: none;
    margin-top: var(--mg-top);
}
.resetInput::placeholder{
    font-weight: var(--font-weight-700);
    letter-spacing: 1px;
}
input:focus{
    box-shadow: 0 0 3px 1px var(--blue-scale-color);
}
.resetBtnBox{
    display: flex;
    flex-direction: column;
    margin-top: var(--mg-top);
}
.resetBtnBox input{
    padding: 7px;
    border-radius: 5px;
    border: none;
    background: var(--green-scale-color);
    color: var(--white-text-color);
    font-weight: var(--font-weight-700);
}
</style>