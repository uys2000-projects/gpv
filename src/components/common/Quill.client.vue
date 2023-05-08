<template>
    <div ref="quill" id="quill" class="fit bg-white text-black">
        <slot />
    </div>
</template>
<script lang="ts">
import "quill/dist/quill.core.css"
import Quill from "quill"
export default {
    data() {
        return {
            quill: {} as Quill
        }
    },
    mounted() {
        this.$nextTick(() => {
            const div = this.$refs.quill as HTMLDivElement
            this.quill = new Quill(div, {})
        })

    },

}
</script>