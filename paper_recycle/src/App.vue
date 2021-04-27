<template>
  <div id="app">
    <div class="load" v-if="loading">
      <hr/><hr/><hr/><hr/>
    </div>

          <HeadSection v-if="!getPathName()"></HeadSection>
          <router-view></router-view> 
          <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer'
import HeadSection from './components/HeadSection'
export default {
  name: 'app',
  components: { HeadSection, Footer },
  data(){
    return{
      toggleMenu: false,
      loading: true,
    }
  },
  
  methods: {
    show(toggleMenu){
      this.toggleMenu = toggleMenu;
    },

    getPathName(){
      const path = window.location.pathname;
      const pathnames = ['/', '/register', '/login', '/reset_password'];
      const isEqual = (pathname) => pathname === path;

      if(pathnames.some(isEqual)){
        return true;
      }
      else{
        return false;
      }
    }
  },
  created(){
     this.loading = false;
  }
  
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata&family=Noto+Sans+TC&display=swap');

/* ------ Variables CSS ------ */
:root{
  /* ----- Height and Width ----- */
  --header-height: 2rem;
  --nav-width: 68px;
  /* ------ Home Page ------ */
  --home-textsection-height: 570px;
  --home-loginbtn-width: 100px;
  --home-textbox-width: 450px;
  --home-textbox-height: 22em;
  --home-imagebox-width: 450px;
  --home-imagebox-height: 22em;
  /* ----- Register page ----- */
  --loginbox-width: 400px;
  --usercontainer-height: 100vh;
  /* ------ User Page ------ */
  --bonusform-width: 320px;
  --bookcard-width: 275px;
  --descriptionbox-width: 160px;
 /* ------ Colors ------ */

 --header-color: #ffffff;
 --blue-scale-color: #1648f9;
 --white-text-color: #faf9fc;
 --black-text-color: #212529;
 --green-scale-color: rgb(24, 212, 118);
 --green-strong-scale-color: rgb(29, 173, 108);
 --red-scale-color: rgb(223, 61, 61);
 --gray-scale-color: rgb(210,210,210);
 --disable-button-color: #999;
 --white-scale-8-bg-color: #f6f8fa;
 --white-scale-9-border-color: #e1e4e8;
 --bonusbox-border-color: #cccfd8;

 /* ------ Fonts ----- */
 --body-font-first: 'Inconsolata', monospace;
 --body-font-second: 'Noto Sans TC', sans-serif;
 --normal-font-size: 1rem;
 --headertext-font-size: 2.5rem;
 --context-font-size: 1.2rem;
 --label-font-size: .9rem;
 --warningtext-font-size: .8rem;
 --bookname-font-size: .8rem;
 --font-weight-700: 700;
 --font-weight-400: 400;  
 --header-font-size: 24px;
 

 /* ------ z-index ----- */
 --z-fixed: 100;  

 /* ------ margin ------ */
 --mg-unit: 1rem;
 --mg-top: 1rem;
 --mg-bottom: 2rem;
}

*, ::before, ::after{
  box-sizing: border-box;
}
body{
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  font-family: var(--body-font-first);
  font-family: var(--body-font-second);
  transition: .5s;
}
a{
  text-decoration: none;
  outline: none;
}


/* ---- Pre loader */
.load{
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%, -50%);
  width:100px;
  height:100px;
}
.load hr{
  border:0;
  margin:0;width:40%;
  height:40%;
  position:absolute;
  border-radius:50%;
  animation:spin 2s ease infinite
  }

.load :first-child{ background:#19A68C;animation-delay:-1.5s }
.load :nth-child(2){ background:#F63D3A;animation-delay:-1s }
.load :nth-child(3){ background:#FDA543;animation-delay:-0.5s }
.load :last-child{ background:#193B48 }

@keyframes spin{
  0%,100%{transform:translate(0)}
  25%{transform:translate(160%)}
  50%{transform:translate(160%, 160%)}
  75%{transform:translate(0, 160%)}
}

/* Login and Signup */
.container{
    display: flex;
    justify-content: center;
}

.formBox{
    margin-top: calc(var(--mg-top) + 1rem);
    width: var(--loginbox-width);
    display: flex;
    flex-direction: column;
    margin-bottom: var(--mg-unit);
}
.form{
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: var(--white-scale-8-bg-color);
    border-radius: 5px;
    border: 1px solid var(--white-scale-9-border-color);
}
.inp{
    border-radius: 5px;
    padding: 5px;
    border: 1px solid var(--white-scale-9-border-color);
    outline: none;
    margin-top: var(--mg-top);
    position: relative;
}
.textLabel{
    margin-left: 3px;
    font-size: var(--label-font-size);
}
.inputBox{
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
}
.btnBox{
    display: flex;
    flex-direction: column;
    margin-top: calc(var(--mg-top) + 1rem);
}
.btnBox input{
    padding: 7px;
    border-radius: 5px;
    border: none;
    background: var(--green-scale-color);
    color: var(--white-text-color);
    font-weight: var(--font-weight-700);
}

input:focus:not(.success){
    box-shadow: 0 0 3px 1px var(--blue-scale-color);
}
.conditions{
    font-size: .7rem;
    margin-top: .5rem;
    margin-left: .5rem;
}
.success{
    border: 1px solid var(--green-scale-color);
    box-shadow: none;
}
.success-text{
    color: var(--green-scale-color);
}
.error{
    color: var(--red-scale-color);
    font-size: .7rem;
    margin: .2rem 0 0 .2rem;
}
.disable{
  cursor: not-allowed;
  background: var(--disable-button-color);
}
.submitBtnProp{
  background: var(--green-scale-color);
  cursor: pointer;
}
.availableBook{
  background: var(--blue-scale-color);
  cursor: pointer;
}
</style>
