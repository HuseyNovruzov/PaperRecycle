<template>
  <div class="homePageContainer">
    <div class="toggleBox" v-if="!toggleMenu" @click="toggleNavbar">
      <img src="../assets/openmenu.svg" alt="">
    </div>
    <nav class="responsive-navbar" v-show="toggleMenu">
        <div class="closeBtn-box" @click="toggleNavbar">
            <img src="../assets/openmenu.svg" alt="">
        </div>
        <div class="responsive-logo-box">Logo</div>
        <div class="responsive-button-box">
          <router-link to="/login">
            <input type="button" value="Daxil ol" class="responsive-loginBtn" @click="hideNavbar"/>
          </router-link>
          <router-link to="/register">
            <input type="button" value="Qeydiyyat" class="responsive-registerBtn" @click="hideNavbar"/>
          </router-link>
        </div>
    </nav>
    <header class="home-header">
      <div class="logo-box">
       <img src="../assets/logo.svg" alt="">
      </div>
      <div class="button-box">
        <router-link to="/login">
          <input type="button" value="Daxil ol" class="loginBtn" />
        </router-link>
        <router-link to="/register">
          <input type="button" value="Qeydiyyat" class="registerBtn" />
        </router-link>
      </div>
    </header>
    <section class="middle">
      <section class="textSection">
        <div class="headerText">
          <h1>Daha yaxşı təbiət üçün!</h1>
        </div>
        <div class="headerImg">
          <img src="../assets/street.svg" alt="">
        </div>
        <div class="context">

          <p>Kağızların təkrar emalı bir neçə ağacı xilas edir</p>
        </div>
      </section>
      <section class="informBox">
        <h1 class="headerText">Nə etmək lazımdır?</h1>
        <span class="line"></span>
      </section>
    <div class="cards">
      <div class="card1">
        <div class="textBox">
          <h2>Qeydiyyatdan keçin</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque possimus doloremque
             molestias incidunt aspernatur harum dolor atque minus modi exercitationem voluptatibus nostrum 
            iste autem officiis dignissimos nulla, sed similique fuga!
          </p>
        </div>
        <div class="cardImageBox">
          <img src="../assets/login.svg" alt="">
        </div>
      </div>
      <div class="card2">
         <div class="cardImageBox">
           <img src="../assets/bonus.svg" alt="">
         </div>
        <div class="textBox">
          <h2>Bonus qazanın</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum consequatur sunt aspernatur. 
            Debitis soluta quaerat natus ab quidem. Excepturi expedita
             maiores aliquam magni, ipsam earum soluta dicta! Beatae, impedit!</p>
        </div>
      </div>
    </div>
    </section>
  </div>
</template>
<script>

export default {
  data(){
    return{
      toggleMenu: false,
    }
  },
  
  methods: {
    
    toggleNavbar(){
      if(!this.toggleMenu){
        this.toggleMenu = true;
        document.body.classList.add('bd-block');
      }
      else{
        this.toggleMenu = false
        document.body.classList.remove('bd-block');
      }
    },
    hideNavbar(){
      document.body.classList.remove('bd-block');
    }
  },
  
}
</script>

<style scope>
.homePageContainer{
  display: flex;
  flex-direction: column;
}

