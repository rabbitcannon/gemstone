const root = '/'
const baseAccount = '/account'

export const RoutePaths = {
  root: root,
  account: {
    login: '/login',
    register: `${baseAccount}/register`
  },
  dashboard: {
    root: '/dashboard'
  },
  payroll: {
    root: '/payroll'
  },
  test: {
    testRoute: '/test'
  }
}
