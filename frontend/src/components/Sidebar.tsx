import BrainIcon from "../icons/BrainIcon";
import TwitterXIcon from "../icons/TwitterXIcon";
import YoutubeIcon from "../icons/YoutubeIcon";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-3xl pt-8 items-center">
        <div className="pr-2 text-purple-600">
        <BrainIcon/>
        </div>
        
        Brainly
      </div>
      <div className="pt-4 pl-4">
        <SidebarItem text={"X"} icon={<TwitterXIcon />} />
        <SidebarItem text={"Youtube"} icon={<YoutubeIcon />} />
      </div>
    </div>
  );
};

export default Sidebar;
