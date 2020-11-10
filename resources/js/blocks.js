import domReady from '@wordpress/dom-ready'
import { __ } from '@wordpress/i18n'

import './extensions/disable-block-types'
import './extensions/disable-welcome-guide'
import './extensions/disable-fullscreen'

import { filterCategories } from './extensions/filter-categories'

import {
  registerBlockStyles,
  unregisterBlockStyles,
} from './hooks/block-styles'

filterCategories('formatting', ['conversion', 'embed', 'widgets'])

/**
 * Document Ready
 * @see https://www.npmjs.com/package/@wordpress/dom-ready
 */
domReady(() => {
  /**
   * Unregister existing block styles.
   */
  unregisterBlockStyles([
    {
      block: 'core/button',
      styles: ['outline', 'fill'],
    },
    {
      block: 'core/image',
      styles: ['circle-mask'],
    },
    {
      block: 'core/pullquote',
      styles: ['solid-color'],
    },
    {
      block: 'core/table',
      styles: ['stripes'],
    },
    {
      block: 'core/quote',
      styles: ['large'],
    },
  ])

  /**
   * Register new block styles.
   */
  registerBlockStyles([
    {
      block: 'core/button',
      styles: [
        {
          name: 'fill',
          label: __('Solid', 'gutentweaks'),
        },
        {
          name: 'outline',
          label: __('Outline', 'gutentweaks'),
        },
      ],
    },
    {
      block: 'core/list',
      styles: [
        {
          name: 'check',
          label: __('Check', 'gutentweaks'),
        },
        {
          name: 'times',
          label: __('Times', 'gutentweaks'),
        },
        {
          name: 'chevron-r',
          label: __('Chevron (Right)', 'gutentweaks'),
        },
        {
          name: 'caret-r',
          label: __('Caret (Right)', 'gutentweaks'),
        },
        {
          name: 'arrow-r',
          label: __('Arrow (Right)', 'gutentweaks'),
        },
        {
          name: 'numeric',
          label: __('Numeric', 'gutentweaks'),
        },
      ],
    },
  ])
})
