import { validateSession } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'hr_session')

  if (!token || !validateSession(token)) {
    throw createError({ statusCode: 401, statusMessage: 'No valid session' })
  }

  return { ok: true, authenticated: true }
})
