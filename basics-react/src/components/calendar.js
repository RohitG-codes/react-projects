import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
  // State to manage booked dates
  const [bookedDates, setBookedDates] = useState([]);

  // Function to handle slot booking
  const handleSlotBooking = (date) => {
    // Check if the date is already booked
    if (bookedDates.includes(date.toISOString().split('T')[0])) {
      alert('This slot is already booked. Please choose another date.');
    } else {
      // Book the slot by adding the date to the bookedDates array
      setBookedDates([...bookedDates, date.toISOString().split('T')[0]]);
    }
  };

  // Function to check if a date is booked
  const isDateBooked = (date) => {
    return bookedDates.includes(date.toISOString().split('T')[0]);
  };

  return (
    <div>
      <h2>Booking Calendar</h2>
      <p>Select a date to book a slot:</p>
      <DatePicker
        onChange={(date) => handleSlotBooking(date)}
        inline
        dayClassName={(date) => (isDateBooked(date) ? 'booked' : null)}
      />

      {/* Display the booked dates */}
      <div>
        <h3>Booked Dates</h3>
        {bookedDates.map((date) => (
          <div key={date} style={{ color: 'red' }}>
            {date}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
