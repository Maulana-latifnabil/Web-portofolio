import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-mode flex justify-center items-center">
      <p className="text-xs text-center text-dark-content dark:text-light-content">
        Copyright{" "}
        <a className="font-medium" target="_blank" rel="noreferrer noopener">
          &copy; 2024
        </a>{" "}
        By
        <span className="text-gradient font-medium"> Maulana</span>
        <span className="text-gradient font-medium"> Latifnabil</span>
      </p>
    </footer>
  );
}
export default Footer;
 