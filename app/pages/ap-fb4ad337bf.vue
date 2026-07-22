<template>
  <div class="relative min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-corporate-gold selection:text-white">

    <!-- Background -->
    <div class="absolute inset-0 opacity-[0.06] pointer-events-none z-0">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
    <div class="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[140px] pointer-events-none z-0"></div>
    <div class="absolute bottom-[-5%] left-[5%] w-[400px] h-[400px] bg-corporate-gold/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

    <!-- ══════════════════════ PASSWORD GATE ══════════════════════ -->
    <div v-if="!authenticated" class="relative z-10 flex items-center justify-center min-h-screen px-4">
      <div class="w-full max-w-md">
        <!-- Logo -->
        <div class="text-center mb-8">
          <img src="/images/logo.png" alt="Aprati Foods" class="h-16 w-auto mx-auto mb-4 filter brightness-200 drop-shadow-lg" />
          <div class="inline-flex items-center gap-2 mb-3">
            <div class="flex items-center gap-1">
              <span class="w-2 h-2 rounded-full" style="background:#1a6ff5;"></span>
              <span class="w-2 h-2 rounded-full" style="background:#10b981;"></span>
              <span class="w-2 h-2 rounded-full" style="background:#ef4444;"></span>
              <span class="w-2 h-2 rounded-full" style="background:#f97316;"></span>
            </div>
            <span class="text-xs font-black tracking-[0.3em] uppercase" style="color:#3b8ef8;">HR Admin Portal</span>
          </div>
          <h1 class="text-3xl font-black text-white">Secure Access</h1>
          <p class="text-slate-400 text-sm mt-1">Enter your HR admin password to continue</p>
        </div>

        <div class="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl shadow-2xl">
          <form id="hr-login-form" @submit.prevent="authenticate" class="space-y-5">
            <div class="relative">
              <LockClosedIcon class="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
              <input
                id="hr-password"
                v-model="passwordInput"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter HR password"
                autocomplete="current-password"
                required
                class="w-full h-12 bg-white/5 border border-white/10 rounded-xl pl-10 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-corporate-gold/50 focus:border-corporate-gold/50 transition-all"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                tabindex="-1"
              >
                <EyeIcon v-if="!showPassword" class="w-4 h-4" />
                <EyeSlashIcon v-else class="w-4 h-4" />
              </button>
            </div>

            <!-- Error Message -->
            <div v-if="authError" class="bg-red-500/10 border border-red-500/30 text-red-400 text-xs py-3 px-4 rounded-xl text-center font-semibold animate-fade-in flex items-start gap-2">
              <ExclamationTriangleIcon class="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{{ authError }}</span>
            </div>

            <!-- Rate limit warning -->
            <div v-if="attemptsWarning" class="bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs py-2.5 px-4 rounded-xl text-center font-semibold">
              ⚠ {{ attemptsWarning }}
            </div>

            <button
              id="hr-login-btn"
              type="submit"
              :disabled="authLoading || isLockedOut"
              class="w-full h-12 text-white font-black text-xs tracking-widest uppercase rounded-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 active:scale-95"
              style="background:linear-gradient(135deg,#1a6ff5,#1044b0);box-shadow:0 4px 20px rgba(26,111,245,0.35);"
            >
              <span v-if="isLockedOut">🔒 Account Locked — {{ lockoutCountdown }}</span>
              <span v-else-if="!authLoading" class="flex items-center gap-2">
                <ShieldCheckIcon class="w-4 h-4" />
                Enter Portal
              </span>
              <span v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            </button>
          </form>
        </div>

        <p class="text-center mt-6">
          <NuxtLink to="/" class="text-slate-500 text-xs hover:text-slate-300 transition-colors">← Back to Home</NuxtLink>
        </p>
      </div>
    </div>

    <!-- ══════════════════════ HR DASHBOARD ══════════════════════ -->
    <div v-else class="relative z-10 min-h-screen">
      <!-- Top Bar -->
      <header class="border-b border-white/10 px-6 py-4 flex items-center justify-between backdrop-blur-sm sticky top-0 z-20 bg-slate-900/80">
        <div class="flex items-center gap-3">
          <img src="/images/logo.png" alt="Aprati Foods" class="h-10 w-auto filter brightness-200" />
          <div>
            <p class="text-[10px] font-black tracking-[0.3em] uppercase" style="color:#3b8ef8;">HR Admin Portal</p>
            <p class="text-sm font-black text-white">Job Management</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <NuxtLink
            to="/careers"
            target="_blank"
            class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-black tracking-wider uppercase hover:bg-white/10 transition-all"
          >
            <ArrowTopRightOnSquareIcon class="w-3.5 h-3.5" />
            View Careers Page
          </NuxtLink>
          <button
            id="logout-btn"
            @click="logout"
            class="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs font-black tracking-wider uppercase hover:bg-red-500/20 transition-all"
          >
            <ArrowRightOnRectangleIcon class="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </header>

      <div class="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-5 gap-8">

        <!-- ── Post Job Form (left) ─────────────────────────────── -->
        <div class="lg:col-span-2">
          <div class="bg-white/5 border border-white/10 rounded-[2rem] p-6 backdrop-blur-sm sticky top-24">
            <div class="flex items-center gap-2 mb-6">
              <PlusCircleIcon class="w-5 h-5 text-corporate-gold" />
              <h2 class="text-base font-black text-white">Post New Job</h2>
            </div>

            <form id="post-job-form" @submit.prevent="postJob" class="space-y-4">
              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1.5">Job Title *</label>
                <input id="job-title" v-model="form.title" type="text" placeholder="e.g. Sales Executive" required
                  class="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-corporate-gold/50 focus:border-corporate-gold/50 transition-all" />
              </div>

              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1.5">Department *</label>
                <input id="job-department" v-model="form.department" type="text" placeholder="e.g. Sales & Marketing" required
                  class="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-corporate-gold/50 focus:border-corporate-gold/50 transition-all" />
              </div>

              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1.5">Location</label>
                <input id="job-location" v-model="form.location" type="text" placeholder="Phnom Penh, Cambodia"
                  class="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-corporate-gold/50 focus:border-corporate-gold/50 transition-all" />
              </div>

              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1.5">Type</label>
                  <select id="job-type" v-model="form.type"
                    class="w-full h-10 bg-slate-800 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-corporate-gold/50 transition-all">
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1.5">Deadline</label>
                  <input id="job-deadline" v-model="form.deadline" type="date"
                    class="w-full h-10 bg-slate-800 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-corporate-gold/50 transition-all" />
                </div>
              </div>

              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1.5">Job Description *</label>
                <textarea id="job-description" v-model="form.description" rows="4"
                  placeholder="Describe the role, responsibilities..." required
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-corporate-gold/50 focus:border-corporate-gold/50 transition-all resize-none"></textarea>
              </div>

              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-400 mb-1.5">Requirements</label>
                <textarea id="job-requirements" v-model="form.requirements" rows="3"
                  placeholder="List qualifications, experience, skills..."
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-corporate-gold/50 focus:border-corporate-gold/50 transition-all resize-none"></textarea>
              </div>

              <div v-if="postSuccess" class="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs py-2.5 px-4 rounded-xl text-center font-semibold animate-fade-in">
                ✓ Job posted successfully!
              </div>
              <div v-if="postError" class="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-2.5 px-4 rounded-xl font-semibold">
                ✗ {{ postError }}
              </div>

              <button id="post-job-btn" type="submit" :disabled="postLoading"
                class="w-full h-11 text-white font-black text-xs tracking-widest uppercase rounded-xl flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-300 active:scale-95"
              style="background:linear-gradient(135deg,#1a6ff5,#1044b0);box-shadow:0 4px 20px rgba(26,111,245,0.3);">
                <span v-if="!postLoading" class="flex items-center gap-2">
                  <PlusIcon class="w-4 h-4" /> Post Job
                </span>
                <span v-else class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              </button>
            </form>
          </div>
        </div>

        <!-- ── Job List (right) ────────────────────────────────── -->
        <div class="lg:col-span-3">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-base font-black text-white flex items-center gap-2">
              <BriefcaseIcon class="w-5 h-5 text-corporate-gold" />
              Active Job Postings
              <span class="ml-2 px-2.5 py-0.5 bg-corporate-gold/20 text-corporate-gold rounded-full text-[11px] font-black">
                {{ jobs?.length ?? 0 }}
              </span>
            </h2>
            <button @click="loadJobs"
              class="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors font-semibold">
              <ArrowPathIcon class="w-3.5 h-3.5" :class="{ 'animate-spin': listLoading }" />
              Refresh
            </button>
          </div>

          <div v-if="listLoading && jobs.length === 0" class="flex justify-center py-16">
            <div class="w-8 h-8 border-4 border-corporate-gold border-t-transparent rounded-full animate-spin"></div>
          </div>

          <div v-else-if="jobs.length === 0" class="text-center py-16">
            <BriefcaseIcon class="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <p class="text-slate-500 font-semibold">No job postings yet.</p>
            <p class="text-slate-600 text-sm mt-1">Use the form to post your first job announcement.</p>
          </div>

          <div v-else class="space-y-4">
            <div v-for="job in jobs" :key="job.id"
              class="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-white/20 transition-all duration-200 group">
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1">
                  <div class="flex flex-wrap gap-1.5 mb-2">
                    <span :class="typeColorMap[job.type] || 'bg-slate-700 text-slate-300'"
                      class="px-2.5 py-0.5 rounded-full text-[10px] font-black tracking-wider uppercase">{{ job.type }}</span>
                    <span class="px-2.5 py-0.5 bg-blue-900/50 text-blue-300 rounded-full text-[10px] font-black tracking-wider uppercase">
                      {{ job.department }}</span>
                  </div>
                  <h3 class="font-black text-white text-base">{{ job.title }}</h3>
                  <div class="flex flex-wrap gap-3 mt-1.5 text-xs text-slate-500">
                    <span class="flex items-center gap-1"><MapPinIcon class="w-3 h-3" />{{ job.location }}</span>
                    <span v-if="job.deadline" class="flex items-center gap-1 text-amber-400/80">
                      <CalendarDaysIcon class="w-3 h-3" />Deadline: {{ formatDate(job.deadline) }}
                    </span>
                    <span class="flex items-center gap-1">
                      <ClockIcon class="w-3 h-3" />{{ timeAgo(job.created_at) }}
                    </span>
                  </div>
                  <p class="text-slate-400 text-xs mt-2 leading-relaxed">{{ truncate(job.description, 120) }}</p>
                </div>
                <div class="flex flex-col gap-2 flex-shrink-0">
                  <!-- Edit -->
                  <button @click="openEdit(job)"
                    class="p-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-xl hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    title="Edit job posting">
                    <PencilSquareIcon class="w-4 h-4" />
                  </button>
                  <!-- Delete -->
                  <button @click="confirmDelete(job)"
                    class="p-2 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl hover:bg-red-500/20 hover:border-red-500/40 transition-all duration-200 opacity-0 group-hover:opacity-100"
                    title="Remove job posting">
                    <TrashIcon class="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ══════════════════════ EDIT MODAL ══════════════════════ -->
    <Transition name="modal">
      <div v-if="editTarget" class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm px-4 py-6">
        <div class="bg-slate-900 border border-white/10 rounded-[2rem] w-full max-w-lg shadow-2xl max-h-[90vh] flex flex-col">
          <!-- Header -->
          <div class="flex items-center justify-between px-7 pt-6 pb-4 border-b border-white/[0.08] flex-shrink-0">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <PencilSquareIcon class="w-4 h-4" style="color:#3b8ef8;" />
                <span class="text-[10px] font-black tracking-widest uppercase" style="color:#3b8ef8;">Editing Job</span>
              </div>
              <h3 class="text-base font-black text-white">{{ editTarget.title }}</h3>
            </div>
            <button @click="editTarget = null" class="w-8 h-8 flex items-center justify-center bg-white/5 rounded-xl text-slate-400 hover:text-white transition-all">
              <XMarkIcon class="w-4 h-4" />
            </button>
          </div>
          <!-- Scrollable Form -->
          <div class="overflow-y-auto flex-1 px-7 py-5">
            <form id="edit-job-form" @submit.prevent="saveEdit" class="space-y-4">
              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1.5">Job Title *</label>
                <input v-model="editForm.title" type="text" required
                  class="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none transition-all"
                  style="" @focus="e=>e.target.style.borderColor='rgba(26,111,245,0.5)'" @blur="e=>e.target.style.borderColor='rgba(255,255,255,0.1)'" />
              </div>
              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1.5">Department *</label>
                <input v-model="editForm.department" type="text" required
                  class="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none transition-all"
                  @focus="e=>e.target.style.borderColor='rgba(26,111,245,0.5)'" @blur="e=>e.target.style.borderColor='rgba(255,255,255,0.1)'" />
              </div>
              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1.5">Location</label>
                <input v-model="editForm.location" type="text"
                  class="w-full h-10 bg-white/5 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none transition-all"
                  @focus="e=>e.target.style.borderColor='rgba(26,111,245,0.5)'" @blur="e=>e.target.style.borderColor='rgba(255,255,255,0.1)'" />
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <label class="block text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1.5">Type</label>
                  <select v-model="editForm.type" class="w-full h-10 bg-slate-800 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none">
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1.5">Deadline</label>
                  <input v-model="editForm.deadline" type="date" class="w-full h-10 bg-slate-800 border border-white/10 rounded-xl px-4 text-sm text-white focus:outline-none" />
                </div>
              </div>
              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1.5">Description *</label>
                <textarea v-model="editForm.description" rows="4" required
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none"
                  @focus="e=>e.target.style.borderColor='rgba(26,111,245,0.5)'" @blur="e=>e.target.style.borderColor='rgba(255,255,255,0.1)'" />
              </div>
              <div>
                <label class="block text-[10px] font-black tracking-widest uppercase text-slate-500 mb-1.5">Requirements</label>
                <textarea v-model="editForm.requirements" rows="3"
                  class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-all resize-none"
                  @focus="e=>e.target.style.borderColor='rgba(26,111,245,0.5)'" @blur="e=>e.target.style.borderColor='rgba(255,255,255,0.1)'" />
              </div>
              <div v-if="editError" class="bg-red-500/10 border border-red-500/20 text-red-400 text-xs py-2.5 px-4 rounded-xl font-semibold">
                ✗ {{ editError }}
              </div>
            </form>
          </div>
          <!-- Footer -->
          <div class="px-7 py-4 border-t border-white/[0.08] flex gap-3 flex-shrink-0">
            <button type="button" @click="editTarget = null"
              class="flex-1 h-10 bg-white/5 border border-white/10 rounded-xl text-xs font-black tracking-wider uppercase hover:bg-white/10 transition-all text-slate-400">
              Cancel
            </button>
            <button @click="saveEdit" :disabled="editLoading"
              class="flex-1 h-10 text-white rounded-xl text-xs font-black tracking-wider uppercase transition-all flex items-center justify-center gap-2 disabled:opacity-50 active:scale-95"
              style="background:linear-gradient(135deg,#1a6ff5,#1044b0);box-shadow:0 4px 16px rgba(26,111,245,0.3);">
              <span v-if="!editLoading" class="flex items-center gap-1.5"><CheckIcon class="w-4 h-4" /> Save Changes</span>
              <span v-else class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- ══════════════════════ DELETE MODAL ══════════════════════ -->
    <Transition name="modal">
      <div v-if="deleteTarget" class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
        <div class="bg-slate-800 border border-white/10 rounded-[2rem] p-8 max-w-sm w-full shadow-2xl">
          <div class="text-center">
            <div class="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <ExclamationTriangleIcon class="w-7 h-7 text-red-400" />
            </div>
            <h3 class="text-lg font-black text-white mb-2">Remove Job Posting?</h3>
            <p class="text-slate-400 text-sm mb-6">
              This will remove <strong class="text-white">{{ deleteTarget.title }}</strong> from the careers page.
            </p>
            <div class="flex gap-3">
              <button @click="deleteTarget = null"
                class="flex-1 h-10 bg-white/5 border border-white/10 rounded-xl text-xs font-black tracking-wider uppercase hover:bg-white/10 transition-all">
                Cancel
              </button>
              <button @click="deleteJob(deleteTarget.id)" :disabled="deleteLoading"
                class="flex-1 h-10 bg-red-600 hover:bg-red-500 text-white rounded-xl text-xs font-black tracking-wider uppercase transition-all flex items-center justify-center gap-2 disabled:opacity-50">
                <span v-if="!deleteLoading">Remove</span>
                <span v-else class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import {
  ShieldCheckIcon, LockClosedIcon, EyeIcon, EyeSlashIcon,
  PlusCircleIcon, PlusIcon, BriefcaseIcon, MapPinIcon,
  CalendarDaysIcon, ClockIcon, TrashIcon, ArrowRightOnRectangleIcon,
  ArrowTopRightOnSquareIcon, ArrowPathIcon, ExclamationTriangleIcon,
  PencilSquareIcon, CheckIcon, XMarkIcon
} from '@heroicons/vue/24/outline'

