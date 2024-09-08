import Clientdetails from './Components/Clientdetails';
import Footer from './Components/Footer';
import Maindetails from './Components/Maindetails';
import Notes from './Components/Notes';
import Date from './Components/Dates';
import Table from './Components/Table';
import Header from './Components/Header';
import './Components/Style/App.css';
import { useState } from 'react';

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bankName, setBankName] = useState('');
  const [bankAccountNumber, setBankAccountNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [invoiceDate, setInvoiceDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notes, setNotes] = useState('');

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className='m-5 p-5 lg:max-w-xl lg:mx-auto bg-white rounded shadow'>
      {showInvoice ? (
        <div>
          <Header handlePrint={handlePrint} />
          <Maindetails name={name} address={address} />
          <Clientdetails clientName={clientName} clientAddress={clientAddress} />
          <Date invoiceDate={invoiceDate} invoiceNumber={invoiceNumber} dueDate={dueDate} />
          <Table />
          <Notes notes={notes} />
          <Footer
            bankName={bankName}
            bankAccountNumber={bankAccountNumber}
            website={website}
          />
          <button
            onClick={() => setShowInvoice(false)}
            className='bg-blue-500 mt-5 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300'
          >
            Edit Information
          </button>
        </div>
      ) : (
        <div className='flex flex-col justify-center space-y-4'>
          <label htmlFor='name' className='font-semibold'>Enter your name</label>
          <input
            type='text'
            id='name'
            placeholder='Enter your name'
            className='border-2 border-gray-300 rounded p-2'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor='address' className='font-semibold'>Enter your address</label>
          <input
            type='text'
            id='address'
            placeholder='Enter your address'
            className='border-2 border-gray-300 rounded p-2'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <label htmlFor='email' className='font-semibold'>Enter your email</label>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            className='border-2 border-gray-300 rounded p-2'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor='phone' className='font-semibold'>Enter your phone number</label>
          <input
            type='number'
            id='phone'
            placeholder='Enter your phone number'
            className='border-2 border-gray-300 rounded p-2'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <label htmlFor='clientName' className='font-semibold'>Enter your client's name</label>
          <input
            type='text'
            id='clientName'
            placeholder="Enter your client's name"
            className='border-2 border-gray-300 rounded p-2'
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

          <label htmlFor='clientAddress' className='font-semibold'>Enter your client's address</label>
          <input
            type='text'
            id='clientAddress'
            placeholder="Enter your client's address"
            className='border-2 border-gray-300 rounded p-2'
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />

          <label htmlFor='invoiceNumber' className='font-semibold'>Enter the invoice number</label>
          <input
            type='text'
            id='invoiceNumber'
            placeholder='Enter the invoice number'
            className='border-2 border-gray-300 rounded p-2'
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />

          <label htmlFor='invoiceDate' className='font-semibold'>Enter the invoice date</label>
          <input
            type='date'
            id='invoiceDate'
            className='border-2 border-gray-300 rounded p-2'
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />

          <label htmlFor='dueDate' className='font-semibold'>Enter the due date</label>
          <input
            type='date'
            id='dueDate'
            className='border-2 border-gray-300 rounded p-2'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          <label htmlFor='notes' className='font-semibold'>Enter any notes</label>
          <textarea
            id='notes'
            placeholder='Enter any notes'
            className='border-2 border-gray-300 rounded p-2'
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

          <label htmlFor='bankName' className='font-semibold'>Enter your bank name</label>
          <input
            type='text'
            id='bankName'
            placeholder='Enter your bank name'
            className='border-2 border-gray-300 rounded p-2'
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
          />

          <label htmlFor='bankAccountNumber' className='font-semibold'>Enter your bank account number</label>
          <input
            type='text'
            id='bankAccountNumber'
            placeholder='Enter your bank account number'
            className='border-2 border-gray-300 rounded p-2'
            value={bankAccountNumber}
            onChange={(e) => setBankAccountNumber(e.target.value)}
          />

          <label htmlFor='website' className='font-semibold'>Enter your website</label>
          <input
            type='text'
            id='website'
            placeholder='Enter your website'
            className='border-2 border-gray-300 rounded p-2'
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />

          <button
            onClick={() => setShowInvoice(true)}
            className='bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300 mt-4'
          >
            Preview Invoice
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
