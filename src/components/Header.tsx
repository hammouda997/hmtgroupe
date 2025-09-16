
import { useState, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslationContext } from "@/contexts/TranslationContext";
import { memo } from "react";

const Header = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, changeLanguage, t } = useTranslationContext();
  const location = useLocation();

  const isActive = useCallback((path: string) => location.pathname === path, [location.pathname]);

  const navItems = useMemo(() => [
    { path: "/", label: t('home') },
    { path: "/about", label: t('about') },
    { path: "/products", label: t('products') },
    { path: "/services", label: t('services') },
    { path: "/contact", label: t('contact') },
  ], [t]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-red-600 text-white py-1.5 sm:py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs sm:text-sm">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Phone className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="hidden sm:inline">+216 36 264 380</span>
              <span className="sm:hidden">+216 36 264 380</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Mail className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="hidden sm:inline">contact@hmtgroupe.com</span>
              <span className="sm:hidden">contact@hmtgroupe.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 text-xs sm:text-sm px-2 sm:px-3"
              onClick={() => changeLanguage(language === 'fr' ? 'en' : 'fr')}
            >
              {language === 'fr' ? 'EN' : 'FR'}
            </Button>
            <div className="hidden lg:block">
              <span className="text-xs sm:text-sm">Avenue de l'Environnement, 5070 Ksar Hellal, TUNISIA</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
            <div className="bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 font-bold text-lg sm:text-xl">
              HMT
            </div>
            <div>
              <div className="font-bold text-gray-900 text-base sm:text-lg">HMT Sarl</div>
              <div className="text-xs sm:text-sm text-gray-600 hidden sm:block">Laser & Digital Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors hover:text-red-600 text-sm lg:text-base ${
                  isActive(item.path) ? "text-red-600" : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('fr')}
                className={`px-2 py-1 rounded text-sm ${language === 'fr' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                aria-label="Français"
              >FR</button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded text-sm ${language === 'en' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                aria-label="English"
              >EN</button>
            </div>
            <Button className="bg-red-600 hover:bg-red-700" asChild>
              <Link to="/contact">
                {t('requestQuote')}
              </Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors hover:text-red-600 text-sm sm:text-base ${
                    isActive(item.path) ? "text-red-600" : "text-gray-700"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center space-x-2 pt-2">
                <button
                  onClick={() => { changeLanguage('fr'); setIsMenuOpen(false); }}
                  className={`px-2 py-1 rounded text-xs sm:text-sm ${language === 'fr' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  aria-label="Français"
                >FR</button>
                <button
                  onClick={() => { changeLanguage('en'); setIsMenuOpen(false); }}
                  className={`px-2 py-1 rounded text-xs sm:text-sm ${language === 'en' ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                  aria-label="English"
                >EN</button>
              </div>
              <Button className="bg-red-600 hover:bg-red-700 w-fit text-sm sm:text-base" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  {t('requestQuote')}
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
});

Header.displayName = 'Header';

export default Header;
