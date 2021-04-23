<template>
  <div class="headerContainer">
    <div class="userInfo">
        <div class="profileImage">
          <img src="../assets/profile.jpeg" alt="">
        </div>
        <span class="username">{{ getUserName() }}</span>
    </div>
    <header class="headerComponent">
      <div></div>
      <nav class="navigation">
        <router-link class="nav-item" to="/user">Profil</router-link>
        <router-link class="nav-item" to="/notifications">Bildirisler</router-link>
        <router-link class="nav-item" to="/settings">Ayarlar</router-link>
      </nav>
      <div class="logout">
        <a href="#">
          <img src="../assets/logout.svg" alt="heasbdan cix" title="Hesabdan cixis">
        </a>
      </div>
    </header>
    <div class="openmenu" @click="toggleNavbar" v-if="!toggle">
      <img src="../assets/openmenu.svg" alt="">
    </div>
    <nav class="responsive-header" v-show="toggle">
      <div class="closemenu" @click="toggleNavbar">
        <img src="../assets/openmenu.svg" alt="">
      </div>
      <nav class="responsive-navigation">
        <router-link class="link-space" to="/user">
          <input type="button" value="Profil" class="nav-btn" @click="hideNavbar">
        </router-link>
        <router-link class="link-space" to="/notifications">
          <input type="button" value="Bildirisler" class="nav-btn" @click="hideNavbar">
        </router-link>
        <router-link class="link-space" to="/Settings">
          <input type="button" value="Ayarlar" class="nav-btn" @click="hideNavbar">
        </router-link>
      </nav>
      <div class="logout link-space">
        <input type="button" value="Hesabdan cix" class="logoutBtn">
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  data(){
    return{
      username: null,
      toggle: false,
    }
  },
  methods: {
    getUserName(){
        this.username = localStorage.getItem("username");
        if(this.username != null){
            return this.username;
            }
    },
    toggleNavbar(){
      if(!this.toggle){
        this.toggle = true;
        document.body.classList.add("body-overflow");
      }
      else{
        this.toggle = false;
        document.body.classList.remove("body-overflow");
      }
    },
    hideNavbar(){
      document.body.classList.remove('body-overflow');
      this.toggle = false;
    }
  }
}
</script>

<style scope>
.headerContainer{
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--gray-scale-color);
}
.headerComponent{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 .7rem;
}
.userInfo{
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: calc(var(--mg-unit)/2);
}
.profileImage{
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.profileImage img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.navigation{
  width: 40%;
  display: flex;
  justify-content: space-between;
}
.nav-item{
  color: var(--blue-scale-color);
}
.nav-btn{
  color: var(--blue-scale-color);
  background: none;
  border: none;
  outline: none;
  padding: 0;
  font-size: var(--normal-font-size);
}
.nav-btn:hover{
  cursor: pointer;
  color: var(--gray-scale-color);
}
.nav-item:hover{
  color: var(--gray-scale-color);
}
.logout{
  display: flex;
  justify-content: center;
  align-items: center;
}
/* ----- Mobile navigation bar ----- */
.responsive-header{
  position: fixed;
  top: 0;
  z-index: var(--z-fixed);
  display: flex;
  width: 100%;
  height: 100vh;
  background: var(--black-text-color);
  flex-direction: column;
  justify-content: center;
}
.username{
  margin-left: 1rem;
  color: var(--black-text-color);
  font-weight: var(--font-weight-700);
}
.responsive-navigation{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.link-space{
  margin-top: var(--mg-top);
}
.logoutBtn{
  outline: none;
  padding: .5rem .8rem;
  color: var(--blue-scale-color);
  border: none;
  cursor: pointer;
}
.openmenu, .closemenu{
  display: none;
  position: fixed;
  top: 5px;
  right: 5px;
  background: var(--header-color);
  box-shadow: 0 0 3px var(--gray-scale-color);
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 12px 8px 12px 8px;
  cursor: pointer;
  z-index: var(--z-fixed);
}
.body-overflow{
  overflow: hidden;
}
@media only screen and (min-width: 600px){
  .responsive-header{
    display: none;
  }
  .body-overflow{
    overflow: auto;
  }
}
@media only screen and (max-width: 600px){
  .headerComponent{
    display: none;
  }
  .openmenu,.closemenu{
    display: flex;
  }
}
</style>