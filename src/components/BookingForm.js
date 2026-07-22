import { useState } from 'react'

const BookingForm = ({availableTimes}) => {

  const [formFields, setFormFields] =  useState({
    date:"",
    time:"",
    guests:"",
    occasion:""
  })

  return (
    <article class="form">
      <h1 style={{textAlign:'center',fontSize:'36px'}}>Little lemon Booking Form</h1>
      <form >
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" name="date" value={formFields.date} onChange={e=>setFormFields({...formFields, date:e.target.value})}/>
      <label htmlFor="res-time" >Choose time</label>
      <select id="res-time " name="time" value={formFields.time} onChange={e=>setFormFields({...formFields, time:e.target.value})}>
          {availableTimes.map(a => (
            <option key={a}>{a}</option>))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" name="guests" value={formFields.guests} onChange={e=>setFormFields({...formFields, guests:e.target.value})}/>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" value={formFields.occasion} onChange={e=>setFormFields({...formFields, occasion:e.target.value})}>
          <option disabled>Choose an option</option>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation"/>
      </form>
    </article>
  )
}

export default BookingForm