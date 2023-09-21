import { useState } from 'react';

import Output from './Output';

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const onClickHandler = () => {
        setChangedText(true);
    };

    return (
        <div>
            <h2>Hello World!</h2>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <Output>Changed!</Output>}
            <button onClick={onClickHandler}>Change text!</button>
        </div>
    );
};

export default Greeting;