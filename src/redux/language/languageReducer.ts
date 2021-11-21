import {languageAction} from "./languageActions";

interface languageState{
    language:string,
    languageList:{name:string,code:string}[]
}
const defaultState:languageState={
    language:'zh',
    languageList:[
        {
            name:'中文',
            code:'zh'
        },
        {
            name:'英文',
            code:'en'
        }
    ]
}
export const languageReducer=(state=defaultState,action:languageAction)=>{
    switch (action.type) {
        case 'setLang':
            return {...state,...action.payload}
        case 'addLang':
            return {...state,languageList:[...state.languageList,action.payload]}
        default:
            return state
    }
}
