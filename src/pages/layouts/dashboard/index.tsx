import React, { Component } from 'react'
// import Axios from 'axios'

import Menu from './menu'
import DashboardHeader from './header/Header'
import Stats from './stats'

import { connect } from 'react-redux'
import { getCurrentUser } from 'redux/actions/user.actions'
import Contacts from './contacts'
import Loading from '../shared/loading/loading'
// import { User } from '../../../redux/types/user.types'
// import { useUserAction } from 'redux/hooks/useActions'

// import { API_URL } from 'common/filepaths'
// import { push } from 'connected-react-router'

interface IState {
  readonly currentLocation: string | undefined
}

interface IProps {
  getCurrentUser: () => object
  children: any
  loading: boolean | null
}

class DashboardIndex extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)

    this.state = {
      currentLocation: undefined
    }
  }

  componentDidMount() {
    this.props.getCurrentUser()
    this.getCurrentLocation()
    // const { getCurrentUser } = useUserAction()
    getCurrentUser()
  }

  getCurrentLocation = () => {
    const currentURL = window.location.pathname.split('/')[1]
    const sanitizeURL = currentURL
      .replace('-', ' ')
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()))

    if (this.state.currentLocation !== sanitizeURL) {
      this.setState({
        currentLocation: sanitizeURL
      })
    }
  }

  componentDidUpdate() {
    this.getCurrentLocation()
    console.log(this.props?.loading)
  }

  renderStatsAndContactsPanel = () => {
    const { currentLocation } = this.state

    if (currentLocation === 'Dashboard' || currentLocation === '') {
      return (
        <>
          <Contacts />
          <Stats />
        </>
      )
    }
  }

  render() {
    const { currentLocation } = this.state
    const { loading } = this.props

    return (
      <div className="h-screen flex overflow-hidden animate__animated animate__fadeIn">
        {loading && <Loading />}

        <Menu />
        <div className="flex flex-col min-w-0 flex-1 overflow-hidden bg-cool-gray-50">
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">Open sidebar</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <DashboardHeader location={currentLocation} />

          {this.renderStatsAndContactsPanel()}

          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              {/* Start main area*/}
              <div className="inset-0 py-6 px-3 sm:px-6 lg:px-8">
                <div className="h-full">
                  {/* <div className="py-1.5 px-3 sm:px-6 lg:px-8"> */}
                  {this.props.children}
                  {/* </div> */}
                </div>
              </div>
              {/* End main area */}
            </main>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  getCurrentUser: () => dispatch(getCurrentUser())
})

const mapStateToProps = (state: any) => {
  console.log(state.user.loading)
  return {
    loading: state.user.loading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardIndex)
