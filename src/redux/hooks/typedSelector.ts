import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from 'redux/reducers/root.reducer'

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
