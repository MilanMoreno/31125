import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import TerminosCondiciones from "@/pages/TerminosCondiciones";
import Privacidad from "@/pages/Privacidad";
import NotFound from "@/pages/not-found";
import HeyGenAvatar from "@/components/HeyGenAvatar";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/términosycondiciones" component={TerminosCondiciones} />
      <Route path="/privacidad" component={Privacidad} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <HeyGenAvatar />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
