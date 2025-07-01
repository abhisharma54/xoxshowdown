export default function Button({
  children,
  imgSrc,
  imgAlt,
  className,
  ...props
}) {
  return (
    <button
      {...props}
      className={`flex gap-2 button px-6 py-2 rounded-full border border-[#101010] cursor-pointer transition duration-100 ease-in hover:border-white ${className}`}
    >
      {imgSrc && (
        <img
          className="w-[18px] sm:w-[20px]"
          src={imgSrc}
          alt={imgAlt}
          loading="lazy"
        />
      )}
      <span className="text-xl text-nowrap sm:text-2xl">{children}</span>
    </button>
  );
}
