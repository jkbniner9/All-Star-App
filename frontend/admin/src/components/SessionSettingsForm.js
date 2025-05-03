import React, { useState } from 'react';

function SessionSettingsForm() {
  const [rosterSize, setRosterSize] = useState('');
  const [numCoaches, setNumCoaches] = useState('');
  const [ageCutoff, setAgeCutoff] = useState('');
  const [accessCode, setAccessCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', {
      rosterSize,
      numCoaches,
      ageCutoff,
      accessCode,
    });
  };

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ marginBottom: '20px' }}>Session Settings</h2>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '400px' }}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="rosterSize" style={{ display: 'block', marginBottom: '5px' }}>Roster Size:</label>
          <input
            type="number"
            id="rosterSize"
            name="rosterSize"
            value={rosterSize}
            onChange={(e) => setRosterSize(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="numCoaches" style={{ display: 'block', marginBottom: '5px' }}>Number of Participating Coaches:</label>
          <input
            type="number"
            id="numCoaches"
            name="numCoaches"
            value={numCoaches}
            onChange={(e) => setNumCoaches(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="ageCutoff" style={{ display: 'block', marginBottom: '5px' }}>Age Cutoff Date:</label>
          <input
            type="date"
            id="ageCutoff"
            name="ageCutoff"
            value={ageCutoff}
            onChange={(e) => setAgeCutoff(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="accessCode" style={{ display: 'block', marginBottom: '5px' }}>Access Code (6-digit numeric):</label>
          <input
            type="text"
            id="accessCode"
            name="accessCode"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Save Settings
        </button>
      </form>
    </div>
  );
}

export default SessionSettingsForm;
