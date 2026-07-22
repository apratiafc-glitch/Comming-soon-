<template>
  <div class="min-h-screen flex items-center justify-center bg-dark text-slate-400 font-sans p-6 text-center">
    <div class="max-w-md space-y-4">
      <h1 class="text-7xl font-black text-white">404</h1>
      <h2 class="text-xl font-bold text-slate-200">Page Not Found</h2>
      <p class="text-sm text-slate-500">The page you are looking for does not exist or has been moved.</p>
      <div class="pt-4">
        <NuxtLink to="/" class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-black tracking-widest uppercase text-white" style="background:linear-gradient(135deg,#1a6ff5,#1044b0);">
          Go to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
useSeoMeta({ title: '404 - Page Not Found', robots: 'noindex,nofollow' })
</script>