import {
  getStoredJobs, saveStoredJobs, addStoredJob,
  updateStoredJob, deleteStoredJob, checkStoredAuth,
  setStoredAuth, verifyHrPasswordLocal
} from '~/utils/jobsStorage'

useSeoMeta({ title: 'HR Admin — Aprati Foods', robots: 'noindex,nofollow' })

// ── Auth State ────────────────────────────────────────────────────────────────
const authenticated = ref(false)
const passwordInput = ref('')
const showPassword = ref(false)
const authLoading = ref(false)
const authError = ref('')
const attemptsWarning = ref('')
const isLockedOut = ref(false)
const lockoutCountdown = ref('')
let lockoutTimer = null

// Check existing session on page load
onMounted(async () => {
  try {
    await $fetch('/api/jobs/session')
    authenticated.value = true
    await loadJobs()
  } catch {
    if (checkStoredAuth()) {
      authenticated.value = true
      await loadJobs()
    }
  }
})

async function authenticate() {
  if (authLoading.value || isLockedOut.value) return
  authLoading.value = true
  authError.value = ''
  attemptsWarning.value = ''

  try {
    await $fetch('/api/jobs/validate', {
      method: 'POST',
      body: { password: passwordInput.value },
      credentials: 'include'
    })
    authenticated.value = true
    setStoredAuth(true)
    passwordInput.value = ''
    await loadJobs()
  } catch (err) {
    const status = err?.status || err?.statusCode || 0
    const msg = err?.data?.statusMessage || err?.statusMessage || 'Authentication failed'

    if (status === 429) {
      isLockedOut.value = true
      startLockoutCountdown(msg)
      authError.value = msg
    } else {
      // Fallback for static hosting (404, 405, or client side)
      if (verifyHrPasswordLocal(passwordInput.value)) {
        authenticated.value = true
        setStoredAuth(true)
        passwordInput.value = ''
        await loadJobs()
      } else {
        authError.value = 'Incorrect password.'
      }
    }
  } finally {
    authLoading.value = false
  }
}

