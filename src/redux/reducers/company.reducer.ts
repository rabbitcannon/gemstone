import { Company, CompanyTypes } from '../types/company.types'
import {
  GetCompanyAction,
  GetCompanyErrorAction
} from '../actions/company.actions'

type CompanyActions = GetCompanyAction | GetCompanyErrorAction

interface IDefaultCompany {
  loading: boolean
  error: string | null
  company?: Company
}

const INITIAL_STATE: IDefaultCompany = {
  loading: true,
  error: null,
  company: undefined
}

const companyReducer = (
  state: IDefaultCompany = INITIAL_STATE,
  action: CompanyActions
) => {
  console.log(state)
  switch (action.type) {
    case CompanyTypes.GET_USER_COMPANY:
      return {
        ...state,
        loading: false,
        profile: action.payload
      }

    case CompanyTypes.GET_USER_COMPANY_ERROR:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export default companyReducer
