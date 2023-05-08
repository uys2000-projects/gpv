<template>
    <div class="page">
        <div class="fit flex flex-col pb-10">
            <div>
                <h1 class="text-3xl">
                    Transletor
                </h1>
            </div>
            <CommonCarousel ref="translator" class="h-[50vh]">
                <CommonCorauselPage PageId="editor" class="flex flex-col p-5">
                    <div class="absolute z-10 right-7 top-10" @click="trasnlateButton">
                        <span class="button">
                            Translate
                        </span>
                    </div>
                    <CommonQuill ref="editor">
                        <p>
                            Write Your Text here
                        </p>
                    </CommonQuill>
                </CommonCorauselPage>
                <CommonCorauselPage PageId="result" class="flex flex-col p-5">
                    <div class="absolute z-10 right-7 top-10  text-black text-2xl">
                        <a href="#editor"><i class="undo" /></a>
                    </div>
                    <CommonQuill ref="result" />
                </CommonCorauselPage>
            </CommonCarousel>

        </div>
    </div>
</template>
<script lang="ts">
import { CommonCarousel, CommonQuill } from '~~/.nuxt/components';
export default {
    methods: {
        showResult(): void {
            const carousel = this.$refs.translator as typeof CommonCarousel
            const ol = carousel.$refs.slider as HTMLOListElement
            this.$router.push("/app#result")
            ol.scrollTo(9999, 0)
        },
        setResult(text: string): void {
            const result = this.$refs.result as typeof CommonQuill
            const resultQuill = result.quill
            resultQuill.setText(text)
        },
        trasnlateText(text: string): Promise<string> {
            return new Promise((resolve) => {
                resolve(text)
            })
        },
        trasnlateButton(): void {
            const editor = this.$refs.editor as typeof CommonQuill
            const editorQuill = editor.quill

            this.trasnlateText(editorQuill.getText()).then((resultText) => {
                this.setResult(resultText)
                this.showResult()
            })
        }
    }
}
</script>