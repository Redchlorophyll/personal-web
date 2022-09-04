import React, { useEffect } from 'react';
import Button from '@/components/common/Button/Index';
import ToggleMode from '@/components/common/ToggleMode/Index';
import { localStorageTheme } from '@/stores/theme';
import { useDispatch } from 'react-redux';
import Tooltip from '@/components/common/Tooltip/TooltipWrapper';


export default function Linky() {
    const dispatch = useDispatch();

    useEffect((): void => {
        dispatch(localStorageTheme());
      }, []);

    return (
        <div>
            <h1 className="card">Hello</h1>
            <Button />
            <ToggleMode />
            <div className='flex justify-center'>
                <Tooltip 
                tooltipContent={'ini adalah tooltip'}
                direction={'top'}
                >
                    <span>Hover me here please! dad  ad a da da da a da a  a a a da a dada  dawd awdad ad aw awd awd wa</span>
                </Tooltip>
            </div>
        </div>
    );
}