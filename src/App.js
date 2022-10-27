import React, { useEffect, useState } from 'react';
import AssessPage from './containers/AssessPage';
import LandingPage from './containers/LandingPage';
import SuccessPage from './containers/SuccessPage';
import getTicket from './functions/getTicket';

const App = () => {
  const [error, setError] = useState(null);
  const [ticket, setTicket] = useState(null);
  const [loadingTicket, setLoadingTicket] = useState(true);
  const [isTicketLeft, setIsTicketLeft] = useState(true);
  const [showAssessPage, setShowAssessPage] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const random_ticket = await getTicket();
        if (!!random_ticket['noTicketLeft']) {
          setIsTicketLeft(false)
          console.log('There is no ticket left to assess.')
        } else {
          setTicket(random_ticket);
          console.log(random_ticket);
        }
        setLoadingTicket(false);
        
      } catch (err) {
        console.error(err);
        setError(err);
      }
    }
    fetchData();
  }, []);

  if (success) {
    return <SuccessPage />;
  } else if (!!error) {
    return <p>{error.message}</p>;
  } else if (showAssessPage) {
    return (
      <>
        <AssessPage
          ticket={ticket}
          setSuccess={setSuccess}
          setError={setError}
        />
      </>
    );
  } else {
    return (
      <LandingPage
        loadingTicket={loadingTicket}
        setShowAssessPage={setShowAssessPage}
        isTicketLeft={isTicketLeft}
      />
    );
  }
};

export default App;
