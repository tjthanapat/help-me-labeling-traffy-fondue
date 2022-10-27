import React, { useState } from 'react';
import AssessPage from './containers/AssessPage';
import SuccessPage from './containers/SuccessPage';

const App = () => {
  const [ticket, setTicket] = useState(null);
  const [success, setSuccess] = useState(false);
  if (success) {
    return <SuccessPage />;
  } else {
    return (
      <>
        <AssessPage
          ticket={ticket}
          setSuccess={setSuccess}
        />
      </>
    );
  }
};

export default App;
