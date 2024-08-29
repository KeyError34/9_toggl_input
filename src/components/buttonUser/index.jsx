import styles from './styles.module.scss';

function UserButton({
  color,
  padding,
  fontsize,
  backgroundColor,
  title,
}) {
  return (
    <button
      className={styles.btnContainer}
      style={{
        color: color,
        padding: padding,
        fontSize: fontsize,
        backgroundColor: backgroundColor,
      }}
    >
      {' '}
      {title}
    </button>
  );
}
export default UserButton;
