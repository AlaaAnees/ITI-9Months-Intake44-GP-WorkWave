import { useContext } from 'react';

import { AuthContext } from '../../Context/authContext';
import NotSeller from './NotSeller';

function IsSeller({ children }) {
  const { userData } = useContext(AuthContext);
  const { isSeller } = userData;
  if (isSeller) {
    return children;
  } else {
    return <NotSeller />;
  }
}

export default IsSeller;
