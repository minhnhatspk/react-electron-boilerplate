import { ipcMain } from 'electron';

const UserEvents = () => {
  ipcMain.on('onUserLoaded', (event, users) => {
    // Do something with the users
    console.log('users', users);
  });
};

const InitEvents = (win) => {
  // The events that related to file management
  UserEvents();
}

export {
  InitEvents,
}