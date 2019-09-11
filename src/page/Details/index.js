import React, { useContext } from 'react';

import {Link} from 'react-router-dom'

import {ReposContext} from '../../contexts/reposContext'

function Details() {
    const { repositores, addRepo } = useContext(ReposContext)
    return <>
        <h1><Link to="/">Pagina inicial</Link></h1>

        <h3 onClick={addRepo}>{addRepo && addRepo[0].name}</h3>
    </>
}

export default Details