<template>
  <footer class="footer py-4 md:py-12 text-white">
    <p class="text-center">ⓒ {{ currentYear }} {{ $t('company') }}</p>
    <div class="py-4 flex justify-center">
      <el-tooltip class="w-8 h-8 lg:w-12 lg:h-12">
        <div slot="content">
          <el-image :src="IMAGES.wechatBarcode" class="w-32 h-32"></el-image>
        </div>
        <svg
          class="icon-wechat"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>WeChat icon</title>
          <path
            d="M23.541 12.748c-.609-1.38-1.758-2.476-3.092-3.151-2.354-1.192-5.281-1.185-7.629.03-1.631.837-2.993 2.337-3.379 4.162-.318 1.344-.033 2.791.68 3.961 1.061 1.762 2.979 2.887 4.971 3.248 1.443.293 2.936.119 4.338-.285.842.326 1.592.854 2.408 1.246-.211-.707-.436-1.406-.676-2.102.916-.65 1.746-1.461 2.244-2.479.744-1.415.789-3.171.135-4.63zm-9.924-9.466c-2.495-1.404-5.602-1.615-8.286-.645-1.764.635-3.36 1.815-4.346 3.42-.895 1.45-1.23 3.258-.799 4.917.433 1.84 1.711 3.383 3.262 4.413-.3.85-.585 1.699-.855 2.555.975-.51 1.95-1.043 2.926-1.561 1.17.375 2.415.559 3.66.518-.33-.943-.405-1.965-.255-2.951.225-1.371.975-2.625 1.994-3.554 1.726-1.615 4.171-2.296 6.496-2.131-.436-2.135-1.936-3.939-3.824-4.98h.027zm1.733 9.989c-.209.652-1.156.848-1.615.352-.506-.459-.309-1.418.355-1.623.734-.31 1.582.537 1.26 1.271zm4.795.092c-.256.586-1.141.723-1.576.27-.209-.191-.27-.479-.344-.73.104-.458.42-.933.93-.955.705-.098 1.336.773.975 1.416h.015zM12.99 6.909c.008.961-1.275 1.561-1.995.909-.747-.535-.535-1.837.342-2.106.785-.315 1.713.344 1.651 1.185l.002.012zm-6.059.244c-.172.835-1.291 1.238-1.946.678-.759-.535-.546-1.861.345-2.131.873-.336 1.865.55 1.601 1.453z"
          />
        </svg>
      </el-tooltip>
      <el-tooltip class="mx-8 w-8 h-8 lg:w-12 lg:h-12">
        <div slot="content">
          <el-image :src="IMAGES.qqBarcode" class="w-32 h-32"></el-image>
        </div>
        <img :src="IMAGES.qqIcon" alt="qq icon" />
      </el-tooltip>
      <el-tooltip class="w-8 h-8 lg:w-12 lg:h-12">
        <div slot="content">
          <el-image :src="IMAGES.alipayBarcode" class="w-32 h-32"></el-image>
        </div>
        <svg
          class="icon-alipay"
          role="img"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Alipay icon</title>
          <path
            d="M16.076,13.732c0.862-1.494,1.55-3.196,2.003-5.045h-4.731V6.988h5.795V6.04h-5.795V3.207h-2.365 c-0.415,0-0.415,0.408-0.415,0.408V6.04H4.707v0.948h5.861v1.699H5.729v0.948h9.386c-0.343,1.18-0.805,2.288-1.352,3.294 c-3.045-1.002-6.295-1.814-8.337-1.314c-1.305,0.321-2.146,0.893-2.641,1.493c-2.267,2.751-0.641,6.929,4.147,6.929 c2.831,0,5.559-1.574,7.673-4.168C17.758,17.381,24,19.976,24,19.976v0.157c0,2.117-1.719,3.833-3.843,3.833H3.845 C1.72,23.966,0,22.249,0,20.132V3.868C0,1.75,1.72,0.034,3.845,0.034h16.312C22.281,0.034,24,1.75,24,3.868v12.409 c0,0-0.784-0.062-4.24-1.216C18.8,14.74,17.511,14.25,16.076,13.732z M5.834,13.034c-0.6,0.059-1.725,0.324-2.341,0.866 c-1.845,1.604-0.741,4.537,2.993,4.537c2.17,0,4.339-1.384,6.042-3.599C10.104,13.659,8.052,12.816,5.834,13.034z"
          />
        </svg>
      </el-tooltip>
      <div class="mx-8 w-8 h-8 lg:w-12 lg:h-12">
        <a href="mailto:1604021462@qq.com">
          <svg
            class="icon-gmail"
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Gmail icon</title>
            <path
              d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z"
            />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import Image from '@/components/image.vue'

import wechatBarcode from '@/assets/images/barcode-wechat.jpg'
import qqBarcode from '@/assets/images/barcode-qq.jpg'
import alipayBarcode from '@/assets/images/barcode-alipay.jpg'
import qqIcon from '@/assets/images/qq-icon.png'

export default {
  components: { ElImage: Image },
  data() {
    return {
      currentYear: (function() {
        const today = new Date()
        return today.getFullYear()
      })()
    }
  },
  created() {
    this.IMAGES = {
      wechatBarcode,
      qqBarcode,
      alipayBarcode,
      qqIcon
    }
  }
}
</script>

<style scoped>
.footer {
  background: #141e30; /* fallback for old browsers */
  background: linear-gradient(to bottom, #141e30, #243b55);
}

.icon-wechat,
.icon-gmail,
.icon-qq,
.icon-alipay {
  cursor: pointer;
}

.icon-wechat {
  fill: theme('colors.green.400');
}
.icon-gmail {
  fill: theme('colors.red.400');
}
.icon-qq {
  fill: theme('colors.gray.400');
}
.icon-alipay {
  fill: theme('colors.blue.400');
}
</style>
