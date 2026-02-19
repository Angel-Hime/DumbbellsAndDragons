import * as Dialog from "@radix-ui/react-dialog";
import DeleteDialog from "./DeleteDialog";

export default async function PostForm({
  handle,
  trigger,
  description,
  prefill,
  username,
  styles,
}) {
  let formattedDate = null;
  let formattedTime = null;

  if (prefill) {
    formattedDate = prefill.post_created.toISOString().split("T")[0];
    const formatter = new Intl.DateTimeFormat(`en-UK`, {
      hour: `2-digit`,
      minute: `2-digit`,
    });
    formattedTime = formatter.format(prefill.post_date);
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className={styles.btn_primary}>{trigger}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.form_overlay} />
        <Dialog.Content className={styles.Content}>
          <Dialog.Title className={styles.section_title}>
            {trigger}
          </Dialog.Title>

          {prefill ? (
            <Dialog.Description className={styles.Description}>
              You posted at: {formattedTime} {formattedDate}
            </Dialog.Description>
          ) : null}

          <Dialog.Description className={styles.Description}>
            {description}
          </Dialog.Description>
          <form className={styles.user_form} action={handle}>
            <fieldset>
              <div>
                <input
                  name="post_id"
                  hidden
                  defaultValue={prefill?.post_id}
                ></input>
              </div>

              <label htmlFor="title"> Post Title: </label>
              <input
                name="title"
                placeholder="Name your tale..."
                defaultValue={prefill?.post_title}
              />

              <label htmlFor="content"> Post Content: </label>
              <textarea
                name="content"
                placeholder="Go on adventurer, share..."
                defaultValue={prefill?.post_content}
              />
            </fieldset>

            <div
              style={{
                display: "flex",
                marginTop: 25,
                justifyContent: "flex-end",
              }}
            >
              <div className="w-100 flex flex-row gap-10">
                {prefill ? (
                  <DeleteDialog
                    styles={styles}
                    post={prefill}
                    username={username}
                  />
                ) : null}

                <button
                  type="submit"
                  className={`${styles.btn_primary} self-end`}
                >
                  Update my tale!
                </button>
              </div>
            </div>
          </form>

          <Dialog.Close asChild>
            <button className={styles.btn_secondary} aria-label="Close">
              Cancel
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
