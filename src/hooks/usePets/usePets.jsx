import { useQuery } from '@tanstack/react-query';
import UseAxiosOpen from '../UseAxiosOpen/UseAxiosOpen';

const usePets = () => {
  const axioOpen = UseAxiosOpen()
  const {refetch, data: pets = [],} = useQuery({
    queryKey: ['pets'],
    queryFn: async () => {
      const res = await axioOpen.get('/pets');
      return res.data
    }
  })
  return [pets,refetch];
};

export default usePets;