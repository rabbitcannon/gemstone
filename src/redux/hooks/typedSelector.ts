import {
  useSelector as _useSelector,
  TypedUseSelectorHook,
  useDispatch as _useDispatch
} from 'react-redux'
import { RootState, ApplicationDispatch } from '../store'

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
export const useAppDispatch = () => _useDispatch<ApplicationDispatch>()

// Use throughout your app instead of plain `useDispatch` and `useSelector`
