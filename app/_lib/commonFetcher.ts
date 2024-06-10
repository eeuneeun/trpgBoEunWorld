//@ts-ignore
export const commonFetcher = (...args : any) => fetch(...args).then(res => res.json())
