import { Suspense } from 'react';
import PropTypes from 'prop-types';
import loader from '../images/loader.gif';

const LazySuspense = ({ component: Component, ...rest }) => {
  return (
    <Suspense fallback={<img src={loader} alt='Loader'></img>}>
      <Component {...rest} />
    </Suspense>
  )
}

LazySuspense.propTypes = {
  component: PropTypes.func.isRequired
}

export default LazySuspense;