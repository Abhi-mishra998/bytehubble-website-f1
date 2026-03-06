"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { useConsultationModal } from "@/context/ConsultationModalContext";
import companyLogo from "@/assets/company.jpeg";

interface DropdownItem {
  title: string;
  href: string;
  description: string;
  group?: string;
}

interface DropdownMenuProps {
  label: string;
  items: DropdownItem[];
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onToggle: (e: React.MouseEvent) => void;
}

function DropdownMenu({ label, items, isOpen, onMouseEnter, onMouseLeave, onToggle }: DropdownMenuProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Group items by their group property
  const groupedItems = items.reduce((acc, item) => {
    const group = item.group || "OTHER";
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {} as Record<string, DropdownItem[]>);

  // Define group order
  const groupOrder = ["SUPPORT", "TRAINING", "SERVICES", "OTHER"];
  const sortedGroups = groupOrder.filter(g => groupedItems[g]);

  return (
    <div 
      ref={dropdownRef}
      className="relative h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-dark-accent/80 hover:text-primary transition-colors cursor-pointer h-full"
        aria-expanded={isOpen}
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown with smooth animation */}
      <div 
        className={`absolute top-full left-0 mt-0 w-80 rounded-xl bg-white shadow-xl border border-gray-100 py-2 z-50 max-h-[70vh] overflow-y-auto transition-all duration-150 ease-out ${
          isOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-1 invisible pointer-events-none"
        }`}
      >
        {sortedGroups.map((group) => (
          <div key={group}>
            <div className="px-4 py-2 text-xs font-semibold text-primary uppercase tracking-wider">
              {group}
            </div>
            {groupedItems[group].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 hover:bg-background transition-colors"
              >
                <span className="block text-sm font-semibold text-dark-accent">
                  {item.title}
                </span>
                <span className="block text-xs text-dark-accent/60 mt-0.5">
                  {item.description}
                </span>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const { openModal } = useConsultationModal();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navbarRef = useRef<HTMLElement>(null);

  // Detect mobile/touch device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(typeof window !== 'undefined' && (window.innerWidth < 1024 || 'ontouchstart' in window));
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleDropdown = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    if (openDropdown === key) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(key);
    }
  };

  const handleMouseEnter = (key: string) => {
    setOpenDropdown(key);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (openDropdown && navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <nav ref={navbarRef} className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative w-45 h-45">
              <Image
                src={companyLogo}
                alt="ByteHubble"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 h-full">
            <DropdownMenu
              label={NAV_LINKS.solutions.label}
              items={NAV_LINKS.solutions.items}
              isOpen={openDropdown === "solutions"}
              onToggle={(e) => toggleDropdown(e, "solutions")}
              onMouseEnter={() => handleMouseEnter("solutions")}
              onMouseLeave={handleMouseLeave}
            />
            <DropdownMenu
              label={NAV_LINKS.services.label}
              items={NAV_LINKS.services.items}
              isOpen={openDropdown === "services"}
              onToggle={(e) => toggleDropdown(e, "services")}
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            />
            <DropdownMenu
              label={NAV_LINKS.resources.label}
              items={NAV_LINKS.resources.items}
              isOpen={openDropdown === "resources"}
              onToggle={(e) => toggleDropdown(e, "resources")}
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            />
            <Link
              href="/about"
              className="text-sm font-medium text-dark-accent/80 hover:text-primary transition-colors"
            >
              About
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={openModal}
              className="px-4 py-2 text-sm font-semibold text-white bg-brand-gradient rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
            >
              Schedule Consultation
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-dark-accent cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="px-4 py-4 space-y-4">
            {/* Solutions */}
            <MobileDropdown label="Solutions" items={NAV_LINKS.solutions.items} />
            <MobileDropdown label="Services" items={NAV_LINKS.services.items} />
            <MobileDropdown label="Resources" items={NAV_LINKS.resources.items} />
            <Link
              href="/about"
              className="block text-sm font-medium text-dark-accent/80 py-2"
            >
              About
            </Link>
            <div className="pt-2">
              <button
                onClick={openModal}
                className="w-full px-4 py-2 text-sm font-semibold text-white bg-brand-gradient rounded-lg shadow-lg shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function MobileDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Group items by their group property
  const groupedItems = items.reduce((acc, item) => {
    const group = item.group || "OTHER";
    if (!acc[group]) {
      acc[group] = [];
    }
    acc[group].push(item);
    return acc;
  }, {} as Record<string, DropdownItem[]>);

  // Define group order
  const groupOrder = ["SUPPORT", "TRAINING", "SERVICES", "OTHER"];
  const sortedGroups = groupOrder.filter(g => groupedItems[g]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-sm font-medium text-dark-accent/80 py-2 cursor-pointer"
      >
        {label}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pl-4 space-y-3 pb-2">
          {sortedGroups.map((group) => (
            <div key={group}>
              <div className="text-xs font-semibold text-primary uppercase tracking-wider py-1">
                {group}
              </div>
              {groupedItems[group].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-sm text-dark-accent/60 hover:text-primary py-1 pl-2"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

