import { useUnit } from 'effector-react';
import arrowDown from '../../../app/assets/arrow_down.svg';
import arrowUp from '../../../app/assets/arrow_up.svg';
import { stack } from '../../../shared/constants';
import { useOutside } from '../../../shared/hooks/useOutside';
import {
    $stack,
    addToStack,
    removeFromStack,
} from '../../../shared/store/filters';
import styles from './FilterMultiple.module.scss';

export function FilterMultiple({ title }: { title: 'Стек технологий' }) {
    const filter = useUnit($stack);

    const { ref, isShow, setIsShow } = useOutside();

    return (
        <div className={styles.container} ref={ref}>
            <button
                onClick={() => setIsShow(open => !open)}
                className={
                    styles.button +
                    ' ' +
                    (isShow && 'text-[#155DA4] font-medium')
                }
            >
                {title}{' '}
                <img
                    className="min-[320px]:w-[10px] min-[1280px]:w-[16px]"
                    src={isShow ? arrowUp : arrowDown}
                />
            </button>
            {isShow && (
                <div className={styles.options}>
                    {Object.entries(stack).map(([key, name]) => (
                        <label id={key} key={key} className={styles.label}>
                            {name}
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={filter.some(t => t === key)}
                                name={key}
                                id={key}
                                onChange={e => {
                                    !e.target.checked
                                        ? removeFromStack(
                                              key as keyof typeof stack,
                                          )
                                        : addToStack(key as keyof typeof stack);
                                }}
                            />
                        </label>
                    ))}
                </div>
            )}
        </div>
    );
}
