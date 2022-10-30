import React from 'react';


function Footer(){

  // ----------------------------------------------------------------- //
  // Define any constants
  // ----------------------------------------------------------------- //

  const authorName = 'Raeesa Parker';

  const newDate = new Date;

  const currentYear = newDate.getFullYear();

  const hrefAddress="https://raeesaparker.github.io/portfolio/"



  // ----------------------------------------------------------------- //
  // Define the return
  // ----------------------------------------------------------------- //

  return (
    <div>
    <footer className="footer mt-auto py-3 ">
      <div className="container">
        <a href={hrefAddress} target="__blank">&copy; {authorName} {currentYear}</a>
      </div>
    </footer>
      </div>
   )
}

export default Footer;
