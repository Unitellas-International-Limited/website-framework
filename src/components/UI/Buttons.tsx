import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import type { LinkProps } from "next/link";
import classNames from "classnames";
import Link from "next/link";

type Type = "button" | "submit" | "reset" | "link";

type BaseButtonTypeProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type BaseLinkTypeProps = LinkProps & {
  color?: string;
  className?: string;
};

type BaseButtonProps = {
  type?: Type;
  text: string;
  // bgColor?: string;
  // loading?: boolean;
  //   icon?: "right-arrow" | "send" | ReactElement;
  //   iconPlacement?: "left" | "right";
} & (BaseButtonTypeProps | BaseLinkTypeProps);

export function BaseButton({
  type,
  text,
  color = "#3A6AD4",
  className,
  ...props
}: BaseButtonProps) {
  if (type === "link") {
    return (
      <Link {...(props as BaseLinkTypeProps)} className={classNames(className)}>
        {text}
      </Link>
    );
  }

  return (
    <button
      {...(props as BaseButtonTypeProps)}
      className={classNames(
        "flex h-16 w-80 items-center justify-center rounded bg-black/50 text-white",
        className,
      )}
    >
      {text}
    </button>
  );
}
