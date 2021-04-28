import React, { Component } from 'react'
import Axios from 'axios'
import { CSRF_COOKIE_URL, LOGIN_URL } from '../../common/filepaths'
import {
  getCurrentUser,
  loginCurrentUser
} from '../../redux/actions/user.actions'

import loaderImage from '../../assets/images/preloaders/light/preloader_w24.svg'
import './index.scss'

import TagLogo from '../../assets/images/logo/tag-logo.svg'
import { connect } from 'react-redux'

interface State {
  isLoading: boolean
  username: string | undefined
  password: string | undefined
}

interface IProps {
  loginCurrentUser: () => boolean
  getCurrentUser: () => any
}

class Index extends Component<IProps, State> {
  readonly loginInputRef: any

  constructor(props: any) {
    super(props)

    this.state = {
      isLoading: false,
      username: undefined,
      password: undefined
    }
    this.loginInputRef = React.createRef<HTMLInputElement | null>()
  }

  componentDidMount() {
    this.loginInputRef.current?.focus()
  }

  handleInputChanges = (event: any) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }

  modifyLoadingState = () => {
    this.setState((prevState) => ({ isLoading: !prevState.isLoading }))
  }

  loginAccount = (event: any) => {
    event.preventDefault()

    this.modifyLoadingState()

    const { username, password } = this.state

    Axios.get(CSRF_COOKIE_URL)
      .then(() => {
        Axios.post(LOGIN_URL, {
          username: username,
          password: password
        })
          .then((response: any) => {
            if (response.status === 204) {
              // this.props.loginCurrentUser()
              this.props.getCurrentUser()
            }
          })
          .catch((error) => {
            this.modifyLoadingState()
            console.log(error)
          })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { isLoading } = this.state

    return (
      <div>
        <div id="overlay">&nbsp;</div>
        <div className="flex h-screen animate__animated animate__fadeIn">
          <div className="w-1/6 m-auto sm-auto lift py-8 px-4 sm:rounded-lg sm:px-10 bg-gray-100 text-center shadow animate__animated animate__fadeIn">
            <img
              src={TagLogo}
              className="logo__tag--login"
              alt="TAG Resources, LLC."
            />

            <h3 className="p-4 title__header">Portal Login</h3>

            <form className="space-y-6" action="#" onSubmit={this.loginAccount}>
              <div>
                <div className="mt-1">
                  <input
                    id="username"
                    name="username"
                    type="txt"
                    autoComplete="text"
                    ref={this.loginInputRef}
                    required
                    placeholder="username"
                    onChange={this.handleInputChanges}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="password"
                    onChange={this.handleInputChanges}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-2 border border-transparent rounded-md shadow-sm text-sm
                                        font-medium text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  {!isLoading ? (
                    <span>Sign in</span>
                  ) : (
                    <img
                      src={loaderImage}
                      className="animate__animated animate__fadeIn"
                      alt=""
                    />
                  )}
                </button>

                <p className="pt-5">
                  <a href="#" className="text-yellow-600 hover:text-yellow-500">
                    <small>Forgot your password?</small>
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  loginCurrentUser: () => dispatch(loginCurrentUser()),
  getCurrentUser: () => dispatch(getCurrentUser())
})

export default connect(null, mapDispatchToProps)(Index)

// export default Index;
