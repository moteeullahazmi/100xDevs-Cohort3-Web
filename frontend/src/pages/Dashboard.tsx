import Button from "../components/Button";
import PlusIcon from "../icons/PlusIcon";
import ShareIcon from "../icons/ShareIcon";
import { Card } from "../components/Card";
import CreateContentModel from "../components/CreateContentModel";
import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useContent } from "../hooks/useContents";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router";



const Dashboard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, refresh } = useContent();
  const navigate = useNavigate()
  useEffect(() => {
    refresh();
  }, [modalOpen]);
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
          <Button onClick={async () =>{
            const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
              share:true
            },{headers:{
              "Authorization":localStorage.getItem("token")
            }});
           const shareUrl =  `http://localhost:5173/share${response.data.hash}`
           alert(shareUrl)
          }}
            variant="secondary"
            text="Share Brain"
            startIcon={<ShareIcon />}
          />
          <Button onClick={()=>{
            localStorage.removeItem("token"); 
            navigate("/signin");
          }} text="Logout" variant="primary"/>
        </div>

        <div className="flex gap-4 flex-wrap">
          {contents.map(({ link, title, type }) => (
            <Card title={title} link={link} type={type} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
