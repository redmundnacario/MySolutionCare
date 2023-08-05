import React, { ReactElement, createContext, useContext } from 'react'

type ClientActionsContextType = {
  handleSearchFilter: () => void;
}

const SearchClientActionsContext =  createContext<ClientActionsContextType | undefined>(undefined)

const WithSearchClientActionsProvider = ({children}:{children: ReactElement}) => {


  const handleSearchFilter = () => {

  }



  return (
    <SearchClientActionsContext.Provider
      value={{
        handleSearchFilter,
      }}
    >{children}</SearchClientActionsContext.Provider>
  )
}

export default WithSearchClientActionsProvider

export const useSearchClientActionsContext = () =>{
  const context = useContext(SearchClientActionsContext)

  if (!context){
    throw new Error("useSearchClientActionsContext has to be called in SearchClientActionsContext.Provider")
  }

  return context
}

