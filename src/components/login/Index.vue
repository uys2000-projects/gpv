<template>
    <div class="fit flex flex-col">
        <h1 class="text-4xl border-b border-b-white pb-2">
            Login
        </h1>
        <div class="fit flex">
            <div class="w-full flex">
                <form class="m-auto" method="post">
                    <div>
                        <div>
                            <label for="mail">E-Mail</label>
                        </div>
                        <div>
                            <input type="text" name="mail" class="text-black" v-model="LoginInput.mail">
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="password">Password</label>
                        </div>
                        <div>
                            <input type="password" name="password" class="text-black" v-model="LoginInput.password">
                        </div>
                    </div>
                    <div class="flex justify-end mb-2">
                        <a href="#forgot">
                            Forgot Password?
                        </a>
                    </div>
                    <div class="flex gap-1">
                        <a class="button" href="#register">
                            Regiter
                        </a>
                        <button type="submit">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div class="w-full p-5">
                <h2 class="text-2xl mb-3">
                    Why You should Register
                </h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aperiam earum asperiores magnam
                    id
                    soluta
                    natus reiciendis, laudantium voluptate, fuga accusamus quis rerum vero corrupti quidem facere
                    voluptates
                    quisquam consequatur dolorum explicabo perferendis nesciunt quod numquam sed! Maxime eveniet
                    magni
                    ratione
                    voluptas dignissimos, minus nihil natus illo velit nesciunt aspernatur.
                </p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            LoginInput: {} as LoginInput
        }
    }
}
</script>