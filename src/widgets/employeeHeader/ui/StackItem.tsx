import styles from './StackItem.module.scss';

export function StackItem({ title }: { title: string }) {
    return <div className={styles.container}>{title}</div>;
}
