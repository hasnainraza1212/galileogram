import './index.css'
import PhotoGallery from './comps/PhotoGallery'
import Title from './comps/Title'
import UploadForms from './comps/UploadForms'
import Footer from './comps/Footer'
// import ProgressBar from './comps/ProgressBar'
import UploadFile from './comps/UploadFile'
function App() {
 

  return (
    <div className='app'>
    <Title />
    <UploadForms />
    <PhotoGallery />
    <Footer />
    <UploadFile />
    </div>
  )
}

export default App
