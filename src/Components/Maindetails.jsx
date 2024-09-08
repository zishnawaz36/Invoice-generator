function Maindetails({ name, address }) {
    return (
      <section className='flex flex-col items-end justify-end mb-4'>
        <h2 className='font-bold text-xl uppercase text-gray-700'>Name: {name}</h2>
        <p className='text-gray-600'>Address: {address}</p>
      </section>
    );
  }
  
  export default Maindetails;
  