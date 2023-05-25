import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {imageUrl, appName} = appsList
  return (
    <li className="li-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-heading">{appName}</p>
    </li>
  )
}
export default AppItem
