import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { object, string } from "yup";

import { GithubAPI } from "@/API";
import { useTaskStore } from "@/stores/taskStore";
import { TextField, DropdownField } from "@/component/base";

const CreateForm = () => {
  const stateOptions = useTaskStore((state) => state.stateOptions);
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          title: "",
          body: "",
          state: "Open",
        }}
        validationSchema={object({
          title: string().max(30, "不得多於 30 個字").required("必填"),
          body: string().min(10, "不得少於 30 個字").required("必填"),
          state: string()
            .oneOf(["Open", "In Progress", "Done"])
            .required("Required"),
        })}
        onSubmit={async ({ title, body, state }) => {
          try {
            const response = await GithubAPI.POST(
              `/repos/cc5324/cotea/issues`,
              {
                title,
                body,
                labels: [state],
                assignee: "cc5324",
              }
            );
            alert(JSON.stringify(response, null, 2));
            navigate("/tasks");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="p-8">
            <DropdownField
              name="state"
              options={stateOptions}
              // options={["Open", "In Progress", "Done"]}
            />
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
