"use client";

import { CardContent } from "@/components/ui/card";
import CreateAccountDrawer from "@/components/ui/createAccountDrawer";
import { Plus } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

const DashboardPage = () => {
  const { theme } = useTheme();

  return (
    <div className="px-5">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <CreateAccountDrawer>
          <button className="w-full text-left focus:outline-none" type="button">
            <MagicCard
              gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              className="rounded-lg border bg-background text-card-foreground shadow-sm transition-all duration-300 p-6 flex flex-col items-center justify-center hover:scale-[1.01] min-h-[140px]"
            >
              <Plus className="w-10 h-10 mb-2" />
              <p className="text-sm font-medium">Add New Account</p>
            </MagicCard>
          </button>
        </CreateAccountDrawer>
      </div>
    </div>
  );
};

export default DashboardPage;
