<template>
    <ViewBase class="p-publishers">
        <Map
            class="p-publishers__map"
            :marker="itemActive"
        />
        <template v-slot:asideContent>
            <SubNav
                class="p-publishers__sub-nav"
                :items="subNavItems"
                :item-active="itemActive"
                @changeItemActive="changeItemActive"
            />
        </template>
    </ViewBase>
</template>

<script>
import ViewBase from "@/views/base/index";
import SubNav from "@/components/_publishers/sub-nav";
import SubNavItems from "./sub-nav";
import Map from "@/components/_publishers/map";

const PublishersPresentation = {
    name: "PublishersPresentation",
    components: {
        ViewBase,
        SubNav,
        Map,
    },
    data() {
        return {
            subNavItems: SubNavItems,
            itemActive: null,
        };
    },
    methods: {
        changeItemActive(item) {
            this.itemActive = item;
        },
    },
    mounted() {
        this.itemActive = this.subNavItems[0];
    },
};

export default PublishersPresentation;
</script>

<style src="./index.scss" lang="scss"></style>
