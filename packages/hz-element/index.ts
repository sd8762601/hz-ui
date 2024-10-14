import { makeInstaller } from "@hz-ui/utils/install";
import components from './components'
import "@hz-ui/theme/index.css"

const installer = makeInstaller(components)
export * from "@hz-ui/components"
export default installer