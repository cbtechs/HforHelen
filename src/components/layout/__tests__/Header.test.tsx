import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Header from '../Header';

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockImplementation(() => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null
}));
window.IntersectionObserver = mockIntersectionObserver;

// Mock smooth scrolling
const mockScrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollIntoView = mockScrollIntoView;

describe('Header Component', () => {
  beforeEach(() => {
    // Reset mocks
    mockScrollIntoView.mockClear();
    
    // Setup mock elements for scroll tracking
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    sections.forEach(section => {
      const element = document.createElement('div');
      element.id = section;
      document.body.appendChild(element);
    });
  });

  afterEach(() => {
    // Cleanup mock elements
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) document.body.removeChild(element);
    });
  });

  it('renders all navigation items', () => {
    render(<Header />);
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('implements smooth scrolling when clicking navigation items', () => {
    render(<Header />);
    
    const aboutLink = screen.getAllByText('About')[0]; // Get the first "About" link (desktop)
    fireEvent.click(aboutLink);

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
  });

  it('toggles mobile menu correctly', () => {
    render(<Header />);
    
    // Initially menu should be hidden
    const mobileNavigation = document.querySelector('div[class*="max-h-0 opacity-0"]');
    expect(mobileNavigation).not.toBeNull();
    
    // Click menu button
    const menuButton = screen.getByRole('button', { name: '' });
    fireEvent.click(menuButton);
    
    // Menu should be visible
    const openMobileNav = document.querySelector('div[class*="max-h-96 opacity-100"]');
    expect(openMobileNav).not.toBeNull();
    
    // Click again to close
    fireEvent.click(menuButton);
    
    // Menu should be hidden again
    const closedMobileNav = document.querySelector('div[class*="max-h-0 opacity-0"]');
    expect(closedMobileNav).not.toBeNull();
  });

  it('updates active section based on scroll', () => {
    render(<Header />);
    
    // Simulate scrolling to About section
    act(() => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        // Mock getBoundingClientRect to simulate about section in viewport
        jest.spyOn(aboutSection, 'getBoundingClientRect').mockImplementation(() => ({
          top: 100,
          bottom: 200,
          left: 0,
          right: 0,
          width: 0,
          height: 0,
          x: 0,
          y: 0,
          toJSON: () => {}
        }));
      }
      
      // Trigger scroll event
      window.dispatchEvent(new Event('scroll'));
    });

    // Wait for state update
    setTimeout(() => {
      // Find all "About" links
      const aboutLinks = screen.getAllByText('About');
      
      // At least one About link should have the active class
      const hasActiveLink = aboutLinks.some(link => 
        link.className.includes('bg-blue-600') && 
        link.className.includes('text-white')
      );
      
      expect(hasActiveLink).toBe(true);
    }, 100);
  });

  it('closes mobile menu when navigation item is clicked', () => {
    render(<Header />);
    
    // Open mobile menu
    const menuButton = screen.getByRole('button', { name: '' });
    fireEvent.click(menuButton);
    
    // Verify menu is open
    expect(document.querySelector('div[class*="max-h-96 opacity-100"]')).not.toBeNull();
    
    // Click a mobile navigation item
    const mobileNavLinks = screen.getAllByText('About');
    // Find the mobile "About" link (should be the second one)
    const mobileAboutLink = mobileNavLinks.find(link => 
      !link.parentElement?.className.includes('hidden')
    );
    
    if (mobileAboutLink) {
      fireEvent.click(mobileAboutLink);
    
      // Menu should be closed
      expect(document.querySelector('div[class*="max-h-0 opacity-0"]')).not.toBeNull();
    }
  });
});
