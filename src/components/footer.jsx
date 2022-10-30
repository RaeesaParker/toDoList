import React from 'react';


function Footer(){

  // ----------------------------------------------------------------- //
  // Define any constants
  // ----------------------------------------------------------------- //

  const authorName = 'Raeesa Parker';

  const newDate = new Date;

  const currentYear = newDate.getFullYear();



  // ----------------------------------------------------------------- //
  // Define the return
  // ----------------------------------------------------------------- //

  return (
    <div>
    <footer className="footer mt-auto py-3 ">
      <div className="container">
        <p>&copy; {authorName} {currentYear}</p>
      </div>
    </footer>
      </div>
   )
}

export default Footer;