<template>
    <div class="v-base">
        <main class="v-base__main">
            <slot></slot>
        </main>
        <aside class="v-base__aside">
            <div class="v-base__header">
                <div class="v-base__logo-wrapper">
                    <Logo class="v-base__logo" />
                </div>
            </div>
            <div class="v-base__nav">
                <Navigation
                    :items="navItems"
                />
            </div>
            <div class="v-base__aside-content" v-if="$slots.asideContent">
                <slot name="asideContent"></slot>
            </div>
            <Footer class="v-base__footer" />
        </aside>
    </div>
</template>

<script>
import Logo from "@/components/logo";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import NavItems from "./navigation";

const ViewBase = {
    name: "ViewBase",
    components: {
        Logo,
        Navigation,
        Footer,
    },
    data() {
        return {
            navItems: NavItems,
        };
    },
};

export default ViewBase;
</script>

<style src="./index.scss" lang="scss"></style>
