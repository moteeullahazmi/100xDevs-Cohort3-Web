import { useRef, useState } from "react";
import CrossIcon from "../icons/CrossIcon";
import Button from "./Button";
import Input from "./Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}
// controlled component
const CreateContentModel = ({ open, onClose }: { open: any; onClose: any }) => {
  const linkRef = useRef<HTMLInputElement>();
  const titleRef = useRef<HTMLInputElement>();
  const [type, setType] = useState(ContentType.Youtube);

  async function createcontent() {
    const link = linkRef.current?.value;
    const title = titleRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        link,
        title,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
  }
  return (
    <div style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
      {open && (
        <div className="w-screen h-screen bg-black fixed top-0 left-0 opacity-70 flex justify-center items-center">
          <div className="flex flex-col justify-center" style={{
              boxShadow: "0 10px 15px rgba(0, 0, 0, 0.2)", // Soft shadow for focus effect
            }}>
            <span className="bg-white p-6 rounded shadow-2xl opacity-100">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon />
                </div>
              </div>
              <div>
                <Input placeholder={"Title"} />
                <Input placeholder={"Link"} />
              </div>
              <div>
                <h1 className="font-bold text-lg">Types</h1>
                <div className="flex gap-2 p-4">
                  <Button
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Youtube);
                    }}
                  />
                  <Button
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => {
                      setType(ContentType.Twitter);
                    }}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  onClick={createcontent}
                  variant="primary"
                  text={"Submit"}
                />
              </div>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateContentModel;
