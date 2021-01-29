// @flow 
import * as React from 'react';
import {useRouter} from 'next/dist/client/router';
type Props = {
    
};
const xptoId = (props: Props) => {
    const {query} = useRouter();
    
    return (
        <div>
            <h1>Test param id - {query.id}</h1>
        </div>
    );
};

export default xptoId;