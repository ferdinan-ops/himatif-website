import { createContext, useEffect, useState } from 'react'
import { IContact } from '../types/himatif.type'
import * as API from '../lib/api'

export type footerContextType = {
  contact: IContact
}

export const FooterContext = createContext<footerContextType | null>(null)

const FooterContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [contact, setContact] = useState<IContact>(
    typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('contact') as string) : null
  )

  const getContactData = async () => {
    const { data } = await API.getContact()
    setContact(data)
  }

  useEffect(() => {
    if (!contact) {
      getContactData()
      if (typeof window !== 'undefined') {
        localStorage.setItem('contact', JSON.stringify(contact))
      }
    }
  }, [contact])

  return <FooterContext.Provider value={{ contact }}>{children}</FooterContext.Provider>
}

export default FooterContextProvider
