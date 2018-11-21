// @flow
import React from "react";
import styled from "styled-components";
import ReactModal from "react-modal";

import { theme, mediaQuery } from "../theme";

type Props = {
  isOpen?: boolean,
  className?: string,
  contentLabel?: string,
  shouldCloseOnOverlayClick?: boolean,
  handleCloseModal?: () => void,
  children: React$Element<*>,
  overlayColor?: string
};

function ReactModalAdapter({
  className,
  modalClassName,
  overlayClassName,
  ...props
}) {
  return (
    <ReactModal
      className={modalClassName}
      overlayClassName={overlayClassName}
      portalClassName={className}
      {...props}
    />
  );
}

const ModalStyled = styled(ReactModalAdapter).attrs({
  overlayClassName: "overlay",
  modalClassName: "modal"
})`
  position: fixed;
  z-index: ${theme.zIndex.modal};

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    background: ${props =>
      props.overlayColor ? props.overlayColor : theme.colors.modal};
    align-items: center;
  }

  .modal {
    /* styles for the modal border and bg color should come from the content (e.g. widget) */
    overflow: hidden;
    width: 100%;
    max-width: 48rem;
    margin: ${theme.spaces.base} ${theme.spaces.base};
    outline: 0;

    ${mediaQuery.m`
      width: auto;
      margin: 0;
    `};
  }
`;

const Modal = ({
  isOpen,
  contentLabel,
  shouldCloseOnOverlayClick,
  handleCloseModal,
  children,
  ...rest
}: Props) => {
  return (
    <>
      {isOpen && (
        <ModalStyled
          isOpen={isOpen}
          onRequestClose={handleCloseModal}
          contentLabel={contentLabel}
          shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
          {...rest}
        >
          {children}
        </ModalStyled>
      )}
    </>
  );
};

Modal.defaultProps = {
  isOpen: false,
  contentLabel: "Modal",
  shouldCloseOnOverlayClick: true
};

export default Modal;
