import SignUpHeader from "@/components/SignUpHeader/SignUpHeader";
import styles from "@/app/choose-class/choose-class.module.css";

import BarbarianChoice from "@/components/ClassDetails/BarbarianChoice";
import RogueChoice from "@/components/ClassDetails/RogueChoice";
import PaladinChoice from "@/components/ClassDetails/PaladinChoice";

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
                <BarbarianChoice styles={styles} />
              </>
            ) : classChoice.class === "2" ? (
              <>
                {" "}
                <RogueChoice styles={styles} />
              </>
            ) : classChoice.class === "3" ? (
              <>
                {" "}
                <PaladinChoice styles={styles} />
              </>
            ) : null}
          </div>
        </section>
      </div>
    </>
  );
}
