import React, { useContext } from 'react';
import userContext from '../Context/userContext';

export default function Profile() {
  const { user } = useContext(userContext);

  return (
    <>
      {!user ? (
        <div>Please Login</div>
      ) : (
        <div>Welcome {user.username}</div>
      )}
    </>
  );
}
