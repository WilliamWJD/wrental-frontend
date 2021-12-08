import { RouteProps, Route as ReactDomRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RProps extends RouteProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { user } = useAuth();

    return (
        <ReactDomRoute
            {...rest}
            render={({ location }) => {
                return isPrivate === !!user ?(
                    <Component/>
                ):(
                    <Redirect
                        to={{
                            pathname: isPrivate ? '/' : '/dashboard',
                            state:{from: location}
                        }}
                    />
                )
            }}
        />
    )
}

export { Route }