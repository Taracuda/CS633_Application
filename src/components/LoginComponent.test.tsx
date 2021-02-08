import { render } from "@testing-library/react"
import { LoginComponent } from "./LoginComponent"

describe('LoginComponent should: ', () => {
const component = () => {
    return <LoginComponent authState={{authState: 'true'}} onAuthStateChanged={jest.fn()}/>
}

    test('render to the screen', () => {
        const login = render(component());

        expect(login).not.toBeNull();
    })
})