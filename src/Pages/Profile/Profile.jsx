import { useContext } from 'react';

import { AuthContext } from '../../Context/authContext';

function Profile() {
  const { token } = useContext(AuthContext);
  console.log(token);
  return <div>eman</div>;
}

export default Profile;
