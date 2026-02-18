export default function StatsAside({ styles, classChoice, classData, user }) {
  return (
    <div className={styles.charSheet_stats}>
      <div className={styles.showcase_stat}>
        {!user ? (
          <>
            <span>{classData[classChoice.class].stats.s1[0]}</span>
            <span>{classData[classChoice.class].stats.s1[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classData[classChoice.class].stats.s1[1]}/100`}
              />
            </div>
          </>
        ) : (
          <>
            <span>{classData[classChoice.class_name].stats.s1[0]}</span>
            <span>{classData[classChoice.class_name].stats.s1[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classData[classChoice.class_name].stats.s1[1]}/100`}
              />
            </div>
          </>
        )}
      </div>

      <div className={styles.showcase_stat}>
        {!user ? (
          <>
            <span>{classData[classChoice.class].stats.s2[0]}</span>
            <span>{classData[classChoice.class].stats.s2[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classData[classChoice.class].stats.s2[1]}/100`}
              />
            </div>{" "}
          </>
        ) : (
          <>
            <span>{classData[classChoice.class_name].stats.s2[0]}</span>
            <span>{classData[classChoice.class_name].stats.s2[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classData[classChoice.class_name].stats.s2[1]}/100`}
              />
            </div>{" "}
          </>
        )}
      </div>

      <div className={styles.showcase_stat}>
        {!user ? (
          <>
            <span>{classData[classChoice.class].stats.s3[0]}</span>
            <span>{classData[classChoice.class].stats.s3[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classData[classChoice.class].stats.s3[1]}/100`}
              />
            </div>
          </>
        ) : (
          <>
            <span>{classData[classChoice.class_name].stats.s3[0]}</span>
            <span>{classData[classChoice.class_name].stats.s3[1]}</span>
            <div className={styles.showcase_bar_bg}>
              <div
                className={`${styles.showcase_bar} ${styles.barbarian_gradient} w-${classData[classChoice.class_name].stats.s3[1]}/100`}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
