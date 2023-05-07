<template>
    <li :id="`${PageId}`" class="carousel__slide">
        <slot />
    </li>
</template>
<script>
export default {
    props: {
        PageId: {
            type: String,
            required: true,
        }
    }
}
</script>