import React from "react";
import style from "./FormsControls.module.css";
// import s from "./LoginForm.module.css";

export const Element =
  (Element) =>
  ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
      <div className={style.formControl + " " + (hasError ? style.error : "")}>
        <Element {...input} {...props} />
        {/* {hasError && <span> {meta.error} </span>} */}
      </div>
    );
  };

// export const Textarea = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;

//   return (
//     <div className={styles.formControl + "" + (hasError ? styles.error : "")}>
//       <div>
//         <textarea {...input} {...props} />
//       </div>
//       {hasError && <span className={styles.text}>{meta.error}</span>}
//     </div>
//   );
// };

// export const Input = ({ input, meta, ...props }) => {
//   const hasError = meta.touched && meta.error;

//   return (
//     <div className={styles.formControl + "" + (hasError ? styles.error : "")}>
//       <div>
//         <input {...input} {...props} />
//       </div>
//       {hasError && <span className={styles.text}>{meta.error}</span>}
//     </div>
//   );
// };