function startLockoutCountdown(msg) {
  const match = msg.match(/(\d+) minute/)
  const minutes = match ? parseInt(match[1]) : 15
  let seconds = minutes * 60

  if (lockoutTimer) clearInterval(lockoutTimer)

  const update = () => {
    const m = Math.floor(seconds / 60)
    const s = seconds % 60
    lockoutCountdown.value = `${m}:${String(s).padStart(2, '0')}`
    if (seconds <= 0) {
      clearInterval(lockoutTimer)
      isLockedOut.value = false
      authError.value = ''
      lockoutCountdown.value = ''
    }
    seconds--
  }
  update()
  lockoutTimer = setInterval(update, 1000)
}

async function logout() {
  try {
    await $fetch('/api/jobs/logout', { method: 'POST', credentials: 'include' })
  } catch {}
  setStoredAuth(false)
  authenticated.value = false
  jobs.value = []
}

// ── Jobs ──────────────────────────────────────────────────────────────────────
const jobs = ref([])
const listLoading = ref(false)

async function loadJobs() {
  listLoading.value = true
  try {
    const data = await $fetch('/api/jobs', { credentials: 'include' })
    if (Array.isArray(data)) {
      jobs.value = data
      saveStoredJobs(data)
    } else {
      jobs.value = getStoredJobs()
    }
  } catch {
    jobs.value = getStoredJobs()
  } finally {
    listLoading.value = false
  }
}

