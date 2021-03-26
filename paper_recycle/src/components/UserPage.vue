<template>
    <div class="userContainer">
        <div class="userProfile">
            <h2>{{ getUserName() }}</h2>
            <a href="#">
                <img src="../assets/logout.svg" alt="heasbdan cix" title="Hesabdan cixis">
            </a>
        </div>
        <section class="showBonuses">
            <div class="countBonus">
                Aktiv bonus: {{ bonus }}
            </div>
        </section>
        <section class="bonusBox">
            <form action="" class="addBonusForm" method="">
                <label for="gram" class="textLabel">Miqdari daxil edin</label>
                <input type="number" id="gram" class="inp" min="1000" step="100" v-model="gram" required />
                <div class="dateBox">
                    <label for="date" class="textLabel setDateLabel">Vaxt secin</label>
                    <input type="date" id="date" class="inp" v-model="date" required />
                </div>
                <input type="submit" value="Tesdiqle" class="submitBtn" @click="checkAndSend">
            </form>
        </section>
        <section class="booksContainer">
            <div class="bookCard" v-for="(book, index) in books" v-bind:key="index">
                <div class="imageBox">
                    <img src="../assets/book.jpg" alt="">
                </div>
                <div class="bookDescription">
                    <div class="bookText">
                        <p>Muellif : {{ book.name }}</p>
                        <p>Kitab adi : Emosional zeka</p>
                    </div>
                    <div class="isAvailable" v-if="isAvailable(book.bonus)">
                        <a href="#">Sec</a> 
                    </div>
                    <div class="notAvailable" v-if="!isAvailable(book.bonus)">
                        <p class="redText">{{ book.bonus - bonus }} bonus catmir</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

export default {
    name: 'Userpage',
    data(){
        return{
            username: '',
            gram: null,
            date: '',
            bonus: 40,
            booksBonus: [40, 23, 56, 90],
            books: [{ name: "Daniel Goleman", bonus: 34}, { name: "Mark Levi ", bonus: 42},{ name: "Danielee", bonus: 54}, {name:'', bonus: 32}]
        }
    },
    
    methods: {
            isAvailable(bookBonus){
                if(this.bonus >= bookBonus){
                    return true
                }
                else{
                    return false
                }
            },

            calculateBonus(){
                const bonus = (this.gram)/1000;
                return bonus;
            },

            checkAndSend(){
                if(this.date.length && this.gram!=null){
                    const dateArr = this.date.split('-');
                    const year = dateArr[0];
                    const month = dateArr[1];
                    const day = dateArr[2];
                    localStorage.setItem("date",`${year} - ${month} - ${day}`);
                    localStorage.setItem("gram", this.gram);
                }  
            },

            getUserName(){
                this.username = localStorage.getItem("username");
                if(this.username != null){
                    return this.username;
                }
                else{
                    return '';
                }

            }
            
        }
    }
</script>

<style scoped>

.userContainer{
    display: flex;
    flex-direction: column;
    padding: 0 10px;
}
.userProfile{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: var(--mg-top);
}
.showBonuses{
    margin-top: calc(var(--mg-top) + 1rem);
    display: flex;
}
.countBonus{
    display: flex;
    padding: 5px 10px;
    border-radius: 10px;
    border: 1px solid var(--white-scale-9-border-color);
    background: var(--white-scale-8-bg-color);
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--blue-scale-color);
    font-size: var(--label-font-size);
}
.bonusBox{
    margin-top: var(--mg-top);
    display: flex;
    justify-content: space-between;
}
.addBonusForm{
    width: var(--bonusform-width);
    padding: 10px;
    display: flex;
    flex-direction: column;
    background: var(--white-scale-8-bg-color);
    border-radius: 5px;
    border: 1px solid var(--white-scale-9-border-color);
}

.dateBox{
    display: flex;
    flex-direction: column;
}
.setDateLabel{
    margin-top: var(--mg-top);
}
.submitBtn{
    background: var(--green-scale-color);
    color: var(--white-text-color);
    font-weight: var(--font-weight-700);
    padding: 7px;
    border: none;
    margin-top: var(--mg-top);
    border-radius: 5px;
}
input:focus{
    box-shadow: 0 0 3px 1px var(--blue-scale-color);
}
.booksContainer{
    display: flex;
    margin-top: calc(var(--mg-unit) + 1rem);
    flex-wrap: wrap;
}

.bookCard{
    width: 200px;
    border-radius: 5px;
    border: 1px solid var(--white-scale-9-border-color);
    display: flex;
    flex-direction: column;
    margin-bottom: var(--mg-unit);
    margin-left: var(--mg-unit);
}

.imageBox{
    width: 100%;
    border-radius: 5px 5px 0 0;
}
.imageBox img{
    width: 100%;
    border-radius: 5px 5px 0 0;
}
.bookDescription{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 0;
}
.bookText{
    font-size: var(--bookname-font-size);
}
.isAvailable a{
    color: var(--green-scale-color);
    font-size: var(--label-font-size);
}
.redText{
    color: var(--red-scale-color);
    font-size: var(--label-font-size);
}


@media only screen and (max-width: 600px){
    .addBonusForm{
        width: 100%;
    }
    .booksContainer{
        justify-content: center;
    }
    .bookCard{
        margin-left: 0;
    }
}
</style>