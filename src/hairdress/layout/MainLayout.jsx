import {
  Footer,
  Navbar,
  Title
} from "../components/ui";

export const MainLayout = ({ children, title }) => {
  return (
    <div>
      <Navbar />

      <div className='container pt-5'>
        <section className='py-4 animate__animated animate__fadeIn animate__faster m-0 p-0'>
          <div className='row'>
            <Title title={ title } />
          </div>

          { children }
        </section>

        <Footer />
      </div>
    </div>
  );
}
