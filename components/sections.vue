<template>
  <div class="-m-px">
    <section ref="about" class="md:pt-16 bg-gray">
      <container class="overflow-hidden">
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
            <p class="py-4 lg:px-4">
              We believe that payments is a problem rooted in code, not finance.
              We obsessively seek out elegant, composable abstractions that
              enable robust, scalable, flexible integrations. Because we
              eliminate needless complexity and extraneous details, you can get
              up and running with Stripe in just a couple of minutes.
            </p>
            <div class="button mt-4">
              <el-button :round="true" @click="onClick">Contact</el-button>
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
            <p class="py-4 lg:px-4">
              We believe that payments is a problem rooted in code, not finance.
              We obsessively seek out elegant, composable abstractions that
              enable robust, scalable, flexible integra:tions. Because we
              eliminate needless complexity and extraneous details, you can get
              up and running with Stripe in just a couple of minutes.
            </p>
            <div class="button mt-4">
              <el-button :round="true" @click="onClick">Contact</el-button>
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
            <p class="py-4 lg:px-4">
              We believe that payments is a problem rooted in code, not finance.
              We obsessively seek out elegant, composable abstractions that
              enable robust, scalable, flexible integrations. Because we
              eliminate needless complexity and extraneous details, you can get
              ul p and running with Stripe in just a couple of minutes.
            </p>
            <div class="button mt-4">
              <el-button :round="true" @click="onClick">Contact</el-button>
            </div>
          </el-col>
        </el-row>
      </container>
      <div class="overflow-hidden">
        <div class="triangle-white"></div>
      </div>
    </section>

    <section ref="service" class="bg-white pt-4">
      <container>
        <el-row :gutter="10" class="border-0">
          <el-col
            v-animate="'fade-in'"
            :xs="24"
            :md="12"
            :xl="8"
            class="md:mt-16"
          >
            <h2
              class="p-4 px-8 uppercase text-secondary text-2xl font-semibold"
            >
              <el-image :fit="'fill'" src="/germany.png"></el-image>
              <div>Heading</div>
            </h2>
            <p class="py-4 px-8">
              Stripe is an always-improving toolchain that gains new features
              every month. Our world-class engineering team constantly iterates
              upon every facet of the Stripe stack. And from Apple Pay to
              Alipay, building on Stripe means you get early access to the
              latest technologies.
            </p>
          </el-col>
          <el-col
            v-animate="'fade-in'"
            :xs="24"
            :md="12"
            :xl="8"
            class="md:mt-16"
          >
            <h2
              class="p-4 px-8 uppercase text-secondary text-2xl font-semibold"
            >
              <el-image :fit="'fill'" src="/translation.png"></el-image>
              <div>Heading</div>
            </h2>
            <p class="py-4 px-8">
              Stripe is an always-improving toolchain that gains new features
              every month. Our world-class engineering team constantly iterates
              upon every facet of the Stripe stack. And from Apple Pay to
              Alipay, building on Stripe means you get early access to the
              latest technologies.
            </p>
          </el-col>
          <el-col
            v-animate="'fade-in'"
            :xs="24"
            :md="12"
            :xl="8"
            class="md:mt-8"
          >
            <h2
              class="p-4 px-8 uppercase text-secondary text-2xl font-semibold"
            >
              <el-image :fit="'fill'" src="/linux.png"></el-image>
              <div>Heading</div>
            </h2>
            <p class="py-4 px-8">
              Stripe is an always-improving toolchain that gains new features
              every month. Our world-class engineering team constantly iterates
              upon every facet of the Stripe stack. And from Apple Pay to
              Alipay, building on Stripe means you get early access to the
              latest technologies.
            </p>
          </el-col>
        </el-row>
      </container>
      <div class="overflow-hidden">
        <div class="triangle-gray"></div>
      </div>
    </section>

    <section ref="contact" class="contact-section w-full pt-4 pb-20">
      <el-card
        :body-style="{ padding: '0px' }"
        class="mx-8 max-w-xl md:w-1/2 md:mx-auto"
      >
        <h3
          class="contact-card-heading text-3xl text-center text-white font-bold py-8"
        >
          {{ $t('contact.contactForm') }}
        </h3>
        <el-form :model="form" class="mx-auto px-4 py-8">
          <div class="flex flex-col-reverse">
            <div v-if="errorMessages.name" class="pt-1 text-red-600 text-right">
              name required
            </div>
            <el-input
              v-model="form.name"
              :placeholder="$t('contact.name')"
            ></el-input>
          </div>
          <div class="flex flex-col-reverse mt-4">
            <div
              v-if="errorMessages.email"
              class="pt-1 text-red-600 text-right"
            >
              email required
            </div>
            <el-input
              v-model="form.email"
              :placeholder="$t('contact.email')"
              class="flex flex-col-reverse"
            ></el-input>
          </div>
          <div class="flex flex-col-reverse mt-4">
            <div
              v-if="errorMessages.message"
              class="pt-1 text-red-600 text-right"
            >
              message required
            </div>
            <el-input
              :autosize="{ minRows: 4, maxRows: 6 }"
              v-model="form.message"
              :placeholder="$t('contact.message')"
              type="textarea"
              class="flex flex-col-reverse"
            ></el-input>
          </div>
          <div class="flex justify-end mt-4 mb-0">
            <el-button
              @click="onSubmit"
              :disabled="isSubmitting"
              class="submit-btn"
              >{{ $t('contact.submit') }}</el-button
            >
          </div>
          <el-alert
            v-if="submitStatus"
            :title="alertTitle"
            :type="alertType"
            show-icon
          >
          </el-alert>
        </el-form>
      </el-card>
    </section>
  </div>
</template>

<script>
import Container from '@/components/container.vue'
import Image from '@/components/image.vue'

const initState = () => ({
  name: '',
  email: '',
  message: ''
})

export default {
  components: { Container, ElImage: Image },
  data() {
    return {
      form: initState(),
      errorMessages: initState(),
      submitStatus: '',
      isSubmitting: false
    }
  },
  computed: {
    alertTitle() {
      return this.submitStatus === 'success'
        ? 'Thanks for submission!'
        : 'something went wrong :('
    },
    alertType() {
      return this.submitStatus === 'success' ? 'success' : 'error'
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
      return Object.keys(this.errorMessages).every(
        (k) => !this.errorMessages[k]
      )
    },
    onSubmit() {
      if (!this.validate()) return
      const data = JSON.stringify({
        to: 'lxynox@gmail.com', // TODO: change to 1604021462@qq.com
        subject: '扬州天下新肺炎发现多个疑似病bta例',
        text: `${this.form.message}\n mesage sent from ${this.form.name} ${this.form.email}`
      })
      this.isSubmitting = true
      fetch('https://now-emails.now.sh/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: data
      })
        .then((res) => res.json)
        .then(
          () => (this.submitStatus = 'success'),
          () => (this.submitStatus = 'error')
        )
        .finally(() => {
          this.isSubmitting = false
        })
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
    },
    onClick() {
      this.$root.$emit('scroll', 'contact')
    }
  }
}
</script>

<style scoped>
.col {
  flex-basis: 50%;
}

.bg-gray,
.contact-section {
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
.contact-section .el-card {
  border: none;
}

.contact-card-heading {
  background: var(--color-primary);
}

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
