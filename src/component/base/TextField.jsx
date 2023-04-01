import { useField } from "formik";
import cn from "classnames";

const TextField = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="form-control w-full">
      <label htmlFor={props.name} className="label">
        <span className="label-text">{label}</span>
      </label>
      {props.type === "textarea" ? (
        <textarea
          className={cn(
            "textarea textarea-bordered",
            {
              "textarea-error": meta.touched && meta.error,
            },
            className
          )}
          {...field}
          {...props}
        />
      ) : (
        <input
          className={cn(
            "input input-bordered w-full",
            {
              "input-error": meta.touched && meta.error,
            },
            className
          )}
          {...field}
          {...props}
        />
      )}
      <label className="label">
        <span className="label-text-alt min-h-[1rem] text-error">
          {meta.touched && meta.error ? meta.error : null}
        </span>
      </label>
    </div>
  );
};

export default TextField;
