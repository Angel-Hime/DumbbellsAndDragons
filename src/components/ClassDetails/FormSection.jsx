import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function FormSection({
  styles,
  classChoice,
  classData,
  user,
  searchParams,
}) {
  async function handleCompleteCharacterForm(formData) {
    "use server";
    console.log("submit");
    const { age, gender, weight, bio } = Object.fromEntries(formData);
    console.log(age, gender, weight, bio);

    // value model for user data
    // 'user_39nCxdy8gb4l4m2Z9RML8n8cyoS',
    // 'TestBarbarian',
    // 'male',
    // 25,
    // 80,
    // 'Test user for development',
    // CURRENT_DATE,
    // 1

    // value model for progress
    //'user_39nCxdy8gb4l4m2Z9RML8n8cyoS',
    // 0,
    // 1

    // insert progression row
    db.query(
      `INSERT INTO dd_progression (user_id_fk, total_xp, level) VALUES ($1, $2, $3)`,
      [user?.id, 0, 1],
    );

    db.query(
      `INSERT INTO dd_users (clerk_id, username, gender, age, weight, bio, classes_id_fk) VALUES ($1, $2, $3, $4, $5)`,
      [user?.id, user?.username, gender, age, weight, bio, classChoice],
    );
    console.log("Success");

    // revalidatePath(`/dashboard`);
    // redirect(`/dashboard`);
  }

  return (
    <form
      className={styles.charSheet_form}
      action={handleCompleteCharacterForm}
    >
      <section className={styles.user_form}>
        <fieldset className="flex flex-row justify-around content-center align-middle p-4 text-center ">
          <legend className={styles.class_showcase_name}>
            Describe Yourself...
          </legend>

          <div className="flex flex-col gap-3">
            <label htmlFor="age">Age</label>
            <input name="age" type="number" min={0} max={99} required />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              type="text"
              defaultValue={"Select..."}
              required
            >
              <option disabled>Select...</option>
              <option value={"female"}>Female</option>
              <option value={"male"}>Male</option>
              <option value={"not specified"}>Not Specified</option>
            </select>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="weight">Weight</label>
            <input
              className="placeholder:italic placeholder:"
              name="weight"
              type="number"
              required
              placeholder="         kg"
            />
          </div>
        </fieldset>
        <fieldset className="flex flex-col content-center align-middle gap-2 p-4">
          <label htmlFor="bio">Tell us your story...</label>
          <textarea
            className="placeholder:italic"
            placeholder="Share the tale of your past and your goals on this earthly plane..."
            name="bio"
            required
          />
        </fieldset>
      </section>

      <div className={styles.class_card}>
        <h3 className={styles.class_showcase_name}>Class Features</h3>
        <h4 className={styles.class_showcase_tagline}>
          {classData[classChoice.class].details.title}
        </h4>
        <p className={styles.showcase_list}>
          {classData[classChoice.class].details.tag1}
        </p>
        <p className={styles.showcase_list}>
          {classData[classChoice.class].details.tag2}
        </p>
      </div>

      <button type="submit" className={styles.btn_primary}>
        Continue
        <svg className="cl-buttonArrowIcon self-center h-2">
          <path
            className="self-center"
            fill="currentColor"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m7.25 5-3.5-2.25v4.5L7.25 5Z"
          ></path>
        </svg>
      </button>
    </form>
  );
}
