<template>
    <div class="b-socials">
        <ul class="b-socials__list">
            <li
                class="b-socials__item"
                v-for="item in items"
                :key="item.id"
            >
                <a :href="item.link" class="b-socials__item-link">
                    <span class="u-sr-only">{{ item.text }}</span>
                    <IconFacebook
                        class="b-socials__item-icon"
                        v-if="item.icon === 'facebook'"
                    />
                    <IconGoogle
                        class="b-socials__item-icon"
                        v-if="item.icon === 'google'"
                    />
                    <IconTwitter
                        class="b-socials__item-icon"
                        v-if="item.icon === 'twitter'"
                    />
                    <IconVimeo
                        class="b-socials__item-icon"
                        v-if="item.icon === 'vimeo'"
                    />
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import Items from "./socials";
import IconFacebook from "@/icons/facebook";
import IconGoogle from "@/icons/google";
import IconTwitter from "@/icons/twitter";
import IconVimeo from "@/icons/vimeo";

export default {
    name: "Socials",
    components: {
        IconFacebook,
        IconGoogle,
        IconTwitter,
        IconVimeo,
    },
    data() {
        return {
            items: Items,
        };
    },
};
</script>

<style src="./index.scss" lang="scss"></style>
