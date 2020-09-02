import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { prop } from "styled-tools";

export const Modal = ({ children, isOpen, onClose, w, h, maxW, maxH }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (ref.current && isOpen) {
      disableBodyScroll(ref.current);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (ref.current) {
        enableBodyScroll(ref.current);
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalContainer ref={ref} tabIndex={-1}>
      <ModalContent
        w={w}
        h={h}
        maxW={maxW}
        maxH={maxH}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </ModalContent>
    </ModalContainer>,
    document.body.appendChild(document.createElement("div"))
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 601;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  position: relative;
  cursor: default;
  overflow: auto;
  width: ${prop("w", "unset")};
  height: ${prop("h", "unset")};
  max-width: ${prop("maxW", "unset")};
  max-height: ${prop("maxH", "unset")};
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.3);
  background-color: rgba(22, 23, 35, 1);
  border-radius: 5px;
`;
