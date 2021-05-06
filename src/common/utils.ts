import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

/* Push to URLs retaining history/state */
/* eslint-disable no-unused-vars */
const pushToURL = (url: string) => (event: any) => {
  const dispatch = useDispatch()

  dispatch(push(url))
}
/* eslint-enable no-unused-vars */
