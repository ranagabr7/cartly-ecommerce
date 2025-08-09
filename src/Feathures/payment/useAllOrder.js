import { useQuery } from '@tanstack/react-query';
import { getAllUserOrder } from '../../services/apiPayment';
import { jwtDecode } from 'jwt-decode';

export function useAllOrder() {
  const { id } = jwtDecode(localStorage.getItem('token'));
//   console.log(id);

  const {
    isPending,
    data: allOrders,
    error,
  } = useQuery({
    queryKey: ['allOrders'],
    queryFn: () => getAllUserOrder(id),
  });
  return { isPending, allOrders, error };
}
