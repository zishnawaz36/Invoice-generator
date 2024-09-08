function Clientdetails({ clientName, clientAddress }) {
    return (
      <section className='mt-5'>
        <h2 className='font-bold text-xl '>Client name:{clientName}</h2>
        <p>Client address:{clientAddress}</p>
      </section>
    );
  }
  
  export default Clientdetails;
  