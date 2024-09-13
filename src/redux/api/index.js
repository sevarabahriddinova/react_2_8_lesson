import { createApi,retry,fetchBaseQuery } from "reduxjs/toolkit?query/react"

const fetchBaseQuery=async (args,api,extraOption)=>{
    const {dispatch}=api;
    const rawBasQuery=fetchBaseQuery({
        baseurl:"https://fakeapi.platzi.com/en/rest/products",
        prepareHeaders:(headers) => {
            const token =localStorage.getItem("token");
            if(token){
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }
    })

    const response= await rawBasQuery (args,api,extraOption)

    if(response.error){
        const {status} = response.error

        if(status===401 || status===403){
           localStorage.removeItem("token")
        }
    }
 

}

const baseQueryWithRetry=retry(rawBasQuery,{maxRetries:0})

export const api= createApi({
    reducerPath:"api",
    baseQuery:baseQueryWithRetry,
    tageTypes:["PRODUCTS"],
    endpoints:()=>({}),

})
