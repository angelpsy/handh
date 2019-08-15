<template>
    <footer class="b-footer">
        <div class="b-footer__row">
            Размещение рекламы: <br />
            +7 945 249-48-91 <br />
            +7 966 099-30-65 <br />
            <a href="mailto:media@hpmdnetwork.ru">media@hpmdnetwork.ru</a>
        </div>

        <div class="b-footer__row">
            По вопросам подключения сайтов к сети <br />
            HPMD Network или использования <br />
            SSH HPMD Ads: <br />
            <a href="mailto:media@hpmdnetwork.ru">media@hpmdnetwork.ru</a>
        </div>

        <div class="b-footer__row">
            <Socials class="b-footer__socials"/>
        </div>
    </footer>
</template>

<script>
import Socials from "@/components/socials";
export default {
    name: "Footer",
    components: {
        Socials,
    },
};
</script>

<style src="./index.scss" lang="scss"></style>
