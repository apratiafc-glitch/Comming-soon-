<template>
  <div class="relative min-h-screen bg-dark text-white font-sans overflow-hidden">

    <!-- Background -->
    <div class="absolute inset-0 z-0">
      <div class="absolute inset-0" style="background-image: radial-gradient(ellipse at 15% 30%, rgba(59,130,246,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 70%, rgba(221,146,7,0.08) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.10) 0%, transparent 50%);"></div>
      <div class="absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="g" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" stroke-width="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>
    </div>

    <!-- ══ HEADER ══ -->
    <header class="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between" style="border-bottom:1px solid rgba(255,255,255,0.05);">
      <NuxtLink to="/" class="flex items-center space-x-3 group">
        <img src="/images/logo.png" alt="Aprati Foods Cambodia" class="h-12 w-auto object-contain filter brightness-200 drop-shadow-lg" />
        <span class="hidden sm:inline-block font-black text-sm tracking-[0.2em] uppercase transition-colors" style="color:#64748b;">
          Aprati Foods (Cambodia) Ltd.
        </span>
      </NuxtLink>
      <NuxtLink to="/"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase transition-all duration-300 active:scale-95"
        style="background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);color:#94a3b8;">
        <ArrowLeftIcon class="w-3.5 h-3.5" />
        Back
      </NuxtLink>
    </header>

    <!-- ══ HERO ══ -->
    <section class="relative z-10 w-full max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
      <!-- Brand color bar -->
      <div class="flex items-center justify-center gap-0 w-24 mx-auto rounded-full overflow-hidden mb-5">
        <div class="flex-1 h-1" style="background:#1a6ff5;"></div>
        <div class="flex-1 h-1" style="background:#10b981;"></div>
        <div class="flex-1 h-1" style="background:#ef4444;"></div>
        <div class="flex-1 h-1" style="background:#f97316;"></div>
      </div>
      <div class="inline-flex items-center gap-3 mb-5">
        <div class="w-10 h-[1px]" style="background:linear-gradient(to right,transparent,#1a6ff5);"></div>
        <span class="text-[11px] font-black tracking-[0.35em] uppercase" style="color:#1a6ff5;">Join Our Team</span>
        <div class="w-10 h-[1px]" style="background:linear-gradient(to left,transparent,#1a6ff5);"></div>
      </div>
      <h1 class="text-5xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-4">
        <span class="text-white">Career </span>
        <span style="background:linear-gradient(135deg,#3b8ef8,#1a6ff5,#7ab4fa);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">Opportunities</span>
      </h1>
      <p class="text-base max-w-lg mx-auto leading-relaxed" style="color:#64748b;">
        Be part of a growing company bringing premium snacks and wellness products to Cambodia and beyond.
      </p>
    </section>

    <!-- ══ CONTENT ══ -->
    <main class="relative z-10 w-full max-w-5xl mx-auto px-6 pb-28">

      <!-- Loading -->
      <div v-if="pending" class="flex justify-center py-28">
        <div class="w-10 h-10 border-4 border-amber-400/60 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="max-w-lg mx-auto text-center py-24">
        <ExclamationTriangleIcon class="w-12 h-12 text-red-400 mx-auto mb-4" />
        <p class="text-slate-400 font-semibold">Could not load job listings. Please try again later.</p>
      </div>

      <!-- Empty -->
      <div v-else-if="!jobs || jobs.length === 0" class="max-w-md mx-auto text-center py-24">
        <div class="w-20 h-20 glass rounded-full flex items-center justify-center mx-auto mb-6 border-amber-500/20">
          <BriefcaseIcon class="w-10 h-10 text-amber-400" />
        </div>
        <h2 class="text-2xl font-black text-white mb-3">No Open Positions</h2>
        <p class="text-slate-500 text-sm leading-relaxed">We don't have any open positions at the moment.<br/>Check back soon — we're growing fast!</p>
        <a href="mailto:hr@apratifoods.com"
          class="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-corporate-gold to-amber-500 text-white font-black text-xs tracking-widest uppercase rounded-2xl hover:from-amber-500 hover:to-yellow-400 transition-all shadow-lg shadow-amber-500/20 active:scale-95">
          <EnvelopeIcon class="w-4 h-4" /> Send Speculative Application
        </a>
      </div>

      <!-- ── Cards Grid ── -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <button v-for="job in jobs" :key="job.id" @click="openDetail(job)"
          class="group text-left glass rounded-[1.5rem] p-6 border border-white/[0.08] hover:border-amber-500/30 hover:bg-white/[0.07] hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400/30"
        >
          <!-- Top row -->
          <div class="flex items-start justify-between mb-4">
            <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border"
              :style="badgeStyle[job.type] || 'background:rgba(255,255,255,0.1);color:#94a3b8;border-color:rgba(255,255,255,0.2);'">
              {{ job.type }}
            </span>
            <ArrowUpRightIcon class="w-4 h-4 flex-shrink-0 transition-colors duration-300" style="color:#374151;" @mouseover="" />
          </div>

          <!-- Title -->
          <h2 class="text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug mb-1">
            {{ job.title }}
          </h2>

          <!-- Dept -->
          <p class="text-[11px] font-black tracking-widest uppercase text-amber-500/70 mb-3">
            {{ job.department }}
          </p>

          <!-- Snippet -->
          <p class="text-xs text-slate-500 leading-relaxed mb-5 line-clamp-2">
            {{ truncate(job.description, 100) }}
          </p>

          <!-- Meta footer -->
          <div class="pt-3.5 border-t border-white/[0.06] flex flex-wrap gap-3 text-[11px] text-slate-600 font-medium">
            <span class="flex items-center gap-1 text-slate-500">
              <MapPinIcon class="w-3 h-3" /> {{ job.location }}
            </span>
            <span v-if="job.deadline" class="flex items-center gap-1 text-amber-600/80">
              <CalendarDaysIcon class="w-3 h-3" /> {{ formatDate(job.deadline) }}
            </span>
          </div>
        </button>
      </div>

      <!-- Contact strip -->
      <div v-if="jobs && jobs.length > 0" class="mt-16 text-center">
        <p class="text-sm text-slate-600">
          Don't see the right role? Email us at
          <a href="mailto:hr@apratifoods.com" class="text-amber-400 font-bold hover:underline ml-1">hr@apratifoods.com</a>
        </p>
      </div>
    </main>

    <!-- ══ DETAIL MODAL ══ -->
    <Transition name="overlay">
      <div v-if="selectedJob"
        class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/75 backdrop-blur-sm px-0 sm:px-4"
        @click.self="closeDetail"
      >
        <Transition name="sheet">
          <div v-if="selectedJob"
            class="relative w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[86vh] flex flex-col overflow-hidden"
            style="background: #0e1524; border: 1px solid rgba(255,255,255,0.1); border-radius: 2.5rem 2.5rem 0 0;"
            :style="{ borderRadius: isMobile ? '2.5rem 2.5rem 0 0' : '2.5rem' }"
          >
            <!-- Drag handle -->
            <div class="flex justify-center pt-3 pb-1 sm:hidden flex-shrink-0">
              <div class="w-10 h-1 bg-white/20 rounded-full"></div>
            </div>

            <!-- Header -->
            <div class="px-7 pt-5 pb-5 border-b border-white/[0.07] flex-shrink-0">
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border"
                      :style="badgeStyle[selectedJob.type] || 'background:rgba(255,255,255,0.1);color:#94a3b8;border-color:rgba(255,255,255,0.2);'">
                      {{ selectedJob.type }}
                    </span>
                    <span class="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-blue-900/60 text-blue-300 border border-blue-700/30 flex items-center gap-1">
                      <BuildingOfficeIcon class="w-3 h-3" /> {{ selectedJob.department }}
                    </span>
                    <span class="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase glass text-slate-400 flex items-center gap-1">
                      <MapPinIcon class="w-3 h-3" /> {{ selectedJob.location }}
                    </span>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-black text-white leading-tight">{{ selectedJob.title }}</h2>
                  <div class="flex flex-wrap gap-4 mt-2 text-xs text-slate-500 font-medium">
                    <span class="flex items-center gap-1.5"><ClockIcon class="w-3.5 h-3.5" /> Posted {{ timeAgo(selectedJob.created_at) }}</span>
                    <span v-if="selectedJob.deadline" class="flex items-center gap-1.5 text-amber-400 font-semibold">
                      <CalendarDaysIcon class="w-3.5 h-3.5" /> Apply by {{ formatDate(selectedJob.deadline) }}
                    </span>
                  </div>
                </div>
                <button @click="closeDetail"
                  class="flex-shrink-0 w-9 h-9 flex items-center justify-center glass rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-all active:scale-95">
                  <XMarkIcon class="w-5 h-5" />
                </button>
              </div>
            </div>

            <!-- Scrollable Body -->
            <div class="overflow-y-auto flex-1 px-7 py-6 space-y-7">
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-4 h-[2px] bg-amber-400 rounded-full"></div>
                  <h3 class="text-[10px] font-black tracking-[0.3em] uppercase text-amber-400">About the Role</h3>
                </div>
                <p class="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{{ selectedJob.description }}</p>
              </div>

              <div v-if="selectedJob.requirements">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-4 h-[2px] bg-amber-400 rounded-full"></div>
                  <h3 class="text-[10px] font-black tracking-[0.3em] uppercase text-amber-400">Requirements</h3>
                </div>
                <p class="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{{ selectedJob.requirements }}</p>
              </div>

              <!-- Why Join -->
              <div class="rounded-2xl p-5" style="background: rgba(221,146,7,0.06); border: 1px solid rgba(221,146,7,0.15);">
                <h3 class="text-[10px] font-black tracking-[0.3em] uppercase text-amber-400 mb-3">Why Aprati Foods?</h3>
                <ul class="space-y-2">
                  <li v-for="item in whyItems" :key="item" class="flex items-start gap-2.5 text-sm text-amber-200/70">
                    <span class="text-amber-400 font-black mt-0.5 flex-shrink-0">✓</span>{{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Footer CTA -->
            <div class="px-7 py-5 border-t border-white/[0.07] flex-shrink-0 flex flex-col sm:flex-row gap-3" style="background: rgba(14,21,36,0.95); backdrop-filter: blur(12px);">
              <a :href="`mailto:hr@apratifoods.com?subject=Application: ${encodeURIComponent(selectedJob.title)}&body=Hello Aprati Foods HR Team,%0D%0A%0D%0AI am writing to apply for the ${encodeURIComponent(selectedJob.title)} position.%0D%0A%0D%0A`"
                class="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-corporate-gold to-amber-500 text-white font-black text-xs tracking-widest uppercase rounded-2xl hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 shadow-lg shadow-amber-500/20 active:scale-95">
                <EnvelopeIcon class="w-4 h-4" /> Apply Now
              </a>
              <button @click="closeDetail"
                class="glass px-6 py-3.5 text-slate-400 hover:text-white font-black text-xs tracking-widest uppercase rounded-2xl transition-all active:scale-95">
                Close
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Footer -->
    <footer class="relative z-10 w-full max-w-7xl mx-auto px-6 py-6 border-t border-white/[0.06] text-center text-xs text-slate-700 font-medium">
      © 2026 Aprati Foods (Cambodia) Ltd. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import {
  ArrowLeftIcon, ArrowUpRightIcon, BriefcaseIcon, BuildingOfficeIcon,
  MapPinIcon, CalendarDaysIcon, ClockIcon, EnvelopeIcon,
  ExclamationTriangleIcon, XMarkIcon
} from '@heroicons/vue/24/outline'

useSeoMeta({
  title: 'Careers — Aprati Foods (Cambodia) Ltd.',
  description: 'Join the Aprati Foods team. Browse open job positions and career opportunities in Cambodia.'
})

const { data: jobs, pending, error } = await useFetch('/api/jobs', { key: 'careers-jobs', server: true })

const selectedJob = ref(null)
const isMobile = ref(false)

onMounted(() => {
  isMobile.value = window.innerWidth < 640
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDetail() })
})

