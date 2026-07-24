<template>
  <div class="relative min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-hidden">

    <!-- Background Gradients -->
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div class="absolute inset-0" style="background-image: radial-gradient(ellipse at 15% 20%, rgba(26,111,245,0.08) 0%, transparent 60%), radial-gradient(ellipse at 85% 65%, rgba(249,115,22,0.06) 0%, transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(16,185,129,0.06) 0%, transparent 50%);"></div>
      <div class="absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs><pattern id="g" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0f172a" stroke-width="0.5"/>
          </pattern></defs>
          <rect width="100%" height="100%" fill="url(#g)" />
        </svg>
      </div>
    </div>

    <!-- ══ HEADER ══ -->
    <header class="relative z-30 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/80 sticky top-0 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <img src="/images/logo.png" alt="Aprati Foods Cambodia" class="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
          <span class="hidden sm:inline-block font-black text-xs tracking-[0.2em] uppercase text-slate-600 group-hover:text-blue-600 transition-colors">
            Aprati Foods (Cambodia) Ltd.
          </span>
        </NuxtLink>
        <NuxtLink to="/"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/90 shadow-sm transition-all duration-300 active:scale-95">
          <ArrowLeftIcon class="w-3.5 h-3.5" />
          Back
        </NuxtLink>
      </div>
    </header>

    <!-- ══ HERO ══ -->
    <section class="relative z-10 w-full max-w-4xl mx-auto px-6 pt-14 pb-10 text-center">
      <!-- Brand color bar -->
      <div class="flex items-center justify-center gap-0 w-24 mx-auto rounded-full overflow-hidden mb-5 shadow-sm">
        <div class="flex-1 h-1.5" style="background:#1a6ff5;"></div>
        <div class="flex-1 h-1.5" style="background:#10b981;"></div>
        <div class="flex-1 h-1.5" style="background:#ef4444;"></div>
        <div class="flex-1 h-1.5" style="background:#f97316;"></div>
      </div>
      <div class="inline-flex items-center gap-3 mb-4">
        <div class="w-10 h-[1px]" style="background:linear-gradient(to right,transparent,#1a6ff5);"></div>
        <span class="text-[11px] font-black tracking-[0.35em] uppercase text-blue-600">Join Our Team</span>
        <div class="w-10 h-[1px]" style="background:linear-gradient(to left,transparent,#1a6ff5);"></div>
      </div>
      <h1 class="text-4xl sm:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-slate-900">
        <span>Career </span>
        <span class="bg-clip-text text-transparent" style="background-image:linear-gradient(135deg,#1a6ff5,#2563eb,#0284c7);">Opportunities</span>
      </h1>
      <p class="text-base sm:text-lg max-w-xl mx-auto leading-relaxed text-slate-600 font-medium">
        Be part of a growing company bringing premium snacks and wellness products to Cambodia and beyond.
      </p>
    </section>

    <!-- ══ CONTENT ══ -->
    <main class="relative z-10 w-full max-w-5xl mx-auto px-6 pb-28">

      <!-- Loading -->
      <div v-if="pending" class="flex justify-center py-28">
        <div class="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>

      <!-- Error -->
      <div v-else-if="error" class="max-w-lg mx-auto text-center py-24 bg-white border border-red-200 rounded-3xl p-8 shadow-lg">
        <ExclamationTriangleIcon class="w-12 h-12 text-red-500 mx-auto mb-4" />
        <p class="text-slate-700 font-bold">Could not load job listings. Please try again later.</p>
      </div>

      <!-- Empty -->
      <div v-else-if="!jobs || jobs.length === 0" class="max-w-md mx-auto text-center py-20 bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <div class="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-100">
          <BriefcaseIcon class="w-10 h-10 text-blue-600" />
        </div>
        <h2 class="text-2xl font-black text-slate-900 mb-3">No Open Positions</h2>
        <p class="text-slate-600 text-sm leading-relaxed mb-6">We don't have any open positions at the moment.<br/>Check back soon — we're growing fast!</p>
        <a href="mailto:recruitment@apratifoods.asia"
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs tracking-widest uppercase rounded-2xl transition-all shadow-lg shadow-blue-600/25 active:scale-95">
          <EnvelopeIcon class="w-4 h-4" /> Send Speculative Application
        </a>
      </div>

      <!-- ── Cards Grid ── -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 max-w-4xl mx-auto">
        <button v-for="job in jobs" :key="job.id" @click="openDetail(job)"
          class="group text-left bg-white rounded-[1.75rem] p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400/60 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/30 flex flex-col justify-between"
        >
          <div>
            <!-- Top row -->
            <div class="flex items-start justify-between mb-4">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border shadow-2xs"
                :style="badgeStyle[job.type] || 'background:rgba(241,245,249,1);color:#475569;border-color:rgba(203,213,225,1);'">
                {{ job.type }}
              </span>
              <div class="flex items-center gap-2">
                <!-- Quick Share button on card -->
                <button @click.stop="shareJob(job, $event)"
                  class="w-8 h-8 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-500 hover:text-blue-600 flex items-center justify-center transition-colors"
                  :title="copiedJobId === job.id ? 'Link Copied!' : 'Share job link'">
                  <CheckIcon v-if="copiedJobId === job.id" class="w-4 h-4 text-emerald-600" />
                  <ShareIcon v-else class="w-4 h-4" />
                </button>
                <div class="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                  <ArrowUpRightIcon class="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                </div>
              </div>
            </div>

            <!-- Title -->
            <h2 class="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-1.5">
              {{ job.title }}
            </h2>

            <!-- Dept -->
            <p class="text-[11px] font-black tracking-widest uppercase text-blue-600/90 mb-4">
              {{ job.department }}
            </p>

            <!-- Snippet -->
            <p class="text-xs text-slate-600 leading-relaxed mb-6 line-clamp-3 font-normal">
              {{ truncate(job.description, 140) }}
            </p>
          </div>

          <!-- Meta footer -->
          <div class="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-500">
            <span class="flex items-center gap-1.5">
              <MapPinIcon class="w-3.5 h-3.5 text-slate-400" /> {{ job.location }}
            </span>
          </div>
        </button>
      </div>

      <!-- Toast Feedback notification -->
      <Transition name="fade">
        <div v-if="toastMessage" class="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 text-xs font-bold border border-slate-700">
          <CheckIcon class="w-4 h-4 text-emerald-400" />
          <span>{{ toastMessage }}</span>
        </div>
      </Transition>

      <!-- Contact strip -->
      <div v-if="jobs && jobs.length > 0" class="mt-16 text-center">
        <div class="inline-flex items-center gap-2 bg-white px-6 py-3.5 rounded-2xl border border-slate-200/80 shadow-sm text-sm text-slate-600 font-medium">
          <EnvelopeIcon class="w-4 h-4 text-blue-600" />
          <span>Don't see the right role? Email us at</span>
          <a href="mailto:recruitment@apratifoods.asia" class="text-blue-600 font-bold hover:underline">recruitment@apratifoods.asia</a>
        </div>
      </div>
    </main>

    <!-- ══ DETAIL MODAL ══ -->
    <Transition name="overlay">
      <div v-if="selectedJob"
        class="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-950/40 backdrop-blur-md px-0 sm:px-4"
        @click.self="closeDetail"
      >
        <Transition name="sheet">
          <div v-if="selectedJob"
            class="relative w-full sm:max-w-2xl max-h-[92dvh] sm:max-h-[86vh] flex flex-col overflow-hidden bg-white shadow-2xl border border-slate-200/80"
            :style="{ borderRadius: isMobile ? '2rem 2rem 0 0' : '2rem' }"
          >
            <!-- Mobile Drag handle -->
            <div class="flex justify-center pt-3 pb-1 sm:hidden flex-shrink-0 bg-slate-50">
              <div class="w-10 h-1 bg-slate-300 rounded-full"></div>
            </div>

            <!-- Modal Header -->
            <div class="px-8 pt-6 pb-5 border-b border-slate-100 bg-slate-50/70 flex-shrink-0">
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                  <div class="flex flex-wrap gap-2 mb-3">
                    <span class="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase border shadow-2xs"
                      :style="badgeStyle[selectedJob.type] || 'background:rgba(241,245,249,1);color:#475569;border-color:rgba(203,213,225,1);'">
                      {{ selectedJob.type }}
                    </span>
                    <span class="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-blue-50 text-blue-700 border border-blue-200/80 flex items-center gap-1.5">
                      <BuildingOfficeIcon class="w-3.5 h-3.5" /> {{ selectedJob.department }}
                    </span>
                    <span class="px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase bg-slate-100 text-slate-600 border border-slate-200 flex items-center gap-1.5">
                      <MapPinIcon class="w-3.5 h-3.5 text-slate-500" /> {{ selectedJob.location }}
                    </span>
                  </div>
                  <h2 class="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">{{ selectedJob.title }}</h2>
                  <div class="flex flex-wrap gap-4 mt-2.5 text-xs text-slate-500 font-semibold">
                    <span class="flex items-center gap-1.5"><ClockIcon class="w-3.5 h-3.5 text-slate-400" /> Posted {{ timeAgo(selectedJob.created_at) }}</span>
                  </div>
                </div>
                <button @click="closeDetail"
                  class="flex-shrink-0 w-9 h-9 flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 rounded-xl transition-all active:scale-95">
                  <XMarkIcon class="w-5 h-5" />
                </button>
              </div>
            </div>

            <!-- Scrollable Body -->
            <div class="overflow-y-auto flex-1 px-8 py-6 space-y-7 text-slate-700">
              <!-- About the Role -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-4 h-[2px] bg-blue-600 rounded-full"></div>
                  <h3 class="text-xs font-black tracking-[0.25em] uppercase text-blue-600">About the Role</h3>
                </div>
                <ul class="space-y-2.5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80">
                  <li v-for="(bullet, idx) in getBulletLines(selectedJob.description)" :key="idx" class="flex items-start gap-2.5">
                    <span class="text-blue-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>

              <!-- Job Requirements -->
              <div v-if="selectedJob.requirements">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-4 h-[2px] bg-blue-600 rounded-full"></div>
                  <h3 class="text-xs font-black tracking-[0.25em] uppercase text-blue-600">Job Requirements</h3>
                </div>
                <ul class="space-y-2.5 text-slate-700 text-sm sm:text-base leading-relaxed font-normal bg-slate-50/70 p-5 rounded-2xl border border-slate-200/80">
                  <li v-for="(bullet, idx) in getBulletLines(selectedJob.requirements)" :key="idx" class="flex items-start gap-2.5">
                    <span class="text-blue-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>{{ bullet }}</span>
                  </li>
                </ul>
              </div>

              <!-- Working Condition -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-4 h-[2px] bg-blue-600 rounded-full"></div>
                  <h3 class="text-xs font-black tracking-[0.25em] uppercase text-blue-600">Working Condition</h3>
                </div>
                <div class="bg-blue-50/50 p-5 rounded-2xl border border-blue-100/80 text-slate-700 text-sm sm:text-base leading-relaxed space-y-2 font-medium">
                  <div class="flex items-start gap-2.5">
                    <span class="text-blue-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>Monday – Saturday (Two Saturdays off per month), 8:00am – 5:00pm</span>
                  </div>
                </div>
              </div>

              <!-- Benefits -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-4 h-[2px] bg-blue-600 rounded-full"></div>
                  <h3 class="text-xs font-black tracking-[0.25em] uppercase text-blue-600">Benefits</h3>
                </div>
                <ul class="space-y-2.5 text-slate-700 text-sm sm:text-base leading-relaxed font-medium bg-emerald-50/40 p-5 rounded-2xl border border-emerald-100">
                  <li class="flex items-start gap-2.5">
                    <span class="text-emerald-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>Good benefits will be offered to the successful candidate</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="text-emerald-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>Competitive salary based on the market rate with international company</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="text-emerald-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>Allowance: phone allowance, lunch, Public Insurance …etc.</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="text-emerald-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>Education: Company training, job training, associate development program</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="text-emerald-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>Compliance with labor law</span>
                  </li>
                  <li class="flex items-start gap-2.5">
                    <span class="text-emerald-600 font-black flex-shrink-0 mt-0.5">•</span>
                    <span>Good working environment</span>
                  </li>
                </ul>
              </div>

              <!-- Why Join -->
              <div class="rounded-2xl p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border border-blue-100">
                <h3 class="text-xs font-black tracking-[0.25em] uppercase text-blue-700 mb-3.5">Why Aprati Foods?</h3>
                <ul class="space-y-2.5">
                  <li v-for="item in whyItems" :key="item" class="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                    <span class="text-blue-600 font-black mt-0.5 flex-shrink-0">✓</span>{{ item }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Footer CTA -->
            <div class="px-8 py-5 border-t border-slate-100 bg-slate-50/90 backdrop-blur-md flex-shrink-0 flex flex-col sm:flex-row gap-3">
              <a :href="`mailto:recruitment@apratifoods.asia?subject=Application: ${encodeURIComponent(selectedJob.title)}&body=Hello Aprati Foods HR Team,%0D%0A%0D%0AI am writing to apply for the position of ${encodeURIComponent(selectedJob.title)}.%0D%0A%0D%0A`"
                class="flex-1 inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-black text-xs tracking-widest uppercase rounded-2xl transition-all duration-300 shadow-lg shadow-blue-600/25 active:scale-95">
                <EnvelopeIcon class="w-4 h-4" /> Apply Now
              </a>

              <!-- Share Button inside Modal -->
              <button @click="shareJob(selectedJob)"
                class="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs tracking-widest uppercase rounded-2xl border border-slate-200/90 transition-all active:scale-95">
                <CheckIcon v-if="copiedJobId === selectedJob.id" class="w-4 h-4 text-emerald-600" />
                <ShareIcon v-else class="w-4 h-4 text-blue-600" />
                <span>{{ copiedJobId === selectedJob.id ? 'Link Copied!' : 'Share' }}</span>
              </button>

              <button @click="closeDetail"
                class="px-6 py-3.5 bg-slate-200/80 hover:bg-slate-300/80 text-slate-700 font-black text-xs tracking-widest uppercase rounded-2xl transition-all active:scale-95">
                Close
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>

    <!-- Footer -->
    <footer class="relative z-10 w-full max-w-7xl mx-auto px-6 py-8 border-t border-slate-200/80 text-center text-xs text-slate-500 font-medium bg-white/50">
      © 2026 Aprati Foods (Cambodia) Ltd. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
