<template>
  <div>
    <div ref="home" class="md:py-16 bg-gray">
      <container>
        <el-row :gutter="10" class="text-center border-0 p-4">
          <el-col :xs="24" :md="12">
            <el-image
              :src="'/fast.svg'"
              :fit="'fill'"
              class="w-full h-64"
            ></el-image>
          </el-col>
          <el-col :xs="24" :md="12">
            <h2 class="p-4 uppercase text-secondary text-2xl font-semibold">
              Yummy hamburger
            </h2>
            <p class="py-4 px-16 lg:px-4">
              We believe that payments is a problem rooted in code, not finance.
              We obsessively seek out elegant, composable abstractions that
              enable robust, scalable, flexible integrations. Because we
              eliminate needless complexity and extraneous details, you can get
              up and running with Stripe in just a couple of minutes.
            </p>
            <div class="button mt-4">
              <el-button :round="true">Operating</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="text-center border-0 p-4 md:px-32">
          <el-col :xs="24" :md="12">
            <el-image
              :src="'/reliable.svg'"
              :fit="'fill'"
              class="w-full h-64"
            ></el-image>
          </el-col>
          <el-col :xs="24" :md="12">
            <h2 class="p-4 uppercase text-secondary text-2xl font-semibold">
              Yummy hamburger
            </h2>
            <p class="py-4 px-16 lg:px-4">
              We believe that payments is a problem rooted in code, not finance.
              We obsessively seek out elegant, composable abstractions that
              enable robust, scalable, flexible integra:tions. Because we
              eliminate needless complexity and extraneous details, you can get
              up and running with Stripe in just a couple of minutes.
            </p>
            <div class="button mt-4">
              <el-button :round="true">Operating</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="10" class="text-center border-0 p-4 md:px-32">
          <el-col :xs="24" :md="12">
            <el-image
              :src="'/accurate.svg'"
              :fit="'fill'"
              class="w-full h-64"
            ></el-image>
          </el-col>
          <el-col :xs="24" :md="12">
            <h2 class="p-4 uppercase text-secondary text-2xl font-semibold">
              Yummy hamburger
            </h2>
            <p class="py-4 px-16 lg:px-4">
              We believe that payments is a problem rooted in code, not finance.
              We obsessively seek out elegant, composable abstractions that
              enable robust, scalable, flexible integrations. Because we
              eliminate needless complexity and extraneous details, you can get
              ul p and running with Stripe in just a couple of minutes.
            </p>
            <div class="button mt-4">
              <el-button :round="true">Operating</el-button>
            </div>
          </el-col>
        </el-row>
      </container>
      <waves :color="'gray'"></waves>
    </div>

    <div ref="about" class="bg-white pt-32">
      <el-row :gutter="10" class="border-0">
        <el-col :xs="24" :md="12" :xl="8" class="mt-16">
          <h2 class="p-4 px-16 uppercase text-secondary text-2xl font-semibold">
            <el-image :fit="'fill'" src="/germany.png"></el-image>
            <div>Heading</div>
          </h2>
          <p class="py-4 px-16 lg:px-4">
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
        <el-col :xs="24" :md="12" :xl="8" class="mt-16">
          <h2 class="p-4 px-16 uppercase text-secondary text-2xl font-semibold">
            <el-image :fit="'fill'" src="/translation.png"></el-image>
            <div>Heading</div>
          </h2>
          <p class="py-4 px-16 lg:px-4">
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
        <el-col :xs="24" :md="12" :xl="8" class="mt-16">
          <h2 class="p-4 px-16 uppercase text-secondary text-2xl font-semibold">
            <el-image :fit="'fill'" src="/linux.png"></el-image>
            <div>Heading</div>
          </h2>
          <p class="py-4 px-16 lg:px-4">
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
      </el-row>
      <waves></waves>
    </div>

    <div ref="contact" class="contact-form mx-auto w-full py-32 md:py-64">
      <el-form :model="form" class="mx-auto w-1/2">
        <el-form-item>
          <el-input v-model="form.name" placeholder="NAME"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.email" placeholder="EMAIL"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            :autosize="{ minRows: 4, maxRows: 6 }"
            v-model="form.desc"
            type="textarea"
            placeholder="MESSAGES"
          ></el-input>
        </el-form-item>
        <el-form-item class="flex justify-end">
          <el-button @click="onSubmit" class="submit-btn">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Container from '@/components/container.vue'
import Waves from '@/components/waves.vue'

export default {
  components: { Container, Waves },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        deliver: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  mounted() {
    this.$root.$on('scroll', this.onScroll)
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    onScroll(to) {
      // trim heading '/'
      const elm = this.$refs[to]
      if ('scrollTo' in window) {
        const yPos =
          elm.getBoundingClientRect().top + document.documentElement.scrollTop
        // TODO: change
        const headerOffset = 50
        const offsetPos = yPos - headerOffset
        window.scrollTo({ behavior: 'smooth', top: offsetPos })
      }
    }
  }
}
</script>

<style scoped>
.col {
  flex-basis: 50%;
}

.bg-gray,
.contact-form {
  background-color: var(--color-bg-gray);
}

button.submit-btn {
  background-color: var(--color-primary);
  color: white;
}
</style>

<style>
/* .contact-form .el-input__inner {
  border: none;
  border-bottom: 1px solid #dcdfe6;
  border-radius: none;
} */
</style>
