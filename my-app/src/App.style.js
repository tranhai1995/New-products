import { createGlobalStyle } from "styled-components";

import "antd/lib/style/themes/default.less";
import "antd/dist/antd.less";

export default createGlobalStyle`
.ant-form {
  .zef-input {
    padding: 8px 16px;
    border-left: 3px solid #00c6d7;
  }
}

.ant-modal-full {
  &&& {
    .ant-modal-confirm-content {
      margin-left: 0 !important;
    }
  }
}

.modal-call {
  &&& {
    .ant-modal-confirm-btns {
      display: flex;
      flex-direction: row-reverse;
      
      button + button {
        margin-left: 0;
        margin-right: 8px;
      }
    }
  }
}

.btn-more {
  &&& {
    padding-bottom: 0;
    
    .ant-popover-inner {
      background-color: transparent;
      box-shadow: none;
    }
  
    .ant-popover-arrow {
      display: none;
    }
  }
}
`;