import {
  ArrowLeftIcon, ArrowUpRightIcon, BriefcaseIcon, BuildingOfficeIcon,
  MapPinIcon, CalendarDaysIcon, ClockIcon, EnvelopeIcon,
  ExclamationTriangleIcon, XMarkIcon, ShareIcon, LinkIcon, CheckIcon
} from '@heroicons/vue/24/outline'

import { getStoredJobs, isStaticHost } from '~/utils/jobsStorage'

useSeoMeta({
  title: 'Careers — Aprati Foods (Cambodia) Ltd.',
  description: 'Join the Aprati Foods team. Browse open job positions and career opportunities in Cambodia.'
})

const route = useRoute()

const { data: apiJobs, pending, error } = await useFetch('/api/jobs', { key: 'careers-jobs', server: true })

const jobs = ref([])
const selectedJob = ref(null)
const isMobile = ref(false)
const copiedJobId = ref(null)
const toastMessage = ref('')

function syncJobs() {
  let list = []
  if (apiJobs.value && Array.isArray(apiJobs.value) && apiJobs.value.length > 0) {
    list = apiJobs.value
  } else {
    list = getStoredJobs()
  }

  let filtered = list.filter(j => 
    j.is_active !== 0 && 
    j.title !== 'Sales Executive' && 
    j.title !== 'Warehouse & Logistics Officer' && 
    j.title !== 'testing'
  )

  if (filtered.length === 0) {
    filtered = getStoredJobs()
  }

  jobs.value = filtered
}

