export default [
  {
    path: '/settings-page',
    name: 'settings-page',
    component: require('components/SettingsPageView')
  },
  {
    path: '/',
    name: 'landing-page',
    component: require('components/LandingPageView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
