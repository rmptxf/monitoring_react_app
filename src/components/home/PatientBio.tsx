import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import Patient from '../../types/PatientType';
import Doctors from '../../data/doctors';
import useBreakpoint from '../../hooks/useBreakpoint';

interface PatientBioProps {
  profile: Patient['profile'] | null;
}

function PatientBio({ profile }: PatientBioProps) {
  const profilePhoto = new URL(
    `../../assets/img/patients/${
      profile ? profile.photo ?? 'placeholder.png' : ''
    }`,
    import.meta.url
  ).href;

  const nurse = new URL(
    `../../assets/img/illustrations/nurse.png`,
    import.meta.url
  ).href;

  const breakpoint = useBreakpoint();

  const getCorrespondingDoctor = () => {
    if (profile) {
      return Doctors.filter((doctor) => doctor.id === profile.doctor)[0].name;
    }
    return null;
  };

  return (
    <>
      <div className="box-shadow-md rounded-t-lg bg-primary-200 p-2 text-sm font-bold text-white dark:bg-black-200 dark:text-grey">
        Patient
      </div>
      {profile && (
        <div className="flex flex-col gap-1 p-2 py-3">
          <h2 className="font-extrabold text-primary-200 dark:text-grey">
            {profile.name}
          </h2>
          <div className="profile-block flex justify-center rounded-t-lg px-2">
            <img
              src={profilePhoto}
              alt={profile.name}
              className="photo box-shadow-md h-24 object-fill"
            />
          </div>
          <div className="mb-2 text-center text-sm md:text-left">
            <div className="grid grid-cols-3 gap-y-2 md:grid-cols-2">
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  Name
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">{profile.name}</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  Date of Birth
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">
                    {profile.date_of_birth}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  Gender
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">
                    {profile.gender === 'Male' ? (
                      <MaleIcon style={{ fontSize: '17px' }} />
                    ) : (
                      <FemaleIcon style={{ fontSize: '17px' }} />
                    )}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  Age
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">{profile.age}</span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  Room
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">
                    #{+profile.room < 10 ? `0${profile.room}` : profile.room}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-xs font-bold text-primary-200 dark:text-grey">
                  Doctor
                </div>
                <div className="text-xs text-black-100 dark:text-grey">
                  <span className="dark:bg-black-100">
                    {getCorrespondingDoctor()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {!profile && (
        <div className="profile-block empty flex h-full flex-col items-center justify-center gap-1 rounded-t-lg p-4">
          <img src={nurse} alt="Nurse" />
          <p className="py-4 text-center dark:text-grey">
            Click on any active alarm{' '}
            {breakpoint === 'sm' || breakpoint === 'md'
              ? 'below'
              : 'on the right'}
            , patient info will be displayed here.
          </p>
        </div>
      )}
    </>
  );
}

export default PatientBio;
