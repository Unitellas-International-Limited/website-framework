import { motion, type HTMLMotionProps } from "framer-motion";
import Link, { type LinkProps } from "next/link";
import { ClipLoader } from "react-spinners";
import classNames from "classnames";

type Type = "button" | "submit" | "reset" | "link";

type BaseButtonTypeProps = HTMLMotionProps<"button"> & {
  color?: string;
  className?: string;
  loading?: boolean;
};

type BaseLinkTypeProps = LinkProps & {
  color?: string;
  className?: string;
  loading?: boolean;
};

type BaseButtonProps = {
  type?: Type;
  size?: "md" | "lg" | "full";
  text: string;
} & (BaseButtonTypeProps | BaseLinkTypeProps);

const motionProps = {
  initial: {
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
  },
  whileHover: { scale: 1.01, boxShadow: "0 12px 18px -3px rgb(0 0 0 / 0.1)" },
  whileTap: { scale: 0.99, boxShadow: "0 8px 12px -2px rgb(0 0 0 / 0.1)" },
};

export function BaseButton({
  size = "md",
  type,
  text,
  className,
  ...props
}: BaseButtonProps) {
  const classes = classNames(
    "flex items-center justify-center rounded border bg-black/50 text-white cursor-pointer",
    {
      "h-14 w-64": size === "md",
      "h-16 w-80": size === "lg",
      "h-12 w-full sm:h-16": size === "full",
    },
    className,
  );

  if (type === "link") {
    return (
      <Link legacyBehavior {...(props as BaseLinkTypeProps)}>
        <motion.a {...motionProps} className={classes}>
          {text}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      {...motionProps}
      {...(props as BaseButtonTypeProps)}
      className={classes}
    >
      {text}
    </motion.button>
  );
}

export function BaseButtonWithColor({
  size = "md",
  type,
  text,
  className,
  loading,
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
    <motion.button
      {...motionProps}
      {...(props as BaseButtonTypeProps)}
      className={classNames(
        "flex items-center justify-center rounded border bg-uni-blue text-white",
        {
          "h-14 w-64": size === "md",
          "h-16 w-80": size === "lg",
          "h-12 w-full sm:h-16": size === "full",
        },
        className,
      )}
    >
      {loading !== true && text}
      {loading === true && <ClipLoader size={13} color="#ffffff" />}
    </motion.button>
  );
}
