import React, { useEffect, useState } from 'react';
import AssessPage from './containers/AssessPage';
import LandingPage from './containers/LandingPage';
import SuccessPage from './containers/SuccessPage';

const App = () => {
  const [ticket, setTicket] = useState(null);
  const [loadingTicket, setLoadingTicket] = useState(true);
  const [success, setSuccess] = useState(false);
  const [showAssessPage, setShowAssessPage] = useState(false);

  useEffect(() => {
    setLoadingTicket(false);
  }, []);
  
  if (success) {
    return <SuccessPage />;
  } else if (showAssessPage) {
    return (
      <>
        <AssessPage ticket={ticket} setSuccess={setSuccess} />
      </>
    );
  } else {
    return (
      <LandingPage
        loadingTicket={loadingTicket}
        setShowAssessPage={setShowAssessPage}
      />
    );
  }
};

export default App;
