import { useFormik } from "formik";

type FormikProps = {
  children: any;
  initialValues: Record<string, any>;
  validationSchema?: any;
  onSubmit: (values: any) => void;
};

export const Formik = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: FormikProps) => {
  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      {children({ values, handleChange, errors })}
    </form>
  );
};
