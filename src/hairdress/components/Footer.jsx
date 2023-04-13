export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='text-center p-5'>
      <p>Copyright &copy; { currentYear } Todos los derechos reservados | Creado por <a href="#" className='newflare-brand' target='_blank'>Newflare</a></p>
    </footer>
  );
}
