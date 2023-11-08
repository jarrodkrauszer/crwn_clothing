import CategoryItem from '../category_item/CategoryItem'

import './directory.scss'

function Directory({ categories }) {
  return (
    <div className="directory-container">
      {categories.map((category, i) => (
        <CategoryItem key={i} category={category} />
      ))}

    </div>
  )
}

export default Directory