import { useState } from "#app";

export const useNotification = () => {
    const notification = useState<boolean>('notification', () => false)

    const showNotification = () => {
        notification.value = true;
    };

    return { notification, showNotification }
}