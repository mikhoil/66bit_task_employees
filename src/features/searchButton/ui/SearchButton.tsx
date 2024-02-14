import { useUnit } from 'effector-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    $gender,
    $name,
    $position,
    $stack,
} from '../../../shared/store/filters';
import styles from './SearchButton.module.scss';

export function SearchButton() {
    const navigate = useNavigate();
    const name = useUnit($name);
    const position = useUnit($position);
    const gender = useUnit($gender);
    const stack = useUnit($stack);
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        window.addEventListener('keypress', e => {
            if (e.key === 'Enter') ref.current?.click();
        });
    }, []);

    return (
        <button
            ref={ref}
            className={styles.button}
            onClick={() => {
                navigate(
                    `?${name ? '&name=' + name : ''}${
                        position ? '&position=' + position : ''
                    }${gender ? '&gender=' + gender : ''}${
                        stack.length !== 0 ? '&stack=' + stack.join(',') : ''
                    }`,
                );
            }}
        >
            Найти
        </button>
    );
}