// ── Post Job ──────────────────────────────────────────────────────────────────
const form = ref({
  title: '', department: '', location: 'Phnom Penh, Cambodia',
  type: 'Full-time', description: '', requirements: '', deadline: ''
})
const postLoading = ref(false)
const postSuccess = ref(false)
const postError = ref('')

async function postJob() {
  postLoading.value = true
  postSuccess.value = false
  postError.value = ''

  try {
    await $fetch('/api/jobs', {
      method: 'POST',
      body: { ...form.value },
      credentials: 'include'
    })
    postSuccess.value = true
    form.value = { title: '', department: '', location: 'Phnom Penh, Cambodia', type: 'Full-time', description: '', requirements: '', deadline: '' }
    await loadJobs()
    setTimeout(() => { postSuccess.value = false }, 4000)
  } catch (err) {
    const status = err?.status || err?.statusCode || 0
    if (status === 401) {
      authenticated.value = false
      postError.value = 'Session expired. Please log in again.'
    } else {
      // Local fallback for static hosting
      addStoredJob({ ...form.value })
      postSuccess.value = true
      form.value = { title: '', department: '', location: 'Phnom Penh, Cambodia', type: 'Full-time', description: '', requirements: '', deadline: '' }
      await loadJobs()
      setTimeout(() => { postSuccess.value = false }, 4000)
    }
  } finally {
    postLoading.value = false
  }
}

