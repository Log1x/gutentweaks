import { registerPlugin } from '@wordpress/plugins'
import { select, dispatch } from '@wordpress/data'

const disableFullscreen = registerPlugin('disable-fullscreen', {
  render: () => {
    select('core/edit-post').isFeatureActive('fullscreenMode') &&
      dispatch('core/edit-post').toggleFeature('fullscreenMode')

    return null
  },
})

export default disableFullscreen
