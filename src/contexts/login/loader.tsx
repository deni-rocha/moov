import React, { createContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}
interface ILoaderContext {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const LoaderContext = createContext<ILoaderContext>({
  loading: false,
  setLoading: () => {}
})

// colocar o auth e loader no mesmo context
export const LoaderProvider = ({ children }: Props): JSX.Element => {
  const [loading, setLoading] = useState(false)

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

export default LoaderContext
