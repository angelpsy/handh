<template>
    <div class="b-publishers-sub-nav">
        <ul class="b-publishers-sub-nav__list">
            <li
                class="b-publishers-sub-nav__item"
                :class="{
                    'b-publishers-sub-nav__item--active': item === itemActive,
                }"
                v-for="item in items"
                :key="item.id"
                @click="handlerClickItem(item)"
            >
                <template>
                    <IconStarRed
                        class="b-publishers-sub-nav__item-icon"
                        v-if="item.icon === 'star-red'"
                    />
                    <IconAnchorBlue
                        class="b-publishers-sub-nav__item-icon"
                        v-if="item.icon === 'anchor-blue'"
                    />
                </template>
                <div class="b-publishers-sub-nav__item-row">{{ item.city }}</div>
                <div class="b-publishers-sub-nav__item-row">{{ item.phone }}</div>
                <div class="b-publishers-sub-nav__item-row">{{ item.address }}</div>
                <div class="b-publishers-sub-nav__item-row">{{ item.address2 }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import IconStarRed from "@/icons/star-red";
import IconAnchorBlue from "@/icons/anchor-blue";
export default {
    name: "PublishersSubNav",
    components: {
        IconStarRed,
        IconAnchorBlue,
    },
    props: {
        items: {
            type: Array,
            require: true,
        },
        itemActive: {
            // один из элементов items
            type: Object,
            require: true,
        },
    },
    methods: {
        handlerClickItem(item) {
            this.$emit("changeItemActive", item);
        },
    },
};
</script>

<style src="./index.scss" lang="scss"></style>
