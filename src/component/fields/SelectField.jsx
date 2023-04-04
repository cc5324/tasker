import { useField } from "formik";

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-control w-full">
      <label htmlFor={props.name} className="label">
        <span className="label-text">{label}</span>
      </label>
      <select
        className={`select select-bordered w-full`}
        {...field}
        {...props}
      />
      <label className="label">
        <span className="label-text-alt  min-h-[1rem] text-error">
          {meta.touched && meta.error ? meta.error : null}
        </span>
      </label>
    </div>
  );
};

export default SelectField;
