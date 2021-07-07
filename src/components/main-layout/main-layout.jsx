import MainHeader from './main-header'
import MainBody from './main-body'
import MainFooter from './main-footer'

function MainLayout() {
  return (
    <div className="main-layout">
      <div className="main-layout__header">
        <MainHeader />
      </div>
      <div className="main-layout__body">
        <MainBody />
      </div>
      <div className="main-layout__footer">
        <MainFooter />
      </div>
    </div>
  )
}

export default MainLayout
