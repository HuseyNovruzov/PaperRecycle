<template>
    <footer class="footer">
        <div class="top-footer">
            <div class="contact">
                <h2>Əlaqə</h2>
                <p>kagiz.az.contact@gmail.com</p>
            </div>
            <div class="support">
                <h2>Dəstək</h2>
                <p>Yaranmış problemi dəstək komandasına bildirmək: kagiz.az.support@gmail.com</p>
            </div>
            <div class="social">
                <h2>Bizi burada izləyin</h2>
                <div class="social-image">
                    <img src="../assets/social-media.svg" alt="">
                </div>
                <div class="social-links">
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://linkedin.com">LinkedIn</a>
                </div>
            </div>
        </div>
        <div class="footer-line">
            <div></div>
            <p>Copyright ©2021 Kagiz AZ All rights reserved </p>
        </div>
    </footer>
</template>


<script>
export default {
    
}
</script>

<style scoped>
.footer{
    background: var(--black-text-color);
    padding: 1rem;
}
.top-footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.contact, .support,.social{
    width: 300px;
}
.contact h2, .support h2, .social h2{
    color: var(--white-text-color);
    font-size: var(--font-size-1-2);
    font-weight: normal;
}
.contact p, .support p{
    color: var(--gray-text-color);
    font-size: var(--font-size-0-9)
}
.social-image img{
    width: 100%;
    height: inherit;
}

.social-links{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.social-links a{
    border: 1px solid var(--blue-scale-color);
    padding: 5px 7px;
    color: var(--blue-scale-color);
}
.social-links a:hover{
    border-color: var(--bd-white-color);
    background: var(--blue-scale-color);
    color: var(--white-text-color);
}
.footer-line{
    margin-top: var(--mg-unit);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.footer-line div{
    border-bottom: 1px solid var(--bd-white-color);
    width: 90%;
}
.footer-line p{
    color: var(--white-text-color);
    font-size: var(--font-size-1-2);
}

@media only screen and (max-width: 320px){
    .contact h2, .support h2, .social h2{
        font-size: 1rem;
    }
    .contact p, .support p{
        font-size: .7rem;
    }
    .social-links a{
        font-size: .9rem;
        margin-top: var(--mg-top);
    }
    .footer-line p{
        font-size: var(--font-size-0-9);
    }
}
</style>