<template>
    <nav class="b-navigation">
        <ul class="b-navigation__list">
            <li
                class="b-navigation__item"
                v-for="item in items"
                :key="item.id"
            >
                <router-link class="b-navigation__item-link" :to="item.to" exact-active-class="b-navigation__item-link--active">
                    {{ item.text }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    props: {
        items: {
            type: Array,
            require: true,
        },
    },
};
</script>

<style src="./index.scss" lang="scss"></style>
