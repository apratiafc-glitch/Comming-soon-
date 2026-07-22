<template>
  <div class="relative min-h-screen flex flex-col font-sans overflow-hidden" style="background:#070c18; color:white;">

    <!-- ── Background: Deep Navy + Brand Blue Radials ── -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0" style="background:
        radial-gradient(ellipse at 20% 40%, rgba(26,111,245,0.18) 0%, transparent 55%),
        radial-gradient(ellipse at 80% 20%, rgba(26,111,245,0.10) 0%, transparent 50%),
        radial-gradient(ellipse at 60% 90%, rgba(16,68,176,0.14) 0%, transparent 55%);"></div>
      <!-- Subtle grid -->
      <div class="absolute inset-0" style="opacity:0.04;">
        <svg width="100%" height="100%"><defs><pattern id="g" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M50 0L0 0 0 50" fill="none" stroke="white" stroke-width="0.5"/>
        </pattern></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>
      </div>
    </div>

    <!-- ── Floating Characters ── -->
    <div class="absolute inset-0 pointer-events-none overflow-hidden z-0">
      <img src="/images/Orange Charactor.png" alt="" class="absolute top-16 left-4 md:left-16 w-24 md:w-36 object-contain animate-float" style="opacity:0.09;animation-duration:7s;" />
      <img src="/images/Plum CHARACTER.png" alt="" class="absolute bottom-24 left-2 md:left-12 w-20 md:w-32 object-contain animate-float" style="opacity:0.07;animation-duration:9s;animation-delay:1s;" />
      <img src="/images/Tamarin Character.png" alt="" class="absolute top-20 right-4 md:right-16 w-24 md:w-36 object-contain animate-float" style="opacity:0.09;animation-duration:8s;animation-delay:2s;" />
      <img src="/images/Grape Character.png" alt="" class="absolute bottom-20 right-4 md:right-12 w-20 md:w-32 object-contain animate-float" style="opacity:0.07;animation-duration:10s;animation-delay:3s;" />

      <!-- Brand Logos: floating glassmorphic cards -->
      <!-- Green brand -->
      <div class="absolute top-[38%] left-3 md:left-14 animate-float" style="animation-duration:11s;animation-delay:1.5s;">
        <div class="p-3 rounded-2xl w-28 md:w-36" style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.2);opacity:0.7;">
          <img src="/images/brand_1.png" alt="Sevati" class="w-full h-auto object-contain" />
        </div>
      </div>
      <!-- Red brand -->
      <div class="absolute top-[10%] right-16 md:right-44 animate-float" style="animation-duration:12s;animation-delay:0.5s;">
        <div class="p-3 rounded-2xl w-28 md:w-36" style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.2);opacity:0.7;">
          <img src="/images/brand_2.png" alt="Frutati" class="w-full h-auto object-contain" />
        </div>
      </div>
      <!-- Orange brand -->
      <div class="absolute top-[54%] right-3 md:right-16 animate-float" style="animation-duration:13s;animation-delay:2.5s;">
        <div class="p-3 rounded-2xl w-32 md:w-40" style="background:rgba(249,115,22,0.08);border:1px solid rgba(249,115,22,0.2);opacity:0.7;">
          <img src="/images/brand_3.png" alt="Mocati" class="w-full h-auto object-contain" />
        </div>
      </div>
      <!-- Blue brand (main Aprati) -->
      <div class="absolute bottom-24 left-8 md:left-36 animate-float" style="animation-duration:14s;animation-delay:3.5s;">
        <div class="p-3 rounded-2xl w-32 md:w-44" style="background:rgba(26,111,245,0.10);border:1px solid rgba(26,111,245,0.25);opacity:0.7;">
          <img src="/images/brand_4.png" alt="Aprati" class="w-full h-auto object-contain" />
        </div>
      </div>
    </div>

    <!-- ── HEADER ── -->
    <header class="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between" style="border-bottom:1px solid rgba(255,255,255,0.05);">
      <div class="flex items-center space-x-3">
        <img src="/images/logo.png" alt="Aprati Foods Cambodia" class="h-12 w-auto object-contain filter brightness-200 drop-shadow-lg" />
        <span class="hidden sm:inline-block font-black text-sm tracking-[0.2em] uppercase" style="color:#94a3b8;">
          Aprati Foods (Cambodia) Ltd.
        </span>
      </div>
      <div class="flex items-center gap-3">
        <!-- Careers: brand blue CTA -->
        <NuxtLink to="/careers"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase text-white active:scale-95 transition-all duration-300"
          style="background:linear-gradient(135deg,#1a6ff5,#1044b0);box-shadow:0 4px 20px rgba(26,111,245,0.35);">
          <BriefcaseIcon class="w-3.5 h-3.5" />
          Careers
        </NuxtLink>
        <a href="mailto:info@apratifoods.com"
          class="inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 active:scale-95"
          style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#94a3b8;">
          Contact Us
        </a>
      </div>
    </header>

    <!-- ── MAIN ── -->
    <main class="relative z-10 flex-grow flex items-center justify-center px-6 py-12 md:py-20">
      <div class="max-w-3xl w-full text-center space-y-10 animate-fade-in">

        <!-- Label with brand color dots -->
        <div class="inline-flex items-center gap-3 animate-slide-down">
          <!-- 4 brand color dots -->
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full" style="background:#1a6ff5;box-shadow:0 0 6px #1a6ff5;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#10b981;box-shadow:0 0 6px #10b981;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#ef4444;box-shadow:0 0 6px #ef4444;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#f97316;box-shadow:0 0 6px #f97316;"></span>
          </div>
          <span class="text-[11px] font-black tracking-[0.35em] uppercase" style="color:#1a6ff5;">
            Aprati Foods (Cambodia) Ltd.
          </span>
          <div class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full" style="background:#f97316;box-shadow:0 0 6px #f97316;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#ef4444;box-shadow:0 0 6px #ef4444;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#10b981;box-shadow:0 0 6px #10b981;"></span>
            <span class="w-2 h-2 rounded-full" style="background:#1a6ff5;box-shadow:0 0 6px #1a6ff5;"></span>
          </div>
        </div>

        <!-- Heading -->
        <div class="space-y-4 animate-slide-up">
          <h1 class="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-[1.05]">
            <span class="text-white">A Taste of</span><br/>
            <span class="text-white">Excellence</span><br/>
            <!-- Blue gradient for brand -->
            <span style="background:linear-gradient(135deg,#3b8ef8,#1a6ff5,#7ab4fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
              Coming Soon
            </span>
          </h1>
          <p class="text-base sm:text-lg max-w-lg mx-auto leading-relaxed" style="color:#64748b;">
            We are preparing a premium snack and wellness portfolio designed for nutrition, quality, and global consumer satisfaction.
          </p>
        </div>

        <!-- Subscribe Card -->
        <div class="max-w-md mx-auto rounded-[2rem] p-6 md:p-8 space-y-5 hover:scale-[1.01] transition-transform duration-300" style="background:rgba(255,255,255,0.04);border:1px solid rgba(26,111,245,0.2);backdrop-filter:blur(16px);box-shadow:0 8px 48px rgba(26,111,245,0.1);">
          <div class="text-center space-y-1.5">
            <!-- Blue dot accent -->
            <div class="flex justify-center mb-3">
              <div class="w-10 h-1 rounded-full" style="background:linear-gradient(90deg,#1a6ff5,#3b8ef8);"></div>
            </div>
            <h3 class="font-black text-base text-white">Get Notified at Launch</h3>
            <p class="text-xs" style="color:#475569;">Be the first to know when we go live.</p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-3">
            <input v-model="email" type="email" placeholder="Enter your email address" required
              class="w-full h-12 rounded-2xl px-4 text-sm text-white transition-all"
              style="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);outline:none;"
              @focus="e => e.target.style.borderColor='rgba(26,111,245,0.6)'"
              @blur="e => e.target.style.borderColor='rgba(255,255,255,0.1)'"
            />
            <button type="submit" :disabled="loading"
              class="w-full h-12 text-white font-black text-xs tracking-widest uppercase rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 disabled:opacity-50"
              style="background:linear-gradient(135deg,#1a6ff5,#1044b0);box-shadow:0 4px 24px rgba(26,111,245,0.4);">
              <span v-if="!loading" class="flex items-center gap-2">Notify Me <ArrowRightIcon class="w-4 h-4" /></span>
              <span v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full" style="animation:spin 1s linear infinite;"></span>
            </button>
          </form>

          <div v-if="success" class="text-xs py-3 px-4 rounded-xl text-center font-semibold animate-fade-in" style="background:rgba(16,185,129,0.1);border:1px solid rgba(16,185,129,0.2);color:#34d399;">
            ✓ Thank you! We'll notify you when we launch.
          </div>
        </div>

        <!-- Countdown -->
        <div class="grid grid-cols-4 gap-3 max-w-xs sm:max-w-sm mx-auto">
          <div v-for="(val, unit) in countdown" :key="unit"
            class="rounded-2xl py-4 px-2 text-center hover:scale-105 transition-transform duration-200"
            style="background:rgba(255,255,255,0.04);border:1px solid rgba(26,111,245,0.15);">
            <div class="text-2xl sm:text-3xl font-black text-white tabular-nums">{{ String(val).padStart(2,'0') }}</div>
            <div class="text-[9px] font-black tracking-widest uppercase mt-1.5" style="color:#1a6ff5;">{{ unit }}</div>
          </div>
        </div>

        <!-- Brand color strip -->
        <div class="flex items-center justify-center gap-0 max-w-xs mx-auto rounded-full overflow-hidden opacity-30">
          <div class="flex-1 h-1.5" style="background:#1a6ff5;"></div>
          <div class="flex-1 h-1.5" style="background:#10b981;"></div>
          <div class="flex-1 h-1.5" style="background:#ef4444;"></div>
          <div class="flex-1 h-1.5" style="background:#f97316;"></div>
        </div>

      </div>
    </main>

    <!-- ── FOOTER ── -->
    <footer class="relative z-10 w-full max-w-7xl mx-auto px-6 py-7 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium" style="border-top:1px solid rgba(255,255,255,0.05);color:#475569;">
      <span>© 2026 Aprati Foods (Cambodia) Ltd. All rights reserved.</span>
      <div class="flex flex-wrap justify-center gap-6" style="color:#64748b;">
        <a href="mailto:info@apratifoods.com" class="flex items-center gap-1.5 font-semibold hover:text-white transition-colors">
          <EnvelopeIcon class="w-4 h-4" /> info@apratifoods.com
        </a>
        <span class="flex items-center gap-1.5 font-semibold">
          <PhoneIcon class="w-4 h-4" /> +855 87 300 040
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
@keyframes spin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
</style>
