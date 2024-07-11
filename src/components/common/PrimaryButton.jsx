export const PrimaryButton = ({ text, className, icon = "", ...props }) => {
    return (
        <button
            className={`flex rounded-56 py-5 px-8 text-base sm:text-lg font-bold font-plus-sans duration-300 text-center ${className}`}
            {...props}
        >
            {text}{icon}
        </button>
    );
};

export default PrimaryButton