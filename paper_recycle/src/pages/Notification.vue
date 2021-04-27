<template>
    <div class="notifications">
        <div class="emptyBox" v-if="!notifications.length">
                <h1>Bildiriş yoxdur</h1>
        </div>
        <div class="notification" v-for="(notification, index) in notifications" :key="index">
            <div class="messageHeader">
                <span>{{ notification.title }}</span>
            </div>
            <div class="messagecontext">
                <span>{{ notification.message }}</span>
            </div>
            <div class="removeBox">
                <a href="#" @click="removeNotification(index)">Sil</a>
            </div>
        </div>    
    </div>
</template>

<script>

export default {
    name: 'Notifications',
    
    data(){
        return{
            message: '',
            notifications: [],
            date: '',
            gram: '',
        }
    },
    created(){
        this.addNotification();
    },
    methods:{
        addNotification(){
            const date = localStorage.getItem("date");
            const gram = localStorage.getItem("gram");
            if(date!=null && gram!=null){
                this.message = `${date}  tarixinde ${gram} qram kagiz vereceyinizi tesdiqlediniz.`;
                this.notifications.push({ title: "Basliq", message: this.message });
            }
            return this.notifications;
        },

        removeNotification(index){
            this.notifications.splice(index);
            localStorage.removeItem("date");
            localStorage.removeItem("gram");
        }
    }
}
</script>

<style>
.notifications{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 70vh;
    overflow: auto;
    padding-bottom: 1rem;
}
.emptyBox{
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--gray-scale-color);
}

.notification{
    width: 550px;
    /* border: 1px solid var(--white-scale-9-border-color); */
    background: var(--header-color);
    box-shadow: 1px 1px 4px rgba(0,0,0,.5);
    margin-top: var(--mg-top);
    border-radius: 5px;
    padding: 5px 10px;
}
.messageHeader{
    font-weight: var(--font-weight-700);
}

.messagecontext{
    font-size: var(--label-font-size);
    margin-top: var(--mg-top);
} 
.removeBox{
    display: flex;
    justify-content: flex-end;
    padding: 0 5px 0 0;
}
.removeBox a{
    color: var(--red-scale-color);
}

@media only screen and (max-width: 600px) {
    .notification{
        width: 90%;
    }
}
</style>