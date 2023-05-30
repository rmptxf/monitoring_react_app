import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useAlarmsStore from '../../store/AlarmsStore';

interface ControlPanelProps {
  clickedAlarm: number;
  onSelectAlarm: (event: number) => void;
  setClickedAlarm: (event: number) => void;
}

function ControlPanel({
  clickedAlarm,
  setClickedAlarm,
  onSelectAlarm,
}: ControlPanelProps) {
  const alarms = useAlarmsStore((state) => state.alarms);
  const closeAlarm = useAlarmsStore((state) => state.closeAlarm);
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const setPrevious = useAlarmsStore((state) => state.setPrevious);
  const setNext = useAlarmsStore((state) => state.setNext);

  return (
    <section className="section-header dark:bg-black-100">
      <div className="section-header bg-primary-200 p-2 text-sm font-bold text-white drop-shadow-md dark:bg-black-200">
        Control Options
      </div>
      <div className="section-header flex gap-2 p-2 py-3 text-sm">
        <button
          type="button"
          onClick={() => {
            closeAlarm(clickedAlarm);
            onSelectAlarm(clickedAlarm);
          }}
          onKeyDown={() => {
            closeAlarm(clickedAlarm);
            onSelectAlarm(clickedAlarm);
          }}
          tabIndex={0}
          className="flex items-center justify-center gap-2 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200"
        >
          Close alarm
          <CloseIcon style={{ height: '16px' }} />
        </button>
        <div className="flex gap-2">
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center gap-2 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200"
            onClick={() => {
              if (activeAlarm >= 2) {
                setPrevious();
                setClickedAlarm(activeAlarm - 1);
              }
            }}
            onKeyDown={() => {
              if (activeAlarm >= 2) {
                setPrevious();
                setClickedAlarm(activeAlarm - 1);
              }
            }}
          >
            Previous alarm
            <ArrowBackIosNewIcon style={{ height: '16px' }} />
          </button>
          <button
            type="button"
            tabIndex={0}
            className="flex items-center justify-center gap-2 rounded bg-primary-200 p-2 text-center font-medium text-white hover:bg-primary-300 dark:bg-black-200"
            onClick={() => {
              if (activeAlarm + 1 <= alarms?.length) {
                setNext();
                setClickedAlarm(activeAlarm + 1);
              }
            }}
            onKeyDown={() => {
              if (activeAlarm + 1 <= alarms?.length) {
                setNext();
                setClickedAlarm(activeAlarm + 1);
              }
            }}
          >
            <ArrowForwardIosIcon style={{ height: '16px' }} />
            Next alarm
          </button>
        </div>
      </div>
    </section>
  );
}

export default ControlPanel;
