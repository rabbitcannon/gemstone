import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { User } from 'redux/types/user.types'
import { push } from 'connected-react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { logoutCurrentUser } from 'redux/actions/user.actions'
import { authPaths, userPaths } from 'common/url-paths'
import Axios from 'axios'

const MenuProfileIndex: React.FC<ProfileType> = ({ profile }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    Axios.get(userPaths.PROFILE_URL).then((response) => {
      console.log(response)
    })
  })

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
              {/* <a href="#" onClick={logoutCurrentUser}> */}
              <FontAwesomeIcon size="lg" icon={['fas', 'sign-out-alt']} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

type ProfileType = ReturnType<typeof mapStateToProps> & {
  readonly profile?:
    | {
        first_name: string
        last_name: string
      }
    | undefined
}

// const mapDispatchToProps = (dispatch: any) => ({
//   logoutCurrentUser: () => dispatch(logoutCurrentUser())
// })

const mapStateToProps = (state: User) => {
  return {
    profile: state.user.profile
  }
}

// export default connect(mapStateToProps, { mapDispatchToProps, push })(MenuProfileIndex)
export default connect(mapStateToProps, { push })(MenuProfileIndex)
