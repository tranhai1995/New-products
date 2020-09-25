import React, { useCallback, useState } from "react";
import { Steps, Button, message, Form } from "antd";
import SecondContent from "@zef/pages/detail";
import { Formik } from "formik";
import validationSchema from "@zef/pages/detail/schema";

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: <SecondContent />,
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const Contact = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent(current + 1);
  };

  const handlePrevious = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = useCallback(() => {
    console.log("aaa");
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema[current]}
      >
        {({ isValid, submitForm }) => (
          <Form labelAlign="left">
            <Steps current={current}>
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
            <div>{steps[current].content}</div>
            <div>
              {current < steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => {
                    submitForm().then(() => {
                      if (isValid) {
                        handleNext();
                      }
                    });
                  }}
                >
                  Next
                </Button>
              )}
              {current === steps.length - 1 && (
                <Button
                  type="primary"
                  onClick={() => message.success("Processing complete!")}
                >
                  Done
                </Button>
              )}
              {current > 0 && (
                <Button style={{ margin: "0 8px" }} onClick={handlePrevious}>
                  Previous
                </Button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const initialValues = { name: "", password: "" };

export default Contact;
