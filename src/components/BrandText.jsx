import { Fragment } from "react";

export default function BrandText({ children = "ARO" }) {
  return children.split("ARO").map((part, index) => (
    <Fragment key={index}>
      {index > 0 && (
        <span
          className="inline-aro"
          role="img"
          aria-label="ARO"
          style={{ maskImage: `url(${process.env.PUBLIC_URL}/images/aro-wordmark.svg)` }}
        />
      )}
      {part}
    </Fragment>
  ));
}
