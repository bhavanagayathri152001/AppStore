import './index.css'

const TabItem = props => {
  const {tabsList, updateTabId, isActive} = props
  const {displayText, tabId} = tabsList
  const onClickTab = () => {
    updateTabId(tabId)
  }
  const isActiveClassName = isActive ? 'active-button' : ''
  return (
    <li>
      <button
        type="button"
        className={`button ${isActiveClassName}`}
        onClick={onClickTab}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
