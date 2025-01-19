import { useQuery } from '@tanstack/react-query';
import UseAxiosOpen from '../UseAxiosOpen/UseAxiosOpen';

const usePets = () => {
  const axioOpen = UseAxiosOpen()
  const { data: pets = [],isLoading } = useQuery({
    queryKey: ['pets'],
    queryFn: async () => {
      const res = await axioOpen.get('/pets');
      return res.data
    }
  })
  return [pets, isLoading];
};

export default usePets;