import { addFilter } from '@wordpress/hooks'

const filterCategories = (newCategory, exceptions = []) => {
  addFilter('blocks.registerBlockType', 'blocks/inserter', props => {
    props.category = exceptions.includes(props.category)
      ? props.category
      : (props.category = newCategory)

    return props
  })
}

export { filterCategories }
