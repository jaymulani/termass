import React, { useState } from "react";

const RegistrationForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    age: "",
    contactNumber: "",
    selectedEvent: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log(formData);

    const lambdaEndpoint = process.env.REACT_APP_API_ANDPOINT;
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      };
      

    try {
      const response = await fetch(lambdaEndpoint, requestOptions);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      window.alert('Registration successful! you will get registartion confirmation mail on your registered email with event details');
      const data = await response.json();
      console.log('Lambda response:', data);
    } catch (error) {
      console.error('Error sending data to Lambda:', error);
    }

    handleClose();
  };

  return (
    <div style={styles.modal}>
      <div style={styles.modalContent}>
        <span style={styles.closeButton} onClick={handleClose}>
          &times;
        </span>
        <h2>Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <table>
            <div>
              <tr>
                <td>
                  <label>Enter your first name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </div>
            <div>
              <tr>
                <td>
                  <label>Enter your last name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </div>
            <div>
              <tr>
                <td>
                  <label>Enter your email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </div>
            <div>
              <tr>
                <td>
                  <label>Enter your address:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </div>
            <div>
              <tr>
                <td>
                  <label>Enter your age:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </div>
            <div>
              <tr>
                <td>
                  <label>Enter your contact Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="contactNumber"
                    placeholder="Contact Number"
                    value={formData.contactNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>
            </div>
            <div>
              <tr>
                <td>
                  <label>Select Event:</label>
                </td>
                <td>
                  <select
                    name="selectedEvent"
                    value={formData.selectedEvent}
                    onChange={handleChange}
                  >
                    <option value="">Select an event</option>
                    <option value="Senior Care Day">Senior Care Day</option>
                    <option value="Childrens Art Workshop">
                      Children's Art Workshop
                    </option>
                    <option value="Fundraising Fun Run">
                      Fundraising Fun Run
                    </option>
                    <option value="Health and Wellness Fair">
                      Health and Wellness Fair
                    </option>
                  </select>
                </td>
              </tr>
            </div>
          </table>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    display: "flex",
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#f0f0f0",
    padding: "1rem",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "400px",
  },
  closeButton: {
    color: "black",
    float: "right",
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default RegistrationForm;
