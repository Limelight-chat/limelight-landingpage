// Example usage of the navbar in your new project

import { Navbar5 } from './components/navbar5';
import Footer from './components/footer';

// Option 1: Use the layout component
import NavbarLayout from './layout';

export default function MyApp() {
  return (
    <NavbarLayout>
      <main className="min-h-screen">
        <h1>Your content here</h1>
      </main>
    </NavbarLayout>
  );
}

// Option 2: Use components directly
export function MyAppDirect() {
  return (
    <>
      <Navbar5 />
      <main className="min-h-screen">
        <h1>Your content here</h1>
      </main>
      <Footer />
    </>
  );
}

// Option 3: Customize the navbar
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './components/ui/navigation-menu';

export function CustomNavbar() {
  return (
    <nav className="py-4">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Your logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <span className="text-lg font-semibold">Your Brand</span>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={navigationMenuTriggerStyle()}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className={navigationMenuTriggerStyle()}
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}