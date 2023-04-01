import { useField } from "formik";
import cn from "classnames";

const DropdownSelect = ({ label, name, className, options = [], ...props }) => {
  // console.log(`props`, props);
  const [field, meta, helpers] = useField({ name });
  // console.log(`field`, field);
  const { setValue } = helpers;
  function handleClick(event, value) {
    event.stopPropagation();
    const elem = document.activeElement;
    elem?.blur();
    setValue(value);
  }

  // options.filter((option) => option.value === field.value)[0].color;

  return (
    <div className="dropdown dropdown-right">
      <button tabIndex={0} type="button" className={`btn m-1 rounded-lg`}>
        {field.value}
      </button>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {options.map((option, index) => (
          <li
            key={index}
            onClick={(event) => handleClick(event, option.value)}
            className={`text-${option.color}`}
          >
            <a>
              <span>■</span>
              {option.label}
            </a>
          </li>
        ))}
      </ul>
      <label htmlFor={props.name} className="hidden">
        <select {...field}></select>
      </label>
    </div>
  );
};

export default DropdownSelect;
