import React from 'react';

function SessionSettingsForm() {
  return (
    <div>
      <h2>Session Settings</h2>
      <form>
        <div>
          <label htmlFor="rosterSize">Roster Size:</label>
          <input type="number" id="rosterSize" name="rosterSize" />
        </div>
        <div>
          <label htmlFor="numCoaches">Number of Participating Coaches:</label>
          <input type="number" id="numCoaches" name="numCoaches" />
        </div>
        <div>
          <label htmlFor="ageCutoff">Age Cutoff Date:</label>
          <input type="date" id="ageCutoff" name="ageCutoff" />
        </div>
        <div>
          <label htmlFor="accessCode">Access Code (6-digit numeric):</label>
          <input type="text" id="accessCode" name="accessCode" />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default SessionSettingsForm;

