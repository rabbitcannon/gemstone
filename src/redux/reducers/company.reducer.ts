import { Company, CompanyTypes } from '../types/company.types'
import { GetCompanyAction, GetCompanyErrorAction } from '../actions/company.actions'

type CompanyActions = GetCompanyAction | GetCompanyErrorAction

interface CompanyState {
  loading: boolean
  error: string | null
  company?: Company[]
}

const INITIAL_STATE: CompanyState = {
  loading: true,
  error: null,
  company: undefined
}

const companyReducer = (state: CompanyState = INITIAL_STATE, action: CompanyActions) => {
  switch (action.type) {
    case CompanyTypes.GET_USER_COMPANY:
      return {
        ...state,
        loading: false,
        company: action.payload
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
