import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeleteDialog({ post, styles }) {
  async function handleDelete(formData) {
    "use server";

    const post_id = formData.get("post_id");

    console.log(`deleting post...`);
    console.log(post_id);
    db.query(`DELETE FROM dd_post WHERE post_id = $1`, [post_id]);

    revalidatePath(`/tavern`);
    redirect(`/tavern`);
  }

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button className={styles.btn_delete}>Delete Post</button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={styles.delete_overlay} />
        <AlertDialog.Content className={styles.Content}>
          <AlertDialog.Title className={styles.section_title}>
            {post.username.toUpperCase()}, do you wwish to remove your tale from
            our books?
          </AlertDialog.Title>
          <AlertDialog.Description className={styles.Description}>
            You can delete it here...
          </AlertDialog.Description>
          <div style={{ display: "flex", gap: 25, justifyContent: "flex-end" }}>
            <AlertDialog.Cancel asChild>
              <button className={styles.btn_secondary}>Cancel</button>
            </AlertDialog.Cancel>
            <form action={handleDelete}>
              <input
                name="post_id"
                defaultValue={post?.post_id}
                type="hidden"
              />
              <button className={styles.btn_delete} type="submit">
                I Promise I Want To Delete This!
              </button>
            </form>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}
