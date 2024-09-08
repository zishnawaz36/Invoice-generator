function Date({ invoiceDate, invoiceNumber, dueDate }) {
    return (
      <article className='my-5 flex items-end justify-end'>
        <ul>
          <li><span className='font-bold'>Invoice Date: {invoiceDate}</span></li>
          <li><span className='font-bold'>Invoice Number: {invoiceNumber}</span></li>
          <li><span className='font-bold'>Due Date: {dueDate}</span></li>
        </ul>
      </article>
    );
  }
  
  export default Date;
  