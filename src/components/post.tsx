import { useActiveProfile } from '@lens-protocol/react-web';
import React from 'react';
import { Composer } from './composer';

const Postweb = () => {
  const { data, error, loading } = useActiveProfile();

  if (loading) return <p>Loading...</p>;
  if (data === null) return <p>No active profile</p>;
  if (data === undefined) return <p>undefined</p>;

  return (
    <>
        <Composer publisher={data} />
    </>
  );
};

export default Postweb;
