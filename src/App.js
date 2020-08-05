import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end JS framework'
    },
    {
        title: 'Why use React?',
        content: 'React is popular for many engineers'
    },
    {
        title: 'How do you use React?',
        content: 'By creating components'
    }
]

const options = [
    {
        name: 'The Color Red',
        value: 'red'
    },
    {
        name: 'The Color Green',
        value: 'green'
    },
    {
        name: 'A shade of Blue',
        value: 'blue'
    }
];

export default () => {



    return (
        <div>
            <Translate />
        </div>
    );
};