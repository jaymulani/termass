
import React, { useState } from 'react';
import RegistrationForm from './RegistrationForm';

const bookEventsData = [
  {
    id: 1,
    title: 'Book Club Meeting',
    description: 'Join our monthly book club meeting to discuss the latest literary masterpiece. For registering this event, click on the button below and fill in your details.',
  },
  {
    id: 2,
    title: 'Library Reading Session',
    description: 'Participate in a reading session at the local library. Bring your favorite book and share the joy of reading with fellow book lovers. For registering this event, click on the button below and fill in your details.',
  },
  {
    id: 3,
    title: 'Literary Symposium',
    description: 'Immerse yourself in a captivating literary symposium, where intellects converge to explore profound literary works. To register for this event, simply click the button below and share your passion for literature.',
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

  const styles = {
    // Define your styles here
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

  return (
    <>
      <div style={styles.container}>
        <h1>The Bookworm's Retreat</h1>
      </div>
      <div>
        <p style={styles.description}>
          Welcome to the The Bookworm's Retreat. We are passionate about literature and aim to foster a love for reading in our community. Explore our upcoming book-related events and join us in celebrating the world of books.
        </p>
      </div>
      <div style={styles.gridContainer}>
        {bookEventsData.map((event) => (
          <div key={event.id} style={styles.card}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
      <h3>For book registration, click here: </h3>
      <div style={styles.buttonContainer}>
        <button style={styles.registerButton} onClick={() => handleRegisterButtonClick("showForm")}>
          Register
        </button>
      </div>
      {selectedEvent === "showForm" && <RegistrationForm handleClose={handleCloseRegistrationForm} />}
    </>
  );
};

export default Home;
