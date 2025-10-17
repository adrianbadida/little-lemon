import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange = (e) => {
        setDate(e);
        props.dispatch(e);
    }
    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date:</label>
                            <input
                                id="book-date"
                                type="date"
                                required
                                value={date}
                                onChange={(e) => handleChange(e.target.value)}
                                />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                           <select name="time" value={time} required id="book-time" onChange={(e) => setTime(e.target.value)}>
                                <option value="">Choose a Time</option>
                                {
                                    props.availableTime.availableTime.map(availableTime => {return <option key={availableTime}>{availableTime}</option>})
                                }
                           </select>
                        </div>
                        <div>
                            <label htmlFor="book-guest">Choose number of Guests:</label>
                            <input type="number" required id="book-guests" min="1" value={guest} onChange={(e) => setGuest(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Choose Occasion:</label>
                            <select name="occasion" required id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Date">Date</option>
                                <option value="Business">Business</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input aria-label='On Click' type="submit" value={"Submit the Reservation"}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;