/* Toggle */
.toggleBox{
  position: fixed;
  right: 5px;
  top: 5px;
  background: var(--header-color);
  box-shadow: 0 0 3px var(--gray-scale-color);
  width: 35px;
  height: 35px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 12px 8px 12px 8px;
  cursor: pointer;
}
/* ----- Responsive navbar ----- */
.responsive-navbar{
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--black-text-color);
}
.closeBtn-box{
  position: fixed;
  top: 5px;
  right: 5px;
  width: 35px;
  height: 35px;
  background: var(--header-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px 8px 12px 8px;
  cursor: pointer;
}
.responsive-logo-box{
  margin-top: calc(var(--mg-unit) + 1rem);
  width: 100%;
  display: flex;
  justify-content: center;
}
.responsive-button-box{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: calc(var(--mg-unit) + 2rem);
}
.responsive-registerBtn{
  margin-left: var(--mg-unit);
}
.responsive-loginBtn, .responsive-registerBtn{
  color: var(--blue-scale-color);
  background: transparent;
  border: 1px solid var(--white-text-color);
}
.responsive-registerBtn:hover, .responsive-loginBtn:hover{
  background: var(--blue-scale-color);
  color: var(--white-text-color);
}
.bd-block{
  overflow: hidden;
}
/* ----- Header ----- */
.home-header{
  position: sticky;
  top: 0;
  background: var(--header-color);
  box-shadow: 0 0 3px var(--gray-scale-color) ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .4rem 1rem;
}
.logo-box{
  width: 200px;
}
.logo-box img{
  width: 100%;
  height: 40px;
}
.button-box{
  width: 170px;
  display: flex;
  justify-content: space-between;
}
.button-box input[type=button], .responsive-button-box input[type=button]{  
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}
.loginBtn{
  border: 1px solid var(--green-scale-color);
  color: var(--green-scale-color);
  background: transparent;
}
.registerBtn{
  border: 1px solid var(--green-scale-color);
  color: var(--white-text-color);
  background: var(--green-scale-color);
}
.loginBtn:hover{
  background: var(--green-scale-color);
  color: var(--white-text-color);
}
.registerBtn:hover{
  background: var(--green-strong-scale-color);
}
/* ---- First section ----- */
.middle{
  margin-top: var(--mg-top);
}
.textSection{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: var(--home-textsection-height);
  text-align: center;
}

.headerText{
  font-size: var(--headertext-font-size);
  color: var(--black-text-color);
}

.headerImg img{
  width: 100%;
}
.context{
  font-size: var(--context-font-size);
  color: var(--black-text-color);
}


/* ------ Second Section ------ */
.informBox{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.informBox .line{
  width: 100px;
  height: 2px;
  background: var(--green-scale-color);
  border-radius: 5px;
}
/* ------ Cards Section ------ */
.cards{
  margin-top: 6em;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}
.card1, .card2{
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1;
  flex-wrap: wrap;
}
.textBox{
  width: var(--home-textbox-width);
  height: var(--home-textbox-height);
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
}

.textBox h2{
  margin-bottom: var(--mg-bottom);
  font-weight: var(--font-weight-700);
  font-size: var(--context-font-size);
  color: var(--blue-scale-color);
}
.textBox p{
  color: var(--black-text-color);
  font-weight: var(--font-weight-400);
  line-height: 1.5;
  font-size: var(--normal-font-size);
}

.cardImageBox{
  width: calc(var(--home-imagebox-width) + 20px);
  height: var(--home-imagebox-height);
  display: flex;
  justify-content: center;
  align-items: center;
}
.card1>.textBox{
  order: 1;
}
.card1 > .cardImageBox{
  order: 2;
}
.cardImageBox img{
  width: 85%;
}
.card2{
  order: 2;
  margin-top: 5em;
}
.card2 > .textBox{
  order: 2;
}
.card2 > .cardImageBox{
  order: 1;
}
@media only screen and (min-width: 600px){
  .responsive-navbar{
    display: none;
  }
  .bd-block{
    overflow: auto;
  }
}
@media only screen and (max-width: 1021px){
   .card2> .textBox{
    order: 1;
  }
  .card2> .cardImageBox{
    order: 2;
  }
}

@media only screen and (max-width: 600px){
  .home-header{
    display: none;
  }
  .toggleBox{
    display: flex;
  }
  .headerText{
    font-size: 2rem;
  }
  .context{
    font-size: 1rem;
  }
  .textBox{
    width: 100%;
  }
  .cardImageBox{
    width: 100%;
  }
  .card2> .textBox{
    order: 1;
  }
  .card2> .cardImageBox{
    order: 2;
  }
}
@media only screen and (max-width: 400px){
  
  .headerText{
    font-size: 30px;
  }
  .context{
    font-size: 17px;
  }
  .textBox h2{
    font-size: 20px;
  }
  .textBox p{
    font-size: 14px;
  }
   .card2> .textBox{
    order: 1;
  }
  .card2> .cardImageBox{
    order: 2;
  }
  
  .textSection{
    margin-top: calc(var(--mg-unit) * 4);
  }
}


</style>