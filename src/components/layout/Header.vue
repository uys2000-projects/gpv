<template>
    <header class="shrink-0">
        <div class="flex text-2xl">
            <div class="bg-primary w-full text-left h-fit p-5">
                <RouterLink :to="LayoutStore.LeftButton.Route">
                    {{ LayoutStore.LeftButton.Text }}
                </RouterLink>
            </div>
            <div class="bg-primary h-fit p-5 text-6xl rounded-b-3xl absolute right-1/2 translate-x-1/2">
                Project Name
            </div>
            <div class="bg-primary w-full text-right h-fit p-5">
                <RouterLink :to="LayoutStore.RightButton.Route">
                    {{ LayoutStore.RightButton.Text }}
                </RouterLink>
            </div>
        </div>
        <div>
        </div>
    </header>
</template>

<script lang="ts">
export default {
    data() {
        return {
            LayoutStore: useLayoutStore()
        }
    }
}
</script>