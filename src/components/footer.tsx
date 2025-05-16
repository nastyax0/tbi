export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 py-10 px-6 text-sm mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
        {/* Registered Address */}
        <div>
          <h4 className="text-xl font-bold mb-4">Registered Address</h4>
          <p className="text-base leading-relaxed">
            C/o. Yeshwantrao Chavan College of Engineering,
            <br />
            Hingna Road, Wanadongri, Nagpur,
            <br />
            Maharashtra – 441110
          </p>
          <p className="mt-4">
            <strong>Email:</strong> yccetbif@ycce.edu
          </p>
          <p>
            <strong>Mobile:</strong> 9552555061 / 8208717292
          </p>
        </div>

        {/* Embedded Map */}
        <div>
          <h4 className="text-xl font-bold mb-4">Find Us</h4>
          <div className="w-full h-64 rounded overflow-hidden shadow-md">
            <iframe
              title="Wanadongri Location"
              src="https://www.google.com/maps?q=3XWH%2B3C+Wanadongri,+Maharashtra&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-bold mb-4 md:ml-12">Quick Links</h4>
          <ul className="space-y-3 text-base md:ml-13">
            <li>
              <a href="/privacy-policy" className="hover:underline block">
                YCCE Innovation & Startup Policy
              </a>
            </li>
            <li>
              <a href="/terms-of-use" className="hover:underline block">
                National Innovation & Startup Policy
              </a>
            </li>
            <li>
              <a href="/refund-policy" className="hover:underline block">
                Maharashtra Innovation & Startup Policy
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="hover:underline block">
                Incubation Agreement
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline block">
                Fabrication Laboratory
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-gray-600 text-sm sm:ml-2">
        © {new Date().getFullYear()} TBI@FOUNDATION. All rights reserved.
      </div>
    </footer>
  );
}
