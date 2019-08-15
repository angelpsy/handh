<template>
    <div class="b-publishers-map">
        <GmapMap
            :center="center"
            :zoom="7"
            map-type-id="terrain"
            style="width: 100%; height: 100%"
        >
            <GmapMarker
                :position="marker.position"
                :clickable="true"
                :draggable="false"
                :icon="{ url: require(`./icons/${marker.icon}.png`)}"
            />
        </GmapMap>
    </div>
</template>

<script>
export default {
    name: "PublishersMap",
    props: {
        marker: {
            type: Object,
            require: true,
        },
    },
    data() {
        return {
            center: this.marker.position,
        };
    },
    watch: {
        marker() {
            this.center = this.marker.position;
        },
    },
};
</script>

<style src="./index.scss" lang="scss"></style>
