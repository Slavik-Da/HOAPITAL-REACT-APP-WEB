import React from 'react';
import { StuffHeader } from './components/StuffHeader/StuffHeader';
import { StuffItems } from './components/StuffItems/StuffItems';

export const Stuff = () => {
    return (
        <section className="page-stuff">
            <StuffHeader/>
            <StuffItems/>
        </section>
    )
}
