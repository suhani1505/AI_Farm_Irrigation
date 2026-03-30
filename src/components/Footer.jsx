import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Leaf className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-background">AgriSmart AI</span>
        </div>
        <div className="text-center md:text-left">
          <p className="text-background/60 text-sm">AI Powered Smart Irrigation and Farming Advisory System</p>
          <p className="text-background/40 text-xs mt-1">Mini Project 2025–26</p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-background/50 text-xs">Team Members: Student A • Student B • Student C</p>
          <p className="text-background/30 text-xs mt-1">© 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
