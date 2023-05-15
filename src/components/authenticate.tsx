import { useActiveWallet } from '@lens-protocol/react-web';
import { LogoutButton } from './logout';
import { LoginButton } from './signin';

 export default function Authenticate() {
  const { data: wallet, loading } = useActiveWallet();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (wallet) {
    return (
    <>
    <p>You are logged-in with {wallet.address}</p>
    <LogoutButton />
    </>
    );
  } 


  return (
  <>
  <LoginButton />
  <p>You are logged-out</p>
  </>
  );
}