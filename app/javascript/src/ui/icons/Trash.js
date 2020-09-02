import React from "react";

export const TrashIcon = (props) => {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="var(--icon-primary-color, currentColor)" fillRule="evenodd">
        <path d="M0 0h16v16H0z" fill="none" />
        <path d="M3.796 12.173l.006.146c.072.869.782 1.55 1.647 1.55h5.09c.914 0 1.654-.76 1.654-1.696l-.001-7.857H3.796v7.857zm4.198-6.269c.273 0 .5.204.544.471h.007V11.6l-.007.091a.556.556 0 01-.544.474.558.558 0 01-.55-.565V6.376a.57.57 0 01.55-.472zM9.28 2.131H6.892l-.09.007a.562.562 0 00-.46.558l-.001.489h3.49v-.489l-.007-.092a.556.556 0 00-.544-.473zM2.694 4.316h-.67l-.082-.01c-.214-.047-.376-.278-.376-.555 0-.312.205-.566.459-.566h3.214v-.489l.006-.146C5.318 1.68 6.027 1 6.892 1H9.28c.913 0 1.653.76 1.653 1.696v.489h3.03l.083.01c.214.047.377.278.377.556 0 .312-.206.565-.46.565h-.67l.002 7.857-.005.172c-.083 1.41-1.172 2.541-2.54 2.647V15H5.24c-1.424-.118-2.546-1.338-2.546-2.827V4.316z" />
      </g>
    </svg>
  );
};
