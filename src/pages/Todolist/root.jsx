import renderRoutes from '../../routes/renderRoutes'


export const Root = ({ route }) => (
  <div>
    <h1>Root</h1>
    <h2>{process.env.REACT_APP_BASE_URL}</h2>
    {/* child routes won't render without this */}
    {renderRoutes(route.routes)}
  </div>
)
