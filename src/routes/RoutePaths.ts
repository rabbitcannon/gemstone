const root = '/'
const baseAccount = '/account'

export const RoutePaths = {
  root: root,
  account: {
    login: '/Login',
    register: `${baseAccount}/register`,
  },
  dashboard: {
    root: '/dashboard',
  },
  test: {
    testRoute: '/test',
  },
}
