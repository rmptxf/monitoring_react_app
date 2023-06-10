import { useEffect, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import NotificationsIcon from '@mui/icons-material/Notifications';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import useDarkMode from '../../hooks/useDarkMode';
import useAlarmsStore from '../../stores/AlarmsStore';
import useSettingsStore from '../../stores/SettingsStore';
import Modal from '../generic/Modal';
import AccountModal from '../composables/AccountModal';

function NavBar() {
  const [colorTheme, setTheme] = useDarkMode();
  const alarms = useAlarmsStore((state) => state.alarms);
  const modal = useSettingsStore((state) => state.modal);
  const setModal = useSettingsStore((state) => state.setModal);
  const [alarmsChanged, setAlarmsChanged] = useState(false);

  useEffect(() => {
    setAlarmsChanged(true);
    setTimeout(() => {
      setAlarmsChanged(false);
    }, 1000);
  }, [alarms]);

  return (
    <nav className="section-header section-footer mb-2 flex flex-col items-center justify-between gap-2  bg-white px-3 py-2 text-base text-black-200 dark:bg-black-100 sm:grid-cols-6 md:mt-0 md:flex-row md:gap-0 lg:flex">
      <div className="flex gap-2">
        <div className="flex flex-col items-center gap-2 dark:text-grey sm:flex-row">
          <p>Monitor App</p>
          <p className="hidden sm:block">-</p>
          <p className="text-center text-sm sm:text-left">
            A simulated dashboard for nurses to monitor patient activity
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 pb-2 sm:pb-0">
        <div
          className="flex items-center justify-center rounded bg-white px-2 text-sm font-semibold dark:bg-black-200 dark:text-grey"
          style={{ height: '26px' }}
        >
          {!alarmsChanged ? (
            <NotificationsIcon
              className="text-secondary"
              style={{ height: '20px' }}
            />
          ) : (
            <NotificationsActiveIcon
              className="new-alarm text-secondary"
              style={{ height: '20px' }}
            />
          )}
          <span>
            <span className="text-sm font-bold">x{alarms?.length}</span> open
            alarms
          </span>
        </div>
        {modal && (
          <Modal>
            <AccountModal />
          </Modal>
        )}
        <div
          role="button"
          tabIndex={0}
          onClick={() => setModal(true)}
          onKeyDown={() => setModal(true)}
        >
          <AccountCircleIcon className="text-secondary dark:text-grey" />
        </div>
        <div
          role="button"
          tabIndex={0}
          onClick={() => setTheme(colorTheme)}
          onKeyDown={() => setTheme(colorTheme)}
        >
          {colorTheme === 'light' ? (
            <DarkModeIcon className="text-secondary dark:text-grey" />
          ) : (
            <LightModeIcon className="text-secondary" />
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
