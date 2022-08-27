import React, { useEffect } from 'react';
import Button from '@/components/common/Button/Index';
import ToggleMode from '@/components/common/ToggleMode/Index';
import { localStorageTheme } from '@/stores/theme';
import { useDispatch } from 'react-redux';

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
        </div>
    );
}