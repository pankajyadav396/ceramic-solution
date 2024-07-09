export const PrimaryButton = ({ text, className, icon = "", ...props }) => {
    return (
        <button
            className={`flex rounded-[56px] p-[20px_32px] leading-121 text-lg font-bold font-plusSans duration-300 text-center ${className}`}
            {...props}
        >
            {text}{icon}
        </button>
    );
};

export default PrimaryButton