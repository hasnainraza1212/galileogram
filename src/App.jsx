import './index.css'
import PhotoGallery from './comps/PhotoGallery'
import Title from './comps/Title'
import UploadForms from './comps/UploadForms'
import Footer from './comps/Footer'
import ProgressBar from './comps/ProgressBar'

function App() {
 

  return (
    <div className='app'>
    <Title />
    <UploadForms />
    <PhotoGallery />
    <Footer />
    </div>
  )
}

export default App
