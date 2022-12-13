export const useNada = (): void => {}
// import { useContext, useEffect, useState } from 'react'
// import AuthContext from '../contexts/auth/AuthContext'

// interface IUsePagination<T> {
//   data: T[] | null
//   isFetching: boolean
// }
// export function usePagination<T>(fetchData: (page: number) => Promise<T[]>): IUsePagination<T> {
//   const [data, setData] = useState<T[] | null>(null)
//   const [isFetching, setIsFetching] = useState(true)

//   const { user } = useContext(AuthContext)
//   const { token } = user

//   useEffect(() => {
//     getAllUsers()
//   }, [])

//   async function getAllUsers(): Promise<T[]> {
//     const res = await api
//     const isError = typeof res === 'number'

//     if (!isError) {
//       console.log(
//         '%c lista de usuários atualizada',
//         'background: black; color: white;'
//       )
//       setData(res)
//       return
//     }

//     console.log('%c atualizando token', 'background: yellow; color: black;')
//   }

//   return { data, isFetching }
// }
