import { useState } from "react";

import styles from "./Checkbox.module.css";

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

const Checkbox = ({ label, checked, onChange }: CheckboxProps): JSX.Element => {
  // const [isComplete, setIsComplete] = useState(false);
  // console.log(isComplete);
  // () => { setIsComplete((complete) => !complete) }
    
  return (
    <div className={styles.checkboxContainer}>
      <label className={styles.checkboxLabel}>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
      </label>
      <h4 className={styles.title}>{label}</h4>
    </div>
  );
};

export default Checkbox;
