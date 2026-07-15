<template>
  <div class="relative min-h-screen flex flex-col justify-between overflow-hidden bg-slate-950 text-white font-sans selection:bg-corporate-gold selection:text-slate-950">
    <!-- Sophisticated Background Glows -->
    <div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div class="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-corporate-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

    <!-- Floating Branding Elements (Fruit Characters & Brand Logos with low opacity for immersive layered look) -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Orange Character Top Left -->
      <img
        src="/images/Orange Charactor.png" 
        alt="" 
        class="absolute top-20 left-10 md:left-24 w-28 md:w-40 object-contain opacity-15 animate-float"
        style="animation-duration: 7s;"
      />
      <!-- Plum Character Bottom Left -->
      <img 
        src="/images/Plum CHARACTER.png" 
        alt="" 
        class="absolute bottom-20 left-6 md:left-20 w-24 md:w-36 object-contain opacity-10 animate-float"
        style="animation-duration: 9s; animation-delay: 1s;"
      />
      <!-- Tamarind Character Top Right -->
      <img 
        src="/images/Tamarin Character.png" 
        alt="" 
        class="absolute top-32 right-8 md:right-28 w-28 md:w-38 object-contain opacity-10 animate-float"
        style="animation-duration: 8s; animation-delay: 2s;"
      />
      <!-- Grape Character Bottom Right -->
      <img 
        src="/images/Grape Character.png" 
        alt="" 
        class="absolute bottom-24 right-10 md:right-24 w-24 md:w-36 object-contain opacity-15 animate-float"
        style="animation-duration: 10s; animation-delay: 3s;"
      />

      <!-- Brand Logo 1 (Sevati) Middle Left -->
      <img 
        src="/images/brand_1.png" 
        alt="Sevati Brand" 
        class="absolute top-[40%] left-4 md:left-12 w-28 md:w-36 object-contain opacity-25 animate-float"
        style="animation-duration: 11s; animation-delay: 1.5s;"
      />
      <!-- Brand Logo 2 (Frutati) Top Right-ish -->
      <img 
        src="/images/brand_2.png" 
        alt="Frutati Brand" 
        class="absolute top-[15%] right-20 md:right-48 w-28 md:w-36 object-contain opacity-25 animate-float"
        style="animation-duration: 12s; animation-delay: 0.5s;"
      />
      <!-- Brand Logo 3 (Mocati) Middle Right -->
      <img 
        src="/images/brand_3.png" 
        alt="Mocati Brand" 
        class="absolute top-[55%] right-6 md:right-16 w-32 md:w-44 object-contain opacity-25 animate-float"
        style="animation-duration: 13s; animation-delay: 2.5s;"
      />
      <!-- Brand Logo 4 (Aprati) Bottom Left-ish -->
      <img 
        src="/images/brand_4.png" 
        alt="Aprati Brand" 
        class="absolute bottom-32 left-12 md:left-36 w-36 md:w-48 object-contain opacity-25 animate-float"
        style="animation-duration: 14s; animation-delay: 3.5s;"
      />
    </div>

    <!-- Glassmorphic Header -->
    <header class="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/5 backdrop-blur-sm">
      <div class="flex items-center space-x-3">
        <img 
          src="/images/logo.png" 
          alt="Aprati Foods Cambodia" 
          class="h-12 w-auto object-contain brightness-100 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        />
        <span class="hidden sm:inline-block font-black text-sm tracking-[0.2em] uppercase text-white">
          Aprati Foods (Cambodia) Ltd.
        </span>
      </div>
      
      <!-- Contact Button -->
      <div>
        <a 
          href="mailto:info@apratifoods.com"
          class="inline-flex items-center px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-black tracking-widest uppercase hover:bg-white/10 hover:border-corporate-gold hover:text-corporate-gold transition-all duration-300 active:scale-95"
        >
          Contact Us
        </a>
      </div>
    </header>

    <!-- Main Content Container -->
    <main class="relative z-10 flex-grow flex items-center justify-center px-6 py-12 md:py-20">
      <div class="max-w-3xl w-full text-center space-y-10 animate-fade-in">
        
        <!-- Premium Gold Accent Badge -->
        <div class="inline-flex items-center space-x-3 animate-slide-down">
          <div class="w-8 h-[1px] bg-corporate-gold"></div>
          <span class="text-xs font-black tracking-[0.3em] uppercase text-corporate-gold">
           Aprati Foods (Cambodia) Ltd.

          </span>
          <div class="w-8 h-[1px] bg-corporate-gold"></div>
        </div>

        <!-- Luxury Main Heading -->
        <div class="space-y-4 animate-slide-up">
          <h1 class="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] text-white">
            Something Tasty is <br />
            <span class="bg-gradient-to-r from-corporate-gold via-amber-400 to-yellow-500 bg-clip-text text-transparent filter drop-shadow-[0_2px_10px_rgba(221,146,7,0.3)]">
              Coming Soon
            </span>
          </h1>
          <p class="text-base sm:text-lg md:text-xl text-slate-350 max-w-xl mx-auto leading-relaxed font-medium">
            We are crafting a premium snack and wellness portfolio designed for nutrition, taste, and corporate excellence.
          </p>
        </div>

        <!-- Glassmorphism Newsletter/Form Card -->
        <div class="max-w-lg mx-auto bg-white/5 border border-white/10 p-6 md:p-8 rounded-[2rem] backdrop-blur-xl shadow-2xl ring-1 ring-white/10 space-y-6 transform hover:scale-[1.01] transition-transform duration-300">
          <div class="text-center space-y-2">
            <h3 class="font-bold text-lg text-white">Be The First To Know</h3>
            <p class="text-xs text-slate-400">Subscribe to receive launch details and exclusive previews.</p>
          </div>

          <!-- Subscription Input Group -->
          <form @submit.prevent="handleSubmit" class="space-y-3">
            <div class="relative">
              <input 
                v-model="email"
                type="email" 
                placeholder="Enter your email address" 
                required
                class="w-full h-12 bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-corporate-gold focus:border-transparent transition-all"
              />
            </div>
            
            <button 
              type="submit"
              :disabled="loading"
              class="w-full h-12 bg-gradient-to-r from-corporate-gold to-amber-500 text-slate-950 font-black text-xs tracking-widest uppercase rounded-xl hover:from-amber-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-corporate-gold/20 flex items-center justify-center disabled:opacity-50"
            >
              <span v-if="!loading" class="flex items-center justify-center">
                Notify Me
                <ArrowRightIcon class="ml-2 w-4 h-4" />
              </span>
              <span v-else class="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
            </button>
          </form>

          <!-- Success Alert -->
          <div 
            v-if="success" 
            class="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs py-3 px-4 rounded-xl animate-fade-in"
          >
            ✓ Thank you! We will notify you when we launch.
          </div>
        </div>

        <!-- Dynamic Countdown Grid -->
        <div class="grid grid-cols-4 gap-4 max-w-sm sm:max-w-md mx-auto pt-6">
          <div 
            v-for="(val, unit) in countdown" 
            :key="unit"
            class="bg-white/5 border border-white/5 backdrop-blur-md rounded-2xl py-3 px-2 text-center"
          >
            <div class="text-2xl sm:text-3xl font-black text-white leading-none">
              {{ String(val).padStart(2, '0') }}
            </div>
            <div class="text-[9px] font-black tracking-widest uppercase text-corporate-gold mt-1.5">
              {{ unit }}
            </div>
          </div>
        </div>

      </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
      <div class="flex items-center space-x-2">
        <span>© 2026 Aprati Foods (Cambodia) Ltd. All rights reserved.</span>
      </div>
      
      <!-- Contact Information Details -->
      <div class="flex flex-wrap justify-center gap-6 text-slate-400">
        <a href="mailto:info@apratifoods.com" class="hover:text-corporate-gold transition-colors flex items-center gap-1.5">
          <EnvelopeIcon class="w-4 h-4" />
          <span>info@apratifoods.com</span>
        </a>
        <span class="flex items-center gap-1.5">
          <PhoneIcon class="w-4 h-4" />
          <span>+855 87 300 040</span>
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ArrowRightIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Coming Soon - Aprati Foods Cambodia',
  description: 'We are preparing a premium snack and food products launch. Stay tuned for exciting updates.'
})

// Subscription form logic
const email = ref('')
const loading = ref(false)
const success = ref(false)

const handleSubmit = async () => {
  loading.value = true
  // Mock API call delay
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false
  success.value = true
  email.value = ''
  setTimeout(() => {
    success.value = false
  }, 5000)
}

// Target countdown date (e.g., 60 days in the future)
const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 45)

const countdown = ref({
  days: 45,
  hours: 0,
  minutes: 0,
  seconds: 0
})

const updateCountdown = () => {
  const now = new Date().getTime()
  const difference = targetDate.getTime() - now

  if (difference > 0) {
    countdown.value.days = Math.floor(difference / (1000 * 60 * 60 * 24))
    countdown.value.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    countdown.value.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    countdown.value.seconds = Math.floor((difference % (1000 * 60)) / 1000)
  }
}

let timer
onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style scoped>
/* Smooth float animation for floating branding assets */
.animate-float {
  animation: float ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-15px) rotate(2deg);
  }
}
</style>
