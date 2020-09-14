import React, { useCallback } from "react";
import { PageHeader } from "antd";
import { useHistory } from "react-router-dom";

const Detail = () => {
  const history = useHistory;

  const onBack = useCallback(() => {
    history.push(`/user/`);
  });
  return (
    <PageHeader
      className="site-page-header"
      onBack={onBack}
      title="Title"
      subTitle="This is a subtitle"
    />
  );
};

export default Detail;
