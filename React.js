import App from "./App"
import { render } from "./React-Dom"

export default React = {
    createElement(type, props, ...children) {
        // console.log(children)
        const reactElement = {
            type,
            props: {
                ...props,
                children
            }

        }
        return reactElement
    }
}

let states = []
let stateIndex = 0

export function useState(initialState) {
    states[stateIndex] = states[stateIndex] || initialState
    const localIndex = stateIndex

    const setState = (newState) => {
        console.log(localIndex)
        states[localIndex] = newState
        stateIndex = 0
        render(<App /> , document.getElementById("root"))
    }

    stateIndex++

    return [states[localIndex], setState]
}

// states=[0, 10]