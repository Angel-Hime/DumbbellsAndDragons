import BarbarianDetails from "@/components/ClassDetails/BarbarianDetails";
import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "@/app/choose-class/choose-class.module.css";
import PaladinDetails from "@/components/ClassDetails/PaladinDetails";
import RogueDetails from "@/components/ClassDetails/RogueDetails";

export default async function CompleteCharacter({ params }) {
  const classChoice = await params;

  return (
    <>
      <div className={styles.page_wrapper}>
        <SignUpHeader classChoice={classChoice} />

        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.section_header}>
              <h2 className={styles.section_title}>Complete Your Character</h2>
              <p className={styles.section_description}>
                You have chosen your path... now share your backstory
              </p>
            </div>

            {/* Example Class Details mock up  */}
            {classChoice.class === "1" ? (
              <>
                {" "}
                <BarbarianDetails styles={styles} />
              </>
            ) : classChoice.class === "2" ? (
              <>
                {" "}
                <RogueDetails styles={styles} />
              </>
            ) : classChoice.class === "3" ? (
              <>
                {" "}
                <PaladinDetails styles={styles} />
              </>
            ) : null}
          </div>
        </section>
      </div>
    </>
  );
}
