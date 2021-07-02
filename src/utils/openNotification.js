import { Notification } from 'rsuite';
import React from 'react';

export const openNotification = (notificationType, title, description) => {
  Notification[notificationType]({
    title: <span>{title}</span>,
    description: <span>{description}</span>,
  });
};