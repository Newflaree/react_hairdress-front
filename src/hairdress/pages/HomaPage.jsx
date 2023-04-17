import { MainLayout } from '../layout';
// Components
import {
  HomeAbout,
  HomeGallery,
  HomeProducts,
  HomeSlider
} from '../components';


export const HomePage = () => {
  return (
    <MainLayout>
      { /* SlideShow */ }
      <div className='row pb-5'>
        <HomeSlider />
      </div>
      { /* HomeAbout */ }
      <div className='row py-5'>
        <HomeAbout />
      </div>
      { /* HomeProducts */ }
      <div className='row'>
        <HomeProducts />
      </div>
      { /* HomeGallery */ }
      <div className='row m-0'>
        <HomeGallery />
      </div>
    </MainLayout>
  );
}
