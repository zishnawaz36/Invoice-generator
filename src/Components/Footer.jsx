function Footer({ name, email, phone, bankName, bankAccountNumber, website }) {
    return (
      <>
        {/* Footer */}
        <footer className="bg-gray-100 p-6 mt-10 rounded-lg shadow-md">
          <ul className="flex flex-wrap items-center justify-center space-x-6 space-y-2 text-gray-700">
            <li>
              <span className="font-bold">Your Name:</span> {name}
            </li>
            <li>
              <span className="font-bold">Your Email:</span> {email}
            </li>
            <li>
              <span className="font-bold">Your Phone:</span> {phone}
            </li>
            <li>
              <span className="font-bold">Your Bank Name:</span> {bankName}
            </li>
            <li>
              <span className="font-bold">Account Holder:</span> {name}
            </li>
            <li>
              <span className="font-bold">Account Number:</span> {bankAccountNumber}
            </li>
            <li>
              <span className="font-bold">Website:</span>{" "}
              <a href={website} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {website}
              </a>
            </li>
          </ul>
        </footer>
      </>
    );
  }
  
  export default Footer;
  