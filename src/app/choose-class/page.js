import BarbarianDetails from "@/components/ClassDetails/BarbarianDetails";
import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "./choose-class.module.css";

export default async function ChooseClass({ params, searchParams }) {
  const classChoice = await searchParams;
  const page = await params;

  // I need to set a variable which will be used the link for the continue button

  return (
    <>
      <div className={styles.page_wrapper}>
        <SignUpHeader page={page} />

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Choose Your Class</h2>
              <p className={styles.section_description}>
                Each class offers unique training programs and progression
              </p>
            </div>

            {/* Class Cards - Static for now we can add modals later or pages /about ... something to discuss */}
            <div className={styles.class_selector}>
              <div className={styles.class_card}>
                <div className={styles.class_icon}>🪓</div>
                <h3 className={styles.class_name}>Barbarian</h3>
                <p className={styles.class_tagline}>Master of Raw Strength</p>
                <p className={styles.class_description}>
                  Dominate with heavy compound lifts and progressive overload
                </p>
              </div>

              <div className={styles.class_card}>
                <div className={styles.class_icon}>⚔️</div>
                <h3 className={styles.class_name}>Rogue</h3>
                <p className={styles.class_tagline}>Agility & Control</p>
                <p className={styles.class_description}>
                  Master bodyweight movements and calisthenics
                </p>
              </div>

              <div className={styles.class_card}>
                <div className={styles.class_icon}>🗡️🛡️</div>
                <h3 className={styles.class_name}>Paladin</h3>
                <p className={styles.class_tagline}>Balanced Warrior</p>
                <p className={styles.class_description}>
                  Combine strength training with endurance work
                </p>
              </div>
            </div>
            {/* Example Class Details mock up  */}
            {classChoice === "barbarian" ? (
              <BarbarianDetails styles={styles} />
            ) : null}
          </div>
        </section>
      </div>
    </>
  );
}
