import React from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import {
  networkAtom,
  jobAtom,
  messageAtom,
  totalNotificationSelector,
} from "../atom";

const App = () => {
  return (
    <RecoilRoot>
      <Home />
      <Navbar />
      <Message />
      <Me />
      <CustomButton />
    </RecoilRoot>
  );
};

function Home() {
  return (
    <>
      <button>Home</button>
    </>
  );
}

function Me() {
  return (
    <div>
      <button>Me</button>
    </div>
  );
}

function Navbar() {
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobAtom);

  const totalNotification = useRecoilValue(totalNotificationSelector);
  return (
    <>
      <button>My network {networkCount}</button>
      <button>Jobs {jobCount}</button>
      

      <button>Total Count {totalNotification}</button>
    </>
  );
}

function Message() {
  const messageCount = useRecoilValue(messageAtom);

  return (
    <div>
      <button>Messaging {messageCount}</button>
    </div>
  );
}

function CustomButton() {
  const setNetworkCount = useSetRecoilState(networkAtom);
  const setJobCount = useSetRecoilState(jobAtom);

  const increaseCounts = () => {
    setNetworkCount((prevCount) => prevCount + 1);
    setJobCount((prevCount) => prevCount + 1);
  };

  return <button onClick={increaseCounts}>Increase Counts</button>;
}

export default App;
