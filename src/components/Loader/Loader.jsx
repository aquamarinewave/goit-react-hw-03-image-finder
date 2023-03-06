import PropTypes from 'prop-types';
import { LoaderWrapper, Spinner } from './Loader.styled';
import {RotatingLines} from 'react-loader-spinner';
const Loader = () => {
    return (
        <LoaderWrapper>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
                />
        </LoaderWrapper>    
            
    );
}

export default Loader;