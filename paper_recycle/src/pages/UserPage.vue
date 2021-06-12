<template>
    <div class="userContainer">
        <section class="bonusBox">
            <div class="bonusesBox addBonus">
                <form action="" method="" @submit.prevent="checkAndSend">
                    <div class="dp-column">
                        <label for="gram" class="textLabel">Miqdari daxil edin</label>
                        <input type="number" id="gram" class="inp" step="100" v-model="gram" />
                        <span class="error" v-if="!isValidGram">1000 qramdan az daxil etmək olmur.</span>
                    </div>
                    <div class="dp-column">
                        <label for="date" class="textLabel setDateLabel">Vaxt seçin</label>
                        <input type="date" id="date" class="inp" v-model="date" />
                        <span class="error" v-if="!isValidDate">Tarix seçin</span>
                    </div>
                    <div class="dp-column">
                        <input type="submit" value="Təsdiqlə" class="submitBtn" :class="!isValidForm ? 'disable': 'submitBtnProp'" :disabled="!isValidForm ? true : false" >
                    </div>
                </form>
            </div>
            <div class="bonusesBox activeBonus">
                <div class="empty" v-if="!infos.length">Aktiv bonus yoxdur</div>
                <div class="bonusHeader" v-if="infos.length">
                    <span class="active">Aktiv bonus {{ bonus }}</span>
                </div>
                <div class="infoBox">
                    <div class="historyBox" v-for="(info,index) in infos" v-bind:key="index">
                        <span class="circle bg-green"></span>
                        <div class="historyDetail">
                            <span>{{ info.waiting }}</span>
                            <span>{{ info.gram }} kq</span>
                            <span>{{ info.date }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bonusesBox waitingBonus">
                <div class="empty" v-if="!infos.length">Gözləyən bonus yoxdur</div>
                <div class="bonusHeader" v-if="infos.length">
                    <span class="waiting">Gözləyən bonus {{ waiting_bonus }}</span>
                </div>

                    <div class="infoBox">
                        <div class="historyBox" v-for="(info,index) in infos" v-bind:key="index">
                            <span class="circle bg-yellow"></span>
                            <div class="historyDetail">
                                <span>{{ info.waiting }}</span>
                                <span>{{ info.gram }} kq</span>
                                <span>{{ info.date }}</span>
                            </div>
                        </div>
                    </div> 
            </div>
        </section>
        <section class="booksContainer">
             <div class="bookCard" v-for="(book, index) in books" v-bind:key="index">
                <div class="imageBox">
                    <img :src="book.url" alt="">
                </div>
                <div class="bookDescription">
                    <div class="bookText">
                        <p><span class="bold-text">Müəllif</span>  {{ book.name }}</p>
                        <p><span class="bold-text">Kitab adı</span>  {{ book.book_name }}</p>
                    </div>
                    <div class="isAvailable">
                        <input type="button" value="Seç" :class="isAvailable(book.bonus) ? 'availableBook': 'disable'" :disabled="isAvailable(book.bonus) ? false : true">
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
            gram: null,
            date: null,
            bonus: 40,
            waiting_bonus: null,
            books: [],
            infos: []
        }
    },
    created(){
        fetch('books.json')
        .then((data)=>{
            return data.json()
        })
        .then((data)=> {
            this.books = data.books
            return this.books;
        })
    },

    computed:{
        isValidGram(){
            return this.checkGramValidity();
        },
        isValidDate(){
            return this.checkValidDate();
        },
        isValidForm(){
            const gram = this.isValidGram;
            const date = this.isValidDate;
            if(gram && date){
                return true;
            }else{
                return false;
            }
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
                const valid_gram = this.checkGramValidity();
                if(valid_gram){
                    const bonus = (this.gram)/1000;
                    return bonus;
                }
                else{
                    return 0;
                }
            },

            checkAndSend(e){
                const validate_gram = this.checkGramValidity();
                const valid_date = this.checkValidDate();
                if(valid_date && validate_gram){
                    this.waiting_bonus = this.calculateBonus();
                    const info = {"date": this.date, "gram": this.gram/1000, "waiting": this.waiting_bonus}
                    this.infos.push(info)
                    // const dateArr = this.date.split('-');
                    // const year = dateArr[0];
                    // const month = dateArr[1];
                    // const day = dateArr[2];

                    // localStorage.setItem("date",`${year} - ${month} - ${day}`);
                    // localStorage.setItem("gram", this.gram);
                    // const info = {"gram": this.gram, "date": this.date, "waiting_bonus": this.waiting_bonus }
                    return this.infos;
                }else{
                    e.preventDefault();
                }
            },

            checkGramValidity(){
                if(this.gram < 1000){
                    return false;
                }else{
                    return true;
                }
            },

            checkValidDate(){
                const d = new Date();
                const day = d.getDate();
                const month = d.getMonth() + 1;
                const year = d.getFullYear();
                if(this.date!=null){
                    const dateArr = this.date.split('-');
                    const selected_year = Number(dateArr[0]);
                    const selected_month = Number(dateArr[1]);
                    const selected_day = Number(dateArr[2]);
                    if(selected_year > year){
                        return true;
                    }
                    else if(selected_year === year){
                        if(selected_month > month){
                            return true;
                        }
                        else if(selected_month == month){
                            if(selected_day > day){
                                return true;
                            }
                            else{
                                return false;
                            }
                        }
                        else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                }
                else{
                    return false
                }

            },
                        
        }
    }
