interface changeLanguageAction{
    payload:{language:string},
    type:'setLang'
}
interface setLanguageAction{
    type:'addLang',
    payload:{name:string,code:string}
}
export type languageAction=changeLanguageAction|setLanguageAction

export const changeLanguage=(code:string):changeLanguageAction=>(
    {payload:{language:code},type:'setLang'}
)
export const setLanguage=(language:{name:string,code:string}):setLanguageAction=>(
    {type:'addLang',payload:language}
)
