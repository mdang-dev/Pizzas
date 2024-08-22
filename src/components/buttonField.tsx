import { ReactNode } from "react";
import { IcSpinner } from "../icons/icSpinner";

type Props = {
    loading?: boolean;
    children?: ReactNode;
}

const ButtonField = ({
    loading,
    children
}: Props) => {
    return (
        <div className="bg-slate-900 text-white px-10 py-3 rounded-md font-medium cursor-pointer">
            {!loading
                ? children : <div className="flex items-center gap-x-2 text-white">
                    <IcSpinner width='32px' height='32px'/>
                    {children}
                </div>
            }
        </div>
    );
};

export default ButtonField;