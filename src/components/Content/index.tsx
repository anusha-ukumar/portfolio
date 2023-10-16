import styles from './index.module.css';

type Props = {
    children: JSX.Element;
}

const Content = ({ children }: Props) => {
    return (
        <div className={styles['content-container']}>
            {children}
        </div>
    )
}

export default Content;