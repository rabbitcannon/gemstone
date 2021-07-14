import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { User } from 'redux/types/user.types'
import { push } from 'connected-react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { authPaths } from 'common/url-paths'
import Axios from 'axios'

const MenuProfileIndex: React.FC<IProfile> = ({ profile }) => {
  const dispatch = useDispatch()

  const logoutUser = (event: any) => {
    event.preventDefault()

    Axios.post(authPaths.LOGOUT_URL)
      .then((response: any) => {
        if (response.status === 200) {
          // @ts-ignore
          window.location = '/login/'
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="flex-shrink-0 flex p-4">
      <div className="flex items-center">
        <img
          className="inline-block h-9 w-9 rounded-full"
          src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
          alt=""
        />
        <div className="flex flex-row align-middle gap-x-4 ml-3">
          <div className="flex-initial">
            <a
              href="#"
              onClick={() => dispatch(push('/profile'))}
              className="flex-shrink-0 w-full group block"
            >
              <p className="text-sm font-medium text-gray-300 group-hover:text-gray-600">
                {profile?.first_name} {profile?.last_name}
              </p>

              <p className="text-xs font-medium">View profile</p>
            </a>
          </div>
          <div className="inline-block align-middle">
            <a href="#" onClick={logoutUser}>
              <FontAwesomeIcon size="lg" icon={['fas', 'sign-out-alt']} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

type IProfile = ReturnType<typeof mapStateToProps> & {
  readonly profile?:
    | {
        first_name: string
        last_name: string
      }
    | undefined
}

const mapStateToProps = (state: User) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps, { push })(MenuProfileIndex)
