// @flow
import React from "react";

import Modal from "./Modal";
import * as Layout from "./Layout";
import Loader from "./Loader";

const LoaderFullscreen = () => {
  return (
    <Modal
      isOpen={true}
      contentLabel="Loading"
      shouldCloseOnOverlayClick={false}
      overlayColor="white"
    >
      <Layout.HCenter>
        <Loader size="large" />
      </Layout.HCenter>
    </Modal>
  );
};

export default LoaderFullscreen;