// ── Delete ─────────────────────────────────────────────────────────────────────
const deleteTarget = ref(null)
const deleteLoading = ref(false)

function confirmDelete(job) { deleteTarget.value = job }

async function deleteJob(id) {
  deleteLoading.value = true
  try {
    await $fetch(`/api/jobs/${id}`, { method: 'DELETE', credentials: 'include' })
    deleteTarget.value = null
    await loadJobs()
  } catch (err) {
    const status = err?.status || err?.statusCode || 0
    if (status === 401) {
      authenticated.value = false
    } else {
      // Local fallback for static hosting (handles 404, 405 Method Not Allowed, etc.)
      deleteStoredJob(id)
      deleteTarget.value = null
      await loadJobs()
    }
  } finally {
    deleteLoading.value = false
  }
}

// ── Edit ──────────────────────────────────────────────────────────────────────
const editTarget = ref(null)
const editLoading = ref(false)
const editError = ref('')
const editForm = ref({
  title: '', department: '', location: '', type: 'Full-time',
  description: '', requirements: '', deadline: ''
})

function openEdit(job) {
  editTarget.value = job
  editForm.value = {
    title: job.title || '',
    department: job.department || '',
    location: job.location || 'Phnom Penh, Cambodia',
    type: job.type || 'Full-time',
    description: job.description || '',
    requirements: job.requirements || '',
    deadline: job.deadline || ''
  }
  editError.value = ''
}

