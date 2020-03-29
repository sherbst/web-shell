import { Manifest, Handler } from "../../command";

const manifest: Manifest = {
    names: ['hello', 'hey']
}

const handler: Handler = () => {
    return { displayText: 'Hello World' }
}

export default { manifest, handler }