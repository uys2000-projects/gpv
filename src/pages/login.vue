<template>
    <div class="page flex flex-col">
        <CommonCarousel class="h-[60vh]">
            <CommonCorauselPage PageId="login">
                <Login />
            </CommonCorauselPage>
            <CommonCorauselPage PageId="forgot">
                <LoginForgot />
            </CommonCorauselPage>
            <CommonCorauselPage PageId="register">
                <LoginRegister />
            </CommonCorauselPage>
        </CommonCarousel>
    </div>
</template>
<script lang="ts">
export default {
    mounted() {

    }
}
</script>