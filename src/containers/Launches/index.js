import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_PAST_LAUNCHES } from './../../graphql/getPastLaunches';

import Launch from './../../components/Launch';
import { Container } from './styles';

function Launches() {
    const { loading, error, data } = useQuery(GET_PAST_LAUNCHES, { 
        variables: { limit: 10 }
    });

    console.log(loading, error, data);
    return (
        <Container>
            { loading && <p>Loading...</p>}
            { data && data.launchesPast.map(launch => <Launch key={ launch.id } launch={ launch } />)}
        </Container>
    );
}

export default Launches;