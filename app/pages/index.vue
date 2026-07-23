<template>
  <div class="relative min-h-screen flex flex-col font-sans overflow-hidden bg-[#edf2f7] text-slate-900 selection:bg-blue-600 selection:text-white">

    <!-- ── Background: Light Slate + Rich Brand Glows ── -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0" style="background-image:
        radial-gradient(ellipse at 15% 25%, rgba(26,111,245,0.14) 0%, transparent 55%),
        radial-gradient(ellipse at 85% 20%, rgba(239,68,68,0.10) 0%, transparent 50%),
        radial-gradient(ellipse at 85% 75%, rgba(249,115,22,0.12) 0%, transparent 50%),
        radial-gradient(ellipse at 20% 80%, rgba(16,185,129,0.12) 0%, transparent 50%);"></div>
      <!-- Subtle grid -->
      <div class="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%"><defs><pattern id="g" width="45" height="45" patternUnits="userSpaceOnUse">
          <path d="M 45 0 L 0 0 0 45" fill="none" stroke="#334155" stroke-width="0.5"/>
        </pattern></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>
      </div>
    </div>

    <!-- ── Floating Characters & Brand Cards ── -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <!-- Characters: Vibrant opacity on light canvas -->
      <img src="/images/Orange Charactor.png" alt="" class="absolute top-12 left-4 md:left-14 w-24 md:w-36 object-contain animate-float drop-shadow-md" style="opacity:0.75;animation-duration:7s;" />
      <img src="/images/Plum CHARACTER.png" alt="" class="absolute bottom-20 left-2 md:left-10 w-20 md:w-32 object-contain animate-float drop-shadow-md" style="opacity:0.70;animation-duration:9s;animation-delay:1s;" />
      <img src="/images/Tamarin Character.png" alt="" class="absolute top-16 right-4 md:right-14 w-24 md:w-36 object-contain animate-float drop-shadow-md" style="opacity:0.75;animation-duration:8s;animation-delay:2s;" />
      <img src="/images/Grape Character.png" alt="" class="absolute bottom-16 right-4 md:right-10 w-20 md:w-32 object-contain animate-float drop-shadow-md" style="opacity:0.70;animation-duration:10s;animation-delay:3s;" />

      <!-- Brand Logos: Floating brand-tinted cards with crisp contrast -->
      <!-- Green brand (Sevati) -->
      <div class="absolute top-[38%] left-3 md:left-14 animate-float" style="animation-duration:11s;animation-delay:1.5s;">
        <div class="p-3.5 rounded-2xl w-28 md:w-36 backdrop-blur-md border shadow-lg transition-transform hover:scale-105"
          style="background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(236,253,245,0.9)); border-color: rgba(16,185,129,0.35); box-shadow: 0 10px 30px -5px rgba(16,185,129,0.2);">
          <img src="/images/brand_1.png" alt="Sevati" class="w-full h-auto object-contain drop-shadow-xs" />
        </div>
      </div>

      <!-- Red brand (Frutati) -->
      <div class="absolute top-[10%] right-16 md:right-44 animate-float" style="animation-duration:12s;animation-delay:0.5s;">
        <div class="p-3.5 rounded-2xl w-28 md:w-36 backdrop-blur-md border shadow-lg transition-transform hover:scale-105"
          style="background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(254,242,242,0.9)); border-color: rgba(239,68,68,0.35); box-shadow: 0 10px 30px -5px rgba(239,68,68,0.2);">
          <img src="/images/brand_2.png" alt="Frutati" class="w-full h-auto object-contain drop-shadow-xs" />
        </div>
      </div>

      <!-- Orange brand (Mocati) -->
      <div class="absolute top-[54%] right-3 md:right-16 animate-float" style="animation-duration:13s;animation-delay:2.5s;">
        <div class="p-3.5 rounded-2xl w-32 md:w-40 backdrop-blur-md border shadow-lg transition-transform hover:scale-105"
          style="background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,247,237,0.9)); border-color: rgba(249,115,22,0.35); box-shadow: 0 10px 30px -5px rgba(249,115,22,0.2);">
          <img src="/images/brand_3.png" alt="Mocati" class="w-full h-auto object-contain drop-shadow-xs" />
        </div>
      </div>

      <!-- Blue brand (Aprati) -->
      <div class="absolute bottom-24 left-8 md:left-36 animate-float" style="animation-duration:14s;animation-delay:3.5s;">
        <div class="p-3.5 rounded-2xl w-32 md:w-44 backdrop-blur-md border shadow-lg transition-transform hover:scale-105"
          style="background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(239,246,255,0.9)); border-color: rgba(26,111,245,0.35); box-shadow: 0 10px 30px -5px rgba(26,111,245,0.2);">
          <img src="/images/brand_4.png" alt="Aprati" class="w-full h-auto object-contain drop-shadow-xs" />
        </div>
      </div>
    </div>

    <!-- ── HEADER ── -->
    <header class="relative z-30 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/90 sticky top-0 shadow-xs">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img src="/images/logo.png" alt="Aprati Foods Cambodia" class="h-11 w-auto object-contain" />
          <span class="hidden sm:inline-block font-black text-xs tracking-[0.2em] uppercase text-slate-700">
            Aprati Foods (Cambodia) Ltd.
          </span>
        </div>
        <div class="flex items-center gap-3">
          <!-- Careers CTA -->
          <NuxtLink to="/careers"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/25 active:scale-95 transition-all duration-300">
            <BriefcaseIcon class="w-3.5 h-3.5" />
            Careers
          </NuxtLink>
          <a href="mailto:info@apratifoods.com"
            class="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase bg-slate-100 hover:bg-slate-200/80 text-slate-800 border border-slate-200/90 shadow-2xs active:scale-95 transition-all duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </header>

    <!-- ── MAIN ── -->
    <main class="relative z-10 flex-grow flex items-center justify-center px-6 py-12 md:py-16">
      <div class="max-w-3xl w-full text-center space-y-10">

        <!-- Label with brand color dots -->
        <div class="inline-flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-slate-200/90 shadow-sm">
          <!-- 4 brand color dots -->
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full" style="background:#1a6ff5;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#10b981;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#ef4444;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#f97316;"></span>
          </div>
          <span class="text-[11px] font-black tracking-[0.35em] uppercase text-blue-600">
            Aprati Foods (Cambodia) Ltd.
          </span>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full" style="background:#f97316;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#ef4444;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#10b981;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#1a6ff5;"></span>
          </div>
        </div>

        <!-- Heading -->
        <div class="space-y-4">
          <h1 class="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05] text-slate-900">
            <span>A Taste of</span><br/>
            <span>Excellence</span><br/>
            <!-- Blue gradient for brand -->
            <span class="bg-clip-text text-transparent" style="background-image:linear-gradient(135deg,#1a6ff5,#2563eb,#0284c7);">
              Coming Soon
            </span>
          </h1>
          <p class="text-base sm:text-lg max-w-lg mx-auto leading-relaxed text-slate-600 font-medium">
            We are preparing a premium snack and wellness portfolio designed for nutrition, quality, and global consumer satisfaction.
          </p>
        </div>

        <!-- Subscribe Card -->
        <div class="max-w-md mx-auto rounded-[2rem] p-6 md:p-8 space-y-5 bg-white border border-slate-200/90 shadow-xl shadow-slate-300/40 hover:scale-[1.01] transition-transform duration-300">
          <div class="text-center space-y-1.5">
            <!-- Blue line accent -->
            <div class="flex justify-center mb-3">
              <div class="w-10 h-1 rounded-full bg-blue-600"></div>
            </div>
            <h3 class="font-black text-base text-slate-900">Get Notified at Launch</h3>
            <p class="text-xs text-slate-500">Be the first to know when we go live.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-3">
            <input v-model="email" type="email" placeholder="Enter your email address" required
              class="w-full h-12 rounded-2xl px-4 text-sm text-slate-900 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
            />
            <button type="submit" :disabled="loading"
              class="w-full h-12 text-white font-black text-xs tracking-widest uppercase rounded-2xl flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/25 transition-all duration-300 active:scale-95 disabled:opacity-50">
              <span v-if="!loading" class="flex items-center gap-2">Notify Me <ArrowRightIcon class="w-4 h-4" /></span>
              <span v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            </button>
          </form>

          <div v-if="success" class="text-xs py-3 px-4 rounded-xl text-center font-bold bg-emerald-50 border border-emerald-200 text-emerald-700">
            ✓ Thank you! We'll notify you when we launch.
          </div>
        </div>

        <!-- Countdown -->
        <div class="grid grid-cols-4 gap-3 max-w-xs sm:max-w-sm mx-auto">
          <div v-for="(val, unit) in countdown" :key="unit"
            class="rounded-2xl py-4 px-2 text-center bg-white border border-slate-200/90 shadow-md shadow-slate-200/60 hover:scale-105 transition-transform duration-200">
            <div class="text-2xl sm:text-3xl font-black text-slate-900 tabular-nums">{{ String(val).padStart(2,'0') }}</div>
            <div class="text-[9px] font-black tracking-widest uppercase mt-1.5 text-blue-600">{{ unit }}</div>
          </div>
        </div>

        <!-- Brand color strip -->
        <div class="flex items-center justify-center gap-0 max-w-xs mx-auto rounded-full overflow-hidden opacity-50 shadow-xs">
          <div class="flex-1 h-1.5" style="background:#1a6ff5;"></div>
          <div class="flex-1 h-1.5" style="background:#10b981;"></div>
          <div class="flex-1 h-1.5" style="background:#ef4444;"></div>
          <div class="flex-1 h-1.5" style="background:#f97316;"></div>
        </div>

      </div>
    </main>

    <!-- ── FOOTER ── -->
    <footer class="relative z-10 w-full max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium border-t border-slate-200/80 bg-white/70 text-slate-500">
      <span>© 2026 Aprati Foods (Cambodia) Ltd. All rights reserved.</span>
      <div class="flex flex-wrap justify-center gap-6 text-slate-600">
        <a href="mailto:info@apratifoods.com" class="flex items-center gap-1.5 font-semibold hover:text-blue-600 transition-colors">
          <EnvelopeIcon class="w-4 h-4 text-blue-600" /> info@apratifoods.com
        </a>
        <span class="flex items-center gap-1.5 font-semibold">
          <PhoneIcon class="w-4 h-4 text-blue-600" /> +855 87 300 040
        </span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ArrowRightIcon, EnvelopeIcon, PhoneIcon, BriefcaseIcon } from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Coming Soon — Aprati Foods (Cambodia) Ltd.',
  description: 'We are preparing a premium snack and food products launch. Stay tuned for exciting updates.'
})

const email = ref('')
const loading = ref(false)
const success = ref(false)

const handleSubmit = async () => {
  loading.value = true
  await new Promise(r => setTimeout(r, 1000))
  loading.value = false
  success.value = true
  email.value = ''
  setTimeout(() => { success.value = false }, 5000)
}

const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 45)
const countdown = ref({ Days: 45, Hours: 0, Minutes: 0, Seconds: 0 })

const updateCountdown = () => {
  const diff = targetDate.getTime() - Date.now()
  if (diff > 0) {
    countdown.value.Days    = Math.floor(diff / (1000*60*60*24))
    countdown.value.Hours   = Math.floor((diff % (1000*60*60*24)) / (1000*60*60))
    countdown.value.Minutes = Math.floor((diff % (1000*60*60)) / (1000*60))
    countdown.value.Seconds = Math.floor((diff % (1000*60)) / 1000)
  }
}

let timer
onMounted(() => { updateCountdown(); timer = setInterval(updateCountdown, 1000) })
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.animate-float { animation: float ease-in-out infinite; }
@keyframes float {
  0%,100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-14px) rotate(1.5deg); }
}
.animate-spin { animation: spin 1s linear infinite; }
@keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
</style>
