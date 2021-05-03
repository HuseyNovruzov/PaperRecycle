<template>
  <div class="homePageContainer">
    <div class="toggleBox" @click="toggleNavbar" v-if="!toggleMenu">
      <img src="../assets/arrow_back.svg" alt="">
    </div>
    <nav class="responsive-navbar" v-show="toggleMenu">
        <div class="closeBtn-box" @click="toggleNavbar">
            <img src="../assets/close_btn.svg" alt="">
        </div>
    </nav>
    <section class="middle">
      <section class="introduction">
        <div class="introBox">
            <div class="headerText">
              <h1>Daha Yaxşı təbiət üçün!</h1>
            </div>
            <div class="context">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Eos repudiandae quod similique molestiae</span>
            </div>
            <div class="button-box">
              <router-link to="/login">
                <input type="button" value="Daxil ol" class="loginBtn" />
              </router-link>
              <router-link to="/register">
                <input type="button" value="Qeydiyyat" class="registerBtn" />
              </router-link>
            </div>
        </div>
        <div class="headerImg">
          <img src="../assets/background.svg" alt="">
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
.toggleBox, .closeBtn-box{
  position: fixed;
  right: 5px;
  top: 5px;
  background: var(--bg-white-color);
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px 8px 12px 8px;
  cursor: pointer;
  display: none;
  box-shadow: 0 0 3px var(--gray-scale-color);
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
  background: var(--bg-black-color);
}

.bd-block{
  overflow: hidden;
}

/* ---- First section ----- */

.introduction{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-height: var(--home-introduction-height);
  text-align: justify;
  background-image: linear-gradient(90deg,var(--bg-white-color), var(--bg-smooth-color));
  padding: 0 1rem;
  margin-bottom: var(--mg-bottom);
}

.introBox{
  width: 300px;
  display: flex;
  flex-direction: column;
}
.headerText{
  font-size: var(--font-size-2);
  color: var(--strong-blue-color);
  display: flex;
  order: 1;
}
.context{
  display: flex;
  order: 2;
  font-size: var(--normal-font-size);
  color: var(--black-text-color);
  margin-bottom: var(--mg-unit);
}
.button-box{
  display: flex;
  flex-wrap: wrap;
  order: 3;
  align-items: center;
  justify-content: space-around;
}
.button-box input[type=button], .responsive-button-box input[type=button]{  
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  width: var(--home-btn-width);
  transition: .4s;
}
.loginBtn{
  border: none;
  color: var(--white-text-color);
  background: var(--blue-scale-color);
}
.registerBtn{
  border: none;
  color: var(--strong-blue-color);
  background: var(--bg-gray-color);
}
.loginBtn:hover{
  color: var(--strong-blue-color);
  background: var(--bg-gray-color);
}
.registerBtn:hover{
  color: var(--white-text-color);
  background: var(--blue-scale-color);
}
.headerImg{
  height: 30em;
  width: 420px;
}
.headerImg img{
  width: 100%;
  height: 100%;
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
  font-size: var(--font-size-1-2);
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
  height: inherit;
}
.card2{
  order: 2;
  margin-top: calc(var(--mg-unit) *5);
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
  .toggleBox, .closeBtn-box{
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
}


</style>