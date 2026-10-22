const FeatureCard = ({ icon, title, description }) => {
  return (
    <article className="flex min-h-44 flex-col rounded-xl border border-[#DDE8E1] bg-white/70 p-4 shadow-sm">
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF3EF] text-[#176B5B]">
        {icon}
      </div>

      <h3 className="mb-2 text-base font-semibold text-[#102F35]">{title}</h3>
      <p className="text-sm leading-6 text-[#64756F]">{description}</p>
    </article>
  );
};

export default FeatureCard;
