import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ onLoadMore, isLoading }) => {
  return (
    <Btn type="button" onClick={onLoadMore} disabled={isLoading}>
      Load more
    </Btn>
  );
};

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default Button;
