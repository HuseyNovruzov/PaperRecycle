<template>
    <div>
        <header class="headerComponent">
            <div class="header__toggle">
                <img src="../assets/openmenu.svg" alt="toggle" @click="showNavbar" :class="toggleMenu ? 'body-pd':''">
            </div>
        </header>
  
        <div id="nav-bar" class="l-navbar" :class="toggleMenu ? 'show' : ''">
          <nav class="nav">
              <div class="nav__list">
              <router-link to="/user" class="nav__logo">
                  <img src="../assets/profile.svg" alt="">
                  <span class="nav__name">Profil</span>
              </router-link>

              <router-link to="/notifications" class="nav__logo">
                  <img src="../assets/notification.svg" alt="">
                  <span class="nav__name">Bildirisler</span>
              </router-link>
              
              <router-link to="/settings" class="nav__logo">
                  <img src="../assets/settings.svg" alt="">
                  <span class="nav__name">Ayarlar</span>
              </router-link>
              </div>
          </nav>
        </div>
    </div>
</template>

<script>


export default {
    name: 'HeadSection',
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

        this.$emit("handleNavbar", this.toggleMenu);
    },
    
    }
}
</script>


<style scope>
.headerComponent{
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  background-color: var(--header-color);
  box-shadow: 0 2px 2px 2px rgb(0,0,0,.2);
  z-index: var(--z-fixed);
  transition: .5s; 
}

.header__toggle{
  cursor: pointer;
  display: flex;
  margin-left: var(--nav-width);
}

/* ------ NAV ------ */
.l-navbar{
  position: fixed;
  top: 0;
  left: -30%;
  width: var(--nav-width);
  height: 100vh;
  background: var(--white-scale-8-bg-color);
  padding: .5rem 1rem 0 0;
  transition: .5s;
  z-index: var(--z-fixed);
}
.nav{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
.nav__logo{
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: .3rem 1.56rem;
  position: relative;
  color: var(--blue-scale-color);
  margin-bottom: 1.5rem;
  transition: .3s;
}
.nav__logo:hover{
  color: #9099b1;
}

.show{
  left: 0;
  transition: .5s;
}

@media only screen and (max-width: 767px){
  .header__toggle{
    margin-left: .5rem;
  }
}

@media only screen and (min-width: 768px) {
  
  .header{
    height: calc(var(--header-height) + 1rem);
    padding: 0 0 0 calc(var(--nav-width) + 1rem);
  }

  .l-navbar{
    left: 0;
  }
 
  .show{
    width: calc(var(--nav-width) + 156px);
  } 
}

</style>