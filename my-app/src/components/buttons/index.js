import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";

import PopoverWrapper, { ButtonIcon } from "./style";
import { MoreVertical } from "@zef/components/icons";

const ButtonMore = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const handleVisibleChange = useCallback((visible) => {
    setVisible(visible);
  }, []);

  return (
    <PopoverWrapper
      overlayClassName="btn-more"
      conten={<div onClick={() => handleVisibleChange(false)}>{children}</div>}
      trigger="click"
      visible={visible}
      onVisibleChange={handleVisibleChange}
    >
      <ButtonIcon type="primary" shape="circle" icon={<MoreVertical />} />
    </PopoverWrapper>
  );
};

ButtonMore.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ButtonMore;
