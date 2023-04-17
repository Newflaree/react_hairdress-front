import { aboutInfo } from '../../test-data';

export const HomeAbout = () => {
  return (
    <>
      <h3 className='text-center my-3 custom-brand-letter'>¿Quienes Somos?</h3>

      <nav>
        <div className="nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
          <button className="nav-link active custom-text-pink" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Visión</button>
          <button className="nav-link custom-text-pink" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Misión</button>
          <button className="nav-link custom-text-pink" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Sobre mi</button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div className="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
          { aboutInfo.vision }
        </div>
        <div className="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
          { aboutInfo.mission }
        </div>
        <div className="tab-pane fade p-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">
          { aboutInfo.about }
        </div>
      </div>
    </>
  );
}