function openDetail(job, updateUrl = true) {
  selectedJob.value = job
  if (process.client) {
    document.body.style.overflow = 'hidden'
    if (updateUrl) {
      const url = new URL(window.location.href)
      url.searchParams.set('job', job.id)
      window.history.replaceState({}, '', url.pathname + url.search)
    }
  }
}

function closeDetail() {
  selectedJob.value = null
  if (process.client) {
    document.body.style.overflow = ''
    const url = new URL(window.location.href)
    url.searchParams.delete('job')
    window.history.replaceState({}, '', url.pathname)
  }
}

async function shareJob(job, event) {
  if (event) event.stopPropagation()
  
  if (!process.client) return

  const shareUrl = `${window.location.origin}/careers?job=${job.id}`
  const shareData = {
    title: `${job.title} — Aprati Foods Careers`,
    text: `Apply for ${job.title} position at Aprati Foods (Cambodia) Ltd.`,
    url: shareUrl
  }

  // Try native share API on mobile / supported devices
  if (navigator.share) {
    try {
      await navigator.share(shareData)
      return
    } catch (e) {
      // Fallback to clipboard copy if dismissed or unsupported
    }
  }

  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(shareUrl)
    copiedJobId.value = job.id
    toastMessage.value = `Job link copied for "${job.title}"!`
    setTimeout(() => {
      copiedJobId.value = null
      toastMessage.value = ''
    }, 3000)
  } catch (err) {
    console.error('Failed to copy link', err)
  }
}

