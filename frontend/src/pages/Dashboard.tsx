import Button from "../components/Button";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import { Card } from "../components/Card";
import CreateContentModel from "../components/CreateContentModel";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { useContent } from "../hooks/useContents";

const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  return (
    <div>
      <Sidebar />
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        <CreateContentModel
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        />
        <div className="flex justify-end">
          <Button
            onClick={() => {
              setModalOpen(true);
            }}
            variant="primary"
            text="Add Content"
            startIcon={<PlusIcon />}
          />
          <Button
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
        </div>

        <div className="flex gap-4">
          {contents.map(({link, title, type})=>
            <Card
            title={title}
            link={link}
            type={type}
          />
        )}
          
          <Card
            title="My Youtube Videos"
            link="https://www.youtube.com/watch?v=f9TeMi7Kt1Q"
            type="youtube"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
