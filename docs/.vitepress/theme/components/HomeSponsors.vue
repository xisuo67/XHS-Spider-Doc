<script lang="ts" setup>
// https://github.com/vitejs/vite/tree/main/docs
import { VPHomeSponsors } from 'vitepress/theme'
const data = [
  {
    tier: '长期赞助商',
    size: 'big',
    items: [

    ],
  },
]
</script>

<template>
  <VPHomeSponsors
    v-if="data"
    message="小红书数据采集、网站图片、视频资源批量下载工具，颜值超高的数据采集工具（批量下载，视频提取，图片，去水印等）"
    action-text="查看更多"
    action-link="/support/"
    :data="data"
  />
</template>
