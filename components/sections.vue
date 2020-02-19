<template>
  <div>
    <div ref="home" class="md:py-16">
      <el-row :gutter="10" class="text-center border-0 p-4 md:px-32">
        <el-col :xs="24" :md="12">
          <div class="w-full h-64 bg-gray-200"></div>
        </el-col>
        <el-col :xs="24" :md="12">
          <h2 class="p-4">Yummy hamburger</h2>
          <p>
            We believe that payments is a problem rooted in code, not finance.
            We obsessively seek out elegant, composable abstractions that enable
            robust, scalable, flexible integrations. Because we eliminate
            needless complexity and extraneous details, you can get up and
            running with Stripe in just a couple of minutes.
          </p>
          <div class="button mt-4">
            <el-button :round="true">Operating</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="text-center border-0 p-4 md:px-32">
        <el-col :xs="24" :md="12">
          <div class="w-full h-64 bg-gray-200"></div>
        </el-col>
        <el-col :xs="24" :md="12">
          <h2 class="p-4">Yummy hamburger</h2>
          <p>
            We believe that payments is a problem rooted in code, not finance.
            We obsessively seek out elegant, composable abstractions that enable
            robust, scalable, flexible integrations. Because we eliminate
            needless complexity and extraneous details, you can get up and
            running with Stripe in just a couple of minutes.
          </p>
          <div class="button mt-4">
            <el-button :round="true">Operating</el-button>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="10" class="text-center border-0 p-4 md:px-32">
        <el-col :xs="24" :md="12">
          <div class="w-full h-64 bg-gray-200"></div>
        </el-col>
        <el-col :xs="24" :md="12">
          <h2 class="p-4">Yummy hamburger</h2>
          <p>
            We believe that payments is a problem rooted in code, not finance.
            We obsessively seek out elegant, composable abstractions that enable
            robust, scalable, flexible integrations. Because we eliminate
            needless complexity and extraneous details, you can get up and
            running with Stripe in just a couple of minutes.
          </p>
          <div class="button mt-4">
            <el-button :round="true">Operating</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <div ref="about">
      <el-row :gutter="10" class="text-center border-0">
        <el-col :xs="24" :md="12" :xl="8" class="mt-16">
          <h3 class="py-4">Heading</h3>
          <p>
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
        <el-col :xs="24" :md="12" :xl="8" class="mt-16">
          <h3 class="py-4">Heading</h3>
          <p>
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
        <el-col :xs="24" :md="12" :xl="8" class="mt-16">
          <h3 class="py-4">Heading</h3>
          <p>
            Stripe is an always-improving toolchain that gains new features
            every month. Our world-class engineering team constantly iterates
            upon every facet of the Stripe stack. And from Apple Pay to Alipay,
            building on Stripe means you get early access to the latest
            technologies.
          </p>
        </el-col>
      </el-row>
    </div>

    <div ref="contact" class="mx-auto w-full md:w-1/2 py-16">
      <el-form :model="form" label-width="120px">
        <el-form-item label="Last name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="First name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Email address">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="Message">
          <el-input v-model="form.desc" type="textarea"></el-input>
        </el-form-item>
        <el-form-item class="flex justify-center">
          <el-button :round="true" @click="onSubmit" type="primary"
            >Submit</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
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
        const headerOffset = 200
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
</style>
