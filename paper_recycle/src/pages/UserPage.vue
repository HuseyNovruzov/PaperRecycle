<template>
    <div class="userContainer">
        <section class="showBonuses">
            <div class="countBonus">
                 Bonus sayı: {{ bonus }}
            </div>
        </section>
        <section class="bonusBox">
            <form action="" class="addBonusForm" method="" @submit.prevent="checkAndSend">
                <label for="gram" class="textLabel">Miqdari daxil edin</label>
                <input type="number" id="gram" class="inp" step="100" v-model="gram" />
                <span class="error" v-if="!isValidGram">1000 qramdan az daxil etmək olmur.</span>
                <div class="dateBox">
                    <label for="date" class="textLabel setDateLabel">Vaxt seçin</label>
                    <input type="date" id="date" class="inp" v-model="date" />
                    <span class="error" v-if="!isValidDate">Tarix seçin</span>
                </div>
                <input type="submit" value="Tesdiqle" class="submitBtn" :class="!isValidDate ? 'disable': 'submitBtnProp'" :disabled="!isValidDate ? true : false" >
            </form>

        </section>
        <section class="booksContainer">
             <div class="bookCard" v-for="(book, index) in books" v-bind:key="index">
                <div class="imageBox">
                    <img src="../assets/book.jpg" alt="">
                </div>
                <div class="bookDescription">
                    <div class="bookText">
                        <p><span class="bold-text">Müəllif</span>  {{ book.name }}</p>
                        <p><span class="bold-text">Kitab adı</span>  Emosional zeka</p>
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
            booksBonus: [40, 23, 120, 90],
            books: [{ name: "Daniel Goleman", bonus: 34}, { name: "Mark Levi ", bonus: 42},{ name: "Danielee", bonus: 54}, {name:'Huseyn', bonus: 32}, {name: 'Murad', bonus: 40}]
        }
    },
    computed:{
        isValidGram(){
            return this.checkGramValidity();
        },
        isValidDate(){
            return this.checkValidDate();
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

            checkAndSend(e){
                const validate_gram = this.checkGramValidity();
                const valid_date = this.checkValidDate();
                if(valid_date && validate_gram){
                    const dateArr = this.date.split('-');
                    const year = dateArr[0];
                    const month = dateArr[1];
                    const day = dateArr[2];
                    localStorage.setItem("date",`${year} - ${month} - ${day}`);
                    localStorage.setItem("gram", this.gram);
                    const info = {"gram": this.gram, "date": this.date }
                    return info;
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
.userContainer{
    display: flex;
    flex-direction: column;
    /* padding: 0 .6rem; */
}
.showBonuses{
    display: flex;
    margin-top: var(--mg-top);
    padding: 0 .8rem;
}
.countBonus{
    display: flex;
    border-radius: 7px;
    padding: 5px 7px;
    border: 1px solid var(--white-scale-9-border-color);
    background: var(--white-scale-8-bg-color);
    justify-content: center;
    align-items: center;
    color: var(--blue-scale-color);
    font-size: var(--label-font-size);
}
.bonusBox{
    margin-top: var(--mg-top);
    display: flex;
    justify-content: space-between;
    padding: 0 .8rem;
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
    justify-content: space-between;
    margin-top: calc(var(--mg-top) + 1rem);
    margin-bottom: 1rem;
    overflow-x: auto;
    white-space: nowrap;
    scrollbar-width: thin;
}

*::-webkit-scrollbar-track{
    background: var(--white-text-color);
}
*::-webkit-scrollbar-thumb{
    border-radius: 5px;
}

.bookCard{
    display: inline-block;
    width: 200px;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, .2);
    border-radius: 10px;
    overflow: hidden;
    margin: 0 var(--mg-unit);
    border: 1px solid var(--white-scale-8-bg-color);
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
    font-family:Arial, Helvetica, sans-serif;
}
.bookText{
    font-size: var(--bookname-font-size);
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 10px;
}
.bold-text {
    font-weight: var(--font-weight-700);
    margin-right: .5rem;
}
.isAvailable{
    display: flex;
    justify-content: center;
    padding: 10px 0;
}
.isAvailable input{
    color: var(--white-scale-8-bg-color);
    border: none;
    width: 120px;
    padding: 4px 0;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
}

@media only screen and (max-width: 900px){
    .addBonusForm{
        width: 100%;
    }
}

</style>