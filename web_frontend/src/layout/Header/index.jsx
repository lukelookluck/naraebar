import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const Header = () => {
    let history = useHistory();

    const onClickRedirectPathHandler = name => e => {
        window.scrollTo(0, 0);
        history.push(name);
    };

    return (
        <div>
            <div className='logo' onClick={onClickRedirectPathHandler('/Community')}>HOMEBAR</div>
            <header>
                <div className='hdiv' onClick={onClickRedirectPathHandler('/Community')}>Community</div>
                <div className='hdiv' onClick={onClickRedirectPathHandler('/MyBar')}>MyBar</div>
            </header>
        </div>
    );
};

export default Header;