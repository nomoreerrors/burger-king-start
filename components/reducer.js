export const initialState = {count: false}

export default function reducer(state, action) {
    
    switch(action.type) {
        case 'shown':
            return {
                ...state,
                count: true
            }

        case 'hidden':
            return {
                ...state,
                count: false
            }

        default:
            throw new Error()
    }

  
}


