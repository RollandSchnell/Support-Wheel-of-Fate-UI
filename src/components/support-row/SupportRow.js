import React from 'react'

export const SupportRow = props => {
    const {day, engineersForSupport} = props;

    const renderSupportDate = engineersForSupport => {
        return engineersForSupport.map(engineer => <span className={'support-engineer'}
                                                         key={Math.random()}>{engineer}</span>);
    };

    const component = engineersForSupport ?
        <div className={'support-row-container'} key={Math.random()}>
            <div className={'day-text'}> {day}</div>
            <div className={'support-engineers'}>
                {renderSupportDate(engineersForSupport)}
            </div>
        </div> : null;

    return ([component]);
};