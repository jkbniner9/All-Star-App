import React, { useState } from 'react';

function SessionSettingsForm() {
  const [rosterSize, setRosterSize] = useState('');
  const [numCoaches, setNumCoaches] = useState('');
  const [ageCutoff, setAgeCutoff] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Form data:', {
      rosterSize,
      numCoaches,
      ageCutoff,
      accessCode,
    });
    // In a real application, you would send this data to your backend
  };

  return (
    <div>
      <h2>Session Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rosterSize">Roster Size:</label>
          <input
            type="number"
            id="rosterSize"
            name="rosterSize"
            value={rosterSize}
            onChange={(e) => setRosterSize(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numCoaches">Number of Participating Coaches:</label>
          <input
            type="number"
            id="numCoaches"
            name="numCoaches"
            value={numCoaches}
            onChange={(e) => setNumCoaches(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="ageCutoff">Age Cutoff Date:</label>
          <input
            type="date"
            id="ageCutoff"
            name="ageCutoff"
            value={ageCutoff}
            onChange={(e) => setAgeCutoff(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="accessCode">Access Code (6-digit numeric):</label>
          <input
            type="text"
            id="accessCode"
            name="accessCode"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
          />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default SessionSettingsForm;
