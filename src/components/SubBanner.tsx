import { Link } from "react-router-dom";

interface SubBannerProps {
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; path: string }[];
  backgroundImage: string;
}

const SubBanner = ({ title, subtitle, breadcrumbs, backgroundImage }: SubBannerProps) => {
  return (
    <section className="relative h-[400px] md:h-[350px] lg:h-[400px] w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundAttachment: 'fixed',
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-4 opacity-90" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {index > 0 && <span className="mx-2">›</span>}
              {index === breadcrumbs.length - 1 ? (
                <span className="font-medium">{crumb.label}</span>
              ) : (
                <Link to={crumb.path} className="hover:underline transition-all">
                  {crumb.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center animate-fade-in text-shadow-lg">
          {title}
        </h1>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl opacity-90 text-center max-w-3xl animate-fade-in text-shadow">
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default SubBanner;