function openDetail(job) {
  selectedJob.value = job
  if (process.client) document.body.style.overflow = 'hidden'
}
function closeDetail() {
  selectedJob.value = null
  if (process.client) document.body.style.overflow = ''
}

// Brand color badges:
// Full-time  → Blue  (main brand)
// Part-time  → Green (sub-brand)
// Contract   → Red   (sub-brand)
// Internship → Orange (sub-brand)
const badgeMap = {
  'Full-time':  'border',
  'Part-time':  'border',
  'Contract':   'border',
  'Internship': 'border'
}
const badgeStyle = {
  'Full-time':  'background:rgba(26,111,245,0.15);border-color:rgba(26,111,245,0.35);color:#3b8ef8;',
  'Part-time':  'background:rgba(16,185,129,0.15);border-color:rgba(16,185,129,0.35);color:#34d399;',
  'Contract':   'background:rgba(239,68,68,0.15);border-color:rgba(239,68,68,0.35);color:#f87171;',
  'Internship': 'background:rgba(249,115,22,0.15);border-color:rgba(249,115,22,0.35);color:#fb923c;'
}

const whyItems = [
  'Growing company with regional ambitions',
  'Dynamic and collaborative work environment',
  'Competitive salary and benefits',
  'Career growth and learning opportunities'
]

function truncate(t, n) { return !t ? '' : t.length > n ? t.slice(0, n) + '…' : t }
function formatDate(d) { return d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '' }
function timeAgo(d) {
  if (!d) return ''
  const n = Math.floor((Date.now() - new Date(d)) / 86400000)
  return n === 0 ? 'today' : n === 1 ? 'yesterday' : n < 30 ? `${n} days ago` : `${Math.floor(n/30)} months ago`
}
</script>

<style scoped>
.animate-spin { animation: spin 1s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.glass {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
}

/* line-clamp */
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

/* Overlay */
.overlay-enter-active, .overlay-leave-active { transition: opacity 0.25s ease; }
.overlay-enter-from, .overlay-leave-to { opacity: 0; }

/* Sheet */
.sheet-enter-active { transition: all 0.32s cubic-bezier(0.34, 1.4, 0.64, 1); }
.sheet-leave-active { transition: all 0.2s ease-in; }
@media (max-width: 639px) {
  .sheet-enter-from, .sheet-leave-to { transform: translateY(100%); opacity: 0; }
}
@media (min-width: 640px) {
  .sheet-enter-from, .sheet-leave-to { transform: scale(0.94) translateY(14px); opacity: 0; }
}
</style>
