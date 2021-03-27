<template>
  <div class="homePageContainer">
      <header class="header">
        <div class="register">
          <router-link to="/login">
            <input type="button" class="loginBtn" value="Daxil ol">
          </router-link>
          <router-link to="/register">
            <input type="button" class="loginBtn" value="Qeydiyyat">
          </router-link>
        </div>
    </header>
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
    showNavbar(){
      if(this.toggleMenu == false){
        this.toggleMenu = true
      }
      else{
        this.toggleMenu = false
      }
    }
  }
  
}
</script>

<style scope>
.homePageContainer{
  display: flex;
  flex-direction: column;
}
/* ----- Header ----- */
.header{
  width: 100%;
  height: var(--header-height); 
  padding: 20px 10px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--header-color);
  box-shadow: 0 2px 2px 2px rgb(0,0,0,.2);
  z-index: var(--z-fixed);
  transition: .5s;
}

.loginBtn{
  width: var(--home-loginbtn-width);
  border: 1px solid var(--green-scale-color);
  background: transparent;
  color: var(--green-scale-color);
  padding: 6px 7px;
  font-weight: bold;
  border-radius: 5px;
  margin-right: var(--mg-unit);
}
.loginBtn:hover{
  background: var(--green-scale-color);
  color: var(--white-text-color);
}
/* ---- First section ----- */
.textSection{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: var(--home-textsection-height);
  text-align: center;
  /* border: 1px solid; */
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


/* ------ Second Part ------ */
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
  color: var(--black-text-color);
  font-weight: var(--font-weight-700);
  font-size: var(--context-font-size);
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

@media only screen and (max-width: 1021px){
   .card2> .textBox{
    order: 1;
  }
  .card2> .cardImageBox{
    order: 2;
  }
}

@media only screen and (max-width: 600px){
  .headerText{
    font-size: 2rem;
    margin-top: 1rem;
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
  .header{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: calc(var(--header-height)+ 1rem);
  }
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
  .register *{
    margin-bottom: var(--mg-unit);
  }
  .textSection{
    margin-top: calc(var(--mg-unit) * 5);
  }
}


</style>