</script>

<style scoped>
*::-webkit-scrollbar-track{
    background: var(--white-text-color);
}
*::-webkit-scrollbar-thumb{
    border-radius: 5px;
}
.userContainer{
    display: flex;
    flex-direction: column;
}

.bonusBox{
    margin: var(--mg-top) var(--mg-unit) 0 0;
    overflow-x: auto;
    white-space: nowrap;
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-between;
    
}

.bonusesBox{
    width: var(--bonusform-width);
    border-radius: 5px;
    margin: 0 var(--mg-unit);
}
.empty{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50%;
    transform: translate(0%,-50%);
    color: var(--gray-scale-color);
}
.addBonus{
    padding: 10px;
    background: var(--bg-smokewhite-color);
    border: 1px solid var(--bd-white-color);
}
.activeBonus{
    padding: 5px 0;
    border: 1px solid var(--green-scale-color);
}
.waitingBonus{
    padding: 5px 0;
    border: 1px solid var(--bd-yellow-color);
}
.bonusHeader{
    display: flex;
    justify-content: center;
}
.active{
    color: var(--green-scale-color);
}
.waiting{
    color: var(--yellow-text-color);
}
.infoBox{
    margin-top: var(--mg-top);
    padding: 0 5px;
    overflow: auto;
    height: 170px;
}
.historyOfBonus{
    margin-top: var(--mg-unit);
    padding: 0 5px;
    overflow: auto;
    border: 1px solid;
}
.historyBox{
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--gray-scale-color);
    padding: 0 5px;
    margin-bottom: var(--mg-unit);
}
.circle{
    width: 10px;
    height: 10px;
    border-radius: 50%;
}
.bg-green{
    background: var(--green-scale-color);
}
.bg-yellow{
    background: var(--bg-yellow-color);
}
.historyDetail{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-left: calc(var(--mg-unit)/2);
}
.dp-column{
    display: flex;
    flex-direction: column;
}
.setDateLabel{
    margin-top: var(--mg-top);
}
.submitBtn{
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
    margin-top: calc(var(--mg-top) + 1rem);
    margin-bottom: var(--mg-unit);
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: thin;
}

.bookCard{
    display: inline-block;
    width: 200px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
    border-radius: 10px;
    overflow: hidden;
    margin: 0 var(--mg-unit);
    border: 1px solid var(--bd-white-color);
}

.imageBox{
    height: 200px;
}
.imageBox img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.bookDescription{
    display: flex;
    flex-direction: column;
}
.bookText{
    font-size: var(--font-size-0-8);
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 3px;
}
.bold-text {
    color: var(--strong-blue-color);
    margin-right: calc(var(--mg-unit) /2);
}
.isAvailable{
    display: flex;
    justify-content: center;
    padding: 10px 0;
}
.isAvailable input{
    color: var(--white-text-color);
    border: none;
    width: 120px;
    padding: 4px 0;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
}

</style>