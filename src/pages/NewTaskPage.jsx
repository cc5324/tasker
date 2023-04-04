import { useNavigate, useLoaderData } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";

import { GithubAPI } from "@/API";
import { useTaskStore } from "@/stores/taskStore";
import { TextField, DropdownField, SelectField } from "@/component/base";

export async function repoLoader() {
  try {
    const response = await GithubAPI.GET("/user/repos");
    return response;
  } catch (error) {
    return redirect("/");
  }
}

const CreateForm = () => {
  const navigate = useNavigate();
  const stateOptions = useTaskStore((state) => state.stateOptions);
  const repos = useLoaderData();
  const repoOptions = repos.map(({ id, name, owner }) => {
    return { id, name, owner: owner.login };
  });

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          body: "",
          state: "Open",
          repoID: repoOptions[0].id,
        }}
        validationSchema={object({
          title: string().max(30, "不得多於 30 個字").required("必填"),
          body: string().min(10, "不得少於 30 個字").required("必填"),
          state: string()
            .oneOf(["Open", "In Progress", "Done"])
            .required("Required"),
          repoID: string().required(),
        })}
        onSubmit={async ({ title, body, state, repoID }) => {
          const { name, owner } = repoOptions.find(
            (repo) => repo.id === repoID
          );
          try {
            const response = await GithubAPI.POST(
              `/repos/${owner}/${name}/issues`,
              {
                title,
                body,
                labels: [state],
                assignee: "cc5324",
              }
            );
            alert(JSON.stringify(response, null, 2));
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-8">
            <div className="text-left">
              <DropdownField name="state" options={stateOptions} />
            </div>
            <SelectField label="Repo" name="repoID">
              {repoOptions.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </SelectField>
            <TextField
              label="Title"
              name="title"
              type="text"
              placeholder="Title"
            />
            <TextField label="body" name="body" type="textarea" rows={7} />
            <button type="submit" className="btn" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CreateForm;
