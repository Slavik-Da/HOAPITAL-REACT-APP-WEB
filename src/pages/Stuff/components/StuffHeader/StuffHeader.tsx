import React from 'react';

export const StuffHeader = () => {
    return (
            <div className="pannel-header-line">
                <div className= "tab-line">
                    <div>Doctors</div>
                    <div className="tab-line__active">Assistants</div>
                    <div className="tab-line__active">Receptionists</div>
                </div>
                <button>Add new</button>
            </div>
    )
}
