import { destroySession } from '../../utils/auth'

export default defineEventHandler(async (event) => {
  const token = getCookie(event, 'hr_session')

  if (token) {
    destroySession(token)
  }

  // Clear the cookie on the client
  deleteCookie(event, 'hr_session', {
    httpOnly: true,
    sameSite: 'strict',
    path: '/'
  })

  return { ok: true, message: 'Logged out successfully' }
})
