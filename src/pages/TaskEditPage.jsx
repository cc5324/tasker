import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";

import { GithubAPI } from "@/API";
import { useTaskStore } from "@/stores/taskStore";
import { TextField, DropdownField } from "@/component/base";

const EditForm = () => {
  const navigate = useNavigate();
  const stateOptions = useTaskStore((state) => state.stateOptions);
  const { title, body, labels } = useLoaderData();

  let [searchParams, setSearchParams] = useSearchParams();
  const { owner, repo, number } = Object.fromEntries(searchParams.entries());

  return (
    <>
      <Formik
        initialValues={{
          title: title,
          body: body,
          state: labels[0]?.name ?? "Open",
        }}
        validationSchema={object({
          title: string().max(30, "不得多於 30 個字").required("必填"),
          body: string().min(10, "不得少於 30 個字").required("必填"),
          state: string()
            .oneOf(["open", "in progress", "done"])
            .required("Required"),
        })}
        onSubmit={async ({ title, body, state }) => {
          try {
            const response = await GithubAPI.PATCH(
              `/repos/${owner}/${repo}/issues/${number}`,
              { title, body, labels: [state] }
            );
            console.log(`res`, response);
            navigate(
              `/task/:${task.id}?owner=${owner}&repo=${repo}&number=${number}`,
              { replace: true }
            );
          } catch (error) {
            console.log(error);
            navigate("/tasks", { replace: true });
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-8">
            <div className="text-left">
              <DropdownField name="state" options={stateOptions} />
            </div>
            <TextField
              label="Title"
              name="title"
              type="text"
              placeholder="Title"
            />
            <TextField label="body" name="body" type="textarea" rows={7} />
            <div className="flex gap-3 justify-center mt-4">
              <button type="submit" className="btn" disabled={isSubmitting}>
                Submit
              </button>
              <button
                type="button"
                className="btn"
                disabled={isSubmitting}
                onClick={() => navigate(-1)}
              >
                Cancel
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default EditForm;
