<template>
  <div class="-m-px">
    <div ref="home" class="md:pt-16 bg-gray">
      <container>
        <el-row
          v-animate="'slide-in'"
          :gutter="10"
          class="text-center border-0 p-8 pt-0"
        >
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
        <el-row
          v-animate="'slide-in'"
          :gutter="10"
          class="lg:flex lg:flex-row-reverse text-center border-0 p-8"
        >
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
        <el-row
          v-animate="'slide-in'"
          :gutter="10"
          class="text-center border-0 p-8"
        >
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
      <div class="overflow-hidden">
        <div class="triangle-white"></div>
      </div>
    </div>

    <div ref="about" class="bg-white pt-4">
      <el-row :gutter="10" class="border-0">
        <el-col
          v-animate="'fade-in'"
          :xs="24"
          :md="12"
          :xl="8"
          class="md:mt-16"
        >
          <h2 class="p-4 px-16 uppercase text-secondary text-2xl font-semibold">
            <el-image :fit="'fill'" src="/germany.png"></el-image>
            <div>Heading</div>
          </h2>
          <p class="py-4 px-16">
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
        <el-col
          v-animate="'fade-in'"
          :xs="24"
          :md="12"
          :xl="8"
          class="md:mt-16"
        >
          <h2 class="p-4 px-16 uppercase text-secondary text-2xl font-semibold">
            <el-image :fit="'fill'" src="/translation.png"></el-image>
            <div>Heading</div>
          </h2>
          <p class="py-4 px-16">
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
        <el-col
          v-animate="'fade-in'"
          :xs="24"
          :md="12"
          :xl="8"
          class="md:mt-16"
        >
          <h2 class="p-4 px-16 uppercase text-secondary text-2xl font-semibold">
            <el-image :fit="'fill'" src="/linux.png"></el-image>
            <div>Heading</div>
          </h2>
          <p class="py-4 px-16">
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
      </el-row>
      <div class="overflow-hidden">
        <div class="triangle-gray"></div>
      </div>
    </div>

    <div ref="contact" class="contact-form mx-auto w-full pt-4 pb-8">
      <el-form :model="form" class="mx-auto w-1/2">
        <div class="flex flex-col-reverse">
          <div v-if="errorMessages.name" class="pt-1 text-red-600">
            name required
          </div>
          <el-input v-model="form.name" placeholder="NAME"></el-input>
        </div>
        <div class="flex flex-col-reverse mt-4">
          <div v-if="errorMessages.email" class="pt-1 text-red-600">
            email required
          </div>
          <el-input
            v-model="form.email"
            placeholder="EMAIL"
            class="flex flex-col-reverse"
          ></el-input>
        </div>
        <div class="flex flex-col-reverse mt-4">
          <div v-if="errorMessages.message" class="pt-1 text-red-600">
            message required
          </div>
          <el-input
            :autosize="{ minRows: 4, maxRows: 6 }"
            v-model="form.message"
            type="textarea"
            placeholder="MESSAGE"
            class="flex flex-col-reverse"
          ></el-input>
        </div>
        <el-form-item class="flex justify-end mt-4">
          <el-button @click="onSubmit" class="submit-btn">Submit</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import Container from '@/components/container.vue'

const initState = () => ({
  name: '',
  email: '',
  message: ''
})

export default {
  components: { Container },
  data() {
    return {
      form: initState(),
      errorMessages: initState()
    }
  },
  mounted() {
    this.$root.$on('scroll', this.onScroll)
  },
  methods: {
    validate() {
      this.errorMessages = initState()
      if (!this.form.name) this.errorMessages.name = 'name required'
      if (!this.form.email) this.errorMessages.email = 'email required'
      if (!this.form.message) this.errorMessages.message = 'message required'
      return Object.keys(this.errorMessages).length === 0
    },
    onSubmit() {
      if (!this.validate()) return
      const formEl = this.$refs.contact
      const formData = new FormData(formEl)
      console.log('[form data]', formData)
    },
    onScroll(to) {
      const elm = this.$refs[to]
      if ('scrollTo' in window && elm) {
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

.triangle-white {
  border: 20vw solid transparent;
  border-left: 100vw solid white;
  border-bottom: 0;
}

.triangle-gray {
  border: 20vw solid transparent;
  border-left: 100vw solid var(--color-bg-gray);
  border-bottom: 0;
}
</style>

<style>
.contact-form .el-form-item__label {
  color: red;
}

.animate {
  transition-delay: 0.2s;
  transition-duration: 1s;
  transition-timing-function: ease-in;
}

.slide-in:nth-child(2n) {
  transform: translateX(-200px);
}

.slide-in:nth-child(2n + 1) {
  transform: translateX(200px);
}

.slide-in.animate-active {
  transform: translateX(0);
}

.fade-in {
  opacity: 0;
}

.fade-in.animate-active {
  opacity: 1;
}
</style>