onMounted(() => {
  isMobile.value = window.innerWidth < 640
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDetail() })

  syncJobs()

  // Auto-open job detail if query parameter ?job=ID is present
  const jobParam = route.query.job || route.query.id
  if (jobParam) {
    const found = jobs.value.find(j => 
      String(j.id) === String(jobParam) || 
      j.title.toLowerCase().replace(/\s+/g, '-') === String(jobParam).toLowerCase()
    )
    if (found) {
      openDetail(found, false)
    }
  }

  window.addEventListener('storage', syncJobs)
  window.addEventListener('aprati_jobs_updated', syncJobs)
})

const badgeStyle = {
  'Full-time':  'background:rgba(26,111,245,0.08);border-color:rgba(26,111,245,0.25);color:#1a6ff5;',
  'Part-time':  'background:rgba(16,185,129,0.08);border-color:rgba(16,185,129,0.25);color:#059669;',
  'Contract':   'background:rgba(239,68,68,0.08);border-color:rgba(239,68,68,0.25);color:#dc2626;',
  'Internship': 'background:rgba(249,115,22,0.08);border-color:rgba(249,115,22,0.25);color:#ea580c;'
}

const whyItems = [
  'Growing international company with regional ambitions',
  'Dynamic, supportive, and collaborative work environment',
  'Competitive market salary and comprehensive benefits package',
  'Continuous learning, training, and career advancement opportunities'
]

function truncate(t, n) { return !t ? '' : t.length > n ? t.slice(0, n) + '…' : t }
function formatDate(d) { return d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '' }
function timeAgo(d) {
  if (!d) return ''
  const n = Math.floor((Date.now() - new Date(d)) / 86400000)
  return n === 0 ? 'today' : n === 1 ? 'yesterday' : n < 30 ? `${n} days ago` : `${Math.floor(n/30)} months ago`
}
function getBulletLines(text) {
  if (!text) return []
  return text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => line.replace(/^[\u2022\u25E6\u2023\u2043\u2219\*\-]\s*/, ''))
}
</script>

<style scoped>
.animate-spin { animation: spin 1s linear infinite; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* line-clamp */
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

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

/* Toast Fade */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(10px); }
</style>
