import React from 'react';
import { LoadingIndicator } from '../util/LoadingIndicator/LoadingIndicator';

interface ILoadingIndicatorProps {
    isLoading: boolean,
};

const loadingIndicator = <P extends Object>(WrappedComponent: React.ComponentType<P>) => (props: P & ILoadingIndicatorProps) => {
    return props.isLoading ? <LoadingIndicator /> : <WrappedComponent {...props as P} />;
}

export default loadingIndicator;