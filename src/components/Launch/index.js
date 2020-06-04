import React from 'react';

import { Container, Ship, Ships } from './styles';

function Launch({ launch }) {
    return (
        <Container>
            <h3>{ launch.mission_name }</h3>
            <p>{ launch.launch_date_local }</p>
            <p>{ launch.launch_site.site_name }</p>

            <p>{ launch.details }</p>

            <Ships>
                { launch.ships.map(ship => <Ship id={ ship.image } bg={ ship.image } />) }
            </Ships>
        </Container>
    );
}

export default Launch;