import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/research-areas">Research Areas</a>
              </li>
              <li>
                <a href="/iaec">CBSE</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-of-service">Terms of Service</a>
              </li>
              <li>
                <a href="/site-map">Site Map</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" aria-label="LinkedIn">
                Linkedin
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} The Hope School. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
