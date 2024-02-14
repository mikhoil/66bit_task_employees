import { useUnit } from 'effector-react';
import arrowDown from '../../../app/assets/arrow_down.svg';
import arrowUp from '../../../app/assets/arrow_up.svg';
import { genders, positions } from '../../../shared/constants';
import { useOutside } from '../../../shared/hooks/useOutside';
import {
    $gender,
    $position,
    setGender,
    setPosition,
} from '../../../shared/store/filters';
import styles from './FilterSingle.module.scss';

export function FilterSingle({ title }: { title: 'Должность' | 'Пол' }) {
    const filter = useUnit(title === 'Пол' ? $gender : $position);

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
                    {Object.entries(title === 'Пол' ? genders : positions).map(
                        ([key, name]) => (
                            <label id={key} key={key} className={styles.label}>
                                {name}
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={key === filter}
                                    name={key}
                                    id={key}
                                    onChange={e => {
                                        title === 'Пол'
                                            ? setGender(
                                                  !e.target.checked
                                                      ? undefined
                                                      : (key as keyof typeof genders),
                                              )
                                            : setPosition(
                                                  !e.target.checked
                                                      ? undefined
                                                      : (key as keyof typeof positions),
                                              );
                                    }}
                                />
                            </label>
                        ),
                    )}
                </div>
            )}
        </div>
    );
}
