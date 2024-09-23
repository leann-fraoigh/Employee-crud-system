import { AppDispatch } from './index';
import { useDispatch } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const useAppDispatch: () => AppDispatch = useDispatch;
