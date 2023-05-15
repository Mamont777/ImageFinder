import { ProgressBar } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    </LoaderBackdrop>
  );
};

export default Loader;
