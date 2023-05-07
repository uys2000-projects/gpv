<template>
    <div class="flex flex-col max-h-screen h-screen">
        <LayoutHeader />
        <LayoutBody>
            <slot />
        </LayoutBody>
        <LayoutFooter />
    </div>
</template>