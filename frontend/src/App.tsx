import Button from "./components/Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcon from "./icons/ShareIcon";
import { Card } from "./components/Card";

const App = () => {
  return (
    <div className="p-4">

      <div className="flex justify-end">
      <Button variant="primary" text="Add Content" startIcon={<PlusIcon />} />
      <Button
        variant="secondary"
        text="Share Brain"
        startIcon={<ShareIcon />}
      />
      </div>
      
      <div className="flex gap-4">
        <Card
          title="My Youtube Videos"
          link="https://www.youtube.com/watch?v=f9TeMi7Kt1Q"
          type="youtube"
        />

        <Card
          title="My Twitter Videos"
          link="https://x.com/Abdul_2003_/status/1867748385719230826"
          type="twitter"
        />
      </div>
    </div>
  );
};

export default App;