async function saveEdit() {
  if (!editTarget.value) return
  editLoading.value = true
  editError.value = ''
  try {
    await $fetch(`/api/jobs/${editTarget.value.id}`, {
      method: 'PUT',
      body: { ...editForm.value },
      credentials: 'include'
    })
    editTarget.value = null
    await loadJobs()
  } catch (err) {
    const status = err?.status || err?.statusCode || 0
    if (status === 401) {
      authenticated.value = false
    } else {
      // Local fallback for static hosting
      updateStoredJob(editTarget.value.id, { ...editForm.value })
      editTarget.value = null
      await loadJobs()
    }
  } finally {
    editLoading.value = false
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────
const typeColorMap = {
  'Full-time': 'bg-emerald-900/50 text-emerald-400',
  'Part-time': 'bg-blue-900/50 text-blue-400',
  'Contract': 'bg-purple-900/50 text-purple-400',
  'Internship': 'bg-orange-900/50 text-orange-400'
}

function truncate(text, max) { return !text ? '' : text.length > max ? text.slice(0, max) + '…' : text }
function formatDate(d) { return d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : '' }
function timeAgo(d) {
  if (!d) return ''
  const diff = Math.floor((Date.now() - new Date(d)) / 86400000)
  return diff === 0 ? 'today' : diff === 1 ? 'yesterday' : diff < 30 ? `${diff} days ago` : `${Math.floor(diff / 30)} months ago`
}

onUnmounted(() => { if (lockoutTimer) clearInterval(lockoutTimer) })
</script>

<style scoped>
.animate-spin { animation: spin 1s linear infinite; }
.animate-fade-in { animation: fadeIn 0.3s ease-in; }
@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
@keyframes fadeIn { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }

/* Modal transition */
.modal-enter-active, .modal-leave-active { transition: all 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; transform: scale(0.95); }
</style>
