import { AddIcon } from "./components/icons/AddIcon"
import ShareIcon from "./components/icons/ShareIcon"
import { Button } from "./components/ui/Button"


const App = () => {
  return (
    <div>
      <Button  variant="primary" startIcon={<AddIcon size="sm"/>} endIcon={<ShareIcon/>} size="md" title="Add" />
    </div>
  )
}

export default App
