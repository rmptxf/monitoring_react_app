/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-this-in-sfc */
import { useState, useEffect, useReducer, Dispatch } from 'react';
import { useTranslation } from 'react-i18next';
import TagIcon from '@mui/icons-material/Tag';
import useAlarmsStore from '../stores/AlarmsStore';
import useSettingsStore from '../stores/SettingsStore';
import PatientBio from '../components/monitoring/PatientBio';
import AlarmBio from '../components/monitoring/AlarmBio';
import HealthCareInfo from '../components/monitoring/HealthCareInfo';
import EmergencyContact from '../components/monitoring/EmergencyContact';
import ControlPanel from '../components/monitoring/ControlPanel';
import AlarmEntryType from '../types/AlarmEntryType';
import PatientType from '../types/PatientType';
import Toast from '../components/generic/Toast';
import useBreakpoint from '../hooks/useBreakpoint';
import Modal from '../components/generic/Modal';
import FollowupModal from '../components/composables/FollowupModal';

function Monitoring() {
  const alarms: AlarmEntryType[] = useAlarmsStore((state) => state.alarms);
  const activeAlarm = useAlarmsStore((state) => state.activeAlarm);
  const legalClick = useSettingsStore((state) => state.legalClick);
  const actualAlarms: number[] = useAlarmsStore((state) => state.actualAlarms);
  const currentIndex: number | null = useSettingsStore(
    (state) => state.currentIndex
  );
  const toast = useSettingsStore((state) => state.toast);
  const modal = useSettingsStore((state) => state.modal);
  const closedAlarm = useAlarmsStore((state) => state.closedAlarm);
  const timer = useSettingsStore((state) => state.timer);
  const setLegalClick = useSettingsStore((state) => state.setLegalClick);
  const [, setClickedAlarm] = useState(activeAlarm);
  const breakpoint = useBreakpoint();
  const { t } = useTranslation();

  type MonitoringState = {
    isPanelVisible: boolean;
    isActive: number;
    currentPage: number;
    alarmsPerPage: number;
  };

  type Action =
    | { type: 'visibility_control_panel'; setPanel: boolean }
    | { type: 'is_active'; setActive: number }
    | { type: 'set_current_page'; setCurrentPage: number }
    | { type: 'alarms_per_page'; setAlarmsPerPage: number };

  function reducer(state: MonitoringState, action: Action): MonitoringState {
    switch (action.type) {
      case 'visibility_control_panel': {
        return {
          ...state,
          isPanelVisible: action.setPanel,
        };
      }
      case 'is_active': {
        return {
          ...state,
          isActive: action.setActive,
        };
      }
      case 'set_current_page': {
        return {
          ...state,
          currentPage: action.setCurrentPage,
        };
      }
      case 'alarms_per_page': {
        return {
          ...state,
          alarmsPerPage: action.setAlarmsPerPage,
        };
      }
      default:
        return state;
    }
  }

  const initialState: MonitoringState = {
    isPanelVisible: false,
    isActive: 1,
    currentPage: 1,
    alarmsPerPage: 7,
  };
  const [state, dispatch]: [MonitoringState, Dispatch<Action>] = useReducer(
    reducer,
    initialState
  );

  const patient = useAlarmsStore<PatientType[] | null>(
    (zustandState) => zustandState.correspondingPatient
  );

  const lastIndex = state.currentPage * state.alarmsPerPage;
  const alarmsIndex = lastIndex - state.alarmsPerPage;
  const maxPages = Math.ceil(actualAlarms.length / state.alarmsPerPage);
  const pageNums = [];
  const currentAlarms = [];

  const handleSelectAlarm = (id: number) => {
    setClickedAlarm(id + 1);
    dispatch({ type: 'visibility_control_panel', setPanel: true });

    if (!state.isPanelVisible) {
      if (
        (id + 1 < lastIndex && id + 1 >= lastIndex - 1) ||
        id + 1 === lastIndex
      ) {
        dispatch({
          type: 'set_current_page',
          setCurrentPage: state.currentPage + 1,
        });
        dispatch({ type: 'is_active', setActive: state.isActive + 1 });
      }
    }
  };

  useEffect(() => {
    if (!patient) {
      dispatch({ type: 'visibility_control_panel', setPanel: false });
    }
    if (state?.isPanelVisible && breakpoint !== 'sm' && breakpoint !== 'md') {
      dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 12 });
      if (state.currentPage === maxPages) {
        dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 12 });
      }
    } else if (breakpoint === 'sm' || breakpoint === 'md') {
      dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 7 });
    } else {
      dispatch({ type: 'alarms_per_page', setAlarmsPerPage: 14 });
    }
  }, [
    state?.isPanelVisible,
    patient,
    state.currentPage,
    maxPages,
    lastIndex,
    breakpoint,
  ]);

  useEffect(() => {
    if (
      legalClick &&
      currentIndex &&
      currentIndex + 1 > lastIndex &&
      currentIndex + 1 <= actualAlarms?.length
    ) {
      dispatch({
        type: 'set_current_page',
        setCurrentPage: state.currentPage + 1,
      });
      dispatch({ type: 'is_active', setActive: state.isActive + 1 });
    }

    if (
      legalClick &&
      currentIndex &&
      lastIndex - state.alarmsPerPage >= currentIndex + 1
    ) {
      dispatch({
        type: 'set_current_page',
        setCurrentPage: state.currentPage - 1,
      });
      dispatch({ type: 'is_active', setActive: state.isActive - 1 });
    }
  }, [
    alarms,
    legalClick,
    currentIndex,
    state.currentPage,
    state.alarmsPerPage,
    alarmsIndex,
    actualAlarms?.length,
    state.isActive,
    lastIndex,
  ]);

  const changePage = (e: { currentTarget: { id: string | number } }) => {
    setLegalClick(false);
    dispatch({ type: 'is_active', setActive: +e.currentTarget.id });
    dispatch({ type: 'set_current_page', setCurrentPage: +e.currentTarget.id });
  };

  useEffect(() => {
    if (state?.currentPage > 1) {
      if (state?.currentPage > maxPages) {
        dispatch({ type: 'set_current_page', setCurrentPage: maxPages });
      }
    }
  }, [alarms.length, state?.currentPage, maxPages, state?.alarmsPerPage]);
  if (maxPages > 1) {
    for (let index = 1; index <= maxPages; index += 1) {
      pageNums.push(
        <div
          key={index.toString()}
          id={index.toString()}
          className="m-1"
          onClick={changePage}
          onKeyDown={changePage}
          role="button"
          tabIndex={0}
        >
          <h5
            className={`rounded bg-primary-200 px-3 py-1 text-center font-medium text-white  hover:bg-primary-300 dark:bg-black-200 dark:text-grey dark:hover:bg-primary-300
            ${
              index === state?.isActive
                ? 'bg-primary-300 dark:bg-primary-300 dark:text-white'
                : ''
            }`}
          >
            {index}
          </h5>
        </div>
      );
    }
  }

  for (
    let i = alarmsIndex;
    i < state.currentPage * state.alarmsPerPage;
    i += 1
  ) {
    const entry = alarms[i];
    if (!entry) break;

    currentAlarms.push(
      <AlarmBio
        key={entry.id}
        entryId={entry.id}
        entry={entry}
        index={i}
        onToggle={handleSelectAlarm}
      />
    );
  }

  const entryTypes: string[] = [
    t('entryTypes.priority'),
    t('entryTypes.alarm'),
    t('entryTypes.patient'),
    t('entryTypes.time'),
    t('entryTypes.status'),
    t('entryTypes.room'),
  ];

  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row">
      <main className="mb-11 grid h-[754px] w-full grid-cols-9 gap-2 p-[1px] md:mb-0">
        <section className="box-shadow-md col-span-12 rounded-b-lg rounded-t-lg bg-white dark:bg-black-100 md:col-span-2 ">
          {patient ? (
            patient.map((patientInfo: PatientType) => (
              <PatientBio
                profile={patientInfo.profile}
                key={patientInfo.profile.name}
              />
            ))
          ) : (
            <PatientBio profile={patient} />
          )}
          <div className="noscrollbar flex flex-col gap-1 overflow-y-scroll px-2 pb-2 sm:pb-0">
            {patient &&
              patient.map((patientInfo: PatientType) => (
                <HealthCareInfo
                  healthCare={patientInfo.healthcare}
                  key={patientInfo.healthcare.plan}
                />
              ))}
            {patient &&
              patient.map((patientInfo: PatientType) => (
                <EmergencyContact
                  emergencyContact={patientInfo.emergency_contact}
                  key={patientInfo.emergency_contact.name}
                />
              ))}
          </div>
        </section>
        <div className="col-span-12 flex flex-col justify-between gap-2 md:col-span-7">
          <div className="box-shadow-md flex h-full flex-col rounded-b-lg rounded-t-lg bg-white">
            <div
              className={`box-shadow-md grid grid-cols-6 gap-4 rounded-t-lg bg-primary-200 px-4 py-2 pb-2 text-sm font-medium text-white dark:bg-black-200 md:grid-cols-9 ${
                state?.isPanelVisible ? 'pr-4' : ''
              }`}
            >
              <span className="hidden items-center justify-end md:flex">
                <TagIcon
                  className="dark:text-grey"
                  style={{ fontSize: '16px' }}
                />
              </span>
              {entryTypes.map((entryType) => (
                <div
                  className={`flex items-center justify-center gap-2 font-bold dark:text-grey md:justify-end ${
                    entryType === t('entryTypes.alarm') ||
                    entryType === t('entryTypes.patient')
                      ? 'col-span-2'
                      : 'col-span-2 md:col-span-1'
                  }`}
                  key={entryType}
                  role="button"
                  tabIndex={0}
                >
                  {entryType}
                </div>
              ))}
            </div>

            <div className="flex h-full flex-col justify-between overflow-hidden dark:bg-black-100 dark:text-grey">
              <div
                className={`alarm-grid my-3 pb-4 sm:pb-0 ${
                  state?.isPanelVisible
                    ? 'overflow-auto md:overflow-hidden'
                    : ''
                }`}
              >
                {currentAlarms}
              </div>
              <div className="m-2 flex">{pageNums}</div>
            </div>
          </div>
          <div
            className={`box-shadow-md rounded-b-lg rounded-t-lg bg-white ${
              state?.isPanelVisible ? 'block' : 'hidden'
            }`}
          >
            <ControlPanel
              setClickedAlarm={setClickedAlarm}
              onSelectAlarm={handleSelectAlarm}
            />
          </div>
        </div>
        {toast && closedAlarm && (
          <Toast timer={timer} icon="close">
            {t('alarm')}{' '}
            <span className="font-bold">
              {' '}
              #
              {closedAlarm[0].id < 10
                ? `0${closedAlarm[0].id}`
                : closedAlarm[0].id}
            </span>{' '}
            {t('alarmHasBeenClosed')}
          </Toast>
        )}
        {modal.status && modal.name === 'followup' && (
          <Modal>
            <FollowupModal />
          </Modal>
        )}
      </main>
    </div>
  );
}

export default Monitoring;
