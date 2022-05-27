import { useState } from 'react';

const Contact = () => {
  // storing the values for each here
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // lets set our handle that will have our value stored in it
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <div className='contactInfo'>
          <h1 style={{ marginBottom: '50px' }}>Contact</h1>
          <form
            style={{ display: 'flex', flexDirection: 'column', width: '200px' }}
          >
            <label htmlFor=''>First Name</label>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={handleFirstName}
            />
            <label htmlFor=''>Last Name</label>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={handleLastName}
            />
            <label htmlFor=''>Email</label>
            <input
              type='text'
              name='email'
              value={email}
              onChange={handleEmail}
            />
            <label htmlFor=''>Message</label>
            <input
              type='text'
              name='message'
              value={message}
              onChange={handleMessage}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
