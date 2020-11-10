import '@wordpress/edit-post'
import { registerBlockStyle, unregisterBlockStyle } from '@wordpress/blocks'

/**
 * Register specified styles.
 *
 * @param  {object} styles
 * @return {void}
 */
const registerBlockStyles = styles => {
  styles.forEach(({ block, styles }) =>
    styles.forEach(style => registerBlockStyle(block, style))
  )
}

/**
 * Unregister specified styles.
 *
 * @param  {object} styles
 * @return {void}
 */
const unregisterBlockStyles = styles => {
  styles.forEach(({ block, styles }) =>
    styles.forEach(style => unregisterBlockStyle(block, style))
  )
}

export { registerBlockStyles, unregisterBlockStyles }
