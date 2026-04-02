import { MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm text-muted-foreground">
            © 2024 Mr Chua. All rights reserved.
          </p>
          <a
            href="https://maps.app.goo.gl/Wr5YVeJKeDAdZXTNA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
          >
            <MapPin className="h-3.5 w-3.5" />
            Wamena, Papua Pegunungan
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          Built with ❤️ by Mr Chua
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
