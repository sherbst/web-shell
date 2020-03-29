import { Manifest, Handler } from "../../command";

const manifest: Manifest = {
    names: ['ls']
}

const handler: Handler = ({ cwd }) => {
    const children = cwd.getChildren();
    const displayText = children.map(child => child.getName()).join(' ');

    return { displayText }
}

export default { manifest, handler }