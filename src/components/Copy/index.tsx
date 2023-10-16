import styles from './index.module.css';

type Props = {
  text: string;
};

const Copy = ({ text }: Props): JSX.Element => {
  return <div className={styles['copy-container']}>
    {text}
    {/* Todo
    <div className={styles['copy-icon']}/> */}
    </div>;
};
export default Copy;
