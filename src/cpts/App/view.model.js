import { useEffect } from 'react';
import { get as getMoments } from '../../services/moments';
import { get as getUser } from '../../services/user';

const useViewModel = () => {

  const init = async () => {
    let momentsJson = await getMoments();
    let userJson = await getUser();
    console.log(momentsJson);
    console.log(userJson);
  }

  useEffect(() => {
    init();
  }, [])

  return {

  }
}

export default useViewModel;