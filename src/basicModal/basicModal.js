




/*


modal button to show the modals
<label onClick={() => handleModal(appointmentOption)} disabled={slots.length === 0} htmlFor='booking-modal' className='btn'>Book Appointment</label>

modal body

<input type='checkbox' id='booking-modal' className='modal-toggle'></input>
<div className='modal'>
    <div className='modal-box relative'>
        <label htmlFor='booking-modal' className='btn btn-sm btn-circle absolute right-2 btn-accent top-2'>X</label>
        <h3 className='text-lg font-bold'>{name}</h3>
        <p className='py-4'>hello</p>
        <form onSubmit={handleSubmit} className='my-3'>
            <input type="text" value={date} readOnly className="input input-bordered w-full mb-4" />
            <select name='slot' className="select select-bordered w-full mb-2">
                <option disabled selected>Select Appointment Time</option>
                {
                    slots?.map(slot => <option key={slot}>{slot}</option>)
                }
            </select>
            <input name='name' type="text" placeholder="full name" className="input input-bordered w-full mb-4" />
            <input name='email' type="email" placeholder="email" className="input input-bordered w-full mb-4" />
            <input name='phone' type="text" placeholder="phone" className="input input-bordered w-full mb-4" />
            <div>
                <input type="submit" value="Book Appointment" className='btn btn-accent w-full text-white' />
            </div>
        </form>
    </div>
</div>


*/



/**
 

<label htmlFor="my-modal" class="btn modal-button">open modal</label>

<input type="checkbox" id="modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
     <h1> Yooo </h1>
     <div className="modal-action">
      <label htmlFor="my-modal" className="btn">Yay!</label>
     </div>
  </div>
</div>
 
 */