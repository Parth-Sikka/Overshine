import Link from "next/link";
import { ReactElement } from "react";

export default function Button({
    props,
}: {
    props: {
        text: string;
        outlined?: boolean;
        fullWidth?: boolean;
        isLink?: boolean;
        Link?: string;
        onClick?: () => void;
        variant?: string;
        isSubmitButton?: boolean;
        className?: string;
    };
}) {
    return (
        <>
            {props.isLink ? (
                <Link href={props.Link || "/"}>
                    <button
                        type={props.isSubmitButton ? "submit" : "button"}
                        className={`capitalize ${
                            props.outlined === true
                                ? "outline outline-1 outline-primaryColor text-primaryColor"
                                : "bg-primaryColor text-white"
                        } px-7 py-2 ${props.fullWidth ? "w-full" : "w-fit"} ${
                            props.variant || "rounded-full"
                        } ${props.className}`}
                    >
                        {props.text}
                    </button>
                </Link>
            ) : (
                <button
                    onClick={props.onClick}
                    type={props.isSubmitButton ? "submit" : "button"}
                    className={`capitalize ${
                        props.outlined === true
                            ? "outline outline-1 outline-primaryColor text-primaryColor"
                            : "bg-primaryColor text-white"
                    } px-7 py-4 ${props.fullWidth ? "w-full " : "w-fit"} ${
                        props.variant || "rounded-full"
                    } ${props.className}`}
                >
                    {props.text}
                </button>
            )}
        </>
    );
}
