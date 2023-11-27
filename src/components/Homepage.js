
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';
const eventsData = [
  {
    id: 1,
    title: 'Senior Care Day',
    description: 'Spend time with the elderly, engage in fun activities, and bring smiles to their faces. For registering this event, click on below button and fill the details',
  },
  {
    id: 2,
    title: 'Childrens Art Workshop',
    description: 'Assist in organizing an art workshop for underprivileged children and inspire their creativity.For registering this event, click on below button and fill the details',
  },
  {
    id: 3,
    title: 'Fundraising Fun Run',
    description: 'Participate in a charity run to raise funds for a noble cause.For registering this event, click on below button and fill the details',
  },
  {
    id: 4,
    title: 'Health and Wellness Fair',
    description: 'Be part of a fair promoting healthy living and well-being in the community.For registering this event, click on below button and fill the details',
  }, 
];


const Home = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterButtonClick = (eventId) => {
    setSelectedEvent(eventId);
  };

  const handleCloseRegistrationForm = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div style={styles.container}>
        <h1>Heartwarming Horizons Foundation</h1>
      </div>
      <div>
        <p style={styles.description}>
          Welcome to the Heartwarming Horizons Foundation. We are a non-profit organization dedicated to making a positive impact in our community. Through our various events and initiatives, we aim to bring joy, support, and opportunities to those in need. Please browse through our upcoming events and join us in making a difference.
        </p>
      </div>
      <div style={styles.gridContainer}>
        {eventsData.map((event) => (
          <div key={event.id} style={styles.card}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      <h3>For volunteer registartion click here: </h3>  
      <div style={styles.buttonContainer}>
        
      <button style={styles.registerButton} onClick={() => handleRegisterButtonClick("showForm")}>
                Register
              </button>

      </div>
      {selectedEvent === "showForm" && <RegistrationForm handleClose={handleCloseRegistrationForm} />}
    </>
  );
};

const styles = {
  container: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(to right, #333, #444)',
  },
  description: {
    margin: '1rem 0',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    padding: '1rem',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: '1rem',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: "20px",
  },
  registerButton: {
    fontSize: "1.2rem",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    outline: "none",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
};

export default Home;