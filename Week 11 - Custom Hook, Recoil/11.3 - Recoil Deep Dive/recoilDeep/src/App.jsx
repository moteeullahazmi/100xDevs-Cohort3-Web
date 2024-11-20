import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { notificationAtom, totalNotificationsSelector } from "./atom";  // Adjust path as needed

const Notifications = () => {
  // Fetch notifications data using Recoil state (atom)
  const notifications = useRecoilValue(notificationAtom);

  if (!notifications) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Notifications</h3>
      <ul>
        <li>Network: {notifications.network}</li>
        <li>Jobs: {notifications.jobs}</li>
        <li>Messaging: {notifications.messaging}</li>
        <li>General Notifications: {notifications.notifications}</li>
      </ul>
    </div>
  );
};

const TotalNotifications = () => {
  // Fetch total notification count using Recoil selector
  const totalNotifications = useRecoilValue(totalNotificationsSelector);

  return <div>Total Notifications: {totalNotifications}</div>;
};

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <h1>Notification App</h1>
        <Notifications />
        <TotalNotifications />
      </div>
    </RecoilRoot>
  );
};

export default App;
