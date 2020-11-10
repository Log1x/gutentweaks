import domReady from '@wordpress/dom-ready'
import { unregisterBlockType, getBlockTypes } from '@wordpress/blocks'

const blacklist = [
  'core-embed/',
  'editorskit/',
  'page-generator-pro/',
  'rank-math/howto-block',
  'yoast-seo/related-links',
  'yoast-seo/subpages',
  'yoast-seo/siblings',
  'core/audio',
  'core/archive',
  'core/calendar',
  'core/categories',
  'core/file',
  'core/gallery',
  'core/latest-comments',
  'core/latest-posts',
  'core/legacy-widget',
  'core/widget-area',
  'core/embed',
  'core/more',
  'core/nextpage',
  'core/rss',
  'core/search',
  'core/social-link',
  'core/tag-cloud',
  'core/verse',
  'core/navigation',
]

domReady(() => {
  getBlockTypes().forEach(
    block =>
      blacklist.some(x => block.name.includes(x)) &&
      unregisterBlockType(block.name)
  )
})
