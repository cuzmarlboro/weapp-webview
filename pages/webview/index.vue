<template>
    <view>
        <web-view :src="url" @message="onMessage"></web-view>
    </view>
</template>

<script setup>
import { ref } from 'vue';

const url = ref('http://10.162.243.254:5174/')


function onMessage(e) {
    console.log('收到消息')
}



</script>

<style></style>
