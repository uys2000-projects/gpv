<template>
    <NuxtLayout :name="LayoutStore.Layout">
        <NuxtPage />
    </NuxtLayout>
</template>

<script>

export default defineComponent({
    data() {
        return {
            LayoutStore: useLayoutStore()
        }
    }
})
</script>