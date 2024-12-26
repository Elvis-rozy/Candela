import Footer from '../Components/Home/footer'
import Header from '../Components/Home/header'

const MainLayout=({children, links})=> {

  return (
    <div>
      <Header links={links}/>
      <div>{children}</div>
      <Footer/>
    </div>
  )
}
export default MainLayout