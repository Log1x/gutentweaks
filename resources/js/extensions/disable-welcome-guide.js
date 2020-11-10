import { registerPlugin } from '@wordpress/plugins'
import { select, dispatch } from '@wordpress/data'

const disableWelcomeGuide = registerPlugin('disable-welcome-guide', {
  render: () => {
    select('core/edit-post').isFeatureActive('welcomeGuide') &&
      dispatch('core/edit-post').toggleFeature('welcomeGuide')

    return null
  },
})

export default disableWelcomeGuide
