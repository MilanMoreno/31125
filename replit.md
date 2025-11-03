# MysraProductions - Financial Advisory Website

## Overview

MysraProductions is a professional financial advisory website offering investment consulting and wealth management services. The application is a multi-page marketing website built with React and TypeScript, featuring a dark mode design inspired by professional fintech platforms. The site showcases financial advisory services, investment planning, risk management, and flexible service plans.

The application uses a modern tech stack with Vite for development, Express for serving, and shadcn/ui components for a polished, professional interface. It includes voice interaction capabilities through Vapi AI integration for client engagement.

The site includes dedicated legal pages (Terms & Conditions and Privacy Policy) with specific URLs required for Facebook Business integration. Content is primarily in Spanish with future multilingual support planned.

## Recent Updates (November 2025)

### Integrations Added
1. **Cal.com Booking**: Button "Reservar tu consultoría gratis" in navigation opens Cal.com booking page
2. **WhatsApp Click-to-Chat**: Green WhatsApp button in Hero section opens WhatsApp chat to +15556344242
3. **Vapi Voice AI**: Circular red phone button "Hablar con Bria" enables voice calls with AI assistant
4. **HeyGen Interactive Avatar**: Milan Moreno avatar in bottom-left corner provides visual AI assistant
   - Avatar ID: 5ec0029454cd42fbb870b42d8e37eb61
   - Streaming video with voice interaction
   - Uses @heygen/streaming-avatar SDK
   - Knowledge base adapted for MysraProductions services
5. **Text Chatbot**: Blue chat button (bottom-right) opens text-based chat with Bria

### Environment Variables
- `HEYGEN_API_KEY`: HeyGen API key for interactive avatar streaming
- `ELEVENLABS_API_KEY`: ElevenLabs API key (integrated with HeyGen for avatar voice)
- `CALCOM_BOOKING_URL`: Cal.com booking page URL
- `VAPI_PUBLIC_KEY`: Vapi public key (hardcoded: afc88041-71c8-44a9-a43e-90a3902b558c)
- `VAPI_ASSISTANT_ID`: Vapi assistant ID (hardcoded: 98a71ea9-9c2a-4752-a1fc-7d477b3e0542)
- `SESSION_SECRET`: Express session secret
- `WHATSAPP_N8N_WEBHOOK_URL`: N8n webhook for WhatsApp automation

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR (Hot Module Replacement)
- Wouter for lightweight client-side routing with three routes:
  - `/` - Home page
  - `/privacidad` - Privacy Policy (for Facebook Business)
  - `/términosycondiciones` - Terms & Conditions (for Facebook Business)
- React Query (@tanstack/react-query) for server state management

**UI Component System**
- shadcn/ui component library with Radix UI primitives for accessible, customizable components
- Tailwind CSS for utility-first styling with custom design system
- Dark mode as the default and primary theme (set in HTML root element)
- Custom CSS variables for theming (backgrounds, borders, colors defined in index.css)

**Design System Decisions**
- Professional fintech aesthetic with dark mode priority
- Color palette: Deep navy-black backgrounds, professional blue primary, success green accents
- Typography: Inter font family from Google Fonts
- Responsive grid layouts with mobile-first approach
- Custom elevation system using CSS variables (--elevate-1, --elevate-2) for hover/active states

**Component Structure**
- Page-based organization with three main pages:
  - Home page with marketing sections
  - Términos y Condiciones (Terms & Conditions)
  - Política de Privacidad (Privacy Policy)
- Feature sections as modular components (Hero, Features, Pricing, FAQ, Team, Risk Disclaimer, Footer)
- Reusable UI components in `/components/ui/` following shadcn patterns
- All content in Spanish language

**Legal Pages (Facebook Business Integration)**
- **Términos y Condiciones** (`/términosycondiciones`):
  - Comprehensive terms covering service description, trading risk disclaimers, membership rules
  - Sections: Acceptance, Services, Trading Disclaimer, Membership & Payments, User Conduct, IP Rights, Termination, Liability Limitation, Changes, Contact
  - "Volver al Inicio" navigation buttons for easy return to main site
  - Dark mode design consistent with brand
- **Política de Privacidad** (`/privacidad`):
  - GDPR-friendly privacy policy covering data collection, usage, and user rights
  - Sections: Introduction, Information Collected, How We Use Data, Sharing Policies, Security, User Rights, Data Retention, International Transfers, Children's Privacy, Policy Changes, Contact
  - Detailed breakdown of personal information, usage data, and cookies
  - User rights section covering access, rectification, deletion, portability, opposition
- **Footer Integration**:
  - "Legal" section in footer with two working links
  - Uses wouter's Link component for client-side navigation
  - Both pages accessible from all site pages

**Hero Section Interactive Elements**
- Three primary call-to-action buttons:
  1. Voice call button (circular, red/green states) for Vapi AI integration
  2. "Ver presentación" button (blue primary) that opens video modal
  3. "Conoce Más" button (outline) for smooth scrolling to features
- Video presentation modal:
  - Semi-transparent dark background (bg-black/95)
  - Embedded MP4 video (Bria F.T._1760785077267.mp4) with autoplay and controls
  - Close button (X icon) in top-right corner
  - Click-outside-to-close functionality
  - Smooth fade in/out animations
  - Fully accessible with screen-reader support

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Custom Vite middleware integration for development
- Route registration pattern in `server/routes.ts`
- In-memory storage implementation (MemStorage class) for data persistence

**Development vs Production**
- Vite dev server in development mode with HMR
- Static file serving in production from compiled dist/public
- Conditional Replit-specific plugins (cartographer, dev-banner) only in development

**Storage Interface**
- IStorage interface defines CRUD operations
- MemStorage provides in-memory implementation using Map
- User schema defined with username/password fields
- Prepared for database migration (Drizzle ORM configured for PostgreSQL)

### External Dependencies

**Voice AI Integration**
- Vapi AI (@vapi-ai/web v2.4.0) for voice interaction capabilities
- Circular phone button in Hero section with visual state indicators:
  - Inactive state: Red background (destructive color) + Phone icon + "Hablar con Bria" text
  - Active state: Green background (chart-2 color) + PhoneOff icon + "En llamada" text
- Hardcoded credentials for reliable functionality:
  - Public Key: afc88041-71c8-44a9-a43e-90a3902b558c
  - Assistant ID: 98a71ea9-9c2a-4752-a1fc-7d477b3e0542
- Real-time call state management with event listeners (call-start, call-end, error)
- Graceful error handling with console logging for debugging

**Database (Configured but Not Active)**
- Drizzle ORM configured for PostgreSQL with Neon serverless driver
- Schema defined in `shared/schema.ts` with users table
- Migration setup through drizzle-kit
- Currently using in-memory storage, ready for database switch

**UI Component Libraries**
- Radix UI primitives for 20+ accessible component patterns (dialogs, dropdowns, tooltips, etc.)
- React Hook Form with Zod resolvers for form validation
- Lucide React for icon system
- class-variance-authority and clsx for conditional styling

**Styling & Theming**
- Tailwind CSS with PostCSS for processing
- Custom configuration with extended color system using CSS variables
- Support for both HSL color format with alpha values
- Dark mode using class-based strategy

**Development Tools**
- TypeScript for static type checking
- ESBuild for server bundling in production
- tsx for TypeScript execution in development
- Path aliases configured (@/, @shared/, @assets/)

**Session Management**
- connect-pg-simple for PostgreSQL session store (configured but not actively used)
- Express session middleware ready for authentication flow