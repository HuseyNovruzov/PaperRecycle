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
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@100&family=Source+Sans+Pro:wght@200;300;400&display=swap');
/* ------ Variables CSS ------ */
:root{
  /* ----- Height and Width ----- */

  /* ------ Home Page ------ */
  --home-introduction-height: 570px;
  --home-btn-width: 90px;
  --home-textbox-width: 450px;
  --home-textbox-height: 22em;
  --home-imagebox-width: 450px;
  --home-imagebox-height: 22em;
  --logo-box-width: 200px;
  /* ----- Register page ----- */
  --loginbox-width: 400px;
  --usercontainer-height: 100vh;
  /* ------ User Page ------ */
  --bonusform-width: 320px;
  --bookcard-width: 275px;
  --descriptionbox-width: 160px;
 /* ------ Colors ------ */
  --bg-black-color: #000000;
  --bg-white-color: #ffffff;
  --bg-smokewhite-color: #f6f8fa;
  --bg-smooth-color: rgb(194, 240, 232);
  --bg-gray-color: rgb(223, 219, 219);
  --bg-yellow-color: #ffda18;
  --bd-white-color: #e1e4e8;
  --bd-yellow-color: #ffda18;

 --strong-blue-color: rgb(3, 22, 73);
 --blue-scale-color: #1648f9;
 --white-text-color: #faf9fc;
 --black-text-color: #212529;
 --yellow-text-color: #ffda18;
 --gray-text-color: rgb(126, 119, 119);
 --green-scale-color: rgb(24, 212, 118);
 --green-strong-scale-color: rgb(29, 173, 108);
 --red-scale-color: rgb(223, 61, 61);
 --gray-scale-color: rgb(210,210,210);

 --disable-button-color: rgb(153, 151, 151);
 --bonusbox-border-color: #cccfd8;

 /* ------ Fonts ----- */
 --body-font-first: 'IBM Plex Serif', serif;
 --body-font-second: 'Source Sans Pro', sans-serif;
 --normal-font-size: 1rem;
 --font-size-2: 2rem;
 --font-size-1-2: 1.2rem;
 --font-size-0-9: .9rem;
 --font-size-0-8: .8rem;
 --font-weight-700: 700;
 --font-weight-400: 400;  
 

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
    background: var(--bg-smokewhite-color);
    border-radius: 5px;
    border: 1px solid var(--bd-white-color);
}
.inp{
    border-radius: 5px;
    padding: 5px;
    border: 1px solid var(--bd-white-color);
    outline: none;
    margin-top: var(--mg-top);
    position: relative;
}
.textLabel{
    margin-left: 3px;
    font-size: var(--normal-font-size);
}
.inputBox{
    margin-top: var(--mg-top);
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
    margin-top: calc(var(--mg-top) /2);
    margin-left: calc(var(--mg-unit) /2);
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
